#DCBlocks

This is an extension for Brackets, which adds ability to easy creation of comment blocks for DOM elements in HTML/XML code.

Sometimes we need to write HTML document and then send it to the programmers. They want to have ability to easily find main blocks of code (if the document is big) - and we must to write comments for this task. This plugin allows us to write this comments faster.

###Installing
You can open *Extension Manager* in Brackets and find this extension by name - "DCBlocks"

###Usage

![Screencast of DCBlocks usage](http://zippy.gfycat.com/CoarseCluelessBull.gif)

Usage is "Emmet-like": type any word and press "Ctrl+B". For example You write
```html
header
```
And now press this keys, You'll see this:
```html
<!-- HEADER --><!-- END HEADER -->
```
You can also use symbol "-" to create block with multiple words. This extension is very useful in combination with Emmet. Enjoy it!

If You want to use another shortcut, You can open *keymap.json* using *Debug > Open User Key Map* and add Your own shortcut by adding
```
"overrides": {
    "Your shortcut": "dcblocks-brackets.createCommentForBlock"
}
```

###License
MIT