"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dragElement = exports.mouseDown = void 0;
function dragElement(element, direction) {
    element.onmousedown = (e) => {
        // console.log("split: mouse down: " + e.clientX);
        let lesson = document.getElementById("lesson");
        let editor = document.getElementById("editor");
        let canvas = document.getElementById("canvas");
        // console.log('lesson, editor, canvas', lesson, editor, canvas)
        let lessonOffsetWidth = lesson ? lesson.offsetWidth : 0;
        exports.mouseDown = {
            e: e,
            offsetLeft: element.offsetLeft,
            offsetTop: element.offsetTop,
            lessonWidth: lessonOffsetWidth,
            editorWidth: editor.offsetWidth,
            editorHeight: editor.offsetHeight,
        };
        document.onmousemove = onMouseMove;
        document.onmouseup = () => {
            document.onmousemove = document.onmouseup = null;
        };
    };
    function onMouseMove(e) {
        // console.log("split: mouse move: " + e.clientX, direction);
        let delta = {
            x: e.clientX - exports.mouseDown.e.clientX,
            y: e.clientY - exports.mouseDown.e.clientY
        };
        // console.log('delta',delta)
        let lesson = document.getElementById("lesson");
        let editor = document.getElementById("editor");
        let canvas = document.getElementById("jxgframe");
        if (direction === "H") // Horizontal
         {
            // Prevent negative-sized elements
            lesson.style.width = (exports.mouseDown.lessonWidth + delta.x) + "px";
            canvas.style.width = (exports.mouseDown.editorWidth - delta.x) + "px";
        }
        if (direction === "V") // Vertical (between editor and canvas)
         {
            element.style.left = exports.mouseDown.offsetLeft + delta.y + "px";
            editor.style.height = (exports.mouseDown.editorHeight + delta.y) + "px";
            // don't need canvas anymore, we moved into an iframe
            // canvas.style.height = (mouseDown.editorHeight - delta.y) + "px";
        }
    }
}
exports.dragElement = dragElement;
//# sourceMappingURL=split.js.map