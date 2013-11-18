function freehandTool(editor, palette) {
    "use strict";
    var currentColor, lastPoint;

    function colorChange(evt) {
        currentColor = evt.detail;
    }

    function drawChunk(coord, currentColorBias) {
        editor.setChunk(coord, currentColor);
        editor.resolveConflict(coord, currentColorBias, currentColor);
    }

    function blockyLine(from, to, currentColorBias) {
        editor.chunkLine(from, to, function (coord) {
            drawChunk(coord, currentColorBias);
        });
    }

    function canvasDown(evt) {
        editor.takeUndoSnapshot();
        if (evt.detail.shiftKey && lastPoint) {
            blockyLine(lastPoint, evt.detail, !evt.detail.altKey);
        } else {
            drawChunk(evt.detail, !evt.detail.altKey);
        }
        lastPoint = evt.detail;
    }

    function canvasDrag(evt) {
        if (lastPoint) {
            blockyLine(lastPoint, evt.detail, !evt.detail.altKey);
            lastPoint = evt.detail;
        }
    }

    function init() {
        editor.canvas.addEventListener("canvasDown", canvasDown, false);
        editor.canvas.addEventListener("canvasDrag", canvasDrag, false);
        palette.canvas.addEventListener("colorChange", colorChange, false);
        currentColor = palette.getCurrentColor();
        return true;
    }

    function remove() {
        editor.canvas.removeEventListener("canvasDown", canvasDown);
        editor.canvas.removeEventListener("canvasDrag", canvasDrag);
        palette.canvas.removeEventListener("colorChange", colorChange);
    }

    function toString() {
        return "Freehand";
    }

    return {
        "init": init,
        "remove": remove,
        "toString": toString,
        "uid": "freehand"
    };
}