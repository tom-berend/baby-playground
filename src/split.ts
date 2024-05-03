type MouseDown = {
    e: any,
    offsetLeft: number,
    offsetTop: number,
    lessonWidth: number,
    editorWidth: number,
    editorHeight: number,
};


export let mouseDown: MouseDown; // remember mouse down info

export function dragElement(element: HTMLElement, direction: 'H' | 'V') {

    element.onmousedown = (e: any) => {
        // console.log("split: mouse down: " + e.clientX);
        let lesson = document.getElementById("lesson");
        let editor = document.getElementById("editor");
        let canvas = document.getElementById("canvas") as HTMLCanvasElement
        // console.log('lesson, editor, canvas', lesson, editor, canvas)

        mouseDown = {
            e: e,
            offsetLeft: element.offsetLeft,
            offsetTop: element.offsetTop,
            lessonWidth: lesson.offsetWidth,
            editorWidth: editor.offsetWidth,
            editorHeight: editor.offsetHeight,
        };

        document.onmousemove = onMouseMove
        document.onmouseup = () => {
            document.onmousemove = document.onmouseup = null;
        }
    }


    function onMouseMove(e: any) {
        // console.log("split: mouse move: " + e.clientX, direction);

        let delta = {
            x: e.clientX - mouseDown.e.clientX,
            y: e.clientY - mouseDown.e.clientY
        };

        // console.log('delta',delta)

        let lesson = document.getElementById("lesson");
        let editor = document.getElementById("editor");
        let canvas = document.getElementById("canvas") as HTMLCanvasElement

        if (direction === "H") // Horizontal
        {
            // Prevent negative-sized elements
            lesson.style.width = (mouseDown.lessonWidth + delta.x) + "px";
            canvas.style.width = (mouseDown.editorWidth - delta.x) + "px";
        }
        if (direction === "V") // Vertical (between editor and canvas)
        {
            element.style.left = mouseDown.offsetLeft + delta.y + "px";
            editor.style.height = (mouseDown.editorHeight + delta.y) + "px";
            canvas.style.height = (mouseDown.editorHeight - delta.y) + "px";
        }

    }
}



