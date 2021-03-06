Demonstration available at [http://andyherbert.github.io/ansiedit/](http://andyherbert.github.io/ansiedit/).

# Changing Colors

Keys '1' to '8' will choose the first eight colors without the bold-bit set, holding shift down while making the selection will choose from the highlighted palette. Alternatively, hitting the same key again will select the same color from the highlighted palette range.  
A quick access panel can be displayed at any time by keeping the 'q' key held down. Selecting a color from this panel will also change the current color.  
Pressing the 'tab' key will change back to the previously selected color, assuming one was already chosen, hitting 'tab' again will change back. This switching can be performed as many times as required.  
Most of the drawing tools include a feature whereby pressing the ctrl key whilst selecting an area on the canvas will select the color and requisite tool for that text block.

# Font Brush - e

Allows a selected character from the font set to be used as a brush, as with the other modes this also supports drawing with straight lines, as well as fixing any attribute conflicts.  
Pressing the F1 to F10 keys will quickly select the character code usually representing the light shade, medium shade, dark shade, full, upper, lower, left, right, middle, and dot blocks respectively.  
Alternatively, pressing 'w' will bring up a quick-access panel which also displays the full range of glyphs next to the current position of the pointer.

# Freehand - f

Freehand mode enables 'half block' characters to be used as large pixels. Since only eight colors can be used for the background in 'blink mode', if two 'half blocks' are drawn on the same text-character space with the bold-shifted palette, then the editor assumes the current color takes precedence and shifts the other color sharing the same space to the lower-palette. Pressing 'alt', or 'option', reverses this precedence, and any other colors sharing the same space with be favored instead.  
Holding shift whilst clicking on the canvas will create a straight line using 'half block' pixels from the last drawing position.  

# Line - l

Allows a line to be drawn between two points, but unlike pressing 'shift' with the freehand tool this gives an immediate preview. Pressing 'alt' or 'option' has the same effect here as the freehand tool, namely any attribute clashes will favour the other, conflicting color.  

# Shading  - s / S

Reselecting the option will cycle through the light, medium, and dark varieties of shading. Hitting shift whilst using the keyboard shortcut, or selecting the menu item with the right mouse button, will cycle the options in the opposite sequence.  
Usage is similar to freehand mode, including using the 'shift' key to draw straight lines.  
When choosing the area to shade the background color is chosen from the area directly under the cursor, and this includes 'half-block' pixels. For instance, if a single text-character has a different color in both the upper and lower half of the glyph, then clicking on either the top of the bottom of the glyph will choose a different background color for shading.  
Attribute conflicts are resolved by shifting the background color to the lower palette.  

# Vertical Block - v

Toggles between left and right-handed vertical blocks, operates in the same way as shading mode.  

# Smudge - d

Holding down the mouse button whilst dragging the pointer across the canvas will duplicate the text character immediately underneath the pointer, effectively 'smudging' the text character over the canvas.

# Text - t

Clicking anywhere on the cursor will place a cursor, text can then be entered directly via the keyboard. To escape from text-entry mode, press 'alt' or 'option' and enter.

# Box - x

Draws a rectangle. Pressing 'alt' or 'option' will favour the non-current color in the case of an attribute clash. Pressing 'shift' whilst starting the drag operation will fill the rectangle with the current color, otherwise just the border will be visible.  

# Ellipse - i

Draws an ellipse. Pressing 'alt' or 'option' will favour the non-current color in the case of an attribute clash. Pressing 'shift' whilst starting the drag operation will fill the ellipse with the current color, otherwise just the border will be visible.  

# Shift Color - 0

This tool has two modes:  
Brighten: Brightens the half-block, or the foreground color of the text-character directly underneath the cursor. Pressing 'alt' or 'option' key whilst painting will preserve the brightness-status of any other half block sharing the same text character.  
Darken: Darkens the half-block, or the foreground color of the text-character directly underneath the cursor.

# Mirror - m

Mirrors the drawing activity in the opposing side of the screen. Any characters that have a mirrored equivalent in the x-axis will also be flipped in the process.

# Fill - n

Fill mode operates in a similar way to most paint packages, although it will only operates on text-characters that are only one single color, or are upper and lower 'half-block' characters.  
When conflicts arise with two highlighted colors sharing the same text-character then the editor corrects this by giving the fill color precedence and shifting the other color to the lower-palette, as with the freehand mode, this is reversed by pressing the 'alt' or 'option' key.  

# Color Replacement - r

Changes the a color of individual text characters. First, choose the color you want to replace from the palette, and then choose the replacement. Any characters selected with the pointer will have the former selection replaced by the currently chosen color. If iCE colors are turned off, the background will be shifted into the lower palettes for non-blocky characters if an attribute-conflict arises.

<a name="createcustombrush"></a>

# Create Custom Brush - c

A selection from the canvas can be made to define a custom brush to be used with the 'Custom Brush Tool'. Character codes set to `SPACE` will be interpreted as an alpha channel. Pressing the 'alt' or 'option' key will replace the selection with `SPACE` values after the selection is made.

See also '[Load Brush](#loadbrush)', '[Save Brush](#savebrush)', and '[Custom Brush](#custombrush)'.

<a name="custombrush"></a>

# Custom Brush - p

After a custom brush is either created or loaded it can be used to draw on the canvas. Pressing 'alt' or 'option' whilst using this tool will ignore any alpha channel in the stamp.  

See also '[Create Custom Brush](#createcustombrush)', '[Load Brush](#loadbrush)', and '[Save Brush](#savebrush)'.

# Custom Brush FlipX - [

Flips a selection horizontally. Any characters that have a mirrored equivalent in the x-axis will also be flipped in the process. After this option is chosen the 'Custom Brush Tool' is automatically selected.

See also '[Custom Brush](#custombrush)', '[Create Custom Brush](#createcustombrush)', '[Load Brush](#loadbrush)', and '[Save Brush](#savebrush)'.

# Custom Brush FlipY - ]

Flips a selection vertically. Any characters that have a mirrored equivalent in the y-axis will also be flipped in the process. After this option is chosen the 'Custom Brush Tool' is automatically selected.

See also '[Custom Brush](#custombrush)', '[Create Custom Brush](#createcustombrush)', '[Load Brush](#loadbrush)', and '[Save Brush](#savebrush)'.

# Grid - g / G

Turns on and off, and toggles between, two different types of grids, 'Light' and 'Dark'. Hitting shift whilst using the keyboard shortcut, or selecting the menu item with the right mouse button, will cycle the options in the opposite sequence. The light grid is has higher visibility on darker backgrounds, but less pronounced on lighter backgrounds. The opposite is true for the dark grid.

# Show - y / Y

Toggles between several views of blocks of similar appearance. These are Null, Space, Full Block (F4), and No-Break space. Hitting shift whilst using the keyboard shortcut, or selecting the menu item with the right mouse button, will cycle the options in the opposite sequence. Whilst the mode is activated, and the overlay is visible, clicking on the canvas will attempt to alter the text character to its respective view whilst attempting to retain the color information. In case iCE colors is turned off, the color is shifted down in order to compensate if the current view is not currently for Full Blocks.

# Undo / Redo - z / Z

Reverses the previous operation, to redo, use the shift modifier key, or select the option using the right mouse button.

# Shaded Palette - space

Allows a light, medium, dark-shaded, or full block to be selected immediately based on the currently selected color.  
The shaded palette can also be accessed by pressing the 'q' key at any time.

# iCE Colors

Toggles iCE Colors (no-blink mode) on and off. Turning iCE Colors off can be a destructive operation if you have already drawn on the canvas  
Any custom brushes that are loaded will be altered if iCE colors are turned off in the editor and the brush image contains conflicting colors.

# Resize

Allows the canvas to be resized to a specific number of columns and rows. A maximum of 320 columns, and 1000 rows can be chosen.

# Load

Allows an AnsiEdit, ANSi, XBin, or Bin file to be loaded by dragging and dropping a file on to the browser, or choosing a file by pressing the 'Browse' button.

# Save

Saves an AnsiEdit file using the current filename to the browser's download folder. This format saves the image, the undo buffer, and the state of all the editor and tools.

Warning: This file format is still in the process of being finalised. It is recommended that you also save as an XBin as a backup strategy.

See also '[Changing the default filename](#changedefaultfilename)' and the '[AnsiEdit file format](ansiedit_file_format.md)'.

# Save as XBin

Saves an XBin file using the current filename to the browser's download folder.

See also '[Changing the default filename](#changedefaultfilename)'.

# Save as ANSi

Saves an ANSi file using the current filename to the browser's download folder.  
Certain characters will be replaced as they cannot be reliably reproduced in an ANSi file, these are new-line, carriage return, end-of-file, and escape characters. Their replacements are horiztonal tab, shift out, data link escape, and device control 1, respectively.

Also, custom colors and fonts will be ignored.

See also '[Changing the default filename](#changedefaultfilename)'.

# Edit SAUCE Metadata

Allows title, author, and group information to be added to the file.

# Clear

Resets the canvas to the initial state. All un-saved work will be lost.

<a name="loadbrush"></a>

# Load Brush

Loads an AnsiEdit, ANS, XBin, or Bin file, which can be used as a stamp using the 'Custom Brush' tool. After this option is chosen the 'Custom Brush Tool' is automatically selected, or choosing a file by pressing the 'Browse' button.

See also '[Custom Brush](#custombrush)' and '[Save Brush](#savebrush)'.

<a name="savebrush"></a>

# Save Brush

Saves an XBin file, based on the current 'Custom Brush' selection, to the browser's download folder.

See also '[Custom Brush](#custombrush)' and '[Load Brush](#loadbrush)', and '[Changing the default filename](#changedefaultfilename)'.

<a name="load-font"></a>

# Load Font

Allows a font image to be loaded for the current session. The font must be drawn as white text on a black background and aligned to a 16x16 grid with no additional spacing. Each glyph must be 8 pixels wide, and no more than 32 pixels high. Any transparency (alpha channel) information will be ignored.

See also '[Save Font](#save-font)', '[Change Font](#change-font)', and '[Changing the default filename](#changedefaultfilename)'.

<a name="save-font"></a>

# Save Font

Saves a PNG image, which can be used in conjunction with the 'Load Font' tool to import a font into another file.

See also '[Load Font](#load-font)', '[Change Font](#change-font)', and '[Changing the default filename](#changedefaultfilename)'.

<a name="load-palette"></a>

# Change Font

Allows the current font to be changed to a selection of presets.

See also '[Load Font](#load-font)' and '[Save Font](#save-font)'.

# Load Palette

Allows a palette image to be loaded for the current session. The palette image must be 160 pixels wide, and 40 pixels high, consisting of 16 square blocks of color exactly 20 pixels in size for both dimensions. The higher intensity colors must be placed on the top row of the image.

See also '[Save Palette](#save-palette)', '[Change Palette](#change-palette)', and '[Changing the default filename](#changedefaultfilename)'.

<a name="save-palette"></a>

# Save Palette

Saves a PNG image, which can be used in conjunction with the 'Load Palette' tool to import a palette into another file.

See also '[Load Palette](#load-palette)', '[Change Palette](#change-palette)', and '[Changing the default filename](#changedefaultfilename)'.

<a name="change-font"></a>

# Change Palette

Allows the current palette to be changed by selecting the RGB values for each color.

See also '[Load Palette](#load-palette)' and '[Save Palette](#save-palette)'.

<a name="change-font"></a>

# Export as PNG

Saves a PNG file using the current filename to the browser's download folder.

See also '[Changing the default filename](#changedefaultfilename)'.

# Information

Displays information on the text-character currently under the mouse cursor whilst editing.

<a name="changedefaultfilename"></a>

# Changing the Default Filename

By default, all files with be named 'Untitled'. To change the default filename click on the name in the titlebar, type a new name, and press 'Return'.

# 'Pro' Mode

Pressing the Escape key will immediately hide all the toolbars and give the maximum allowable space to display and edit the canvas.