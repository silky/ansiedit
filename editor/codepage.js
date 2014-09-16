function codepageGenerator(colors) {
    "use strict";
    var BASE64_CHARS, currentBytes, currentFont, fontDataBuffer, upperBlockBuffer, lowerBlockBuffer, fullBlockBuffer, NULL, DATA_LINK_ESCAPE, DEVICE_CONTROL_1, CANCEL, END_OF_MEDIUM, SUBSTITUTE, ESCAPE, RECORD_SEPERATOR, UNIT_SEPERATOR, SPACE, EXCLAMATION_MARK, LEFT_PARENTHESIS, RIGHT_PARENTHESIS, SOLIDUS, LESS_THAN_SIGN, GREATER_THAN_SIGN, LEFT_SQUARE_BRACKET, REVERSE_SOLIDUS, RIGHT_SQUARE_BRACKET, LEFT_CURLY_BRACKET, RIGHT_CURLY_BRACKET, C_CEDILLA, REVERSED_NOT_SIGN, NOT_SIGN, INVERTED_EXCLAMATION_MARK, LEFT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK, RIGHT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK, LIGHT_SHADE, MEDIUM_SHADE, DARK_SHADE, BOX_DRAWINGS_LIGHT_VERTICAL_AND_LEFT, BOX_DRAWINGS_VERTICAL_SINGLE_AND_LEFT_DOUBLE, BOX_DRAWINGS_VERTICAL_DOUBLE_AND_LEFT_SINGLE, BOX_DRAWINGS_DOWN_DOUBLE_AND_LEFT_SINGLE, BOX_DRAWINGS_DOWN_SINGLE_AND_LEFT_DOUBLE, BOX_DRAWINGS_DOUBLE_VERTICAL_AND_LEFT, BOX_DRAWINGS_DOUBLE_DOWN_AND_LEFT, BOX_DRAWINGS_DOUBLE_UP_AND_LEFT, BOX_DRAWINGS_UP_DOUBLE_AND_LEFT_SINGLE, BOX_DRAWINGS_UP_SINGLE_AND_LEFT_DOUBLE, BOX_DRAWINGS_LIGHT_DOWN_AND_LEFT, BOX_DRAWINGS_LIGHT_UP_AND_RIGHT, BOX_DRAWINGS_LIGHT_UP_AND_HORIZONTAL, BOX_DRAWINGS_LIGHT_DOWN_AND_HORIZONTAL, BOX_DRAWINGS_LIGHT_VERTICAL_AND_RIGHT, BOX_DRAWINGS_VERTICAL_SINGLE_AND_RIGHT_DOUBLE, BOX_DRAWINGS_VERTICAL_DOUBLE_AND_RIGHT_SINGLE, BOX_DRAWINGS_DOUBLE_UP_AND_RIGHT, BOX_DRAWINGS_DOUBLE_DOWN_AND_RIGHT, BOX_DRAWINGS_DOUBLE_UP_AND_HORIZONTAL, BOX_DRAWINGS_DOUBLE_DOWN_AND_HORIZONTAL, BOX_DRAWINGS_DOUBLE_VERTICAL_AND_RIGHT, BOX_DRAWINGS_UP_SINGLE_AND_HORIZONTAL_DOUBLE, BOX_DRAWINGS_UP_DOUBLE_AND_HORIZONTAL_SINGLE, BOX_DRAWINGS_DOWN_SINGLE_AND_HORIZONTAL_DOUBLE, BOX_DRAWINGS_DOWN_DOUBLE_AND_HORIZONTAL_SINGLE, BOX_DRAWINGS_UP_DOUBLE_AND_RIGHT_SINGLE, BOX_DRAWINGS_UP_SINGLE_AND_RIGHT_DOUBLE, BOX_DRAWINGS_DOWN_SINGLE_AND_RIGHT_DOUBLE, BOX_DRAWINGS_DOWN_DOUBLE_AND_RIGHT_SINGLE, BOX_DRAWINGS_LIGHT_UP_AND_LEFT, BOX_DRAWINGS_LIGHT_DOWN_AND_RIGHT, FULL_BLOCK, LOWER_HALF_BLOCK, LEFT_HALF_BLOCK, RIGHT_HALF_BLOCK, UPPER_HALF_BLOCK, GREATER_THAN_OR_EQUAL_TO, LESS_THAN_OR_EQUAL_TO, BULLET_OPERATOR, MIDDLE_DOT, MIDDLE_BLOCK, NO_BREAK_SPACE;

    NULL = 0;
    DATA_LINK_ESCAPE = 16;
    DEVICE_CONTROL_1 = 17;
    CANCEL = 24;
    END_OF_MEDIUM = 25;
    SUBSTITUTE = 26;
    ESCAPE = 27;
    RECORD_SEPERATOR = 30;
    UNIT_SEPERATOR = 31;
    SPACE = 32;
    EXCLAMATION_MARK = 33;
    LEFT_PARENTHESIS = 40;
    RIGHT_PARENTHESIS = 41;
    SOLIDUS = 47;
    LESS_THAN_SIGN = 60;
    GREATER_THAN_SIGN = 62;
    LEFT_SQUARE_BRACKET = 91;
    REVERSE_SOLIDUS = 92;
    RIGHT_SQUARE_BRACKET = 93;
    LEFT_CURLY_BRACKET = 123;
    RIGHT_CURLY_BRACKET = 125;
    C_CEDILLA = 128;
    REVERSED_NOT_SIGN = 169;
    NOT_SIGN = 170;
    INVERTED_EXCLAMATION_MARK = 173;
    LEFT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK = 174;
    RIGHT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK = 175;
    LIGHT_SHADE = 176;
    MEDIUM_SHADE = 177;
    DARK_SHADE = 178;
    BOX_DRAWINGS_LIGHT_VERTICAL_AND_LEFT = 180;
    BOX_DRAWINGS_VERTICAL_SINGLE_AND_LEFT_DOUBLE = 181;
    BOX_DRAWINGS_VERTICAL_DOUBLE_AND_LEFT_SINGLE = 182;
    BOX_DRAWINGS_DOWN_DOUBLE_AND_LEFT_SINGLE = 183;
    BOX_DRAWINGS_DOWN_SINGLE_AND_LEFT_DOUBLE = 184;
    BOX_DRAWINGS_DOUBLE_VERTICAL_AND_LEFT = 185;
    BOX_DRAWINGS_DOUBLE_DOWN_AND_LEFT = 187;
    BOX_DRAWINGS_DOUBLE_UP_AND_LEFT = 188;
    BOX_DRAWINGS_UP_DOUBLE_AND_LEFT_SINGLE = 189;
    BOX_DRAWINGS_UP_SINGLE_AND_LEFT_DOUBLE = 190;
    BOX_DRAWINGS_LIGHT_DOWN_AND_LEFT = 191;
    BOX_DRAWINGS_LIGHT_UP_AND_RIGHT = 192;
    BOX_DRAWINGS_LIGHT_UP_AND_HORIZONTAL = 193;
    BOX_DRAWINGS_LIGHT_DOWN_AND_HORIZONTAL = 194;
    BOX_DRAWINGS_LIGHT_VERTICAL_AND_RIGHT = 195;
    BOX_DRAWINGS_VERTICAL_SINGLE_AND_RIGHT_DOUBLE = 198;
    BOX_DRAWINGS_VERTICAL_DOUBLE_AND_RIGHT_SINGLE = 199;
    BOX_DRAWINGS_DOUBLE_UP_AND_RIGHT = 200;
    BOX_DRAWINGS_DOUBLE_DOWN_AND_RIGHT = 201;
    BOX_DRAWINGS_DOUBLE_UP_AND_HORIZONTAL = 202;
    BOX_DRAWINGS_DOUBLE_DOWN_AND_HORIZONTAL = 203;
    BOX_DRAWINGS_DOUBLE_VERTICAL_AND_RIGHT = 204;
    BOX_DRAWINGS_UP_SINGLE_AND_HORIZONTAL_DOUBLE = 207;
    BOX_DRAWINGS_UP_DOUBLE_AND_HORIZONTAL_SINGLE = 208;
    BOX_DRAWINGS_DOWN_SINGLE_AND_HORIZONTAL_DOUBLE = 209;
    BOX_DRAWINGS_DOWN_DOUBLE_AND_HORIZONTAL_SINGLE = 210;
    BOX_DRAWINGS_UP_DOUBLE_AND_RIGHT_SINGLE = 211;
    BOX_DRAWINGS_UP_SINGLE_AND_RIGHT_DOUBLE = 212;
    BOX_DRAWINGS_DOWN_SINGLE_AND_RIGHT_DOUBLE = 213;
    BOX_DRAWINGS_DOWN_DOUBLE_AND_RIGHT_SINGLE = 214;
    BOX_DRAWINGS_LIGHT_UP_AND_LEFT = 217;
    BOX_DRAWINGS_LIGHT_DOWN_AND_RIGHT = 218;
    FULL_BLOCK = 219;
    LOWER_HALF_BLOCK = 220;
    LEFT_HALF_BLOCK = 221;
    RIGHT_HALF_BLOCK = 222;
    UPPER_HALF_BLOCK = 223;
    GREATER_THAN_OR_EQUAL_TO = 242;
    LESS_THAN_OR_EQUAL_TO = 243;
    BULLET_OPERATOR = 249;
    MIDDLE_DOT = 250;
    MIDDLE_BLOCK = 254;
    NO_BREAK_SPACE = 255;

    BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    fontDataBuffer = [];
    upperBlockBuffer = [];
    lowerBlockBuffer = [];
    fullBlockBuffer = [];

    function bytesToBits(width, height, bytes) {
        var bits, i, j, k;
        bits = new Uint8Array(width * height * 256);
        for (i = 0, k = 0; i < width * height * 256 / 8; i += 1) {
            for (j = 7; j >= 0; j -= 1, k += 1) {
                bits[k] = (bytes[i] >> j) & 1;
            }
        }
        return {
            "bits": bits,
            "width": width,
            "height": height
        };
    }

    function base64ToBits(width, height, base64) {
        var i, j, bytes16, bytes8;
        bytes16 = new Uint32Array(1);
        bytes8 = new Uint8Array(base64.length / 4 * 3);
        for (i = j = 0; i < base64.length; bytes16[0] = 0, i += 4, j += 3) {
            bytes16[0] += (BASE64_CHARS.indexOf(base64.charAt(i)) & 63) << 18;
            bytes16[0] += (BASE64_CHARS.indexOf(base64.charAt(i + 1)) & 63) << 12;
            bytes16[0] += (BASE64_CHARS.indexOf(base64.charAt(i + 2)) & 63) << 6;
            bytes16[0] += BASE64_CHARS.indexOf(base64.charAt(i + 3)) & 63;
            bytes8[j] = (bytes16[0] >> 16) & 255;
            bytes8[j + 1] = (bytes16[0] >> 8) & 255;
            bytes8[j + 2] = bytes16[0] & 255;
        }
        currentBytes = bytes8.subarray(0, height * 256);
        return bytesToBits(width, height, bytes8);
    }

    currentFont = base64ToBits(8, 16, "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AAAAAAD8xvzGxvzAwMAAAAAA/sbGwMDAwMDAwAAAAAAAAAAAgP5sbGxsbGwAAAAAAAAA/sZgMBgwYMb+AAAAAAAAAAAAftjY2NjYcAAAAAAAAAAAZmZmZmZ8YGDAAAAAAAAAAHbcGBgYGBgYAAAAAAAAAH4YPGZmZjwYfgAAAAAAAAA4bMbG/sbGbDgAAAAAAAA4bMbGxmxsbGzuAAAAAAAAHjAYDD5mZmZmPAAAAAAAAAAAAH7b29t+AAAAAAAAAAAAAwZ+z9vzfmDAAAAAAAAAHDBgYHxgYGAwHAAAAAAAAAB8xsbGxsbGxsYAAAAAAAAAAP4AAP4AAP4AAAAAAAAAAAAYGH4YGAAA/wAAAAAAAAAwGAwGDBgwAH4AAAAAAAAADBgwYDAYDAB+AAAAAAAADhsbGBgYGBgYGBgYGBgYGBgYGBgYGNjY2HAAAAAAAAAAABgYAH4AGBgAAAAAAAAAAAAAdtwAdtwAAAAAAAAAOGxsOAAAAAAAAAAAAAAAAAAAAAAAABgYAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAADwwMDAwM7GxsPBwAAAAAANhsbGxsbAAAAAAAAAAAAABwmDBgyPgAAAAAAAAAAAAAAAAAfHx8fHx8fAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==");

    function getFontWidth() {
        return currentFont.width;
    }

    function getFontHeight() {
        return currentFont.height;
    }

    function getFontBytes() {
        return currentBytes;
    }

    function flushBuffer(buffer) {
        var i;
        for (i = 0; i < buffer.length; i += 1) {
            delete buffer[i];
        }
    }

    function setFont(width, height, bytes) {
        flushBuffer(fontDataBuffer);
        flushBuffer(upperBlockBuffer);
        flushBuffer(lowerBlockBuffer);
        flushBuffer(fullBlockBuffer);
        currentBytes = bytes;
        currentFont = bytesToBits(width, height, bytes);
    }

    function getData(charCode, fgRGBA, bgRGBA, font) {
        var fontBitWidth, rgbaOutput, i, j, k;
        fontBitWidth = font.width * font.height;
        rgbaOutput = new Uint8Array(font.width * font.height * 4);
        for (i = 0, j = charCode * fontBitWidth, k = 0; i < fontBitWidth; i += 1, j += 1) {
            if (font.bits[j] === 1) {
                rgbaOutput.set(fgRGBA, k);
            } else {
                rgbaOutput.set(bgRGBA, k);
            }
            k += 4;
        }
        return rgbaOutput;
    }

    function fontData(charCode, fg, bg) {
        var bufferIndex;
        bufferIndex = charCode + (fg << 8) + (bg << 12);
        if (!fontDataBuffer[bufferIndex]) {
            fontDataBuffer[bufferIndex] = getData(charCode, colors[fg], colors[bg], currentFont);
        }
        return fontDataBuffer[bufferIndex];
    }

    function fontDataRGBA(charCode, rgba) {
        return getData(charCode, rgba, new Uint8Array([0, 0, 0, 0]), currentFont);
    }

    function upperBlock(fg) {
        if (!upperBlockBuffer[fg]) {
            upperBlockBuffer[fg] = getData(UPPER_HALF_BLOCK, colors[fg], new Uint8Array([0, 0, 0, 0]), currentFont);
        }
        return upperBlockBuffer[fg];
    }

    function lowerBlock(fg) {
        if (!lowerBlockBuffer[fg]) {
            lowerBlockBuffer[fg] = getData(LOWER_HALF_BLOCK, colors[fg], new Uint8Array([0, 0, 0, 0]), currentFont);
        }
        return lowerBlockBuffer[fg];
    }

    function fullBlock(fg) {
        if (!fullBlockBuffer[fg]) {
            fullBlockBuffer[fg] = getData(FULL_BLOCK, colors[fg], new Uint8Array([0, 0, 0, 0]), currentFont);
        }
        return fullBlockBuffer[fg];
    }

    function getFlippedTextX(charCode) {
        switch (charCode) {
        case DATA_LINK_ESCAPE:
            return DEVICE_CONTROL_1;
        case SUBSTITUTE:
            return ESCAPE;
        case LEFT_PARENTHESIS:
            return RIGHT_PARENTHESIS;
        case SOLIDUS:
            return REVERSE_SOLIDUS;
        case LESS_THAN_SIGN:
            return GREATER_THAN_SIGN;
        case LEFT_SQUARE_BRACKET:
            return RIGHT_SQUARE_BRACKET;
        case LEFT_CURLY_BRACKET:
            return RIGHT_CURLY_BRACKET;
        case REVERSED_NOT_SIGN:
            return NOT_SIGN;
        case LEFT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK:
            return RIGHT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK;
        case BOX_DRAWINGS_LIGHT_VERTICAL_AND_LEFT:
            return BOX_DRAWINGS_LIGHT_VERTICAL_AND_RIGHT;
        case BOX_DRAWINGS_VERTICAL_SINGLE_AND_LEFT_DOUBLE:
            return BOX_DRAWINGS_VERTICAL_SINGLE_AND_RIGHT_DOUBLE;
        case BOX_DRAWINGS_VERTICAL_DOUBLE_AND_LEFT_SINGLE:
            return BOX_DRAWINGS_VERTICAL_DOUBLE_AND_RIGHT_SINGLE;
        case BOX_DRAWINGS_DOWN_DOUBLE_AND_LEFT_SINGLE:
            return BOX_DRAWINGS_DOWN_DOUBLE_AND_RIGHT_SINGLE;
        case BOX_DRAWINGS_DOWN_SINGLE_AND_LEFT_DOUBLE:
            return BOX_DRAWINGS_DOWN_SINGLE_AND_RIGHT_DOUBLE;
        case BOX_DRAWINGS_DOUBLE_VERTICAL_AND_LEFT:
            return BOX_DRAWINGS_DOUBLE_VERTICAL_AND_RIGHT;
        case BOX_DRAWINGS_DOUBLE_DOWN_AND_LEFT:
            return BOX_DRAWINGS_DOUBLE_DOWN_AND_RIGHT;
        case BOX_DRAWINGS_DOUBLE_UP_AND_LEFT:
            return BOX_DRAWINGS_DOUBLE_UP_AND_RIGHT;
        case BOX_DRAWINGS_UP_DOUBLE_AND_LEFT_SINGLE:
            return BOX_DRAWINGS_UP_DOUBLE_AND_RIGHT_SINGLE;
        case BOX_DRAWINGS_UP_SINGLE_AND_LEFT_DOUBLE:
            return BOX_DRAWINGS_UP_SINGLE_AND_RIGHT_DOUBLE;
        case BOX_DRAWINGS_LIGHT_DOWN_AND_LEFT:
            return BOX_DRAWINGS_LIGHT_DOWN_AND_RIGHT;
        case BOX_DRAWINGS_LIGHT_UP_AND_RIGHT:
            return BOX_DRAWINGS_LIGHT_UP_AND_LEFT;
        case LEFT_HALF_BLOCK:
            return RIGHT_HALF_BLOCK;
        case GREATER_THAN_OR_EQUAL_TO:
            return LESS_THAN_OR_EQUAL_TO;
        case DEVICE_CONTROL_1:
            return DATA_LINK_ESCAPE;
        case ESCAPE:
            return SUBSTITUTE;
        case RIGHT_PARENTHESIS:
            return LEFT_PARENTHESIS;
        case REVERSE_SOLIDUS:
            return SOLIDUS;
        case GREATER_THAN_SIGN:
            return LESS_THAN_SIGN;
        case RIGHT_SQUARE_BRACKET:
            return LEFT_SQUARE_BRACKET;
        case RIGHT_CURLY_BRACKET:
            return LEFT_CURLY_BRACKET;
        case NOT_SIGN:
            return REVERSED_NOT_SIGN;
        case RIGHT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK:
            return LEFT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK;
        case BOX_DRAWINGS_LIGHT_VERTICAL_AND_RIGHT:
            return BOX_DRAWINGS_LIGHT_VERTICAL_AND_LEFT;
        case BOX_DRAWINGS_VERTICAL_SINGLE_AND_RIGHT_DOUBLE:
            return BOX_DRAWINGS_VERTICAL_SINGLE_AND_LEFT_DOUBLE;
        case BOX_DRAWINGS_VERTICAL_DOUBLE_AND_RIGHT_SINGLE:
            return BOX_DRAWINGS_VERTICAL_DOUBLE_AND_LEFT_SINGLE;
        case BOX_DRAWINGS_DOWN_DOUBLE_AND_RIGHT_SINGLE:
            return BOX_DRAWINGS_DOWN_DOUBLE_AND_LEFT_SINGLE;
        case BOX_DRAWINGS_DOWN_SINGLE_AND_RIGHT_DOUBLE:
            return BOX_DRAWINGS_DOWN_SINGLE_AND_LEFT_DOUBLE;
        case BOX_DRAWINGS_DOUBLE_VERTICAL_AND_RIGHT:
            return BOX_DRAWINGS_DOUBLE_VERTICAL_AND_LEFT;
        case BOX_DRAWINGS_DOUBLE_DOWN_AND_RIGHT:
            return BOX_DRAWINGS_DOUBLE_DOWN_AND_LEFT;
        case BOX_DRAWINGS_DOUBLE_UP_AND_RIGHT:
            return BOX_DRAWINGS_DOUBLE_UP_AND_LEFT;
        case BOX_DRAWINGS_UP_DOUBLE_AND_RIGHT_SINGLE:
            return BOX_DRAWINGS_UP_DOUBLE_AND_LEFT_SINGLE;
        case BOX_DRAWINGS_UP_SINGLE_AND_RIGHT_DOUBLE:
            return BOX_DRAWINGS_UP_SINGLE_AND_LEFT_DOUBLE;
        case BOX_DRAWINGS_LIGHT_DOWN_AND_RIGHT:
            return BOX_DRAWINGS_LIGHT_DOWN_AND_LEFT;
        case BOX_DRAWINGS_LIGHT_UP_AND_LEFT:
            return BOX_DRAWINGS_LIGHT_UP_AND_RIGHT;
        case RIGHT_HALF_BLOCK:
            return LEFT_HALF_BLOCK;
        case LESS_THAN_OR_EQUAL_TO:
            return GREATER_THAN_OR_EQUAL_TO;
        default:
            return charCode;
        }
    }

    function getFlippedTextY(charCode) {
        switch (charCode) {
        case CANCEL:
            return END_OF_MEDIUM;
        case RECORD_SEPERATOR:
            return UNIT_SEPERATOR;
        case EXCLAMATION_MARK:
            return INVERTED_EXCLAMATION_MARK;
        case BOX_DRAWINGS_DOWN_DOUBLE_AND_LEFT_SINGLE:
            return BOX_DRAWINGS_UP_DOUBLE_AND_LEFT_SINGLE;
        case BOX_DRAWINGS_DOWN_SINGLE_AND_LEFT_DOUBLE:
            return BOX_DRAWINGS_UP_SINGLE_AND_LEFT_DOUBLE;
        case BOX_DRAWINGS_DOUBLE_DOWN_AND_LEFT:
            return BOX_DRAWINGS_DOUBLE_UP_AND_LEFT;
        case BOX_DRAWINGS_LIGHT_DOWN_AND_LEFT:
            return BOX_DRAWINGS_LIGHT_UP_AND_LEFT;
        case BOX_DRAWINGS_LIGHT_UP_AND_RIGHT:
            return BOX_DRAWINGS_LIGHT_DOWN_AND_RIGHT;
        case BOX_DRAWINGS_LIGHT_UP_AND_HORIZONTAL:
            return BOX_DRAWINGS_LIGHT_DOWN_AND_HORIZONTAL;
        case BOX_DRAWINGS_DOUBLE_UP_AND_RIGHT:
            return BOX_DRAWINGS_DOUBLE_DOWN_AND_RIGHT;
        case BOX_DRAWINGS_DOUBLE_UP_AND_HORIZONTAL:
            return BOX_DRAWINGS_DOUBLE_DOWN_AND_HORIZONTAL;
        case BOX_DRAWINGS_UP_SINGLE_AND_HORIZONTAL_DOUBLE:
            return BOX_DRAWINGS_DOWN_SINGLE_AND_HORIZONTAL_DOUBLE;
        case BOX_DRAWINGS_UP_DOUBLE_AND_HORIZONTAL_SINGLE:
            return BOX_DRAWINGS_DOWN_DOUBLE_AND_HORIZONTAL_SINGLE;
        case BOX_DRAWINGS_UP_DOUBLE_AND_RIGHT_SINGLE:
            return BOX_DRAWINGS_DOWN_DOUBLE_AND_RIGHT_SINGLE;
        case BOX_DRAWINGS_UP_SINGLE_AND_RIGHT_DOUBLE:
            return BOX_DRAWINGS_DOWN_SINGLE_AND_RIGHT_DOUBLE;
        case UPPER_HALF_BLOCK:
            return LOWER_HALF_BLOCK;
        case END_OF_MEDIUM:
            return CANCEL;
        case UNIT_SEPERATOR:
            return RECORD_SEPERATOR;
        case INVERTED_EXCLAMATION_MARK:
            return EXCLAMATION_MARK;
        case BOX_DRAWINGS_UP_DOUBLE_AND_LEFT_SINGLE:
            return BOX_DRAWINGS_DOWN_DOUBLE_AND_LEFT_SINGLE;
        case BOX_DRAWINGS_UP_SINGLE_AND_LEFT_DOUBLE:
            return BOX_DRAWINGS_DOWN_SINGLE_AND_LEFT_DOUBLE;
        case BOX_DRAWINGS_DOUBLE_UP_AND_LEFT:
            return BOX_DRAWINGS_DOUBLE_DOWN_AND_LEFT;
        case BOX_DRAWINGS_LIGHT_UP_AND_LEFT:
            return BOX_DRAWINGS_LIGHT_DOWN_AND_LEFT;
        case BOX_DRAWINGS_LIGHT_DOWN_AND_RIGHT:
            return BOX_DRAWINGS_LIGHT_UP_AND_RIGHT;
        case BOX_DRAWINGS_LIGHT_DOWN_AND_HORIZONTAL:
            return BOX_DRAWINGS_LIGHT_UP_AND_HORIZONTAL;
        case BOX_DRAWINGS_DOUBLE_DOWN_AND_RIGHT:
            return BOX_DRAWINGS_DOUBLE_UP_AND_RIGHT;
        case BOX_DRAWINGS_DOUBLE_DOWN_AND_HORIZONTAL:
            return BOX_DRAWINGS_DOUBLE_UP_AND_HORIZONTAL;
        case BOX_DRAWINGS_DOWN_SINGLE_AND_HORIZONTAL_DOUBLE:
            return BOX_DRAWINGS_UP_SINGLE_AND_HORIZONTAL_DOUBLE;
        case BOX_DRAWINGS_DOWN_DOUBLE_AND_HORIZONTAL_SINGLE:
            return BOX_DRAWINGS_UP_DOUBLE_AND_HORIZONTAL_SINGLE;
        case BOX_DRAWINGS_DOWN_DOUBLE_AND_RIGHT_SINGLE:
            return BOX_DRAWINGS_UP_DOUBLE_AND_RIGHT_SINGLE;
        case BOX_DRAWINGS_DOWN_SINGLE_AND_RIGHT_DOUBLE:
            return BOX_DRAWINGS_UP_SINGLE_AND_RIGHT_DOUBLE;
        case LOWER_HALF_BLOCK:
            return UPPER_HALF_BLOCK;
        default:
            return charCode;
        }
    }

    return {
        "getFontWidth": getFontWidth,
        "getFontHeight": getFontHeight,
        "getFontBytes": getFontBytes,
        "setFont": setFont,
        "fontData": fontData,
        "upperBlock": upperBlock,
        "lowerBlock": lowerBlock,
        "fullBlock": fullBlock,
        "fontDataRGBA": fontDataRGBA,
        "getFlippedTextX": getFlippedTextX,
        "getFlippedTextY": getFlippedTextY,
        "NULL": NULL,
        "CANCEL": CANCEL,
        "END_OF_MEDIUM": END_OF_MEDIUM,
        "SUBSTITUTE": SUBSTITUTE,
        "ESCAPE": ESCAPE,
        "RECORD_SEPERATOR": RECORD_SEPERATOR,
        "UNIT_SEPERATOR": UNIT_SEPERATOR,
        "SPACE": SPACE,
        "EXCLAMATION_MARK": EXCLAMATION_MARK,
        "LEFT_PARENTHESIS": LEFT_PARENTHESIS,
        "RIGHT_PARENTHESIS": RIGHT_PARENTHESIS,
        "SOLIDUS": SOLIDUS,
        "LESS_THAN_SIGN": LESS_THAN_SIGN,
        "GREATER_THAN_SIGN": GREATER_THAN_SIGN,
        "LEFT_SQUARE_BRACKET": LEFT_SQUARE_BRACKET,
        "REVERSE_SOLIDUS": REVERSE_SOLIDUS,
        "RIGHT_SQUARE_BRACKET": RIGHT_SQUARE_BRACKET,
        "LEFT_CURLY_BRACKET": LEFT_CURLY_BRACKET,
        "RIGHT_CURLY_BRACKET": RIGHT_CURLY_BRACKET,
        "C_CEDILLA": C_CEDILLA,
        "DATA_LINK_ESCAPE": DATA_LINK_ESCAPE,
        "REVERSED_NOT_SIGN": REVERSED_NOT_SIGN,
        "DEVICE_CONTROL_1": DEVICE_CONTROL_1,
        "NOT_SIGN": NOT_SIGN,
        "LEFT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK": LEFT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK,
        "INVERTED_EXCLAMATION_MARK": INVERTED_EXCLAMATION_MARK,
        "LIGHT_SHADE": LIGHT_SHADE,
        "MEDIUM_SHADE": MEDIUM_SHADE,
        "DARK_SHADE": DARK_SHADE,
        "BOX_DRAWINGS_LIGHT_VERTICAL_AND_LEFT": BOX_DRAWINGS_LIGHT_VERTICAL_AND_LEFT,
        "BOX_DRAWINGS_VERTICAL_SINGLE_AND_LEFT_DOUBLE": BOX_DRAWINGS_VERTICAL_SINGLE_AND_LEFT_DOUBLE,
        "BOX_DRAWINGS_VERTICAL_DOUBLE_AND_LEFT_SINGLE": BOX_DRAWINGS_VERTICAL_DOUBLE_AND_LEFT_SINGLE,
        "BOX_DRAWINGS_DOWN_DOUBLE_AND_LEFT_SINGLE": BOX_DRAWINGS_DOWN_DOUBLE_AND_LEFT_SINGLE,
        "BOX_DRAWINGS_DOWN_SINGLE_AND_LEFT_DOUBLE": BOX_DRAWINGS_DOWN_SINGLE_AND_LEFT_DOUBLE,
        "BOX_DRAWINGS_DOUBLE_VERTICAL_AND_LEFT": BOX_DRAWINGS_DOUBLE_VERTICAL_AND_LEFT,
        "BOX_DRAWINGS_DOUBLE_DOWN_AND_LEFT": BOX_DRAWINGS_DOUBLE_DOWN_AND_LEFT,
        "RIGHT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK": RIGHT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK,
        "BOX_DRAWINGS_DOUBLE_UP_AND_LEFT": BOX_DRAWINGS_DOUBLE_UP_AND_LEFT,
        "BOX_DRAWINGS_UP_DOUBLE_AND_LEFT_SINGLE": BOX_DRAWINGS_UP_DOUBLE_AND_LEFT_SINGLE,
        "BOX_DRAWINGS_UP_SINGLE_AND_LEFT_DOUBLE": BOX_DRAWINGS_UP_SINGLE_AND_LEFT_DOUBLE,
        "BOX_DRAWINGS_LIGHT_DOWN_AND_LEFT": BOX_DRAWINGS_LIGHT_DOWN_AND_LEFT,
        "BOX_DRAWINGS_LIGHT_UP_AND_RIGHT": BOX_DRAWINGS_LIGHT_UP_AND_RIGHT,
        "BOX_DRAWINGS_LIGHT_UP_AND_HORIZONTAL": BOX_DRAWINGS_LIGHT_UP_AND_HORIZONTAL,
        "BOX_DRAWINGS_LIGHT_DOWN_AND_HORIZONTAL": BOX_DRAWINGS_LIGHT_DOWN_AND_HORIZONTAL,
        "BOX_DRAWINGS_LIGHT_VERTICAL_AND_RIGHT": BOX_DRAWINGS_LIGHT_VERTICAL_AND_RIGHT,
        "BOX_DRAWINGS_VERTICAL_SINGLE_AND_RIGHT_DOUBLE": BOX_DRAWINGS_VERTICAL_SINGLE_AND_RIGHT_DOUBLE,
        "BOX_DRAWINGS_VERTICAL_DOUBLE_AND_RIGHT_SINGLE": BOX_DRAWINGS_VERTICAL_DOUBLE_AND_RIGHT_SINGLE,
        "BOX_DRAWINGS_DOUBLE_UP_AND_RIGHT": BOX_DRAWINGS_DOUBLE_UP_AND_RIGHT,
        "BOX_DRAWINGS_DOUBLE_DOWN_AND_RIGHT": BOX_DRAWINGS_DOUBLE_DOWN_AND_RIGHT,
        "BOX_DRAWINGS_DOUBLE_UP_AND_HORIZONTAL": BOX_DRAWINGS_DOUBLE_UP_AND_HORIZONTAL,
        "BOX_DRAWINGS_DOUBLE_DOWN_AND_HORIZONTAL": BOX_DRAWINGS_DOUBLE_DOWN_AND_HORIZONTAL,
        "BOX_DRAWINGS_DOUBLE_VERTICAL_AND_RIGHT": BOX_DRAWINGS_DOUBLE_VERTICAL_AND_RIGHT,
        "BOX_DRAWINGS_UP_SINGLE_AND_HORIZONTAL_DOUBLE": BOX_DRAWINGS_UP_SINGLE_AND_HORIZONTAL_DOUBLE,
        "BOX_DRAWINGS_UP_DOUBLE_AND_HORIZONTAL_SINGLE": BOX_DRAWINGS_UP_DOUBLE_AND_HORIZONTAL_SINGLE,
        "BOX_DRAWINGS_DOWN_SINGLE_AND_HORIZONTAL_DOUBLE": BOX_DRAWINGS_DOWN_SINGLE_AND_HORIZONTAL_DOUBLE,
        "BOX_DRAWINGS_DOWN_DOUBLE_AND_HORIZONTAL_SINGLE": BOX_DRAWINGS_DOWN_DOUBLE_AND_HORIZONTAL_SINGLE,
        "BOX_DRAWINGS_UP_DOUBLE_AND_RIGHT_SINGLE": BOX_DRAWINGS_UP_DOUBLE_AND_RIGHT_SINGLE,
        "BOX_DRAWINGS_UP_SINGLE_AND_RIGHT_DOUBLE": BOX_DRAWINGS_UP_SINGLE_AND_RIGHT_DOUBLE,
        "BOX_DRAWINGS_DOWN_SINGLE_AND_RIGHT_DOUBLE": BOX_DRAWINGS_DOWN_SINGLE_AND_RIGHT_DOUBLE,
        "BOX_DRAWINGS_DOWN_DOUBLE_AND_RIGHT_SINGLE": BOX_DRAWINGS_DOWN_DOUBLE_AND_RIGHT_SINGLE,
        "BOX_DRAWINGS_LIGHT_UP_AND_LEFT": BOX_DRAWINGS_LIGHT_UP_AND_LEFT,
        "BOX_DRAWINGS_LIGHT_DOWN_AND_RIGHT": BOX_DRAWINGS_LIGHT_DOWN_AND_RIGHT,
        "FULL_BLOCK": FULL_BLOCK,
        "LOWER_HALF_BLOCK": LOWER_HALF_BLOCK,
        "LEFT_HALF_BLOCK": LEFT_HALF_BLOCK,
        "RIGHT_HALF_BLOCK": RIGHT_HALF_BLOCK,
        "UPPER_HALF_BLOCK": UPPER_HALF_BLOCK,
        "GREATER_THAN_OR_EQUAL_TO": GREATER_THAN_OR_EQUAL_TO,
        "LESS_THAN_OR_EQUAL_TO": LESS_THAN_OR_EQUAL_TO,
        "BULLET_OPERATOR": BULLET_OPERATOR,
        "MIDDLE_DOT": MIDDLE_DOT,
        "MIDDLE_BLOCK": MIDDLE_BLOCK,
        "NO_BREAK_SPACE": NO_BREAK_SPACE
    };
}

