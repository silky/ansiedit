function charBrushTool(options) {
    "use strict";

    return function (editor, toolbar) {
        var currentColor, lastPoint, mode;

        mode = 0;

        function colorChange(col) {
            currentColor = col;
        }

        function charBrush(block) {
            editor.setChar(block, options.characters[mode].charCode, currentColor);
        }

        function canvasDown(coord) {
            if (coord.ctrlKey) {
                toolbar.sampleBlock(coord);
            } else {
                if (coord.shiftKey && lastPoint) {
                    editor.startOfChunk();
                    editor.blockLine(lastPoint, coord, charBrush);
                    editor.endOfChunk();
                } else {
                    editor.startOfFreehand();
                    charBrush(coord);
                }
                lastPoint = coord;
            }
        }

        function canvasDrag(coord) {
            if (lastPoint) {
                editor.blockLine(lastPoint, coord, charBrush);
                lastPoint = coord;
            }
        }

        function init() {
            editor.addMouseDownListener(canvasDown);
            editor.addMouseDragListener(canvasDrag);
            editor.addColorChangeListener(colorChange);
            currentColor = editor.getCurrentColor();
            return true;
        }

        function remove() {
            editor.removeMouseDownListener(canvasDown);
            editor.removeMouseDragListener(canvasDrag);
            editor.removeColorChangeListener(colorChange);
        }

        function getState() {
            return [mode];
        }

        function setState(bytes) {
            mode = bytes[0];
        }

        function modeChange(shiftKey) {
            if (shiftKey) {
                mode -= 1;
                if (mode < 0) {
                    mode = options.characters.length - 1;
                }
            } else {
                mode += 1;
                if (mode === options.characters.length) {
                    mode = 0;
                }
            }
        }

        function toString() {
            return options.characters.length ? options.name + ": " + options.characters[mode].name : options.name;
        }

        return {
            "init": init,
            "modeShiftKey": (options.characters.length > 2),
            "remove": remove,
            "getState": getState,
            "setState": setState,
            "modeChange": modeChange,
            "toString": toString,
            "uid": "charbrush-" + options.uid
        };
    };
}