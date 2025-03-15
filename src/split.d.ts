declare type MouseDown = {
    e: any;
    offsetLeft: number;
    offsetTop: number;
    lessonWidth: number;
    editorWidth: number;
    editorHeight: number;
};
export declare let mouseDown: MouseDown;
export declare function dragElement(element: HTMLElement, direction: 'H' | 'V'): void;
export {};
