"use strict";
/////////////////////////////////////////////////////////////////////////////
//
//    Copyright 2024 Tom Berend   (MIT Licence)
//
//    Permission is hereby granted, free of charge, to any person obtaining a copy of this
//    software and associated documentation files (the “Software”), to deal in the Software
//    without restriction, including without limitation the rights to use, copy, modify, merge,
//    publish, distribute, sublicense, and/or sell copies of the Software, and to permit
//    persons to whom the Software is furnished to do so, subject to the following conditions:
//
//    The above copyright notice and this permission notice shall be included in all copies
//    or substantial portions of the Software.
//
//    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
//    INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
//    PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
//    FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
//    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//    DEALINGS IN THE SOFTWARE.
//
/////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSX = void 0;
//   Generated on March 15, 2025, 5:32 pm
var TSX;
(function (TSX) {
    //////////////////////////////////////////////////////////////
    ///  WE NEED A PLACE TO STORE THE BOARD AND VIEW3D OBJECTS ///
    //////////////////////////////////////////////////////////////
    /** PRIVATE, Nothing here, just some storage.  Ignore */
    class TSXBoard {
        _jBoard;
        _jView3d;
        currentCanvas = '';
        boardList = new Map(); // will be keyed array of boards  { 'jxgbox': jBoard, 'jxgbox2': jBoard2 }
        constructor(b, v) {
            this._jBoard = b;
            this._jView3d = v;
        }
        // getters are used from outside this class
        get jBoard() {
            if (this.isEmptyObject(this._jBoard)) { // create if doesn't exists
                this.jInitBoard('jxgbox', defaultAttributes({}));
            }
            return this._jBoard;
        }
        get jView3d() {
            if (this.isEmptyObject(this._jView3d)) { // create if doesn't exists
                this.jInitBoard('jxgbox', defaultAttributes({}));
            }
            return this._jView3d;
        }
        /** test for empty object {} */
        isEmptyObject(obj) {
            for (let _var in obj)
                return false; // if there is a property, it is not empty (doesn't work for dates, etc)
            return true;
        }
        // this is the code for InitBoard, which is created in the wrapper.
        jInitBoard(canvas, attributes = {}) {
            if ((canvas && canvas !== this.currentCanvas)) { // test whether board needs to be created
                if (!canvas) // we need to create a board and no canvas id given, use 'jxgbox'
                    canvas = 'jxgbox';
                this.currentCanvas = canvas;
                // check if we already have created this board
                if (this.boardList.has(canvas)) {
                    this._jBoard = this.boardList.get(canvas); // we already have this board
                    return this._jBoard;
                }
                this._jBoard = window.JXG.JSXGraph.initBoard(canvas, attributes);
                this.boardList.set(canvas, this._jBoard); // keep a copy in case multiple boards
                let bounding = this._jBoard.getBoundingBox();
                // console.log(bounding, [[bounding[0], bounding[3]], Math.abs(bounding[2] - bounding[0]), Math.abs(bounding[3] - bounding[1])])
                this._jView3d = this._jBoard.create('view3d', [[bounding[0], bounding[3]], [Math.abs(bounding[2] - bounding[0]), Math.abs(bounding[3] - bounding[1])], [[-5, 5], [-5, 5], [-5, 5]]], {
                    // projection: 'central',
                    projection: 'parallel',
                    pan: { enabled: false },
                    trackball: { enabled: true },
                    axesPosition: 'none',
                    depthOrder: {
                        enabled: true,
                        layers: [12]
                    },
                    xPlaneRear: { visible: false },
                    yPlaneRear: { fillOpacity: 0.2, fillColor: 'blue' },
                    zPlaneRear: { visible: false },
                    az: { pointer: { enabled: false }, keyboard: { enabled: true, key: 'none' } },
                    el: { pointer: { enabled: false }, keyboard: { enabled: true, key: 'none' } },
                });
                this._jView3d.setView(Math.PI, Math.PI / 2, 0);
                // // // put them into an object that we can reference as:  TSX.jsxBoard.jBoard,   TSX.jsxBoard.jView3d
                // (window as any).TSXGlobal.jBoard = jBoard;
                // (window as any).TSXGlobal.jView3d = jView3d;
                printLineNumber = 0; // reset the 'print' utility
            }
            return this._jBoard;
        }
    }
    TSX.TSXBoard = TSXBoard;
    // this is a hack, it pollutes the namespace.  But we can't
    // run the playground without it.   Fix it if we merge with JSXGraph.
    if (typeof window.TSXGlobal === "undefined") // only create if it doesn't exist
        window.TSXGlobal = new TSXBoard({}, {}); // object to store 'board' and 'view3D' objects
    // and some simple methods to retrieve them
    /** PRIVATE - retrieves the current JSXGraph Board object. */
    function _jsxBoard() {
        return window.TSXGlobal.jBoard;
    }
    TSX._jsxBoard = _jsxBoard;
    /** PRIVATE - retrieves the current JSXGraph View3d object. */
    function _jsxView3d() {
        return window.TSXGlobal.jView3d;
    }
    TSX._jsxView3d = _jsxView3d;
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    class View3D {
        setView(x, y, z) { }
    }
    let jBoard;
    let defaultAttrs = { name: '' };
    /**
    *  Constant: user coordinates relative to the coordinates system defined by the bounding box.
    */
    const COORDS_BY_USER = 0x0001;
    /**
    *  Constant: screen coordinates in pixel relative to the upper left corner of the div element.
    */
    const COORDS_BY_SCREEN = 0x0002;
    ///// some math classes by hand
    class IntervalArithmetic {
    }
    TSX.IntervalArithmetic = IntervalArithmetic;
    class PolyMonomial {
    }
    TSX.PolyMonomial = PolyMonomial;
    class PolyPolynomial {
    }
    TSX.PolyPolynomial = PolyPolynomial;
    class Symbolic {
    }
    TSX.Symbolic = Symbolic;
    // utility to appy default attributes
    function defaultAttributes(attrs = {}) {
        for (const property in defaultAttrs) {
            if (!attrs.hasOwnProperty(property)) { // if the user has not specified a value for this property
                attrs[property] = defaultAttrs[property];
            }
        }
        return attrs;
    }
    // utility to determine if last parameter is the attributes
    function isAttribute(last) {
        return ((typeof last == 'object') && // must be an object
            (!Array.isArray(last)) && // not an array (typeof treats arrays as objects)
            (last !== null) && // null returns type 'object' - javascript bug
            ('elType' in last === false)); // if has elType then a JSXGraph object
    }
    // print utility - needs work !!
    let printLineNumber = 0; // added a print() function, this tracks the line#
    function print(...args) {
        let bbox = _jsxBoard().getBoundingBox(); // get every time, in case setBoundingBox()
        let left = bbox[0]; // align x to left border
        let lineHeight = (bbox[1] - bbox[3]) / 20; //
        let top = bbox[1] - (2 * lineHeight) - (printLineNumber * lineHeight); // align y to top border
        let helper = (stringText, item) => {
            if (typeof item == null) {
                stringText += 'null, ';
            }
            else if (item == undefined) {
                stringText += 'undefined';
            }
            else if (typeof item == 'string') {
                stringText += '\'' + item + '\'';
            }
            else if (typeof item == 'number') {
                stringText += Number.isInteger(item) ? item.toString() : item.toFixed(2);
            }
            else if (typeof item == 'boolean') {
                stringText += item ? 'true' : 'false';
            }
            else if (Array.isArray(item)) {
                stringText += '[';
                stringText = item.reduce((acc, curr) => acc + helper('', curr), stringText);
                stringText += ']';
            }
            else if (typeof item == 'object') {
                stringText += '{';
                if ('elType' in item) {
                    stringText += item.elType;
                }
                else if ('elV2Math' in item) {
                    stringText += [item.X(), item.Y()];
                }
                stringText += '}';
            }
            else {
                stringText += 'UNKNOWN';
            }
            stringText += ', ';
            return stringText;
        };
        let stringText = '';
        args.forEach((argn) => {
            stringText = helper(stringText, argn);
        });
        _jsxBoard().create('text', [left, top, stringText], { fontSize: 10, strokeColor: 'blue', fontUnits: 'EM' });
        printLineNumber += 1;
    }
    TSX.print = print;
    // JXG methods that we pass through
    /** Version of JSXGraph.  */
    function version() {
        return window.JXG.version;
    }
    TSX.version = version;
    // these are some useful board methods that we pass through
    /** Board and construction methods.  **Press '.' to see options** */
    TSX.board = {
        /** Set the bounding box of the board.  Returns the board.
        ```js
        TSX.board.setBoundingBox([-8, 8, 8, -8])
        ```*/
        /** Stop updates of the board.  Returns the board. */
        suspendUpdate: () => _jsxBoard().suspendUpdate(),
        /** Enable updates of the board.  Returns the board. */
        unsuspendUpdate: () => _jsxBoard().unsuspendUpdate(),
        /** Update the board.  Returns the board.  */
        update: () => _jsxBoard().update(),
        // /** Adds an animation.*/
        // addAnimation: (element:GeometryElement) => _jsxBoard().addAnimation(element),
        /** Add the default x- and y-axis and grid to the construction using the code below.
         * ```js
         * TSX.axis([0,0],[1,0]);
         * TSX.axis([0,0],[0,1]);
         * ```
         */
        // addAxis: () => {
        //     initBoard();
        //     TSX.axis([0, 0], [1, 0]);
        //     TSX.axis([0, 0], [0, 1]);
        // },
        /**  Set infobox visible / invisible. */
        displayInfobox: (val) => _jsxBoard().displayInfobox(val),
        /** Sets an arbitrary number of attributes.  Use an object with key-value pairs.
         * ```js
         * TSX.board.setAttribute({axis:true});    // turn on the default axis
         * ```
         */
        // setAttribute: (attr: BoardAttributes) => {
        //     initBoard();
        //     _jsxBoard().setAttribute(attr);
        //     _jsxBoard().update()
        // },
        /** Zooms into the board by the factors board.attr.zoom.factorX and board.attr.zoom.factorY
         * and applies the zoom. The zoom operation is centered at x, y. */
        zoomIn: (x, y) => { return _jsxBoard().zoomIn(x, y); },
        /** Zooms out of the board by the factors board.attr.zoom.factorX and board.attr.zoom.factorY and applies the zoom.*/
        zoomOut: (x, y) => { return _jsxBoard().zoomOut(x, y); },
        /** Sets the zoom level to fX resp fY.*/
        setZoom: (fX, fY) => { return _jsxBoard().setZoom(fX, fY); },
        /** Reset the zoom level to the original zoom level from initBoard(); Additionally, if the board as been initialized with a boundingBox(which is the default ), restore the viewport to the original viewport during initialization.*/
        zoom100: () => { return _jsxBoard().zoom100(); },
        // these are on the JXG object, but we keep them here for simplicity
        /** Set the bounding box of the board. */
        setBoundingBox: (box, keepAspectRatio = false, setZoom) => { return _jsxBoard().setBoundingBox(box, keepAspectRatio, setZoom); },
        /** Get the bounding box of the board. */
        getBoundingBox: () => { return _jsxBoard().getBoundingBox(); },
        /** set Katex as default for board (names, labels, everything).  useKatex() need only be set ONCE, no way to unset. the text element has a 'useKatex' attribute that lets you turn Katex on and off for individual text fields. */
        useKatex: () => { window.JXG.Options.text.useKatex = true; },
        /** Add all possible event handlers to the board object that move objects, i.e. */
        addEventHandlers: () => { return _jsxBoard().addEventHandlers(); },
        /**    Register keyboard event handlers. */
        addKeyboardEventHandlers: () => { return _jsxBoard().addKeyboardEventHandlers(); },
        /** Adds a grid to the board according to the settings given in board.options. For more control, use the TSX.grid object.*/
        addGrid: () => { return _jsxBoard().addGrid(); },
        // /** Add fullscreen events which update the CSS transformation matrix to correct the mouse/ touch / pointer positions in case of CSS transformations..*/
        // addFullscreenEventHandlers: (): any => { return _jsxBoard().addFullscreenEventHandlers() },
        // /** Add user activity to the array 'board.userLog'.*/
        // addLogEntry: (type: string, obj: Object, pos: number): any => { return _jsxBoard().addLogEntry(type, obj, pos) },
        // /** Registers mouse move, down and wheel event handlers.*/
        // addMouseEventHandlers: (): any => { return _jsxBoard().addMouseEventHandlers() },
        // /** Registers pointer event handlers.*/
        // addPointerEventHandlers: (): any => { return _jsxBoard().addPointerEventHandlers() },
        // /** Add resize related event handlers*/
        // addResizeEventHandlers: (): any => { return _jsxBoard().addResizeEventHandlers() },
        // /** Register touch start and move and gesture start and change event handlers.*/
        // addTouchEventHandlers: (): any => { return _jsxBoard().addTouchEventHandlers() },
        // /** Registers pointer event handlers.*/
        // addWheelEventHandlers: (): any => { return _jsxBoard().addWheelEventHandlers() },
        // /** General purpose animation function.*/
        // animate: (): any => { return _jsxBoard().animate() },
        // /** Apply update on all objects with the new zoom - factors.*/
        // applyZoom: (): any => { return _jsxBoard().applyZoom() },
        // /** Calculates adequate snap sizes.*/
        // calculateSnapSizes: (): any => { return _jsxBoard().calculateSnapSizes() },
        // /** Delete the elements drawn as part of a trace of an element.*/
        // clearTraces: (): any => { return _jsxBoard().clearTraces() },
        // /** Handler for click on down arrow in the navigation bar*/
        // clickDownArrow: (): any => { return _jsxBoard().clickDownArrow() },
        // /** Handler for click on left arrow in the navigation bar*/
        // clickLeftArrow: (): any => { return _jsxBoard().clickLeftArrow() },
        // /** Handler for click on right arrow in the navigation bar*/
        // clickRightArrow: (): any => { return _jsxBoard().clickRightArrow() },
        // /** Handler for click on up arrow in the navigation bar*/
        // clickUpArrow: (): any => { return _jsxBoard().clickUpArrow() },
        // /** Creates a new geometric element of type elementType.*/
        // create: (elementType: string, parents: string, attributes: Object): any => { return _jsxBoard().create(elementType, parents, attributes) },
        // /** Deprecated name for JXG.Board.create.*/
        // createElement: (): any => { return _jsxBoard().createElement() },
        // /** Function to animate a curve rolling on another curve.*/
        // createRoulette: (c1: Object, c2: Object, start_c1: number, stepsize: number, direction: number, time: number, pointlist: Object[]): any => { return _jsxBoard().createRoulette(c1, c2, start_c1, stepsize, direction, time, pointlist) },
        // /** Remove highlighting of all elements.*/
        // dehighlightAll: (): any => { return _jsxBoard().dehighlightAll() },
        // /** Initializes color blindness simulation.*/
        // emulateColorblindness: (deficiency: string): any => { return _jsxBoard().emulateColorblindness(deficiency) },
        // /** After construction of the object the visibility is set and the label is constructed if necessary.*/
        // finalizeAdding: (obj:Object): any => { return _jsxBoard().finalizeAdding(obj) },
        // /** If fullscreen mode is toggled, the possible CSS transformations which are applied to the JSXGraph canvas have to be reread.*/
        // fullscreenListener: (evt: Event): any => { return _jsxBoard().fullscreenListener(evt) },
        // /** Runs through all elements and calls their update() method and update the conditions.*/
        // fullUpdate: (): any => { return _jsxBoard().fullUpdate() },
        // /** Generates unique id for a board.*/
        // generateId: (): any => { return _jsxBoard().generateId() },
        // /** Generates an unique name for the given object.*/
        // generateName: (object: Object): any => { return _jsxBoard().generateName(object) },
        // /** Triggered on iOS / Safari while the user inputs a gesture(e.g.*/
        // gestureChangeListener: (evt: Event): any => { return _jsxBoard().gestureChangeListener(evt) },
        // /** Called by iOS / Safari as soon as the user starts a gesture.*/
        // gestureStartListener: (evt: Event): any => { return _jsxBoard().gestureStartListener(evt) },
        // /** Collects all elements under current mouse position.*/
        // getAllObjectsUnderMouse: (evt: Event): any => { return _jsxBoard().getAllObjectsUnderMouse(evt) },
        // /** Collects all elements under current mouse position plus current user coordinates of mouse cursor.*/
        // getAllUnderMouse: (evt: Event): any => { return _jsxBoard().getAllUnderMouse(evt) },
        // /** Calculates mouse coordinates relative to the boards container.*/
        // getCoordsTopLeftCorner: (): any => { return _jsxBoard().getCoordsTopLeftCorner() },
        // /** Get the position of the pointing device in screen coordinates, relative to the upper left corner of the host tag.*/
        // getMousePosition: (e: Event, i: number): any => { return _jsxBoard().getMousePosition(e, i) },
        // /** This method calculates the user coords of the current mouse coordinates.*/
        // getUsrCoordsOfMouse: (evt: Event): any => { return _jsxBoard().getUsrCoordsOfMouse(evt) },
        // /** Checks if the given point is inside the boundingbox.*/
        // hasPoint: (x:number,y:number): any => { return _jsxBoard().hasPoint(x, y) },
        // /** Changes the text of the info box to what is provided via text.*/
        // highlightCustomInfobox: (text:string,el:Object): any => { return _jsxBoard().highlightCustomInfobox(text, el) },
        // /** Changes the text of the info box to show the given coordinates.*/
        // highlightInfobox: (x:number,y:number,el?:Object): any => { return _jsxBoard().highlightInfobox(x, y, el) },
        // /** Initialize some objects which are contained in every GEONExT construction by default, but are not contained in the gxt files.*/
        // initGeonextBoard: (): any => { return _jsxBoard().initGeonextBoard() },
        // /** Initialize the info box object which is used to display the coordinates of points near the mouse pointer,*/
        // initInfobox: (attributes:Object): any => { return _jsxBoard().initInfobox(attributes) },
        // /** Collects all elements below the current mouse pointer and fulfilling the following constraints: isDraggable, visible, not fixed, not frozen*/
        // initMoveObject: (x:number,y:number,evt:Event,type:string): any => { return _jsxBoard().initMoveObject(x, y, evt, type) },
        // /** Initiate moving the origin.. This is used in mouseDown and touchStart listeners. */
        // initMoveOrigin: (x:number,y:number): any => { return _jsxBoard().initMoveOrigin(x, y) },
        // /** Allow moving of JSXGraph elements with arrow keys.*/
        // keyDownListener: (evt: Event): any => { return _jsxBoard().keyDownListener(evt) },
        // /** Event listener for SVG elements getting focus.*/
        // keyFocusInListener: (evt: Event): any => { return _jsxBoard().keyFocusInListener(evt) },
        // /** Event listener for SVG elements losing focus.*/
        // keyFocusOutListener: (): any => { return _jsxBoard().keyFocusOutListener(evt) },
        // /** Migrate the dependency properties of the point src to the point dest and delete the point src.*/
        // migratePoint: (): any => { return _jsxBoard().migratePoint(src, dest, copyName) },
        // /** This method is called by the browser when the mouse device clicks on the screen.*/
        // mouseClickListener: (evt: Event): any => { return _jsxBoard().mouseClickListener(evt) },
        // /** This method is called by the browser when the mouse device double clicks on the screen.*/
        // mouseDblClickListener: (evt: Event): any => { return _jsxBoard().mouseDblClickListener(evt) },
        // /** This method is called by the browser when the mouse button is clicked.*/
        // mouseDownListener: (evt: Event): any => { return _jsxBoard().mouseDownListener(evt) },
        // /** This method is called by the browser when the mouse is moved.*/
        // mouseMoveListener: (evt: Event): any => { return _jsxBoard().mouseMoveListener(evt) },
        // /** This method is called by the browser when the mouse button is released.*/
        // mouseUpListener: (evt: Event): any => { return _jsxBoard().mouseUpListener(evt) },
        // /** Handler for mouse wheel events.*/
        // mouseWheelListener: (evt: Event): any => { return _jsxBoard().mouseWheelListener(evt) },
        // /** Moves an object.*/
        // moveObject: (x:number,y:number,o:Object,evt:Event,type:string): any => { return _jsxBoard().moveObject(x, y, o, evt, type) },
        // /** Moves the origin and initializes an update of all elements.*/
        // moveOrigin: (): any => { return _jsxBoard().moveOrigin(x, y, diff) },
        // /** This method is called by the browser when a pointer device clicks on the screen. */
        // pointerClickListener: (evt: Event): any => { return _jsxBoard().pointerClickListener(evt) },
        // /**     This method is called by the browser when a pointer device double clicks on the screen.*/
        // pointerDblClickListener: (evt: Event): any => { return _jsxBoard().pointerDblClickListener(evt) },
        // /** This method is called by the browser when a pointing device is pressed on the screen.*/
        // pointerDownListener: (): any => { return _jsxBoard().pointerDownListener(evt, object, allowDefaultEventHandling) },
        // /** Triggered by the pointerleave event.*/
        // pointerLeaveListener: (evt: Event): any => { return _jsxBoard().pointerLeaveListener(evt) },
        // /** Called periodically by the browser while the user moves a pointing device across the screen.*/
        // pointerMoveListener: (evt: Event): any => { return _jsxBoard().pointerMoveListener(evt) },
        // /** Triggered as soon as the user stops touching the device with at least one finger.*/
        // pointerUpListener: (evt: Event): any => { return _jsxBoard().pointerUpListener(evt) },
        // /** Sets for all objects the needsUpdate flag to 'true'.*/
        // prepareUpdate: (): any => { return _jsxBoard().prepareUpdate(drag) },
        // /** Update the container before and after printing.*/
        // printListener: (): any => { return _jsxBoard().printListener(evt) },
        // /** Wrapper for printListener to be used in mediaQuery matches.*/
        // printListenerMatch: (): any => { return _jsxBoard().printListenerMatch(mql) },
        // /** Removes the ancestors of an object an the object itself from board and renderer.*/
        // removeAncestors: (): any => { return _jsxBoard().removeAncestors(object) },
        // /** Deletes a board from the list of dependent boards.*/
        // removeChild: (): any => { return _jsxBoard().removeChild(board) },
        // /** Remove all event handlers from the board object*/
        // removeEventHandlers: (): any => { return _jsxBoard().removeEventHandlers() },
        // /** Remove all registered event handlers regarding fullscreen mode.*/
        // removeFullscreenEventHandlers: (): any => { return _jsxBoard().removeFullscreenEventHandlers() },
        // /** Removes all grids assigned to this board.*/
        // removeGrids: (): any => { return _jsxBoard().removeGrids() },
        // /** Please use JXG.Board.off instead.*/
        // removeHook: (): any => { return _jsxBoard().removeHook(id) },
        // /** Remove all registered touch event handlers.*/
        // removeKeyboardEventHandlers: (): any => { return _jsxBoard().removeKeyboardEventHandlers() },
        // /** De - register mouse event handlers.*/
        // removeMouseEventHandlers: (): any => { return _jsxBoard().removeMouseEventHandlers() },
        // /** Removes object from board and renderer.*/
        // removeObject: (): any => { return _jsxBoard().removeObject(object, saveMethod) },
        // /** Remove MSPointer * Event handlers.*/
        // removePointerEventHandlers: (): any => { return _jsxBoard().removePointerEventHandlers() },
        // /** Remove resize related event handlers*/
        // removeResizeEventHandlers: (): any => { return _jsxBoard().removeResizeEventHandlers() },
        // /** Remove all registered touch event handlers.*/
        // removeTouchEventHandlers: (): any => { return _jsxBoard().removeTouchEventHandlers() },
        // /** Change the height and width of the board's container.*/
        // resizeContainer: (canvasWidth: number, canvasHeight: number, dontset: Boolean, dontSetBoundingBox: Boolean): any => { return _jsxBoard().resizeContainer(canvasWidth, canvasHeight, dontset, dontSetBoundingBox) },
        // /** Fallback solutions if there is no resizeObserver available in the browser.*/
        // resizeListener: (): any => { return _jsxBoard().resizeListener() },
        // /** Listener to watch for scroll events.*/
        // scrollListener: (evt: Event): any => { return _jsxBoard().scrollListener(evt) },
        // /** Select a single or multiple elements at once.*/
        // select: (): any => { return _jsxBoard().select(str, onlyByIdOrName) },
        // /** Sets an arbitrary number of attributes.*/
        // setAttribute: (): any => { return _jsxBoard().setAttribute(attributes) },
        // /** Set the bounding box of the board.*/
        // setBoundingBox: (): any => { return _jsxBoard().setBoundingBox(bbox, keepaspectratio, setZoom) },
        // /** Composes an id for an element.*/
        // setId: (): any => { return _jsxBoard().setId(obj, type) },
        // /** Lists the dependencies graph in a new HTML - window.*/
        // showDependencies: (): any => { return _jsxBoard().showDependencies() },
        // /** Lists the XML code of the construction in a new HTML - window.*/
        // showXML: (): any => { return _jsxBoard().showXML() },
        // /** Watch for changes of the visibility of the JSXGraph container element.*/
        // startIntersectionObserver: (): any => { return _jsxBoard().startIntersectionObserver() },
        // /** Start observer which reacts to size changes of the JSXGraph container div element.*/
        // startResizeObserver: (): any => { return _jsxBoard().startResizeObserver() },
        // /** Start selection mode.*/
        // startSelectionMode: (): any => { return _jsxBoard().startSelectionMode() },
        // /** Cancels all running animations.*/
        // stopAllAnimation: (): any => { return _jsxBoard().stopAllAnimation() },
        // /** Stop the intersection observer*/
        // stopIntersectionObserver: (): any => { return _jsxBoard().stopIntersectionObserver() },
        // /** Stops the resize observer.*/
        // stopResizeObserver: (): any => { return _jsxBoard().stopResizeObserver() },
        // /** Finalize the selection: disable selection mode and return _jsxBoard(). the coordinates of the selection rectangle.*/
        // stopSelectionMode: (): any => { return _jsxBoard().stopSelectionMode() },
        // /** Suppresses the default event handling.*/
        // suppressDefault: (): any => { return _jsxBoard().suppressDefault(e) },
        // /** Stop updates of the board.*/
        // suspendUpdate: (): any => { return _jsxBoard().suspendUpdate() },
        // /** Expand the JSXGraph construction to fullscreen.*/
        // toFullscreen: (): any => { return _jsxBoard().toFullscreen(id) },
        // /** Triggered as soon as the user stops touching the device with at least one finger.*/
        // touchEndListener: (evt: Event): any => { return _jsxBoard().touchEndListener(evt) },
        // /** Called periodically by the browser while the user moves his fingers across the device.*/
        // touchMoveListener: (evt: Event): any => { return _jsxBoard().touchMoveListener(evt) },
        // /** This method is called by the browser when a finger touches the surface of the touch - device.*/
        // touchStartListener: (evt: Event): any => { return _jsxBoard().touchStartListener(evt) },
        // /** Moves elements in multitouch mode.*/
        // twoFingerMove: (): any => { return _jsxBoard().twoFingerMove(p1, p2, o, evt) },
        // /** Moves, rotates and scales a line or polygon with two fingers.*/
        // twoFingerTouchObject: (): any => { return _jsxBoard().twoFingerTouchObject(tar, drag, id) },
        // /** Enable updates of the board.*/
        // unsuspendUpdate: (): any => { return _jsxBoard().unsuspendUpdate() },
        // /** Runs through most elements and calls their update() method and update the conditions.*/
        // update: (): any => { return _jsxBoard().update(drag) },
        // /** updates conditions*/
        // updateConditions: (): any => { return _jsxBoard().updateConditions() },
        // /** Update the width and height of the JSXGraph container div element.*/
        // updateContainerDims: (): any => { return _jsxBoard().updateContainerDims(width, height) },
        // /** Update the coords object of all elements which possess this property.*/
        // updateCoords: (): any => { return _jsxBoard().updateCoords() },
        // /** Update CSS transformations of type scaling.*/
        // updateCSSTransforms: (): any => { return _jsxBoard().updateCSSTransforms() },
        // /** Runs through all elements and calls their update() method.*/
        // updateElements: (): any => { return _jsxBoard().updateElements(drag) },
        // /** Runs through all hooked functions and calls them.*/
        // updateHooks: (): any => { return _jsxBoard().updateHooks(m) },
        // /** Updates and displays a little info box to show coordinates of current selected points.*/
        // updateInfobox: (): any => { return _jsxBoard().updateInfobox(el) },
        // /** Runs through all elements and calls their update() method.*/
        // updateRenderer: (): any => { return _jsxBoard().updateRenderer() },
        // /** Runs through all elements and calls their update() method.*/
        // updateRendererCanvas: (): any => { return _jsxBoard().updateRendererCanvas() },
        // /** Zooms the board so every visible point is shown.*/
        // zoomAllPoints: (): any => { return _jsxBoard().zoomAllPoints() },
        // /** Reset the bounding box and the zoom level to 100 % such that a given set of elements is within the board's viewport.*/
        // zoomElements: (elements: any): any => { return _jsxBoard().zoomElements(elements) },
    };
    /** Initialize a board other than jxgbox */
    function initBoard(canvas = '', attributes) {
        return window.TSXGlobal.jInitBoard(canvas, attributes);
    }
    TSX.initBoard = initBoard;
    /** legacy create for 2D elements */
    function create(element, params, attributes = {}) {
        initBoard();
        if (element.toLowerCase().includes('3d')) // 3D
            return _jsxView3d().create(element, params, attributes);
        else
            return _jsxBoard().create(element, params, attributes);
    }
    TSX.create = create;
    class MatrixMath {
        /** Calculates the cross product of two vectors both of length three. */
        crossProduct(v1, v2) { return window.JXG.Math.crossProduct(v1, v2); }
        /** Generates a 4x4 matrix for 3D to 2D projections. */
        frustum(left, right, top, bottom, near, far) { return window.JXG.Math.frustum(left, right, top, bottom, near, far); }
        /** Generates an identity matrix of size m x n.  (Yes it is possible to have a non-square identity matrix) */
        identity(m, n) { return window.JXG.Math.identity(m, n); }
        /** Inner product of two vectors a and b.  Inner product is a generalization of Dot product for an arbitrary vector space. */
        innerProduct(v1, v2) { return window.JXG.Math.innerProduct(v1, v2); }
        /** Compute the inverse of an nxn matrix with Gauss elimination.  Returns [] if there is a singularity. */
        inverse(mat) { return window.JXG.Math.inverse(mat); }
        /** Computes the product of the two matrices mat1*mat2. */
        matMatMult(mat1, mat2) { return window.JXG.Math.matMatMult(mat1, mat2); }
        /** Initializes a matrix as an array of rows with the given value. */
        matrix(nRows, mCols, init) { return window.JXG.Math.matrix(nRows, mCols, init); }
        /** Multiplies a vector vec to a matrix mat: mat * vec.  The matrix is a two-dimensional array of numbers. The inner arrays describe the columns, the outer ones the matrix rows. eg: [[2,1],[3,2]] where [2,1] is the first colummn. */
        matVecMult(mat, vec) { return window.JXG.Math.matVecMult(mat, vec); }
        /** Generates a 4x4 matrix for 3D to 2D projections. */
        projection(fov, ratio, near, far) { return window.JXG.Math.projection(fov, ratio, near, far); }
        /** Transposes a matrix given as a two dimensional array. */
        transpose(mat) { return window.JXG.Math.transpose(mat); }
        /** Initializes a vector of size n wih coefficients set to the given value. */
        vector(n, init) { return window.JXG.Math.vector(n, init); }
    }
    class GeometryMath {
        affineDistance() { return window.JXG.Math.Geometry.affineDistance(); }
        affineRatio() { return window.JXG.Math.Geometry.affineRatio(); }
        angle() { return window.JXG.Math.Geometry.angle(); }
        angleBisector() { return window.JXG.Math.Geometry.angleBisector(); }
        bezierArc() { return window.JXG.Math.Geometry.bezierArc(); }
        calcLabelQuadrant() { return window.JXG.Math.Geometry.calcLabelQuadrant(); }
        calcLineDelimitingPoints() { return window.JXG.Math.Geometry.calcLineDelimitingPoints(); }
        calcStraight() { return window.JXG.Math.Geometry.calcStraight(); }
        circumcenter() { return window.JXG.Math.Geometry.circumcenter(); }
        circumcenterMidpoint() { return window.JXG.Math.Geometry.circumcenterMidpoint(); }
        det3p() { return window.JXG.Math.Geometry.det3p(); }
        distance() { return window.JXG.Math.Geometry.distance(); }
        distPointLine() { return window.JXG.Math.Geometry.distPointLine(); }
        GrahamScan() { return window.JXG.Math.Geometry.GrahamScan(); }
        intersectionFunction() { return window.JXG.Math.Geometry.intersectionFunction(); }
        isSameDir() { return window.JXG.Math.Geometry.isSameDir(); }
        isSameDirection() { return window.JXG.Math.Geometry.isSameDirection(); }
        meet() { return window.JXG.Math.Geometry.meet(); }
        meetBezierCurveRedBlueSegments() { return window.JXG.Math.Geometry.meetBezierCurveRedBlueSegments(); }
        meetBeziersegmentBeziersegment() { return window.JXG.Math.Geometry.meetBeziersegmentBeziersegment(); }
        meetCircleCircle() { return window.JXG.Math.Geometry.meetCircleCircle(); }
        meetCurveCurve() { return window.JXG.Math.Geometry.meetCurveCurve(); }
        meetCurveLine() { return window.JXG.Math.Geometry.meetCurveLine(); }
        meetCurveLineContinuous() { return window.JXG.Math.Geometry.meetCurveLineContinuous(); }
        meetCurveLineDiscrete() { return window.JXG.Math.Geometry.meetCurveLineDiscrete(); }
        meetCurveRedBlueSegments() { return window.JXG.Math.Geometry.meetCurveRedBlueSegments(); }
        meetLineBoard() { return window.JXG.Math.Geometry.meetLineBoard(); }
        meetLineCircle() { return window.JXG.Math.Geometry.meetLineCircle(); }
        meetLineLine() { return window.JXG.Math.Geometry.meetLineLine(); }
        meetPathPath() { return window.JXG.Math.Geometry.meetPathPath(); }
        meetPolygonLine() { return window.JXG.Math.Geometry.meetPolygonLine(); }
        meetSegmentSegment() { return window.JXG.Math.Geometry.meetSegmentSegment(); }
        perpendicular() { return window.JXG.Math.Geometry.perpendicular(); }
        pnpoly() { return window.JXG.Math.Geometry.pnpoly(); }
        projectCoordsToBeziersegment() { return window.JXG.Math.Geometry.projectCoordsToBeziersegment(); }
        projectCoordsToCurve() { return window.JXG.Math.Geometry.projectCoordsToCurve(); }
        projectCoordsToPolygon() { return window.JXG.Math.Geometry.projectCoordsToPolygon(); }
        projectCoordsToSegment() { return window.JXG.Math.Geometry.projectCoordsToSegment(); }
        projectPointToBoard() { return window.JXG.Math.Geometry.projectPointToBoard(); }
        projectPointToCircle() { return window.JXG.Math.Geometry.projectPointToCircle(); }
        projectPointToCurve() { return window.JXG.Math.Geometry.projectPointToCurve(); }
        projectPointToLine() { return window.JXG.Math.Geometry.projectPointToLine(); }
        projectPointToPoint() { return window.JXG.Math.Geometry.projectPointToPoint(); }
        projectPointToTurtle() { return window.JXG.Math.Geometry.projectPointToTurtle(); }
        rad() { return window.JXG.Math.Geometry.rad(); }
        reflection() { return window.JXG.Math.Geometry.reflection(); }
        reuleauxPolygon() { return window.JXG.Math.Geometry.reuleauxPolygon(); }
        rotation() { return window.JXG.Math.Geometry.rotation(); }
        signedPolygon() { return window.JXG.Math.Geometry.signedPolygon(); }
        signedTriangle() { return window.JXG.Math.Geometry.signedTriangle(); }
        sortVertices() { return window.JXG.Math.Geometry.sortVertices(); }
        trueAngle() { return window.JXG.Math.Geometry.trueAngle(); }
        windingNumber() { return window.JXG.Math.Geometry.windingNumber(); }
    }
    class NumericsMath {
        bezier(points) { return window.JXG.Math.Numerics.bezier(points); }
        bspline(points, order) { return window.JXG.Math.Numerics.bspline(points, order); }
        CardinalSpline(points, tau) { return window.JXG.Math.Numerics.CardinalSpline(points, tau); }
    }
    class StatisticsMath {
        /** Generate value of a standard normal random variable with given mean and standard deviation.
                                          See {@link https://en.wikipedia.org/wiki/Normal_distribution} */
        randomNormal(mean, stdDev) { return window.JXG.Math.Statistics.randomNormal(mean, stdDev); }
        /** Generate value of a uniform distributed random variable in the interval [a, b]. */
        randomUniform(a, b) { return window.JXG.Math.Statistics.randomUniform(a, b); }
        /** Generate value of a random variable with exponential distribution.
                                           See {@link https://en.wikipedia.org/wiki/Exponential_distribution}.
                                           Algorithm: D.E. Knuth, TAOCP 2, p. 128. */
        randomExponential(lambda) { return window.JXG.Math.Statistics.randomExponential(lambda); }
        /** Generate value of a random variable with gamma distribution of order alpha.  Default scale is 1. Default threshold is 0.
                               See {@link https://en.wikipedia.org/wiki/Gamma_distribution}.
                               Algorithm: D.E. Knuth, TAOCP 2, p. 129. */
        randomGamma(shape, scale, threshold) { return window.JXG.Math.Statistics.randomGamma(shape, scale, threshold); }
        /** Generate value of a random variable with Pareto distribution with shape gamma and scale k.
                                          See {@link https://en.wikipedia.org/wiki/Pareto_distribution}. */
        randomPareto(shape, scale, threshold) { return window.JXG.Math.Statistics.randomPareto(shape, scale, threshold); }
        /** Generate value of a random variable with beta distribution with shape parameters alpha and beta.
                                           See {@link https://en.wikipedia.org/wiki/Beta_distribution}. */
        randomBeta(alpha, beta) { return window.JXG.Math.Statistics.randomBeta(alpha, beta); }
        /** Generate value of a random variable with chi-square distribution with k (>0) degrees of freedom.
                                           See {@link https://en.wikipedia.org/wiki/Chi-squared_distribution}. */
        randomChisquare(k) { return window.JXG.Math.Statistics.randomChisquare(k); }
        /** Generate value of a random variable with F-distribution with d1 and d2 degrees of freedom.
                                           See {@link https://en.wikipedia.org/wiki/F-distribution}. */
        randomF(d1, d2) { return window.JXG.Math.Statistics.randomF(d1, d2); }
        /** Generate value of a random variable with Students-t-distribution with v degrees of freedom.
                                           See {@link https://en.wikipedia.org/wiki/Student%27s_t-distribution}. */
        randomT(v) { return window.JXG.Math.Statistics.randomT(v); }
        /** Generate values for a random variable in binomial distribution with parameters n and p
                                           See {@link https://en.wikipedia.org/wiki/Binomial_distribution}. */
        randomBinomial(n, p) { return window.JXG.Math.Statistics.randomBinomial(n, p); }
        /** Generate values for a random variable in geometric distribution with propability <i>p</i>.
                                           See {@link https://en.wikipedia.org/wiki/Geometric_distribution}. */
        randomGeometric(p) { return window.JXG.Math.Statistics.randomGeometric(p); }
        /** Generate values for a random variable in Poisson distribution with mean <i>mu</i>..
                                           See {@link https://en.wikipedia.org/wiki/Poisson_distribution}. */
        randomPoisson(mu) { return window.JXG.Math.Statistics.randomPoisson(mu); }
        /** Generate values for a random variable in hypergeometric distribution.
                                           See {@link https://en.wikipedia.org/wiki/Hypergeometric_distribution}
                                           Samples are drawn from a hypergeometric distribution with specified parameters, <i>good</i> (ways to make a good selection),
                                           <i>bad</i> (ways to make a bad selection), and <i>samples</i> (number of items sampled, which is less than or equal to <i>good + bad</i>). */
        randomHypergeometric(good, bad, samples) { return window.JXG.Math.Statistics.randomHypergeometric(good, bad, samples); }
        /** Compute the histogram of a dataset.  Range can be false or [min(x), max(x)]. If density is true then normalize the counts by dividing by sum(counts). Returns [number[],number[]], the first array contains start value of bins, the second array countains the counts. */
        histogram(data, bins, range, density, cumulative) { return window.JXG.Math.Statistics.histogram(data, { bins: bins ?? 10, range: range ?? false, density: density ?? true, cumulative: cumulative ?? false }); }
        /** Determines the absolute value of every given value.  */
        abs(arr) { return window.JXG.Math.Statistics.abs(arr); }
        /** The P-th percentile ( 0 < P ≤ 100 ) of a list of N ordered values (sorted from least to greatest) is the smallest value in the list such that no more than P percent of the data is strictly less than the value and at least P percent of the data is less than or equal to that value. */
        percentile(data, ranges) { return window.JXG.Math.Statistics.percentile(data, ranges); }
    }
    /** Create a point. If any parent elements are functions or the attribute 'fixed' is true then point will be constrained.
               
   *```js
   TSX.point([3,2],{strokeColor:'blue',strokeWidth:5,strokeOpacity:.5})
   TSX.point([3,3]),{fixed:true, showInfobox:true}
   TSX.point([()=>p1.X()+2,()=>p1.Y()+2]) // 2 up 2 right from p1
   TSX.point([1,2,2])  // three axis definition - [z,x,y]
               
   *```
               
    also create points with Intersection, Midpoint, TransformPoint, Circumcenter, Glider, TransformPoint, and others. */
    function point(position, attributes = {}) {
        return _jsxBoard().create('point', position, defaultAttributes(attributes));
    }
    TSX.point = point;
    // implementation of signature,  hidden from user
    function line(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        if (typeof a == 'number' || typeof a == 'function')
            // reorder the a,b,c elements of the line
            return _jsxBoard().create('line', [c, a, b], defaultAttributes(d)); // as Line
        else //  two points
            return _jsxBoard().create('line', [a, b], defaultAttributes(c)); // as Line
    }
    TSX.line = line;
    /** create a chart */
    function chart(f, attributes = {}) {
        return TSX._jsxBoard().create('chart', [f,], defaultAttributes(attributes));
    }
    TSX.chart = chart;
    /** A circle can be constructed by providing a center and a point on the circle,
                            or a center and a radius (given as a number, function, line, or circle).
                            If the radius is a negative value, its absolute values is taken.
                   
   *```js
                   TSX.circle(P1,1])
                   TSX.circle([0,0],[1,0])
                   
   *```
                   
   Also see: Circumcircle is a circle described by three points.  An Arc is a segment of a circle. */
    function circle(centerPoint, remotePoint, attributes = {}) {
        let newObject; // special case for circle with immediate segment eg:  circle(point,[[1,2],[3,4]]  )
        if (Array.isArray(remotePoint) && Array.isArray(remotePoint[0]) && Array.isArray(remotePoint[1])) {
            return _jsxBoard().create("circle", [centerPoint, remotePoint[0], remotePoint[1]], defaultAttributes(attributes));
        }
        else {
            return _jsxBoard().create("circle", [centerPoint, remotePoint], defaultAttributes(attributes));
        }
    }
    TSX.circle = circle;
    /** In 3D space, a circle consists of all points on a given plane with a given distance from a given point.
                       The given point is called the center, and the given distance is called the radius.
                       A circle can be constructed by providing a center, a normal vector (either homogenous or cartesian),
                       and a radius (given as a number or function).
                       
   *```js
   let a = TSX.point3D([-3, 0, 0])
   let circle = TSX.circle3D(a, [1, 1, 1], 2, { strokeWidth: 5, strokeColor: 'blue' })
   ```
    */
    function circle3D(center, normal, radius, attributes = {}) {
        let tempNormal = (typeof normal === "function") ? normal() : normal;
        if (tempNormal.length === 3)
            tempNormal.unshift(0); // convert [a,b,c] to [0,a,b,c]
        return _jsxView3d().create("circle3d", [center, normal, radius], attributes);
    }
    TSX.circle3D = circle3D;
    // implementation of signature,  hidden from user
    function curve(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('curve', params, defaultAttributes(attrs));
    }
    TSX.curve = curve;
    /** A cubic bezier curve.  The input is 3k + 1 points; those at positions k mod 3 = 0 (eg: 0, 3, 6 are the data points, the two points between each data points are the control points.
                   
   *```js
       let points: Point[] = []
       points.push(point([-2, -1], { size: 4, color: 'blue', name: '0' }))
   
       points.push(point([-2, -2.5], { name: '1' }))
       points.push(point([-1, -2.5], { name: '2' }))
   
       points.push(TSX.point([2, -2], { size: 4, color: 'blue', name: '3' }))
   
       let curve = TSX.bezierCurve(points, { strokeColor: 'orange', strokeWidth: 5, fixed: false }); // Draggable curve
   
       // 'BezierCurve()' is just a shorthand for the following two lines:
       // let bz = TSX.NumericsMath.bezier(points)
       // let curve = TSX.curve(bz[0], bz[1])
                   
   *```
   
                    */
    function bezierCurve(points, attributes = {}) {
        return _jsxBoard().create('curve', window.JXG.Math.Numerics.bezier(points), defaultAttributes(attributes));
    }
    TSX.bezierCurve = bezierCurve;
    // implementation of signature,  hidden from user
    function curve3D(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxView3d().create('curve3d', params, defaultAttributes(attrs));
    }
    TSX.curve3D = curve3D;
    /** This element is used to provide a constructor for arbitrary content in an SVG foreignObject container.
   ```js
   TSX.foreignObject(
       `<video width="300" height="200" src="https://eucbeniki.sio.si/vega2/278/Video_metanje_oge_.mp4" type="html5video" controls>`,
       [0, -3], [9, 6],
       {layer: 8, fixed: true})
   ```
                 */
    function foreignObject(content, position, size = null, attributes = {}) {
        return TSX._jsxBoard().create('foreignObject', [content, position, size,], defaultAttributes(attributes));
    }
    TSX.foreignObject = foreignObject;
    /** Array of Points */
    function group(pointArray, attributes = {}) {
        return TSX._jsxBoard().create('group', [pointArray,].flat(), defaultAttributes(attributes));
    }
    TSX.group = group;
    /** Display an image.  The first element is the location URL of the image.
                   A collection of space icons is provided, press CTRL+I to show the list.
                   The second parameter sets the lower left point of the image.
                   The optional third parameter sets the size multiplier of the image, default is [1,1].
                   
   If you want to move the image, just tie the image to a point, maybe at the center of the image.
                    For more flexibility, see TSX.Rotate() and TSX.Translate()
                   
   *```js
               TSX.image('icons/earth.png', [0, 0],[2,2])
               let p1 = TSX.point([3, 2], { opacity: .1 })
               TSX.image('icons/moon-full-moon.png', [()=>p1.X(),()=>p1.Y()])
                   
   *``` */
    function image(url, lowerLeft, widthHeight = [1, 1], attributes = {}) {
        return TSX._jsxBoard().create('image', [url, lowerLeft, widthHeight,], defaultAttributes(attributes));
    }
    TSX.image = image;
    // implementation of signature,  hidden from user
    function implicitcurve(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('implicitcurve', params, defaultAttributes(attrs));
    }
    TSX.implicitcurve = implicitcurve;
    /** The circle that is the intersection of two elements (plane3d or sphere3d) in 3D. */
    function intersectionCircle3D(sphere1, sphere, attributes = {}) {
        return TSX._jsxView3d().create('intersectioncircle3d', [sphere1, sphere,], defaultAttributes(attributes));
    }
    TSX.intersectionCircle3D = intersectionCircle3D;
    /** The circle that is the intersection of two elements (plane3d or sphere3d) in 3D. */
    function intersectionLine3D(plane1, plane2, attributes = {}) {
        return TSX._jsxView3d().create('intersectionline3d', [plane1, plane2,], defaultAttributes(attributes));
    }
    TSX.intersectionLine3D = intersectionLine3D;
    // implementation of signature,  hidden from user
    function line3D(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxView3d().create('line3d', params, defaultAttributes(attrs));
    }
    TSX.line3D = line3D;
    /** A 3D plane is defined either by a point and two linearly independent vectors, or by three points. */
    function plane3D(point, direction1, direction2, range1, range2, attributes = {}) {
        return TSX._jsxView3d().create('plane3d', [point, direction1, direction2, range1, range2,], defaultAttributes(attributes));
    }
    TSX.plane3D = plane3D;
    // implementation of signature,  hidden from user
    function point3D(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxView3d().create('point3d', params, defaultAttributes(attrs));
    }
    TSX.point3D = point3D;
    /** Array of Points */
    function polygon(pointArray, attributes = {}) {
        return TSX._jsxBoard().create('polygon', [pointArray,].flat(), defaultAttributes(attributes));
    }
    TSX.polygon = polygon;
    /** A polygon is a sequence of points connected by lines, with the last point connecting back to the first one. The points are given by a list of Point3D objects or a list of coordinate arrays. Each two consecutive points of the list define a line. */
    function polygon3D(vertices, attributes = {}) {
        return TSX._jsxView3d().create('polygon3d', vertices, defaultAttributes(attributes));
    }
    TSX.polygon3D = polygon3D;
    /** Display a message
                                   
   *```js
   TSX.text([3,2],[3,3], {fontSize:20, strokeColor:'blue'})
   TSX.text([0, 4], () => 'BD ' + B.distance(D).toFixed(2))
   TSX.text([-4, 2], '\pm\sqrt{a^2 + b^2}', { useKatex: true })
                                   
   *``` */
    function text(position, label, attributes = {}) {
        position.push(label);
        return _jsxBoard().create('text', position, defaultAttributes(attributes));
    }
    TSX.text = text;
    // implementation of signature,  hidden from user
    function text3D(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxView3d().create('text3d', params, defaultAttributes(attrs));
    }
    TSX.text3D = text3D;
    /** Ticks are used as distance markers on a line or curve. They are mainly used for axis elements and slider elements.  */
    function ticks(line, attributes = {}) {
        return TSX._jsxBoard().create('ticks', [line,], defaultAttributes(attributes));
    }
    TSX.ticks = ticks;
    /** A circular sector is a subarea of the area enclosed by a circle. It is enclosed by two radii and an arc. */
    function sector(P1, P2, P3, attributes = {}) {
        return TSX._jsxBoard().create('sector', [P1, P2, P3,], defaultAttributes(attributes));
    }
    TSX.sector = sector;
    /** Vector field. Plot a vector field either given by two functions f1(x, y) and f2(x,y) or by a function f(x, y) returning an array of size 2. */
    function vectorfield(fxfy, horizontalMesh = [-6, 25, 6], verticalMesh = [-6, 25, 6], attributes = {}) {
        return TSX._jsxBoard().create('vectorfield', [fxfy, horizontalMesh, verticalMesh,], defaultAttributes(attributes));
    }
    TSX.vectorfield = vectorfield;
    // implementation of signature,  hidden from user
    function angle(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('angle', params, defaultAttributes(attrs));
    }
    TSX.angle = angle;
    /** Create a circular Arc defined by three points (because a circle can be defined by three points - see circumcircle).
                               
   *```js
                               let arc = TSX.arc([-8,5],[-4,5],[-9,9]])
                               
   *```
                               
    To create an arc with origin, startpoint, and angle, look at MajorArc/MinorArc. */
    function arc(origin, from, to, attributes = {}) {
        return TSX._jsxBoard().create('arc', [origin, from, to,], defaultAttributes(attributes));
    }
    TSX.arc = arc;
    /** Arrow defined by two points (like a Segment) with arrow at P2
                               
   *```js
                               
    let arrow = TSX.arrow([-8,5],[-4,5])
                               
   *```
                               
    */
    function arrow(p1, p2, attributes = {}) {
        return TSX._jsxBoard().create('arrow', [p1, p2,], defaultAttributes(attributes));
    }
    TSX.arrow = arrow;
    // implementation of signature,  hidden from user
    function parallel(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('parallel', params, defaultAttributes(attrs));
    }
    TSX.parallel = parallel;
    /** Create an Arrow parallel to a segment. The constructed arrow contains p3 and has the same slope as the line through p1 and p2. */
    function arrowparallel(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('arrowparallel', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.arrowparallel = arrowparallel;
    /** Create an Axis with two points (like a Line) */
    function axis(p1, p2, attributes = {}) {
        return TSX._jsxBoard().create('axis', [p1, p2,], defaultAttributes(attributes));
    }
    TSX.axis = axis;
    /** Bisect an Angle defined with three points A,B,C, and divides the angle ABC into two equal sized parts. */
    function bisector(A, B, C, attributes = {}) {
        return TSX._jsxBoard().create('bisector', [A, B, C,], defaultAttributes(attributes));
    }
    TSX.bisector = bisector;
    /** Bisect a Line defined with two points */
    function bisectorlines(l1, l2, attributes = {}) {
        return TSX._jsxBoard().create('bisectorlines', [l1, l2,], defaultAttributes(attributes));
    }
    TSX.bisectorlines = bisectorlines;
    /** create a button */
    function button(position, label, handler, attributes = {}) {
        position.push(label, handler);
        return _jsxBoard().create('button', position, defaultAttributes(attributes));
    }
    TSX.button = button;
    /** This element is used to provide a constructor for cardinal spline curves. Create a dynamic cardinal spline interpolated curve given by sample points p_1 to p_n. */
    function cardinalspline(data, funct, splineType, attributes = {}) {
        return TSX._jsxBoard().create('cardinalspline', [data, funct, splineType,], defaultAttributes(attributes));
    }
    TSX.cardinalspline = cardinalspline;
    /** This element is used to provide a constructor for special texts containing a form checkbox element. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML checkbox element can be accessed through the sub-object 'rendNodeCheck', e.g. to add event listeners. */
    function checkbox(position, label, attributes = {}) {
        position.push(label);
        return _jsxBoard().create('checkbox', position, defaultAttributes(attributes));
    }
    TSX.checkbox = checkbox;
    /** Creates a Point at the center of a circle defined by 3 points */
    function circumcenter(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('circumcenter', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.circumcenter = circumcenter;
    /** Draw a circle defined by 3 points */
    function circumcircle(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('circumcircle', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.circumcircle = circumcircle;
    /** Draw an arc from P1 to P3 (missing P3 to P1) defined by 3 points */
    function circumcircleArc(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('circumcircleArc', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.circumcircleArc = circumcircleArc;
    /** Creates a CircumCenter and draws a sector from P1 to P3 (missing P3 to P1) defined by 3 points */
    function circumcircleSector(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('circumcircleSector', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.circumcircleSector = circumcircleSector;
    /** A comb to display domains of inequalities. */
    function comb(p1, p2, attributes = {}) {
        return TSX._jsxBoard().create('comb', [p1, p2,], defaultAttributes(attributes));
    }
    TSX.comb = comb;
    // implementation of signature,  hidden from user
    function conic(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('conic', params, defaultAttributes(attrs));
    }
    TSX.conic = conic;
    /** Difference of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
    function curveDifference(curve1, curve2, attributes = {}) {
        return TSX._jsxBoard().create('curveDifference', [curve1, curve2,], defaultAttributes(attributes));
    }
    TSX.curveDifference = curveDifference;
    /** Intersection of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
    function curveIntersection(curve1, curve2, attributes = {}) {
        return TSX._jsxBoard().create('curveIntersection', [curve1, curve2,], defaultAttributes(attributes));
    }
    TSX.curveIntersection = curveIntersection;
    /** Union of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
    function curveUnion(curve1, curve2, attributes = {}) {
        return TSX._jsxBoard().create('curveUnion', [curve1, curve2,], defaultAttributes(attributes));
    }
    TSX.curveUnion = curveUnion;
    /** This element is used to provide a constructor for the graph showing the (numerical) derivative of a given curve. */
    function derivative(curve, attributes = {}) {
        return TSX._jsxBoard().create('derivative', [curve,], defaultAttributes(attributes));
    }
    TSX.derivative = derivative;
    // implementation of signature,  hidden from user
    function ellipse(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('ellipse', params, defaultAttributes(attrs));
    }
    TSX.ellipse = ellipse;
    // implementation of signature,  hidden from user
    function parametricSurface3D(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxView3d().create('parametricsurface3d', params, defaultAttributes(attrs));
    }
    TSX.parametricSurface3D = parametricSurface3D;
    /** Functiongraph visualizes a map x → f(x).  It is a wrapper for element Curve. The graph is drawn for x in the interval [a,b] default -10 to 10.
   ```js
   let f = TSX.functiongraph((x: number) => 3 * Math.pow(x, 2))
   ``` */
    function functiongraph(funct, leftBorder, rightBorder, attributes = {}) {
        return TSX._jsxBoard().create('functiongraph', [funct, leftBorder, rightBorder,], defaultAttributes(attributes));
    }
    TSX.functiongraph = functiongraph;
    /** A 3D functiongraph visualizes a map (x, y) → f(x, y).  */
    function functiongraph3D(xyFunction, xRange, yRange, attributes = {}) {
        return TSX._jsxView3d().create('functiongraph3d', [xyFunction, xRange, yRange,], defaultAttributes(attributes));
    }
    TSX.functiongraph3D = functiongraph3D;
    // implementation of signature,  hidden from user
    function glider(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        params = b ? [b[0] ?? 0, b[1] ?? 0, a] : [0, 0, a];
        return _jsxBoard().create('glider', params, defaultAttributes(attrs));
    }
    TSX.glider = glider;
    /** Glider3D is an alias for JSXGraph's Point3D(). */
    function glider3D(element, initial = [0, 0, 0], attributes = {}) {
        return _jsxView3d().create("point3d", [initial, element], attributes);
    }
    TSX.glider3D = glider3D;
    // implementation of signature,  hidden from user
    function grid(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('grid', params, defaultAttributes(attrs));
    }
    TSX.grid = grid;
    /** Hatches can be used to mark congruent lines or curves. */
    function hatch(line, numberHatches, attributes = {}) {
        return TSX._jsxBoard().create('hatch', [line, numberHatches,], defaultAttributes(attributes));
    }
    TSX.hatch = hatch;
    /** This element is used to provide a constructor for an hyperbola. An hyperbola is given by two points (the foci) and a third point on the hyperbola or the length of the major axis. */
    function hyperbola(point1, point2, point3, start = -3.14, end = 3.14, attributes = {}) {
        return TSX._jsxBoard().create('hyperbola', [point1, point2, point3, start, end,], defaultAttributes(attributes));
    }
    TSX.hyperbola = hyperbola;
    /** Constructs the incenter of the triangle described by the three given points. https://mathworld.wolfram.com/Incenter.html */
    function incenter(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('incenter', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.incenter = incenter;
    /** An incircle is given by three points. */
    function incircle(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('incircle', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.incircle = incircle;
    /** Creates an area indicating the solution of a linear inequality or an inequality of a function graph, i.e. an inequality of type y */
    function inequality(boundaryLine, attributes = {}) {
        return TSX._jsxBoard().create('inequality', [boundaryLine,], defaultAttributes(attributes));
    }
    TSX.inequality = inequality;
    /** This element is used to provide a constructor for special texts containing a HTML form input element. If the width of element is set with the attribute ”cssStyle”, the width of the label must be added. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML input field can be accessed through the sub-object 'rendNodeInput', e.g. to add event listeners. */
    function input(position, label, initial = "", attributes = {}) {
        position.push(label, initial);
        return _jsxBoard().create('input', position, defaultAttributes(attributes));
    }
    TSX.input = input;
    /** This element is used to visualize the integral of a given curve over a given interval. */
    function integral(range, curve, attributes = {}) {
        return TSX._jsxBoard().create('integral', [range, curve,], defaultAttributes(attributes));
    }
    TSX.integral = integral;
    // implementation of signature,  hidden from user
    function intersection(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return _jsxBoard().create('intersection', params, defaultAttributes(attrs));
    }
    TSX.intersection = intersection;
    /** Creates a Legend for a Chart Element
                                   
   *```js
   * let labels = ['a','b','c']
   * let colors = ['red','green','blue']
   * let legend = TSX.legend([2,2],labels,colors)
   *```
                                   
    */
    function legend(lowerLeft, labels, colors, attributes = {}) {
        attributes['labels'] = labels;
        attributes['colors'] = colors;
        return _jsxBoard().create('legend', lowerLeft, defaultAttributes(attributes));
    }
    TSX.legend = legend;
    /** This element is used to visualize the locus of a given dependent point. */
    function locus(point, attributes = {}) {
        return TSX._jsxBoard().create('locus', [point,], defaultAttributes(attributes));
    }
    TSX.locus = locus;
    /** A major arc is a segment of the circumference of a circle having measure greater than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc. */
    function majorArc(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('majorArc', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.majorArc = majorArc;
    /** A major sector is a sector of a circle having measure greater than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
    function majorSector(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('majorSector', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.majorSector = majorSector;
    /** Display measurements of geometric properties and the arithmetic operations of measurements. Under the hood this is a text element which has a method Value. The text to be displayed is the result of the evaluation of a prefix expression, see JXG.PrefixParser.
   ```js
    let p = TSX.point([4, 9]);
    let c = TSX.circle([4, 7], p);
    TSX.measurement([4, 4], 'Area', c, { visible: true, prefix: 'area: ', baseUnit: 'cm' });
    TSX.measurement([4, 3], 'Radius', c, { prefix: 'radius: ', baseUnit: 'cm' });
   ```
    */
    function measurement(locn, measure, element, attributes = {}) {
        let x = 0, y = 0;
        if (Array.isArray(locn)) {
            x = locn[0];
            y = locn[1];
        }
        else if (typeof locn == 'object') {
            x = locn.X();
            y = locn.Y();
        }
        ;
        return _jsxBoard().create('measurement', [x, y, [measure, element]], attributes);
    }
    TSX.measurement = measurement;
    // implementation of signature,  hidden from user
    function midpoint(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('midpoint', params, defaultAttributes(attrs));
    }
    TSX.midpoint = midpoint;
    /** A minor arc is a segment of the circumference of a circle having measure less than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc. */
    function minorArc(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('minorArc', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.minorArc = minorArc;
    /** A minor sector is a sector of a circle having measure less than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
    function minorSector(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('minorSector', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.minorSector = minorSector;
    /**  */
    function mirrorelement(element, acrossPoint, attributes = {}) {
        return TSX._jsxBoard().create('mirrorelement', [element, acrossPoint,], defaultAttributes(attributes));
    }
    TSX.mirrorelement = mirrorelement;
    /** A mirror point will be constructed. */
    function mirrorpoint(p1, p2, attributes = {}) {
        return TSX._jsxBoard().create('mirrorpoint', [p1, p2,], defaultAttributes(attributes));
    }
    TSX.mirrorpoint = mirrorpoint;
    /** A non-reflex angle is the acute or obtuse instance of an angle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
    function nonReflexAngle(point1, point2, point3, attributes = {}) {
        return TSX._jsxBoard().create('nonReflexAngle', [point1, point2, point3,], defaultAttributes(attributes));
    }
    TSX.nonReflexAngle = nonReflexAngle;
    // implementation of signature,  hidden from user
    function normal(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('normal', params, defaultAttributes(attrs));
    }
    TSX.normal = normal;
    /** An `orthogonalprojection` is a locked point determined by projecting a point orthogonally onto a line.
   ```js
   let s1 = TSX.segment(p1, p2)
   let p3 = TSX.point([0, -1])
   TSX.orthogonalprojection(p3, s1)
   ``` */
    function orthogonalprojection(point, line, attributes = {}) {
        return TSX._jsxBoard().create('orthogonalprojection', [point, line,], defaultAttributes(attributes));
    }
    TSX.orthogonalprojection = orthogonalprojection;
    /** This element is used to provide a constructor for the ”other” intersection point. */
    function otherIntersection(element1, element2, firstIntersection, attributes = {}) {
        return _jsxBoard().create('otherintersection', [element1, element2, firstIntersection], attributes);
    }
    TSX.otherIntersection = otherIntersection;
    /** This element is used to provide a constructor for a parabola. A parabola is given by one point (the focus) and a line (the directrix). */
    function parabola(focalPoint, line, attributes = {}) {
        return TSX._jsxBoard().create('parabola', [focalPoint, line,], defaultAttributes(attributes));
    }
    TSX.parabola = parabola;
    // implementation of signature,  hidden from user
    function parallelpoint(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('parallelpoint', params, defaultAttributes(attrs));
    }
    TSX.parallelpoint = parallelpoint;
    // implementation of signature,  hidden from user
    function segment(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('segment', params, defaultAttributes(attrs));
    }
    TSX.segment = segment;
    /**  */
    function parallelogram(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('parallelogram', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.parallelogram = parallelogram;
    /** Create a line orthogonal to a given line and containing a given point. If you want a Perpendicular to a Curve, look at Normal(). */
    function perpendicular(line, point, attributes = {}) {
        return TSX._jsxBoard().create('perpendicular', [line, point,], defaultAttributes(attributes));
    }
    TSX.perpendicular = perpendicular;
    /** Create a point on a line where a perpendicular to a given point would intersect that line. */
    function perpendicularPoint(line, point, attributes = {}) {
        return TSX._jsxBoard().create('perpendicularPoint', [line, point,], defaultAttributes(attributes));
    }
    TSX.perpendicularPoint = perpendicularPoint;
    /** Create a segment orthogonal to a given line and containing a given point.  If you want a Perpendicular to a Curve, look at Normal(). */
    function perpendicularSegment(line, point, attributes = {}) {
        return TSX._jsxBoard().create('perpendicularSegment', [line, point,], defaultAttributes(attributes));
    }
    TSX.perpendicularSegment = perpendicularSegment;
    /** This element is used to provide a constructor for the polar line of a point with respect to a conic or a circle. */
    function polarLine(conic, point, attributes = {}) {
        return TSX._jsxBoard().create('polarLine', [conic, point,], defaultAttributes(attributes));
    }
    TSX.polarLine = polarLine;
    /** This element is used to provide a constructor for the pole point of a line with respect to a conic or a circle. */
    function polePoint(conic, line, attributes = {}) {
        return TSX._jsxBoard().create('polePoint', [conic, line,], defaultAttributes(attributes));
    }
    TSX.polePoint = polePoint;
    /** Array of Points */
    function polygonalChain(pointArray, attributes = {}) {
        return TSX._jsxBoard().create('polygonalChain', [pointArray,].flat(), defaultAttributes(attributes));
    }
    TSX.polygonalChain = polygonalChain;
    /** A polyhedron in a 3D view consists of faces. Faces can be 0-, 1- or 2-dimensional.
   ```js
   let rho = 1.6180339887;
   let vertexList = [  // list of vertex points
       [0, -1, -rho], [0, +1, -rho], [0, -1, rho], [0, +1, rho],[1, rho, 0], [-1, rho, 0],
       [1, -rho, 0], [-1, -rho, 0],[-rho, 0, 1], [-rho, 0, -1], [rho, 0, 1], [rho, 0, -1]
   ];
   
   let faceArray = [  // each triangular face connects three vertex points
       [4, 1, 11], [11, 1, 0], [6, 11, 0], [0, 1, 9],[11, 10, 4], [9, 1, 5],
       [8, 9, 5], [5, 3, 8],[6, 10, 11], [2, 3, 10], [2, 10, 6], [8, 3, 2],
       [3, 4, 10], [7, 8, 2], [9, 8, 7], [0, 9, 7],[4, 3, 5], [5, 1, 4], [0, 7, 6], [7, 2, 6]];
   
       let ico = TSX.polyhedron3D(vertexList, faceArray, {
       fillColorArray: [],
       fillOpacity: 1,
       strokeWidth: 0.1,
       layer: 12,
       shader: {   // shader modifies face colors depending on angle (simulates lighting)
           enabled: true,
           type: 'angle',
           hue: 0,
           saturation: 90,
           minlightness: 60,
           maxLightness: 80
       }
   });
   ``` */
    function polyhedron3D(vertexList, faceArray, attributes = {}) {
        return TSX._jsxView3d().create('polyhedron3d', [vertexList, faceArray,], defaultAttributes(attributes));
    }
    TSX.polyhedron3D = polyhedron3D;
    /** This element is used to provide a constructor for the radical axis with respect to two circles with distinct centers. The angular bisector of the polar lines of the circle centers with respect to the other circle is always the radical axis. The radical axis passes through the intersection points when the circles intersect. When a circle about the midpoint of circle centers, passing through the circle centers, intersects the circles, the polar lines pass through those intersection points. */
    function radicalAxis(circle1, circle2, attributes = {}) {
        return TSX._jsxBoard().create('radicalAxis', [circle1, circle2,], defaultAttributes(attributes));
    }
    TSX.radicalAxis = radicalAxis;
    /** A reflected element (point, polygon, line or curve) from an object of the same type and a line of reflection. */
    function reflection(object, reflectLine, attributes = {}) {
        return TSX._jsxBoard().create('reflection', [object, reflectLine,], defaultAttributes(attributes));
    }
    TSX.reflection = reflection;
    /** A reflex angle is the neither acute nor obtuse instance of an angle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
    function reflexAngle(point1, point2, point3, attributes = {}) {
        return TSX._jsxBoard().create('reflexAngle', [point1, point2, point3,], defaultAttributes(attributes));
    }
    TSX.reflexAngle = reflexAngle;
    /** Constructs a regular polygon. It needs two points which define the base line and the number of vertices. */
    function regularPolygon(P1, P2, nVertices, attributes = {}) {
        return TSX._jsxBoard().create('regularPolygon', [P1, P2, nVertices,], defaultAttributes(attributes));
    }
    TSX.regularPolygon = regularPolygon;
    /** Visualize the Riemann sum which is an approximation of an integral by a finite sum. It is realized as a special curve. The returned element has the method Value() which returns the sum of the areas of the bars.
   
                           In case of type 'simpson' and 'trapezoidal', the horizontal line approximating the function value is replaced by a parabola or a secant. IN case of 'simpson', the parabola is approximated visually by a polygonal chain of fixed step width. */
    function riemannsum(funct, nBars, type = 'simpson', leftBorder, rightBorder, attributes = {}) {
        return TSX._jsxBoard().create('riemannsum', [funct, nBars, type, leftBorder, rightBorder,], defaultAttributes(attributes));
    }
    TSX.riemannsum = riemannsum;
    /** A semicircle is a special arc defined by two points. The arc hits both points. */
    function semicircle(P1, P2, attributes = {}) {
        return TSX._jsxBoard().create('semicircle', [P1, P2,], defaultAttributes(attributes));
    }
    TSX.semicircle = semicircle;
    /** An input widget for choosing values from a given range of numbers.  Parameters are startpoint, endpoint,
                   and an array with [minimum, initialValue, maximum].  Query the value with slider.Value().  Set the slider either by
                   dragging the control or clicking on the line (you can disable clicking with {moveOnUp:false}
           
   *```js
            let s = TSX.slider([1, 2], [3, 2], [1, 5, 10])           //  query with s.Value()
            let s = TSX.slider([1, 2], [3, 2], [1, 5, 10],{snapWidth:1})     //  only values 1,2,3...
            let s = TSX.slider([1, 2], [3, 2], [1, 5, 10],{withTicks:false}) //  hide the ticks
            let s = TSX.slider[-3, 1], [1, 1], [-10, 1, 10], {
               highline: { strokeColor: 'red'},        // to left of handle
               baseline: { strokeColor: 'blue'},       // to right of handle
               fillColor: 'red',                       // handle color
               label: {fontSize: 16, strokeColor: 'orange'},
               suffixLabel: ' x=',         // really a prefix
               postLabel: ' meters'        // this is a suffix
           
   *``` */
    function slider(StartPoint, EndPoint, minimum_initial_maximum, attributes = {}) {
        return TSX._jsxBoard().create('slider', [StartPoint, EndPoint, minimum_initial_maximum,], defaultAttributes(attributes));
    }
    TSX.slider = slider;
    /** Slope field. Plot a slope field given by a function f(x, y) returning a number. */
    function slopefield(func, xData, yData, attributes = {}) {
        return TSX._jsxBoard().create('slopefield', [func, xData, yData,], defaultAttributes(attributes));
    }
    TSX.slopefield = slopefield;
    // implementation of signature,  hidden from user
    function slopetriangle(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('slopetriangle', params, defaultAttributes(attrs));
    }
    TSX.slopetriangle = slopetriangle;
    // implementation of signature,  hidden from user
    function smartlabel(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('smartlabel', params, defaultAttributes(attrs));
    }
    TSX.smartlabel = smartlabel;
    /**  sphere consists of all points with a given distance from a given point. The given point is called the center, and the given distance is called the radius. */
    function sphere3D(center, radius, attributes = {}) {
        return TSX._jsxView3d().create('sphere3d', [center, radius,], defaultAttributes(attributes));
    }
    TSX.sphere3D = sphere3D;
    /** This element is used to provide a constructor for (natural) cubic spline curves. Create a dynamic spline interpolated curve given by sample points p_1 to p_n. */
    function spline(points, attributes = {}) {
        return _jsxBoard().create('spline', points, defaultAttributes(attributes));
    }
    TSX.spline = spline;
    /** A step function is a function graph that is piecewise constant. In case the data points should be updated after creation time, they can be accessed by curve.xterm and curve.yterm.
   ```js
   let  curve = TSX.stepfunction([0,1,2,3,4,5], [1,3,0,2,2,1]);
   ```
    */
    function stepfunction(X, Y, attributes = {}) {
        return TSX._jsxBoard().create('stepfunction', [X, Y,], defaultAttributes(attributes));
    }
    TSX.stepfunction = stepfunction;
    // implementation of signature,  hidden from user
    function tangent(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('tangent', params, defaultAttributes(attrs));
    }
    TSX.tangent = tangent;
    /** Construct the tangent line through a point to a conic or a circle. There will be either two, one or no such tangent, depending if the point is outside of the conic, on the conic, or inside of the conic. Similar to the intersection of a line with a circle, the specific tangent can be chosen with a third (optional) parameter number. */
    function tangentTo(conic, point, N = 0, attributes = {}) {
        return TSX._jsxBoard().create('tangentTo', [conic, point, N,], defaultAttributes(attributes));
    }
    TSX.tangentTo = tangentTo;
    /** A tape measure can be used to measure distances between points. */
    function tapemeasure(P1, P2, attributes = {}) {
        return TSX._jsxBoard().create('tapemeasure', [P1, P2,], defaultAttributes(attributes));
    }
    TSX.tapemeasure = tapemeasure;
    /** This element is used to provide a constructor for trace curve (simple locus curve).  Given a glider (or slider) and a point controlled by the glider, this element draws the curve that the point will follow when the glider is manipulated.  Use the {trace:true} attribute on the point to mark breadcrumbs along this curve. */
    function tracecurve(glider, point, attributes = {}) {
        return TSX._jsxBoard().create('tracecurve', [glider, point,], defaultAttributes(attributes));
    }
    TSX.tracecurve = tracecurve;
    /** Create a new point from an existing point and a concatenation of transforms. This is a powerful way of creating complex constructions that can be rotated, scaled, and translated.  An alternative to using Groups.
   ~~~js
       // define and initialize the translation values
       let tX = TSX.slider([-9, 9.0], [3, 9.0], [-10, 0, 10], { name: 'tX' })
       let tY = TSX.slider([-9, 8.5], [3, 8.5], [-10, 0, 10], { name: 'tY' })
       let tRotate = TSX.slider([-9, 8.0], [3, 8.0], [-Math.PI * 2, 0, Math.PI * 2], { name: 'tRotate' })
       let tScale = TSX.slider([-9, 7.5], [3, 7.5], [0, 1, 5], { name: 'tScale' })
       // set up the model for the complex shape (use opacity:0)
       let a = TSX.point([1, 5])
       let b = TSX.point([2, 5])
       // set up tranforms for rotation, scaling, and translation
       let trans = TSX.translate(()=>tX.Value(), ()=>tY.Value())
       let rot = TSX.rotate(() => tRotate.Value(), a)  // rotation around c
       let scale = TSX.scale(()=>tScale.Value(),()=>tScale.Value())  // scaling is relative to [0,0]
       // implement shape based on model and applying transforms
       let ma = TSX.transformPoint(a,[rot,scale,trans],{color:'blue'})
       let mb = TSX.transformPoint(b,[rot,scale,trans],{color:'blue'})
       TSX.segment(ma,mb)
   ~~~             */
    function transformPoint(point, transform, attributes = {}) {
        return _jsxBoard().create('point', [point, transform], defaultAttributes(attributes));
    }
    TSX.transformPoint = transformPoint;
    /** Create a Transform object with Translate properties. */
    function translate(dx, dy, attributes = {}) {
        return _jsxBoard().create('transform', [dx, dy], { type: 'translate' });
    }
    TSX.translate = translate;
    /** Create a Transform object with Rotate properties. */
    function rotate(angle, around, attributes = {}) {
        return _jsxBoard().create('Transform', [angle, around], { type: 'rotate' });
    }
    TSX.rotate = rotate;
    /** Create a Transform object with Scale properties.  Scaling is relative to [0,0]. */
    function scale(xMultiplier, yMultiplier, attributes = {}) {
        return _jsxBoard().create('transform', [xMultiplier, yMultiplier], { type: 'scale' });
    }
    TSX.scale = scale;
    /** Create a Transform3D object with Translate properties. */
    function translate3D(dx, dy, dz, attributes = {}) {
        return _jsxView3d().create('transform3d', [dx, dy, dz], { type: 'translate' });
    }
    TSX.translate3D = translate3D;
    /** Create a Transform3D object with Rotate properties around the normal vector N. */
    function rotate3D(angle, n, attributes = {}) {
        return _jsxView3d().create('transform3d', [angle, n], { type: 'rotate' });
    }
    TSX.rotate3D = rotate3D;
    /** Create a Transform3D object with Rotate properties around the X axis. */
    function rotateX3D(angle, attributes = {}) {
        return _jsxView3d().create('transform3d', [angle], { type: 'rotateX' });
    }
    TSX.rotateX3D = rotateX3D;
    /** Create a Transform3D object with Rotate properties around the Y axis. */
    function rotateY3D(angle, attributes = {}) {
        return _jsxView3d().create('transform3d', [angle], { type: 'rotateY' });
    }
    TSX.rotateY3D = rotateY3D;
    /** Create a Transform3D object with Rotate properties around the Z axis. */
    function rotateZ3D(angle, attributes = {}) {
        return _jsxView3d().create('transform3d', [angle], { type: 'rotateZ' });
    }
    TSX.rotateZ3D = rotateZ3D;
    /** Create a Transform object with Scale properties.  Scaling is relative to [0,0,0]. */
    function scale3D(xMultiplier, yMultiplier, zMultiplier, attributes = {}) {
        return _jsxView3d().create('transform3d', [xMultiplier, yMultiplier, zMultiplier], { type: 'scale' });
    }
    TSX.scale3D = scale3D;
    class GeometryElement {
        /**  */
        get x() {
            return jBoard.x;
        }
        /**  */
        get y() {
            return jBoard.y;
        }
        /**  */
        get elType() {
            return jBoard.elType;
        }
        /**  */
        get name() {
            return jBoard.name;
        }
        /**  */
        get isDraggable() {
            return jBoard.isDraggable;
        }
        set isDraggable(param) {
            jBoard.isDraggable = param;
        }
        /** Removes all ticks from a line or curve. */
        removeAllTicks() {
            return jBoard.removeAllTicks();
        }
        /** Add an element as a child to the current element. */
        addChild() {
            return jBoard.addChild();
        }
        /** Adds ids of elements to the array this.parents. */
        addParents(parents) {
            return jBoard.addParents(parents);
        }
        /** Rotate texts or images by a given degree. */
        addRotation() {
            return jBoard.addRotation();
        }
        /** Adds ticks to this line or curve. */
        addTicks() {
            return jBoard.addTicks();
        }
        /** Animates properties for that object like stroke or fill color, opacity and maybe even more later. */
        animate() {
            return jBoard.animate();
        }
        /** Dimensions of the smallest rectangle enclosing the element. */
        bounds() {
            return jBoard.bounds();
        }
        /** Removes all objects generated by the trace function. */
        clearTrace() {
            return jBoard.clearTrace();
        }
        /** Copy the element to background. */
        cloneToBackground() {
            return jBoard.cloneToBackground();
        }
        /** Creates a label element for this geometry element. */
        createLabel() {
            return jBoard.createLabel();
        }
        /** Format a number according to the locale set in the attribute ”intl”. */
        formatNumberLocale() {
            return jBoard.formatNumberLocale();
        }
        /** Array of strings containing the polynomials defining the element. */
        generatePolynomial() {
            return jBoard.generatePolynomial();
        }
        /** Get the value of the property key. */
        getAttribute() {
            return jBoard.getAttribute();
        }
        /** Retrieve a copy of the current visProp. */
        getAttributes() {
            return jBoard.getAttributes();
        }
        /** Returns the elements name. */
        getName() {
            return jBoard.getName();
        }
        /** List of the element ids resp. */
        getParents() {
            return jBoard.getParents();
        }
        /** Deprecated alias for JXG.GeometryElement#getAttribute. */
        getProperty() {
            return jBoard.getProperty();
        }
        /** The type of the element as used in JXG.Board#create. */
        getType() {
            return jBoard.getType();
        }
        /** Move an element to its nearest grid point. */
        handleSnapToGrid() {
            return jBoard.handleSnapToGrid();
        }
        /** Hide the element. */
        hide() {
            return jBoard.hide();
        }
        /** Hide the element. */
        hideElement() {
            return jBoard.hideElement();
        }
        /**  */
        labelColor() {
            return jBoard.labelColor();
        }
        /** Uses the ”normal” properties of the element. */
        noHighlight() {
            return jBoard.noHighlight();
        }
        /** Removes the element from the construction. */
        remove() {
            return jBoard.remove();
        }
        /** Remove an element as a child from the current element. */
        removeChild() {
            return jBoard.removeChild();
        }
        /** Alias of JXG.EventEmitter.off. */
        removeEvent() {
            return jBoard.removeEvent();
        }
        /** Removes ticks identified by parameter named tick from this line or curve. */
        removeTicks() {
            return jBoard.removeTicks();
        }
        /** Determines whether the element has arrows at start or end of the arc. */
        setArrow() {
            return jBoard.setArrow();
        }
        /** Sets an arbitrary number of attributes. */
        setAttribute(attrs) {
            return jBoard.setAttribute(attrs);
        }
        /** Sets a label and its text If label doesn't exist, it creates one */
        setLabel(txt) {
            return jBoard.setLabel(txt);
        }
        /** Updates the element's label text, strips all html. */
        setLabelText() {
            return jBoard.setLabelText();
        }
        /** Updates the element's label text and the element's attribute ”name”, strips all html. */
        setName() {
            return jBoard.setName();
        }
        /** Sets ids of elements to the array this.parents. */
        setParents() {
            return jBoard.setParents();
        }
        /** Moves an element by the difference of two coordinates. */
        setPositionDirectly(address) {
            return jBoard.setPositionDirectly(COORDS_BY_USER, address);
        }
        /** Deprecated alias for JXG.GeometryElement#setAttribute. */
        setProperty() {
            return jBoard.setProperty();
        }
        /** Make the element visible. */
        show() {
            return jBoard.show();
        }
        /** Make the element visible. */
        showElement() {
            return jBoard.showElement();
        }
        /** Snaps the element to points. */
        snapToPoints() {
            return jBoard.snapToPoints();
        }
        /** Checks if locale is enabled in the attribute. */
        useLocale() {
            return jBoard.useLocale();
        }
        /**  */
        on(event, handler) {
            return jBoard.on(event, handler);
        }
    }
    TSX.GeometryElement = GeometryElement;
    class GeometryElement3D extends GeometryElement {
        /**  */
        get element2D() {
            return jBoard.element2D;
        }
        /**  */
        get is3D() {
            return jBoard.is3D;
        }
        /**  */
        get view() {
            return jBoard.view;
        }
        /**  */
        get strokeColor() {
            return jBoard.strokeColor;
        }
        /**  */
        get strokeWidth() {
            return jBoard.strokeWidth;
        }
        /**  */
        get size() {
            return jBoard.size;
        }
        /**  */
        get fillColor() {
            return jBoard.fillColor;
        }
        /**  */
        get visible() {
            return jBoard.visible;
        }
        /**  */
        setAttribute(attrs) {
            return jBoard.setAttribute(attrs);
        }
    }
    TSX.GeometryElement3D = GeometryElement3D;
    class Board extends GeometryElement {
    }
    TSX.Board = Board;
    class Point extends GeometryElement {
        /**  */
        coords() {
            return jBoard.coords();
        }
        /**  */
        startAnimation(direction, stepCount, delayMSec) {
            return jBoard.startAnimation(direction, stepCount, delayMSec);
        }
        /**  */
        stopAnimation() {
            return jBoard.stopAnimation();
        }
        /** Calculates Euclidean distance for two Points, eg:  p1.Dist(p2) */
        Dist(toPoint) {
            return jBoard.Dist(toPoint);
        }
        /** Set the face of a point element. */
        face(style) {
            return jBoard.face(style);
        }
        /** Updates the position of the point. */
        update() {
            return jBoard.update();
        }
        /**  */
        X() {
            return jBoard.X();
        }
        /**  */
        Y() {
            return jBoard.Y();
        }
        /**  */
        Z() {
            return jBoard.Z();
        }
        /** Moves an element towards coordinates, optionally tweening over time.  Time is in ms.  WATCH OUT, there
                               is no AWAIT for the tween to finish, a second moveTo() starts immediately. Thats GOOD if you
                               want to move two different points at the same time, BAD if you want to move the same point repeatedly.  EG:
                               
       ```js
       
       P.moveTo([A.X(), A.Y()], 5000)
       
       ``` */
        moveTo(p, time = 0, callback = () => { }, effect = "==") {
            return jBoard.moveTo(p, time, { callback: callback, effect: effect });
        }
        /** Moves an element towards coordinates, optionally tweening over time.  Time is in ms.  WATCH OUT, there
                               is no AWAIT for the tween to finish, a second moveTo() starts immediately. Thats GOOD if you
                               want to move two different points at the same time, BAD if you want to move the same point repeatedly.  EG:
                               
       ```js
       
       P.moveTo([A.X(), A.Y()], 5000)
       
       ``` */
        visit(p, time = 0, callback = () => { }, effect = "==", repeat = 1) {
            return jBoard.visit(p, time, { callback: callback, effect: effect, repeat: repeat });
        }
        /** Point location in vector form [n,n] */
        XY() {
            return [this.X(), this.Y()];
        }
    }
    TSX.Point = Point;
    class Line extends GeometryElement {
        /**  */
        get defaultTicks() {
            return jBoard.defaultTicks;
        }
        /**  */
        get parentPolygon() {
            return jBoard.parentPolygon;
        }
        /** Attributes for first defining point of the line. */
        get point1() {
            return jBoard.point1;
        }
        /** Attributes for second defining point of the line. */
        get point2() {
            return jBoard.point2;
        }
        /** Attributes for ticks of the line. */
        get ticks() {
            return jBoard.ticks;
        }
        /** Determines the angle between the positive x axis and the line. */
        getAngle() {
            return jBoard.getAngle();
        }
        /** Calculates the y intersect of the line. */
        getRise() {
            return jBoard.getRise();
        }
        /** Alias for line.Slope */
        getSlope() {
            return jBoard.getSlope();
        }
        /** Checks whether (x,y) is near the line. */
        hasPoint() {
            return jBoard.hasPoint();
        }
        /** The distance between the two points defining the line. */
        L() {
            return jBoard.L();
        }
        /** Calculates the slope of the line. */
        Slope() {
            return jBoard.Slope();
        }
        /** Treat the line as parametric curve in homogeneous coordinates, where the parameter t runs from 0 to 1. */
        X() {
            return jBoard.X();
        }
        /** Treat the line as parametric curve in homogeneous coordinates. */
        Y() {
            return jBoard.Y();
        }
        /** Treat the line as parametric curve in homogeneous coordinates. */
        Z() {
            return jBoard.Z();
        }
    }
    TSX.Line = Line;
    class currentBoard {
    }
    TSX.currentBoard = currentBoard;
    class Infobox {
    }
    TSX.Infobox = Infobox;
    class CA {
        /** f = map (x) -> x*sin(x); Usages: h = D(f, x); h = map (x) -> D(f, x); or D(x^2, x); */
        expandDerivatives() {
            return jBoard.expandDerivatives();
        }
        /** Declare all subnodes as math nodes, i.e recursively set node.isMath = true; */
        setMath() {
            return jBoard.setMath();
        }
    }
    TSX.CA = CA;
    class Chart extends GeometryElement {
        /**  */
        get elements() {
            return jBoard.elements;
        }
        /** Create bar chart defined by two data arrays. */
        drawBar() {
            return jBoard.drawBar();
        }
        /** Create line chart where the curve is given by a regression polynomial defined by two data arrays. */
        drawFit() {
            return jBoard.drawFit();
        }
        /** Create line chart defined by two data arrays. */
        drawLine() {
            return jBoard.drawLine();
        }
        /** Create pie chart. */
        drawPie() {
            return jBoard.drawPie();
        }
        /** Create chart consisting of JSXGraph points. */
        drawPoints() {
            return jBoard.drawPoints();
        }
        /** Create radar chart. */
        drawRadar() {
            return jBoard.drawRadar();
        }
        /** Create line chart that consists of a natural spline curve defined by two data arrays. */
        drawSpline() {
            return jBoard.drawSpline();
        }
        /** Template for dynamic charts update. */
        updateDataArray() {
            return jBoard.updateDataArray();
        }
    }
    TSX.Chart = Chart;
    class Circle extends GeometryElement {
        /** Attributes for center point. */
        get center() {
            return jBoard.center;
        }
        /**  */
        get circle() {
            return jBoard.circle;
        }
        /**  */
        get line() {
            return jBoard.line;
        }
        /**  */
        get method() {
            return jBoard.method;
        }
        /** Attributes for center point. */
        get point2() {
            return jBoard.point2;
        }
        /**  */
        get radius() {
            return jBoard.radius;
        }
        /** Circle area */
        Area() {
            return jBoard.Area();
        }
        /** Perimeter (circumference) of circle. */
        Perimeter() {
            return jBoard.Perimeter();
        }
        /** Calculates the radius of the circle. */
        Radius() {
            return jBoard.Radius();
        }
        /** Treats the circle as parametric curve and calculates its X coordinate. */
        X() {
            return jBoard.X();
        }
        /** Treats the circle as parametric curve and calculates its Y coordinate. */
        Y() {
            return jBoard.Y();
        }
        /** Treat the circle as parametric curve and calculates its Z coordinate. */
        Z() {
            return jBoard.Z();
        }
    }
    TSX.Circle = Circle;
    class Circle3D extends GeometryElement3D {
    }
    TSX.Circle3D = Circle3D;
    class Complex {
        /**  */
        get absval() {
            return jBoard.absval;
        }
        /**  */
        get angle() {
            return jBoard.angle;
        }
        /**  */
        get imaginary() {
            return jBoard.imaginary;
        }
        /**  */
        get isComplex() {
            return jBoard.isComplex;
        }
        /**  */
        get real() {
            return jBoard.real;
        }
        /** Add another complex number to this complex number. */
        add() {
            return jBoard.add();
        }
        /** Conjugate a complex number in place. */
        conj() {
            return jBoard.conj();
        }
        /** Divide this complex number by the given complex number. */
        div() {
            return jBoard.div();
        }
        /** Multiply another complex number to this complex number. */
        mult() {
            return jBoard.mult();
        }
        /** Subtract another complex number from this complex number. */
        sub() {
            return jBoard.sub();
        }
        /** Converts a complex number into a string. */
        toString() {
            return jBoard.toString();
        }
    }
    TSX.Complex = Complex;
    class Composition {
        /** Adds an element to the composition container. */
        add() {
            return jBoard.add();
        }
        /** Invokes fullUpdate for every stored element with a fullUpdate method and hands over the given arguments. */
        fullUpdate() {
            return jBoard.fullUpdate();
        }
        /** Invokes highlight for every stored element with a highlight method and hands over the given arguments. */
        highlight() {
            return jBoard.highlight();
        }
        /** Invokes noHighlight for every stored element with a noHighlight method and hands over the given arguments. */
        noHighlight() {
            return jBoard.noHighlight();
        }
        /** Invokes prepareUpdate for every stored element with a prepareUpdate method and hands over the given arguments. */
        prepareUpdate() {
            return jBoard.prepareUpdate();
        }
        /** Remove an element from the composition container. */
        remove() {
            return jBoard.remove();
        }
        /** Invokes setParents for every stored element with a setParents method and hands over the given arguments. */
        setParents() {
            return jBoard.setParents();
        }
        /** Invokes updateRenderer for every stored element with a updateRenderer method and hands over the given arguments. */
        updateRenderer() {
            return jBoard.updateRenderer();
        }
    }
    TSX.Composition = Composition;
    class Coords {
        /**  */
        get currentBoard() {
            return jBoard.currentBoard;
        }
        /**  */
        get emitter() {
            return jBoard.emitter;
        }
        /**  */
        get scrCoords() {
            return jBoard.scrCoords;
        }
        /**  */
        get usrCoords() {
            return jBoard.usrCoords;
        }
        /** Test if one of the usrCoords is NaN or the coordinates are infinite. */
        isReal() {
            return jBoard.isReal();
        }
        /** Set coordinates by either user coordinates or screen coordinates and recalculate the other one. */
        setCoordinates() {
            return jBoard.setCoordinates();
        }
    }
    TSX.Coords = Coords;
    class Curve extends GeometryElement {
        /**  */
        get dataX() {
            return jBoard.dataX;
        }
        set dataX(param) {
            jBoard.dataX = param;
        }
        /**  */
        get dataY() {
            return jBoard.dataY;
        }
        set dataY(param) {
            jBoard.dataY = param;
        }
        /**  */
        get ticks() {
            return jBoard.ticks;
        }
        /** Allocate points in the Coords array this.points */
        allocatePoints() {
            return jBoard.allocatePoints();
        }
        /** Converts the JavaScript/JessieCode/GEONExT syntax of the defining function term into JavaScript. */
        generateTerm() {
            return jBoard.generateTerm();
        }
        /** Gives the default value of the right bound for the curve. */
        maxX() {
            return jBoard.maxX();
        }
        /** Gives the default value of the left bound for the curve. */
        minX() {
            return jBoard.minX();
        }
        /** Shift the curve by the vector 'where'. */
        moveTo() {
            return jBoard.moveTo();
        }
        /** Finds dependencies in a given term and notifies the parents by adding the dependent object to the found objects child elements. */
        notifyParents() {
            return jBoard.notifyParents();
        }
        /** Computes the curve path */
        updateCurve() {
            return jBoard.updateCurve();
        }
        /** For dynamic dataplots updateCurve can be used to compute new entries for the arrays JXG.Curve#dataX and JXG.Curve#dataY. */
        updateDataArray(func) {
            return jBoard.updateDataArray(func);
        }
        /** Updates the visual contents of the curve. */
        updateRenderer() {
            return jBoard.updateRenderer();
        }
        /** Applies the transformations of the curve to the given point p. */
        updateTransform() {
            return jBoard.updateTransform();
        }
        /** The parametric function which defines the x-coordinate of the curve. */
        X() {
            return jBoard.X();
        }
        /** The parametric function which defines the y-coordinate of the curve. */
        Y() {
            return jBoard.Y();
        }
        /** Treat the curve as curve with homogeneous coordinates. */
        Z() {
            return jBoard.Z();
        }
    }
    TSX.Curve = Curve;
    class BezierCurve extends Curve {
    }
    TSX.BezierCurve = BezierCurve;
    class Curve3D extends Curve {
        /** Function which maps u to x; i.e. */
        X() {
            return jBoard.X();
        }
        /** Function which maps u to y; i.e. */
        Y() {
            return jBoard.Y();
        }
        /** Function which maps u to z; i.e. */
        Z() {
            return jBoard.Z();
        }
    }
    TSX.Curve3D = Curve3D;
    class Dump {
        /** Adds markers to every element of the board */
        addMarkers() {
            return jBoard.addMarkers();
        }
        /** Converts an array of different values into a parameter string that can be used by the code generators. */
        arrayToParamStr() {
            return jBoard.arrayToParamStr();
        }
        /** Removes markers from every element on the board. */
        deleteMarkers() {
            return jBoard.deleteMarkers();
        }
        /** Generate a save-able structure with all elements. */
        dump() {
            return jBoard.dump();
        }
        /** Eliminate default values given by JXG.Options from the attributes object. */
        minimizeObject() {
            return jBoard.minimizeObject();
        }
        /** Prepare the attributes object for an element to be dumped as JavaScript or JessieCode code. */
        prepareAttributes() {
            return jBoard.prepareAttributes();
        }
        /** Stringifies a string, i.e. */
        str() {
            return jBoard.str();
        }
        /** Saves the construction in board to JavaScript. */
        toJavaScript() {
            return jBoard.toJavaScript();
        }
        /** Converts a JavaScript object into a JCAN (JessieCode Attribute Notation) string. */
        toJCAN() {
            return jBoard.toJCAN();
        }
        /** Saves the construction in board to JessieCode. */
        toJessie() {
            return jBoard.toJessie();
        }
    }
    TSX.Dump = Dump;
    class ForeignObject extends GeometryElement {
        /**  */
        get content() {
            return jBoard.content;
        }
        /**  */
        get size() {
            return jBoard.size;
        }
        /** Returns the height of the foreignObject in user coordinates. */
        H() {
            return jBoard.H();
        }
        /** Checks whether (x,y) is over or near the image; */
        hasPoint() {
            return jBoard.hasPoint();
        }
        /** Set the width and height of the foreignObject. */
        setSize() {
            return jBoard.setSize();
        }
        /** Returns the width of the foreignObject in user coordinates. */
        W() {
            return jBoard.W();
        }
    }
    TSX.ForeignObject = ForeignObject;
    class Group extends Composition {
        /**  */
        get coords() {
            return jBoard.coords;
        }
        /** Adds all points in a group to this group. */
        addGroup(group) {
            return jBoard.addGroup(group);
        }
        /** Adds ids of elements to the array this.parents. */
        addParents(parents) {
            return jBoard.addParents(parents);
        }
        /** Adds an Point to this group. */
        addPoint(point) {
            return jBoard.addPoint(point);
        }
        /** Adds multiple points to this group. */
        addPoints(points) {
            return jBoard.addPoints(points);
        }
        /** Adds a point to the set of rotation points of the group. */
        addRotationPoint(point) {
            return jBoard.addRotationPoint(point);
        }
        /** Adds a point to the set of the scale points of the group. */
        addScalePoint(point, direction) {
            return jBoard.addScalePoint(point, direction);
        }
        /** Adds a point to the set of the translation points of the group. */
        addTranslationPoint(point) {
            return jBoard.addTranslationPoint(point);
        }
        /** List of the element ids resp. */
        getParents() {
            return jBoard.getParents();
        }
        /** Removes a point from the group. */
        removePoint(point) {
            return jBoard.removePoint(point);
        }
        /** Removes the rotation property from a point of the group. */
        removeRotationPoint(point) {
            return jBoard.removeRotationPoint(point);
        }
        /** Removes the scaling property from a point of the group. */
        removeScalePoint(point) {
            return jBoard.removeScalePoint(point);
        }
        /** Removes the translation property from a point of the group. */
        removeTranslationPoint(point) {
            return jBoard.removeTranslationPoint(point);
        }
        /** Sets the center of rotation for the group. */
        setRotationCenter(pivot) {
            return jBoard.setRotationCenter(pivot);
        }
        /** Sets the rotation points of the group. */
        setRotationPoints(points) {
            return jBoard.setRotationPoints(points);
        }
        /** Sets the center of scaling for the group. */
        setScaleCenter(point) {
            return jBoard.setScaleCenter(point);
        }
        /** Sets the scale points of the group. */
        setScalePoints(points) {
            return jBoard.setScalePoints(points);
        }
        /** Sets the translation points of the group. */
        setTranslationPoints(points) {
            return jBoard.setTranslationPoints(points);
        }
        /** Releases all elements of this group. */
        ungroup() {
            return jBoard.ungroup();
        }
    }
    TSX.Group = Group;
    class Image extends GeometryElement {
        /**  */
        get size() {
            return jBoard.size;
        }
        /**  */
        get url() {
            return jBoard.url;
        }
        /** Returns the height of the image in user coordinates. */
        H() {
            return jBoard.H();
        }
        /** Checks whether (x,y) is over or near the image; */
        hasPoint() {
            return jBoard.hasPoint();
        }
        /** Set the width and height of the image. */
        setSize() {
            return jBoard.setSize();
        }
        /** Returns the width of the image in user coordinates. */
        W() {
            return jBoard.W();
        }
    }
    TSX.Image = Image;
    class Implicitcurve extends GeometryElement {
    }
    TSX.Implicitcurve = Implicitcurve;
    class IntersectionCircle3D extends GeometryElement3D {
    }
    TSX.IntersectionCircle3D = IntersectionCircle3D;
    class IntersectionLine3D extends GeometryElement3D {
    }
    TSX.IntersectionLine3D = IntersectionLine3D;
    class Line3D extends GeometryElement3D {
        /**  */
        get direction() {
            return jBoard.direction;
        }
        /**  */
        get point() {
            return jBoard.point;
        }
        /**  */
        get point1() {
            return jBoard.point1;
        }
        /**  */
        get point2() {
            return jBoard.point2;
        }
        /**  */
        get range() {
            return jBoard.range;
        }
    }
    TSX.Line3D = Line3D;
    class Plane3D extends GeometryElement3D {
        /**  */
        get d() {
            return jBoard.d;
        }
        /**  */
        get direction1() {
            return jBoard.direction1;
        }
        /**  */
        get direction2() {
            return jBoard.direction2;
        }
        /**  */
        get normal() {
            return jBoard.normal;
        }
        /**  */
        get point() {
            return jBoard.point;
        }
        /**  */
        get range1() {
            return jBoard.range1;
        }
        /**  */
        get range2() {
            return jBoard.range2;
        }
        /**  */
        get vec1() {
            return jBoard.vec1;
        }
        /**  */
        get vec2() {
            return jBoard.vec2;
        }
        /**  */
        get vec3() {
            return jBoard.vec3;
        }
    }
    TSX.Plane3D = Plane3D;
    class Point3D extends GeometryElement3D {
        /**  */
        get slide() {
            return jBoard.slide;
        }
        /** Set the position of a 3D point. */
        setPosition(coords, noEvent = true) {
            return jBoard.setPosition(coords, noEvent);
        }
        /** Get x-coordinate of a 3D point. */
        X() {
            return jBoard.X();
        }
        /** Get y-coordinate of a 3D point. */
        Y() {
            return jBoard.Y();
        }
        /** Get z-coordinate of a 3D point. */
        Z() {
            return jBoard.Z();
        }
    }
    TSX.Point3D = Point3D;
    class Polygon extends GeometryElement {
        /** Attributes for the polygon border lines. */
        get borders() {
            return jBoard.borders;
        }
        /** Attributes for the polygon vertices. */
        get vertices() {
            return jBoard.vertices;
        }
        /** Checks whether (x,y) is near the polygon. */
        hasPoint(x, y) {
            return jBoard.hasPoint(x, y);
        }
        /** Uses the boards renderer to update the polygon. */
        updateRenderer() {
            return jBoard.updateRenderer();
        }
    }
    TSX.Polygon = Polygon;
    class Polygon3D extends GeometryElement3D {
    }
    TSX.Polygon3D = Polygon3D;
    class Text extends GeometryElement {
        /**  */
        get size() {
            return jBoard.size;
        }
        /**  */
        setAttribute(attrs) {
            return jBoard.setAttribute(attrs);
        }
        /** Returns the bounding box of the text element in user coordinates as an array of length 4: [upper left x, upper left y, lower right x, lower right y]. */
        bounds() {
            return jBoard.bounds();
        }
        /** A very crude estimation of the dimensions of the textbox in case nothing else is available. */
        crudeSizeEstimate() {
            return jBoard.crudeSizeEstimate();
        }
        /** Returns the value of the attribute ”anchorX”. */
        getAnchorX() {
            return jBoard.getAnchorX();
        }
        /** Returns the value of the attribute ”anchorY”. */
        getAnchorY() {
            return jBoard.getAnchorY();
        }
        /** Return the width of the text element. */
        getSize() {
            return jBoard.getSize();
        }
        /** Replace _{} by <sub> */
        replaceSub() {
            return jBoard.replaceSub();
        }
        /** Replace ^{} by <sup> */
        replaceSup() {
            return jBoard.replaceSup();
        }
        /** Sets the offset of a label element to the position with the least number of overlaps with other elements, while retaining the distance to its anchor element. */
        setAutoPosition() {
            return jBoard.setAutoPosition();
        }
        /** Move the text to new coordinates. */
        setCoords(x, y) {
            return jBoard.setCoords(x, y);
        }
        /** Defines new content. */
        setText(newText) {
            return jBoard.setText(newText);
        }
        /** Defines new content but converts < and > to HTML entities before updating the DOM. */
        setTextJessieCode() {
            return jBoard.setTextJessieCode();
        }
        /** Evaluates the text. */
        update() {
            return jBoard.update();
        }
        /** Recompute the width and the height of the text box. */
        updateSize() {
            return jBoard.updateSize();
        }
        /** Decode unicode entities into characters. */
        utf8_decode() {
            return jBoard.utf8_decode();
        }
    }
    TSX.Text = Text;
    class Text3D extends GeometryElement3D {
        /** Set the position of a 3D point. If `noEvent` true, then no events are triggered. */
        setPosition(coords, noEvent = false) {
            return jBoard.setPosition(coords, noEvent);
        }
    }
    TSX.Text3D = Text3D;
    class Ticks extends GeometryElement {
        /**  */
        get equidistant() {
            return jBoard.equidistant;
        }
        /**  */
        get fixedTicks() {
            return jBoard.fixedTicks;
        }
        /**  */
        get labelCounter() {
            return jBoard.labelCounter;
        }
        /** User defined labels for special ticks. */
        get labels() {
            return jBoard.labels;
        }
        /**  */
        get labelsData() {
            return jBoard.labelsData;
        }
        /**  */
        get line() {
            return jBoard.line;
        }
        /**  */
        get ticks() {
            return jBoard.ticks;
        }
        /** Formats label texts to make labels displayed in scientific notation look beautiful. */
        beautifyScientificNotationLabel() {
            return jBoard.beautifyScientificNotationLabel();
        }
        /** Checks whether (x,y) is near the line. */
        hasPoint() {
            return jBoard.hasPoint();
        }
        /** Sets x and y coordinate of the tick. */
        setPositionDirectly() {
            return jBoard.setPositionDirectly();
        }
        /** Uses the boards renderer to update the arc. */
        updateRenderer() {
            return jBoard.updateRenderer();
        }
    }
    TSX.Ticks = Ticks;
    class Turtle extends GeometryElement {
        /** Move the turtle backwards. */
        back() {
            return jBoard.back();
        }
        /** Alias for JXG.Turtle#back */
        bk() {
            return jBoard.bk();
        }
        /** Removes the turtle curve from the board. */
        clean() {
            return jBoard.clean();
        }
        /** Removes the turtle completely and resets it to its initial position and direction. */
        clearScreen() {
            return jBoard.clearScreen();
        }
        /** Alias for JXG.Turtle#clearScreen */
        cs() {
            return jBoard.cs();
        }
        /** The ”co”-coordinate of the turtle curve at position t is returned. */
        evalAt() {
            return jBoard.evalAt();
        }
        /** Alias for JXG.Turtle#forward */
        fd() {
            return jBoard.fd();
        }
        /** Move the turtle forward. */
        forward() {
            return jBoard.forward();
        }
        /** Get most recently set turtle color. */
        getHighlightPenColor() {
            return jBoard.getHighlightPenColor();
        }
        /** Get most recently set turtle color. */
        getPenColor() {
            return jBoard.getPenColor();
        }
        /** Get most recently set turtle size (in pixel). */
        getPenSize() {
            return jBoard.getPenSize();
        }
        /** Checks whether (x,y) is near the curve. */
        hasPoint() {
            return jBoard.hasPoint();
        }
        /** Sets the visibility of the turtle head to false, */
        hideTurtle() {
            return jBoard.hideTurtle();
        }
        /** Moves the turtle to position [0,0]. */
        home() {
            return jBoard.home();
        }
        /** Alias for JXG.Turtle#hideTurtle */
        ht() {
            return jBoard.ht();
        }
        /** Rotate the turtle direction to the right. */
        left() {
            return jBoard.left();
        }
        /** Rotates the turtle into a new direction. */
        lookTo() {
            return jBoard.lookTo();
        }
        /** Alias for JXG.Turtle#left */
        lt() {
            return jBoard.lt();
        }
        /** Gives the upper bound of the parameter if the turtle is treated as parametric curve. */
        maxX() {
            return jBoard.maxX();
        }
        /** Gives the lower bound of the parameter if the turtle is treated as parametric curve. */
        minX() {
            return jBoard.minX();
        }
        /** Moves the turtle to a given coordinate pair. */
        moveTo() {
            return jBoard.moveTo();
        }
        /** Alias for JXG.Turtle#penDown */
        pd() {
            return jBoard.pd();
        }
        /** Pen down, continues visible drawing */
        penDown() {
            return jBoard.penDown();
        }
        /** Pen up, stops visible drawing */
        penUp() {
            return jBoard.penUp();
        }
        /** Alias for JXG.Turtle#popTurtle */
        pop() {
            return jBoard.pop();
        }
        /** Gets the last position of the turtle on the stack, sets the turtle to this position and removes this position from the stack. */
        popTurtle() {
            return jBoard.popTurtle();
        }
        /** Alias for JXG.Turtle#penUp */
        pu() {
            return jBoard.pu();
        }
        /** Alias for JXG.Turtle#pushTurtle */
        push() {
            return jBoard.push();
        }
        /** Pushes the position of the turtle on the stack. */
        pushTurtle() {
            return jBoard.pushTurtle();
        }
        /** Rotate the turtle direction to the right */
        right() {
            return jBoard.right();
        }
        /** Alias for JXG.Turtle#right */
        rt() {
            return jBoard.rt();
        }
        /** Sets the highlight pen color. */
        setHighlightPenColor() {
            return jBoard.setHighlightPenColor();
        }
        /** Sets the pen color. */
        setPenColor() {
            return jBoard.setPenColor();
        }
        /** Sets the pen size. */
        setPenSize() {
            return jBoard.setPenSize();
        }
        /** Moves the turtle without drawing to a new position */
        setPos() {
            return jBoard.setPos();
        }
        /** Sets the visibility of the turtle head to true, */
        showTurtle() {
            return jBoard.showTurtle();
        }
        /** Alias for JXG.Turtle#showTurtle */
        st() {
            return jBoard.st();
        }
        /** if t is not supplied the x-coordinate of the turtle is returned. */
        X() {
            return jBoard.X();
        }
        /** if t is not supplied the y-coordinate of the turtle is returned. */
        Y() {
            return jBoard.Y();
        }
        /**  */
        Z() {
            return jBoard.Z();
        }
    }
    TSX.Turtle = Turtle;
    class Sector extends Curve {
        /**  */
        get point1() {
            return jBoard.point1;
        }
        /**  */
        get point2() {
            return jBoard.point2;
        }
        /**  */
        get point3() {
            return jBoard.point3;
        }
        /**  */
        get point4() {
            return jBoard.point4;
        }
        /** Checks whether (x,y) is within the area defined by the sector. */
        hasPointSector() {
            return jBoard.hasPointSector();
        }
        /** Returns the radius of the sector. */
        Radius() {
            return jBoard.Radius();
        }
    }
    TSX.Sector = Sector;
    class Vectorfield extends Curve {
        /** Set the defining functions of vector field. */
        setF() {
            return jBoard.setF();
        }
    }
    TSX.Vectorfield = Vectorfield;
    class Angle extends Sector {
        /**  */
        get point() {
            return jBoard.point;
        }
        /** Frees an angle from a prescribed value. */
        free() {
            return jBoard.free();
        }
        /** Set an angle to a prescribed value given in radians. */
        setAngle(angle) {
            return jBoard.setAngle(angle);
        }
        /** Returns the value of the angle. */
        Value() {
            return jBoard.Value();
        }
    }
    TSX.Angle = Angle;
    class Arc extends Curve {
        /**  */
        get anglepoint() {
            return jBoard.anglepoint;
        }
        /**  */
        get radiuspoint() {
            return jBoard.radiuspoint;
        }
        /**  */
        getRadius() {
            return jBoard.getRadius();
        }
        /** Checks whether (x,y) is within the sector defined by the arc. */
        hasPointSector() {
            return jBoard.hasPointSector();
        }
        /** Determines the arc's current radius. */
        Radius() {
            return jBoard.Radius();
        }
        /** Returns the length of the arc or the value of the angle spanned by the arc. */
        Value() {
            return jBoard.Value();
        }
    }
    TSX.Arc = Arc;
    class Arrow extends Line {
    }
    TSX.Arrow = Arrow;
    class Parallel extends Line {
    }
    TSX.Parallel = Parallel;
    class Arrowparallel extends Parallel {
    }
    TSX.Arrowparallel = Arrowparallel;
    class Axis extends Line {
        /**  */
        get defaultTicks() {
            return jBoard.defaultTicks;
        }
    }
    TSX.Axis = Axis;
    class Bisector extends Line {
    }
    TSX.Bisector = Bisector;
    class Bisectorlines extends Composition {
    }
    TSX.Bisectorlines = Bisectorlines;
    class Button extends Text {
        /**  */
        get rendNodeButton() {
            return jBoard.rendNodeButton;
        }
        /** Add an event to trigger when button is pressed.
       ```js
           let isLeftRight = true;
           let buttonMove = TSX.button([-2, 4], 'initial',
               // use the button() codeblock to change the text and control a flag
               () => { isLeftRight = !isLeftRight;
                    buttonMove.rendNodeButton.innerHTML = isLeftRight ? 'left' : 'right' })
           // use onClick() to add actions to the button
           buttonMove.onClick(() => {isLeftRight ? P.moveTo(up, 1000) : P.moveTo(dn, 1000)})
       ``` */
        onClick(action) {
            window.JXG.addEvent(this.rendNodeButton, `click`, action);
        }
    }
    TSX.Button = Button;
    class Cardinalspline extends Curve {
    }
    TSX.Cardinalspline = Cardinalspline;
    class Checkbox extends Text {
        /**  */
        setAttribute(attrs) {
            return jBoard.setAttribute(attrs);
        }
        /** Returns the value of the checkbox element */
        Value() {
            return jBoard.Value();
        }
        /**  */
        onChange(action) {
            window.JXG.addEvent(this.rendNodeCheckbox, `change`, action);
        }
    }
    TSX.Checkbox = Checkbox;
    class Circumcenter extends Point {
    }
    TSX.Circumcenter = Circumcenter;
    class Circumcircle extends Circle {
    }
    TSX.Circumcircle = Circumcircle;
    class CircumcircleArc extends Arc {
    }
    TSX.CircumcircleArc = CircumcircleArc;
    class CircumcircleSector extends Sector {
        /**  */
        get center() {
            return jBoard.center;
        }
    }
    TSX.CircumcircleSector = CircumcircleSector;
    class Comb extends Curve {
    }
    TSX.Comb = Comb;
    class Conic extends Curve {
    }
    TSX.Conic = Conic;
    class CurveDifference extends Curve {
    }
    TSX.CurveDifference = CurveDifference;
    class CurveIntersection extends Curve {
    }
    TSX.CurveIntersection = CurveIntersection;
    class CurveUnion extends Curve {
    }
    TSX.CurveUnion = CurveUnion;
    class Derivative extends Curve {
    }
    TSX.Derivative = Derivative;
    class Ellipse extends Conic {
    }
    TSX.Ellipse = Ellipse;
    class ParametricSurface3D extends Curve3D {
        /**  */
        addTransform(other, transforms) {
            return jBoard.addTransform(other, transforms);
        }
    }
    TSX.ParametricSurface3D = ParametricSurface3D;
    class Face3D extends Curve {
        /**  */
        get dataX() {
            return jBoard.dataX;
        }
        /**  */
        get dataY() {
            return jBoard.dataY;
        }
        /**  */
        get dataZ() {
            return jBoard.dataZ;
        }
    }
    TSX.Face3D = Face3D;
    class Functiongraph extends Curve {
    }
    TSX.Functiongraph = Functiongraph;
    class Functiongraph3D extends ParametricSurface3D {
    }
    TSX.Functiongraph3D = Functiongraph3D;
    class Glider extends Point {
    }
    TSX.Glider = Glider;
    class Glider3D extends Point3D {
    }
    TSX.Glider3D = Glider3D;
    class Grid extends Curve {
    }
    TSX.Grid = Grid;
    class Hatch extends Ticks {
        /**  */
        get ticksDistance() {
            return jBoard.ticksDistance;
        }
    }
    TSX.Hatch = Hatch;
    class Hyperbola extends Conic {
    }
    TSX.Hyperbola = Hyperbola;
    class Incenter extends Point {
    }
    TSX.Incenter = Incenter;
    class Incircle extends Circle {
    }
    TSX.Incircle = Incircle;
    class Inequality extends Curve {
    }
    TSX.Inequality = Inequality;
    class Input extends Text {
        /** Sets value of the input element. */
        set(value) {
            return jBoard.set(value);
        }
        /** Returns the value (content) of the input element */
        Value() {
            return jBoard.Value();
        }
        /**  */
        onChange(action) {
            window.JXG.addEvent(this.rendNodeInput, `change`, action);
        }
    }
    TSX.Input = Input;
    class Integral extends Curve {
        /** Attributes of the (left) base point of the integral. */
        get baseLeft() {
            return jBoard.baseLeft;
        }
        /** Attributes of the (right) base point of the integral. */
        get baseRight() {
            return jBoard.baseRight;
        }
        /** Attributes of the (left) starting point of the integral. */
        get curveLeft() {
            return jBoard.curveLeft;
        }
        /** Attributes of the (right) end point of the integral. */
        get curveRight() {
            return jBoard.curveRight;
        }
        /** Returns the current value of the integral. */
        Value() {
            return jBoard.Value();
        }
    }
    TSX.Integral = Integral;
    class Intersection extends Point {
    }
    TSX.Intersection = Intersection;
    class Label extends Text {
    }
    TSX.Label = Label;
    class Legend extends GeometryElement {
        /**  */
        get labels() {
            return jBoard.labels;
        }
        /**  */
        get rowHeight() {
            return jBoard.rowHeight;
        }
        /**  */
        get style() {
            return jBoard.style;
        }
    }
    TSX.Legend = Legend;
    class Locus extends Curve {
        /**  */
        get ctime() {
            return jBoard.ctime;
        }
        /**  */
        get eq() {
            return jBoard.eq;
        }
    }
    TSX.Locus = Locus;
    class MajorArc extends Curve {
    }
    TSX.MajorArc = MajorArc;
    class MajorSector extends Curve {
    }
    TSX.MajorSector = MajorSector;
    class Measurement extends Text {
    }
    TSX.Measurement = Measurement;
    class Midpoint extends Point {
    }
    TSX.Midpoint = Midpoint;
    class MinorArc extends Curve {
    }
    TSX.MinorArc = MinorArc;
    class MinorSector extends Curve {
    }
    TSX.MinorSector = MinorSector;
    class Mirrorelement extends GeometryElement {
    }
    TSX.Mirrorelement = Mirrorelement;
    class Mirrorpoint extends Point {
    }
    TSX.Mirrorpoint = Mirrorpoint;
    class NonReflexAngle extends Angle {
    }
    TSX.NonReflexAngle = NonReflexAngle;
    class Normal extends Line {
    }
    TSX.Normal = Normal;
    class Orthogonalprojection extends Point {
    }
    TSX.Orthogonalprojection = Orthogonalprojection;
    class OtherIntersection extends Point {
    }
    TSX.OtherIntersection = OtherIntersection;
    class Parabola extends Conic {
    }
    TSX.Parabola = Parabola;
    class Parallelpoint extends Point {
    }
    TSX.Parallelpoint = Parallelpoint;
    class Segment extends Line {
    }
    TSX.Segment = Segment;
    class Parallelogram extends Polygon {
    }
    TSX.Parallelogram = Parallelogram;
    class Perpendicular extends Segment {
    }
    TSX.Perpendicular = Perpendicular;
    class PerpendicularPoint extends Point {
    }
    TSX.PerpendicularPoint = PerpendicularPoint;
    class PerpendicularSegment extends Segment {
        /**  */
        get point() {
            return jBoard.point;
        }
    }
    TSX.PerpendicularSegment = PerpendicularSegment;
    class PolarLine extends Line {
    }
    TSX.PolarLine = PolarLine;
    class PolePoint extends Point {
    }
    TSX.PolePoint = PolePoint;
    class PolygonalChain extends Polygon {
    }
    TSX.PolygonalChain = PolygonalChain;
    class Polyhedron3D extends GeometryElement3D {
        /**  */
        get def() {
            return jBoard.def;
        }
        /**  */
        get faces() {
            return jBoard.faces;
        }
        /**  */
        get numberFaces() {
            return jBoard.numberFaces;
        }
    }
    TSX.Polyhedron3D = Polyhedron3D;
    class RadicalAxis extends Line {
    }
    TSX.RadicalAxis = RadicalAxis;
    class Reflection extends GeometryElement {
    }
    TSX.Reflection = Reflection;
    class ReflexAngle extends Angle {
    }
    TSX.ReflexAngle = ReflexAngle;
    class RegularPolygon extends Polygon {
    }
    TSX.RegularPolygon = RegularPolygon;
    class Riemannsum extends Curve {
        /** Returns the value of the Riemann sum, i.e. */
        Value() {
            return jBoard.Value();
        }
    }
    TSX.Riemannsum = Riemannsum;
    class Semicircle extends Arc {
        /**  */
        get midpoint() {
            return jBoard.midpoint;
        }
    }
    TSX.Semicircle = Semicircle;
    class Slider extends Glider {
        /** Sets the maximum value of the slider. */
        setMax(value) {
            return jBoard.setMax(value);
        }
        /** Sets the minimum value of the slider. */
        setMin(value) {
            return jBoard.setMin(value);
        }
        /** Sets the value of the slider. */
        setValue(value) {
            return jBoard.setValue(value);
        }
        /** Returns the current slider value. */
        Value() {
            return jBoard.Value();
        }
        /**  */
        onChange(action) {
            this.on(`drag`, action);
        }
    }
    TSX.Slider = Slider;
    class Slopefield extends Vectorfield {
        /** Set the defining functions of slope field. */
        setF() {
            return jBoard.setF();
        }
    }
    TSX.Slopefield = Slopefield;
    class Slopetriangle extends Line {
        /** Returns the value of the slope triangle, that is the slope of the tangent. */
        Value() {
            return jBoard.Value();
        }
    }
    TSX.Slopetriangle = Slopetriangle;
    class Smartlabel extends Text {
    }
    TSX.Smartlabel = Smartlabel;
    class Sphere3D extends GeometryElement3D {
    }
    TSX.Sphere3D = Sphere3D;
    class Spline extends Curve {
    }
    TSX.Spline = Spline;
    class Stepfunction extends Curve {
    }
    TSX.Stepfunction = Stepfunction;
    class Tangent extends Line {
    }
    TSX.Tangent = Tangent;
    class TangentTo extends Line {
    }
    TSX.TangentTo = TangentTo;
    class Tapemeasure extends Segment {
        /** Returns the length of the tape measure. */
        Value() {
            return jBoard.Value();
        }
    }
    TSX.Tapemeasure = Tapemeasure;
    class Tracecurve extends Curve {
    }
    TSX.Tracecurve = Tracecurve;
    class Transform extends GeometryElement {
        /** Create a new Point from a Point and Transform.  Translation just requires dx and dy.
                                   Rotation requires a point to rotate around, and a rotation transform around that point, and
                                   a remote point that sets both the radius and the initial angle of the rotation.
                                   
       Example: Given a rotation transform controlled by a slider, create a rotating point using the transform method Point() and the
                                   radius point.
       ```js
           let slid = TSX.slider([-4,0],[-2,0],[-20,0,20])  // controls rotation
           let c = TSX.point([-1,-1],{name:'c'})     //center
           let rot = TSX.rotate(()=>slid.Value(),c)  // rotation around c
           let initial = TSX.point([-1,1],{name:'initial'})
           let d = rot.point(initial,{name:'rotation around c'})  // new point
           TSX.segment(c,d)    // to illustrate
       ``` */
        point(fromPoint, attributes = {}) {
            return _jsxBoard().create('point', [fromPoint, this], defaultAttributes(attributes));
        }
        /**  */
        applyOnce(element) {
            return jBoard.applyOnce(element);
        }
        /**  Binds a transformation to a GeometryElement or an array of elements. In every update of the GeometryElement(s), the transformation is executed. That means, in order to immediately apply the transformation, a call of currentBoard.update() has to follow. */
        bindTo(element) {
            return jBoard.bindTo(element);
        }
        /**  */
        setMatrix() {
            return jBoard.setMatrix();
        }
    }
    TSX.Transform = Transform;
    class Transform3D extends GeometryElement3D {
    }
    TSX.Transform3D = Transform3D;
    class TransformPoint extends Point {
    }
    TSX.TransformPoint = TransformPoint;
    class Translate extends Transform {
    }
    TSX.Translate = Translate;
    class Rotate extends Transform {
    }
    TSX.Rotate = Rotate;
    class Scale extends Transform {
    }
    TSX.Scale = Scale;
    class Translate3D extends Transform3D {
    }
    TSX.Translate3D = Translate3D;
    class Rotate3D extends Transform3D {
    }
    TSX.Rotate3D = Rotate3D;
    class RotateX3D extends Transform3D {
    }
    TSX.RotateX3D = RotateX3D;
    class RotateY3D extends Transform3D {
    }
    TSX.RotateY3D = RotateY3D;
    class RotateZ3D extends Transform3D {
    }
    TSX.RotateZ3D = RotateZ3D;
    class Scale3D extends Transform3D {
    }
    TSX.Scale3D = Scale3D;
})(TSX = exports.TSX || (exports.TSX = {}));
//# sourceMappingURL=tsxgraph.js.map