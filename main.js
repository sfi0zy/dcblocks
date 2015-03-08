/*
 * DCBlocks - Generator of comment blocks for DOM elements in HTML/XML code for Brackets
 * Copyright (c) 2015 Ivan Bogachev <sfi0zy@gmail.com> (http://sfi0zy.github.io/)
 * Free to use under MIT license
 */

define(function (require, exports, module) {
    "use strict";

    var CommandManager    = brackets.getModule("command/CommandManager"),
        EditorManager     = brackets.getModule("editor/EditorManager"),
        KeyBindingManager = brackets.getModule("command/KeyBindingManager");
    
    var getCommentContent = function (line, cursorPosition) {
        var words;
        line = line.substring(0, cursorPosition);
        words = line.split(/[^a-zA-Z0-9-]/);
        return words[words.length - 1];
    };

    function createCommentForBlock() {
        var editor, language, content, cursorPosition, newCursorPosition;
        
        editor = EditorManager.getFocusedEditor();
        
        if (editor) {
            language = editor.document.getLanguage().getName();

            if (language == "HTML" || language == "XML") {
                cursorPosition = editor.getCursorPos();
                content = getCommentContent(editor.document.getLine(cursorPosition.line), cursorPosition.ch).toUpperCase();
                content = content.replace(/-/g, " ");

                editor.document.replaceRange("", {
                    line: cursorPosition.line,
                    ch:   cursorPosition.ch - content.toString().length
                }, cursorPosition);

                cursorPosition = editor.getCursorPos();
                editor.document.replaceRange("<!-- " + content + " -->", cursorPosition);
                newCursorPosition = editor.getCursorPos();
                editor.document.replaceRange("<!-- END " + content + " -->", newCursorPosition);
                editor.setCursorPos(newCursorPosition.line, newCursorPosition.ch);
            }
        }
    }

    var CID_CREATE_COMMENT = "dcblocks-brackets.createCommentForBlock";
    
    CommandManager.register("Create comment for block", CID_CREATE_COMMENT, createCommentForBlock);
    
    KeyBindingManager.removeBinding("Ctrl-B"); // "Ctrl-B" combination is already assigned to cmd.addNextMatch
    KeyBindingManager.addBinding(CID_CREATE_COMMENT, "Ctrl-B");
});
