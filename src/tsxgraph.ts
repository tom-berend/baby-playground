
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
        //    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
        //    INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
        //    PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
        //    FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        //    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
        //    DEALINGS IN THE SOFTWARE.
        //
        /////////////////////////////////////////////////////////////////////////////

        //   Generated on January 18, 2025, 2:47 pm 



 export namespace TXG {

 interface GeometryElementAttributes  {
 /** used by V2 vector math library */
 scaleXY?: Number 
 /** Color of the element. */
 color?: string|Function
 /** Opacity of the element (between 0 and 1). */
 opacity?: number|Function
 /** The fill color of this geometry element. */
 fillColor?: string|Function
 /** Opacity for fill color. */
 fillOpacity?: number|Function
 /** The stroke color of the given geometry element. */
 strokeColor?: string|Function
 /** Opacity for element's stroke color. */
 strokeOpacity?: number|Function
 /** Width of the element's stroke. */
 strokeWidth?: number|Function
 /** If false the element won't be visible on the board, otherwise it is shown. */
 visible?: Boolean|Function
 /** Determines the elements border-style. Possible values are: 0 for a solid line 1 for a dotted line 2 for a line with small dashes 3 for a line with medium dashes 4 for a line with big dashes 5 for a line with alternating medium and big dashes and large gaps 6 for a line with alternating medium and big dashes and small gaps 7 for a dotted line. Needs JXG.GeometryElement#linecap set to ”round” for round dots.The dash patterns are defined in JXG.AbstractRenderer#dashArray. */
 dash?: Number
 /** If true the element is fixed and can not be dragged around. The element will be repositioned on zoom and moveOrigin events. */
 fixed?: Boolean
 /** If true a label will display the element's name. */
 withLabel?: Boolean
 /** Display tag for this element. */
 labeled?: string|Function
 /** Display tag for this element. */
 labelled?: string|Function
 /** Attributes for the line label. */
 label?: LabelAttributes
 /** Set display name  */
 name?:string|Function
 /** If enabled:true the (stroke) element will get a customized shadow.Customize color and opacity: If the object's RGB stroke color is [r,g,b] and its opacity is op, and the shadow parameters color is given as [r', g', b'] and opacity as op' the shadow will receive the RGB color[blend*r + r', blend*g + g', blend*b + b']and its opacity will be equal to op * op'. Further, the parameters blur and offset can be adjusted.This attribute is only available with SVG, not with canvas. */
 shadow?: Object
 /** If true, KaTeX will be used to render the input string. */
 useKatex?: Boolean
 /** Snaps the element or its parents to the grid. Currently only relevant for points, circles, and lines. Points are snapped to grid directly, on circles and lines it's only the parent points that are snapped */
  snapToGrid?: Boolean
 /** If some size of an element is controlled by a function, like the circle radius or segments of fixed length, this attribute controls what happens if the value is negative. By default, the absolute value is taken. If true, the maximum of 0 and the value is used. */
  nonnegativeOnly?: Boolean
 /** Draw label for this Element? */
 drawLabels?: Boolean
 /** Size in pixels */
 size?: Number|Function
 /** There are different point styles which differ in appearance. */
  face?: 'o'|'line'|'point'|'cross'| 'plus' | 'minus' | 'divide'| 'diamond'| 'triangledown' | 'triangleleft' | 'triangleright'| 'triangleup' | 'square' |'circle' | string
 /** Include the the zero line in the grid */
  drawZero?: Boolean
 /** If true, the dash pattern is multiplied by strokeWidth / 2. */
  dashScale?: Boolean
 /** If the element is dragged it will be moved on mousedown or touchstart to the top of its layer. Works only for SVG renderer and for simple elements consisting of one SVG node. */
  dragToTopOfLayer?: Boolean
 /** If true the element is fixed and can not be dragged around. The element will even stay at its position on zoom and moveOrigin events. Only free elements like points, texts, curves can be frozen. */
  frozen?: Boolean
 /** Gradient type. Possible values are 'linear'. 'radial' or null. */
  gradient?: string
 /** Angle (in radians) of the gradiant in case the gradient is of type 'linear'. If the angle is 0, the first color is on the left and the second color is on the right. If the angle is π/2 the first color is on top and the second color at the bottom. */
  gradientAngle?: number
 /** From the SVG specification: ‘cx’, ‘cy’ and ‘r’ define the largest (i.e., outermost) circle for the radial gradient. The gradient will be drawn such that the 100% gradient stop is mapped to the perimeter of this largest (i.e., outermost) circle. For radial gradients in canvas this is the value 'x1'. Takes a value between 0 and 1. */
  gradientCX?: number
 /** From the SVG specification: ‘cx’, ‘cy’ and ‘r’ define the largest (i.e., outermost) circle for the radial gradient. The gradient will be drawn such that the 100% gradient stop is mapped to the perimeter of this largest (i.e., outermost) circle. For radial gradients in canvas this is the value 'y1'. Takes a value between 0 and 1. */
  gradientCY?: number
 /** The gradientEndOffset attribute is a number (ranging from 0 to 1) which indicates where the second gradient stop is placed, see the SVG specification for more information. For linear gradients, this attribute represents a location along the gradient vector. For radial gradients, it represents a percentage distance from (fx,fy) to the edge of the outermost/largest circle. */
  gradientEndOffset?: number
 /** This attribute defines the radius of the start circle of the radial gradient. The gradient will be drawn such that the 0% <stop> is mapped to the perimeter of the start circle. For radial gradients in canvas this is the value 'r0'. Takes a value between 0 and 1. */
  gradientFR?: number
 /** `fx` and `fy` define the focal point for the radial gradient. The gradient will be drawn such that the 0% gradient stop is mapped to (fx, fy). For radial gradients in canvas this is the value 'x0'. Takes a value between 0 and 1. */
  gradientFX?: number
 /** y-coordinate of the circle center for the second color in case of gradient 'radial'. (The attribute fy in SVG) For radial gradients in canvas this is the value 'y0'. Takes a value between 0 and 1. */
  gradientFY?: number
 /** From the SVG specification: ‘cx’, ‘cy’ and ‘r’ define the largest (i.e., outermost) circle for the radial gradient. The gradient will be drawn such that the 100% gradient stop is mapped to the perimeter of this largest (i.e., outermost) circle. For radial gradients in canvas this is the value 'r1'. Takes a value between 0 and 1. */
  gradientR?: number
 /** Second color for gradient. */
  gradientSecondColor?: String
 /** Opacity of second gradient color. Takes a value between 0 and 1. */
  gradientSecondOpacity?: number
 /** The gradientStartOffset attribute is a number (ranging from 0 to 1) which indicates where the first gradient stop is placed, see the SVG specification for more information. For linear gradients, this attribute represents a location along the gradient vector. For radial gradients, it represents a percentage distance from (fx,fy) to the edge of the outermost/largest circle. */
  gradientStartOffset?: number
 /** Should the element use highlight attributes on mouseOver? */
  highlight?: Boolean
 /** The fill color of the given geometry element when the mouse is pointed over it. */
  highlightFillColor?: string|Function
 /** Opacity for fill color when the object is highlighted. */
  highlightFillOpacity?: number|Function
 /** The stroke color of the given geometry element when the user moves the mouse over it. */
  highlightStrokeColor?: string|Function
 /** Opacity for stroke color when the object is highlighted. */
  highlightStrokeOpacity?: number|Function
 /** Width of the element's stroke when the mouse is pointed over it. */
  highlightStrokeWidth?: number|Function
 /** Display layer which will contain the element. */
  layer?: number
 /** Line endings (linecap) of a stroke element, i.e. line, circle, curve. Possible values are:'butt','round','square'. */
  lineCap?: string
 /** Controls if an element can get the focus with the tab key. tabindex corresponds to the HTML attribute of the same name. See descriptiona at MDN. The additional value ”null” completely disables focus of an element. The value will be ignored if keyboard control of the board is not enabled or the element is fixed or not visible. */
  tabindex?: Number
 }

 interface GeometryElement3DAttributes  {
 /** used by V2 vector math library */
 scaleXY?: Number 
 /** label for this item */
 name?:string|Function
 /** enable label for this item */
 withLabel?:boolean
 /** Opacity of the element (between 0 and 1). */
 opacity?: number|Function
 /** Set whether the element is visibledisplay name  */
 visible?:Boolean
 /** Set the width of lines in pixels  */
 strokeWidth?:number
 /** Set the color of lines */
 strokeColor?:string|Function
 /** Set the color of areas */
 fillColor?:string|Function
 /** Arrow at the end of the line? */
 firstArrow?:Boolean
 /** Arrow at the start of the line? */
 lastArrow?:Boolean
 /** Highlight on mouse-over? */
 highlight?:Boolean
 /** Attributes for first point (an object) */
 point1?:Point3DAttributes
 /** Attributes for second point (an object) */
 point2?:Point3DAttributes
 }

 interface BoardAttributes  {
 /** used by V2 vector math library */
 scaleXY?: Number 
 }

 interface InfoboxAttributes  {
 /** used by V2 vector math library */
 scaleXY?: Number 
 /** Horizontal offset in pixel of the infobox text from its anchor point. */
  distanceX?: Number
 /** Vertical offset in pixel of the infobox text from its anchor point. */
  distanceY?: Number
 /** Internationalization support for infobox text. */
  intl?: object
 }

 interface CAttributes  {
 /** used by V2 vector math library */
 scaleXY?: Number 
 }

 interface CAAttributes  {
 /** used by V2 vector math library */
 scaleXY?: Number 
 }

 interface ChartAttributes extends GeometryElementAttributes {
 /** Select type of chart. */
 chartStyle?: `bar`|`line`
 /**  */
 width?: Number
 /**  */
 labels?: any[]
 /**  */
 colorArray?: string[]
 /**  */
 label?: LabelAttributes
 }

 interface CircleAttributes extends GeometryElementAttributes {
 /** Attributes for center point. */
  center?: GeometryElementAttributes
 /** If true, moving the mouse over inner points triggers hasPoint. */
  hasInnerPoints?: Boolean
 /** Attributes for circle label. */
  label?: LabelAttributes
 /** Attributes for center point. */
  point?: Point
 /** Attributes for center point. */
  point2?: Point
 }

 interface Circle3DAttributes extends GeometryElement3DAttributes {
 }

 interface ComplexAttributes  {
 /** used by V2 vector math library */
 scaleXY?: Number 
 }

 interface CompositionAttributes  {
 /** used by V2 vector math library */
 scaleXY?: Number 
 }

 interface CoordsAttributes  {
 /** used by V2 vector math library */
 scaleXY?: Number 
 }

 interface CurveAttributes extends GeometryElementAttributes {
 /** The curveType is set in JXG.Curve#generateTerm and used in JXG.Curve#updateCurve. Possible values are'none' 'plot': Data plot 'parameter': we can not distinguish function graphs and parameter curves 'functiongraph': function graph 'polar' 'implicit' (not yet) Only parameter and plot are set directly. Polar is set with JXG.GeometryElement#setAttribute only. */
  curveType?: String
 /** If true use a recursive bisection algorithm. It is slower, but usually the result is better. It tries to detect jumps and singularities. */
  doAdvancedPlot?: Boolean
 /** If true use the algorithm by Gillam and Hohenwarter, which was default until version 0.98. */
  doAdvancedPlotOld?: Boolean
 /** Configure arrow head at the start position for curve. Recommended arrow head type is 7. */
  firstArrow?: Boolean | Object
 /** The data points of the curve are not connected with straight lines but with bezier curves. */
  handDrawing?: Boolean
 /** Attributes for curve label. */
  label?: LabelAttributes
 /** Configure arrow head at the end position for curve. Recommended arrow head type is 7. */
  lastArrow?: Boolean | Object
 /** Number of points used for plotting triggered by up events (i.e. high quality plotting) in case Curve#doAdvancedPlot is false. */
  numberPointsHigh?: Number
 /** Number of points used for plotting triggered by move events (i.e. lower quality plotting but fast) in case Curve#doAdvancedPlot is false. */
  numberPointsLow?: Number
 /** Select the version of the plot algorithm.Version 1 is very outdatedVersion 2 is the default version in JSXGraph v0.99.*, v1.0, and v1.1, v1.2.0Version 3 is an internal version that was never published ina stable version.Version 4 is available since JSXGraph v1.2.0Version 4 plots correctly logarithms if the function term is supplied as string (i.e. as JessieCode) */
  plotVersion?: Number
 /** Apply Ramer-Douglas-Peuker smoothing. */
  RDPsmoothing?: Boolean
 /** Recursion depth used for plotting triggered by up events (i.e. high quality plotting) in case Curve#doAdvancedPlot is true. */
  recursionDepthHigh?: Number
 /** Number of points used for plotting triggered by move events in case (i.e. lower quality plotting but fast) Curve#doAdvancedPlot is true. */
  recursionDepthLow?: Number
 }

 interface BezierCurveAttributes extends CurveAttributes {
 }

 interface Curve3DAttributes extends CurveAttributes {
 }

 interface DumpAttributes  {
 /** used by V2 vector math library */
 scaleXY?: Number 
 }

 interface ForeignObjectAttributes extends GeometryElementAttributes {
 /** List of attractor elements. If the distance of the ForeignObject is less than attractorDistance the ForeignObject is made to glider of this element. */
  attractors?: Element[]
 }

 interface GroupAttributes extends CompositionAttributes {
 }

 interface ImageAttributes extends GeometryElementAttributes {
 /** List of attractor elements. If the distance of the image is less than attractorDistance the image is made to glider of this element. */
  attractors?: Element[]
 /** Defines the CSS class used by the image. CSS attributes defined in this class will overwrite the corresponding JSXGraph attributes, e.g. opacity. The default CSS class is defined in jsxgraph.css. */
  cssClass?: String
 /** Defines the CSS class used by the image when highlighted. CSS attributes defined in this class will overwrite the corresponding JSXGraph attributes, e.g. highlightFillOpacity. The default CSS class is defined in jsxgraph.css. */
  highlightCssClass?: String
 /** Image rotation in degrees. */
  rotate?: Number
 /** Defines together with Image#snapSizeY the grid the image snaps on to. The image will only snap on user coordinates which are integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default x axes of the board. */
  snapSizeX?: Number
 /** Defines together with Image#snapSizeX the grid the image snaps on to. The image will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default y axes of the board. */
  snapSizeY?: Number
 }

 interface ImplicitcurveAttributes extends GeometryElementAttributes {
 /** Horizontal resolution: distance (in pixel) between vertical lines to search for components of the implicit curve. */
  resolution_outer?:Number
 /** Vertical resolution (in pixel) to search for components of the implicit curve. */
  resolution_inner?:Number
 /** Angle α0 between two successive tangents: determines the smoothness of the curve. */
  alpha_0?:Number
 /** Initial step width (in user units). */
  h_initial?:Number
 /** Maximum step width (in user units). */
  h_max?:Number
 /** Half of the box size (in user units) to search for existing line segments in the quadtree. */
  qdt_box?:Number
 }

 interface Intersectioncircle3DAttributes extends GeometryElement3DAttributes {
 }

 interface LegendAttributes  {
 /** used by V2 vector math library */
 scaleXY?: Number 
 }

 interface LineAttributes extends GeometryElementAttributes {
 /** Configure the arrow head at the position of its first point or the corresponding intersection with the canvas borderIn case firstArrow is an object it has the sub-attributes:{type: 1, // possible values are 1, 2, ..., 7. Default value is 1.size: 6, // size of the arrow head. Default value is 6.// This value is multiplied with the strokeWidth of the line// Exception: for type=7 size is ignoredhighlightSize: 6, // size of the arrow head in case the element is highlighted. Default value }type=7 is the default for curves if firstArrow: true */
  firstArrow?: Boolean | Object
 /** Attributes for the line label. */
  label?: LabelAttributes
 /** Configure the arrow head at the position of its second point or the corresponding intersection with the canvas border.In case lastArrow is an object it has the sub-attributes:{type: 1, // possible values are 1, 2, ..., 7. Default value is 1.size: 6, // size of the arrow head. Default value is 6.// This value is multiplied with the strokeWidth of the line.// Exception: for type=7 size is ignoredhighlightSize: 6, // size of the arrow head in case the element is highlighted. Default value is 6. }type=7 is the default for curves if lastArrow: true */
  lastArrow?: Boolean | Object
 /** This number (pixel value) controls where infinite lines end at the canvas border. If zero, the line ends exactly at the border, if negative there is a margin to the inside, if positive the line ends outside of the canvas (which is invisible). */
  margin?: Number
 /** Attributes for first defining point of the line. */
  point1?: PointAttributes
 /** Attributes for second defining point of the line. */
  point2?: PointAttributes
 /** Defines together with Point#snapSizeY the grid the point snaps on to. The point will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default x axes of the board. */
  snapSizeX?: Number
 /** Defines together with Point#snapSizeX the grid the point snaps on to. The point will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default y axes of the board. */
  snapSizeY?: Number
 /** If set to true, the point will snap to a grid defined by Point#snapSizeX and Point#snapSizeY. */
  snapToGrid?: Boolean
 /** If true, line stretches infinitely in direction of its first point. Otherwise it ends at point1. */
  straightFirst?: Boolean
 /** If true, line stretches infinitely in direction of its second point. Otherwise it ends at point2. */
  straightLast?: Boolean
 /** Attributes for ticks of the line. */
  ticks?: Object
 /** If set to true, Line#firstArrow is set to true and the point is visible, the arrow head will just touch the circle line of the start point of the line. */
  touchFirstPoint?: Boolean
 /** If set to true, Line#lastArrow is set to true and the point is visible, the arrow head will just touch the circle line of the start point of the line. */
  touchLastPoint?: Boolean
 }

 interface LineEqnAttributes extends LineAttributes {
 }

 interface Line3DAttributes extends GeometryElement3DAttributes {
 /** size of the point in pixelslabel for this item */
 size?:number
 /** is this point draggable? */
 fixed?:boolean
 }

 interface Plane3DAttributes extends GeometryElement3DAttributes {
 /**  */
  visible?: Boolean 
 }

 interface PointAttributes extends GeometryElementAttributes {
 /** If true, the infobox is shown on mouse/pen over, if false not. If the value is 'inherit', the value of JXG.Board#showInfobox is taken. true | false | 'inherit' */
  showInfobox?: Boolean|String
 /** If set to true, the point will snap to a grid of integer multiples of Point#snapSizeX and Point#snapSizeY (in user coordinates).The coordinates of the grid points are either integer multiples of snapSizeX and snapSizeY (given in user coordinates, not pixels) or are the intersection points of the major ticks of the boards default axes in case that snapSizeX, snapSizeY are negative. */
  snapToGrid?: Boolean
 /** This attribute was used to determined the point layout. It was derived from GEONExT and was replaced by Point#face and Point#size. */
  style?: Number
 }

 interface Point3DAttributes extends GeometryElement3DAttributes {
 /** Size in pixels */
 size?: Number|Function
 /** If true the element is fixed and can not be dragged around. The element will be repositioned on zoom and moveOrigin events. */
 fixed?: Boolean
 }

 interface PolygonAttributes extends GeometryElementAttributes {
 /** Attributes for the polygon border lines. */
  borders?: LineAttributes
 /** If true, moving the mouse over inner points triggers hasPoint. */
  hasInnerPoints?: Boolean
 /** By default, the strokewidths of the borders of a polygon are not changed during highlighting (only strokeColor and strokeOpacity are changed to highlightStrokeColor, and highlightStrokeOpacity). However, strokewidth is changed to highlightStrokewidth if an individual border gets the focus.With this attribute set to true, also the borders change strokeWidth if the polygon itself gets the focus. */
  highlightByStrokeWidth?: Boolean
 /** Attributes for the polygon label. */
  label?: LabelAttributes
 /** Attributes for the polygon vertices.  eg: {vertices: { opacity: 0 }} */
  vertices?: GeometryElementAttributes
 /** Is the polygon bordered by lines? */
  withLines?: Boolean
 }

 interface Polygon3DAttributes extends GeometryElement3DAttributes {
 }

 interface TextAttributes extends GeometryElementAttributes {
 /** Anchor element Point, Text or Image of the text. */
  anchor?: Object
 /** The horizontal alignment of the text. */
  anchorX?: String
 /** The vertical alignment of the text. */
  anchorY?: String
 /** List of attractor elements. */
  attractors?: Element[]
 /** CSS class of the text in non-highlighted view. */
  cssClass?: String
 /** Default CSS properties of the HTML text element. */
  cssDefaultStyle?: String
 /** CSS properties of the HTML text element. */
  cssStyle?: String
 /** Used to round texts given by a number. */
  digits?: Number
 /** Determines the rendering method of the text. */
  display?: "html"|"internal"
 /** Sensitive area for dragging the text. */
  dragArea?: String
 /** The font size in pixels. */
  fontSize?: Number
 /** CSS unit for the font size of a text element. */
  fontUnit?: String
 /** CSS class of the text in highlighted view. */
  highlightCssClass?: String
 /** Default CSS properties of the HTML text element in case of highlighting. */
  highlightCssDefaultStyle?: String
 /** CSS properties of the HTML text element in case of highlighting. */
  highlightCssStyle?: String
 /** Internationalization support for texts consisting of a number only. */
  intl?: object
 /** If enabled, the text will be handled as label. */
  isLabel?: Boolean
 /** Object or function returning an object that contains macros for KaTeX */
  katexMacros?: Object
 /** If set to true, the text is parsed and evaluated. */
  parse?: Boolean
 /** Text rotation in degrees. */
  rotate?: Number
 /** Defines together with Text#snapSizeY the grid the text snaps on to. */
  snapSizeX?: Number
 /** Defines together with Text#snapSizeX the grid the text snaps on to. */
  snapSizeY?: Number
 /** If true, the input will be given to ASCIIMathML before rendering. */
  useASCIIMathML?: Boolean
 /** If set to true and caja's sanitizeHTML function can be found it will be used to sanitize text output. */
  useCaja?: Boolean
 /** If true, KaTeX will be used to render the input string. */
  useKatex?: Boolean
 /** If true, MathJax will be used to render the input string. */
  useMathJax?: Boolean
 /** Control the attribute ”checked” of the HTML checkbox. */
  checked?: Boolean
 }

 interface Text3DAttributes extends GeometryElement3DAttributes {
 }

 interface TicksAttributes extends GeometryElementAttributes {
 /** Determine the position of the tick with value 0. 'left' means point1 of the line, 'right' means point2, and 'middle' is equivalent to the midpoint of the defining points. This attribute is ignored if the parent line is of type axis. */
  anchor?: String
 /** Format tick labels that were going to have scientific notation like 5.00e+6 to look like 5•10⁶. */
  beautifulScientificTickLabels?: Boolean
 /** If a label exceeds Ticks#maxLabelLength this determines the number of digits used to shorten the tick label. */
  digits?: Number
 /** Draw labels yes/no */
  drawLabels?: Boolean
 /** Draw the zero tick, that lies at line.point1? */
  drawZero?: Boolean
 /** A function that expects two JXG.Coords, the first one representing the coordinates of the tick that is to be labeled, the second one the coordinates of the center (the tick with position 0). The third parameter is a null, number or a string. In the latter two cases, this value is taken. Returns a string. */
  generateLabelText?: Function
 /** A function that expects two JXG.Coords, the first one representing the coordinates of the tick that is to be labeled, the second one the coordinates of the center (the tick with position 0). */
  generateLabelValue?: Function
 /** If true, ignore the tick endings attribute for infinite (full height) ticks. This affects major and minor ticks. */
  ignoreInfiniteTickEndings?: Boolean
 /** Whether line boundaries should be included or not in the lower and upper bounds when creating ticks. In mathematical terms: if a segment considered as interval is open (includeBoundaries:false) or closed (includeBoundaries:true). In case of open interval, the interval is shortened by a small ε. */
  includeBoundaries?: Boolean
 /** Let JSXGraph determine the distance between ticks automatically. If true, the attribute ticksDistance is ignored. The distance between ticks is affected by the size of the board and the attribute minTicksDistance (in pixel). */
  insertTicks?: Boolean
 /** Internationalization support for ticks labels. */
  intl?: Object
 /** Attributes for the ticks labels */
  label?: LabelAttributes
 /** User defined labels for special ticks. Instead of the i-th tick's position, the i-th string stored in this array is shown. If the number of strings in this array is less than the number of special ticks, the tick's position is shown as a fallback. */
  labels?: String[]
 /** Total height of a major tick. If negative the full height of the board is taken. */
  majorHeight?: Number
 /** Decides in which direction major ticks are visible. Possible values are either the constants 0=false or 1=true or a function returning 0 or 1.In case of [0,1] the tick is only visible to the right of the line. In case of [1,0] the tick is only visible to the left of the line. */
  majorTickEndings?: [Number,Number]
 /** The maximum number of characters a tick label can use. */
  maxLabelLength?: Number
 /** Total height of a minor tick. If negative the full height of the board is taken. */
  minorHeight?: Number
 /** The number of minor ticks between two major ticks. */
  minorTicks?: Number
 /** Minimum distance in pixel of equidistant ticks in case insertTicks==true. */
  minTicksDistance?: Number
 /** Scale the ticks but not the tick labels. */
  scale?: Number
 /** A string that is appended to every tick, used to represent the scale factor given in Ticks#scale. */
  scaleSymbol?: String
 /** Decides in which direction minor ticks are visible. Possible values are either the constants 0=false or 1=true or a function returning 0 or 1.In case of [0,1] the tick is only visible to the right of the line. In case of [1,0] the tick is only visible to the left of the line. */
  tickEndings?: [Number,Number]
 /** The default distance (in user coordinates, notpixels) between two ticks. Please be aware that this value does not have to be used if Ticks#insertTicks is set to true. */
  ticksDistance?: Number
 /** By default, i.e. if ticksPerLabel==false, labels are generated for major ticks, only. If ticksPerLabel is set to a(n integer) number, this denotes the number of minor ticks between two labels. */
  ticksPerLabel?: String
 /** Set the ticks type. Possible values are 'linear' or 'polar'. */
  type?: String
 /** Use the unicode character 0x2212, i.e. the HTML entity &minus; as minus sign. That is −1 instead of -1. */
  useUnicodeMinus?: Boolean
 }

 interface TurtleAttributes extends GeometryElementAttributes {
 /** Attributes for the turtle arrow. */
  arrow?: Curve
 }

 interface SectorAttributes extends CurveAttributes {
 /** Attributes for helper point anglepoint in case it is provided by coordinates. */
  anglePoint?: PointAttributes
 /** Attributes for sub-element arc. It is only available, if the sector is defined by three points. */
  arc?: Arc
 /** Attributes for helper point center in case it is provided by coordinates. */
  center?: PointAttributes
 /** Attributes for the sector label. */
  label?: LabelAttributes
 /** Attributes for helper point radiuspoint in case it is provided by coordinates. */
  radiusPoint?: PointAttributes
 /** Type of sector. Possible values are 'minor', 'major', and 'auto'. */
  selection?: String
 }

 interface VectorfieldAttributes extends CurveAttributes {
 /** Customize arrow heads of vectors. Be careful! If enabled this will slow down the performance. Fields are:enabled: Booleansize: length of the arrow head legs (in pixel)angle: angle of the arrow head legs In radians. */
  arrowhead?: Object
 /** Scaling factor of the vectors. This in contrast to slope fields, where this attribute sets the vector to the given length. */
  scale?: Object
 }

 interface AngleAttributes extends SectorAttributes {
 /** Attributes for sub-element arc. In general, the arc will run through the first point and thus will not have the same radius as the angle sector. */
  arc?: Arc
 /** Attributes of the dot point marking right angles. */
  dot?: Object
 /** Sensitivity (in degrees) to declare an angle as right angle. If the angle measure is inside this distance from a rigth angle, the orthoType of the angle is used for display. */
  orthoSensitivity?: Number
 /** Display type of the angle field in case of a right angle. Possible values are 'sector' or 'sectordot' or 'square' or 'none'. */
  orthoType?: String
 /**  */
  pointsquare?: Object
 /** Radius of the sector, displaying the angle. The radius can be given as number (in user coordinates) or as string 'auto'. In the latter case, the angle is set to an value between 20 and 50 px. */
  radius?: Number
 /**  */
  radiuspoint?: Object
 /** Display type of the angle field. Possible values are 'sector' or 'sectordot' or 'square' or 'none'. */
  type?: String
 }

 interface ArcAttributes extends CurveAttributes {
 /** Attributes for angle point. */
  anglePoint?: Point
 /** Attributes for center point. */
  center?: Point
 /** If true, moving the mouse over inner points triggers hasPoint. */
  hasInnerPoints?: Boolean
 /** Attributes for radius point. */
  radiusPoint?: Point
 /** Type of arc. Possible values are 'minor', 'major', and 'auto'. */
  selection?: String
 }

 interface ArrowAttributes extends LineAttributes {
 }

 interface ParallelAttributes extends LineAttributes {
 /** Attributes of helper point of normal. */
  point?: Point
 }

 interface ArrowparallelAttributes extends ParallelAttributes {
 }

 interface AxisAttributes extends LineAttributes {
 /** Attributes for the axis label. */
  label?: LabelAttributes
 /** Attributes for first point the axis. */
  point1?: LineAttributes
 /** Attributes for second point the axis. */
  point2?: LineAttributes
 /** Attributes for ticks of the axis. */
  ticks?: TicksAttributes
 }

 interface BisectorAttributes extends LineAttributes {
 /** Attributes for the helper point of the bisector. */
  point?: Point
 }

 interface BisectorlinesAttributes extends CompositionAttributes {
 /** Attributes for first line. */
  line1?: Line
 /** Attributes for second line. */
  line2?: Line
 }

 interface ButtonAttributes extends TextAttributes {
 /** Control the attribute ”disabled” of the HTML button. */
  disabled?: Boolean
 }

 interface CardinalsplineAttributes extends CurveAttributes {
 /** Controls if the data points of the cardinal spline when given as arrays should be converted into JXG.Points. */
  createPoints?: Boolean
 /** If set to true, the supplied coordinates are interpreted as [[x_0, y_0], [x_1, y_1], p, ...]. Otherwise, if the data consists of two arrays of equal length, it is interpreted as [[x_o x_1, ..., x_n], [y_0, y_1, ..., y_n]] */
  isArrayOfCoordinates?: Boolean
 /** Attributes for the points generated by Cardinalspline in cases createPoints is set to true */
  points?: Object
 }

 interface CheckboxAttributes extends TextAttributes {
 /** Control the attribute ”checked” of the HTML checkbox. */
  checked?: Boolean
 /** Control the attribute ”disabled” of the HTML checkbox. */
  disabled?: Boolean
 }

 interface CircumcenterAttributes extends PointAttributes {
 }

 interface CircumcircleAttributes extends CircleAttributes {
 /** Attributes for center point. */
  center?:  GeometryElementAttributes
 }

 interface CircumcircleArcAttributes extends ArcAttributes {
 /** Attributes for center point. */
  center?: Point
 }

 interface CircumcircleSectorAttributes extends SectorAttributes {
 }

 interface CombAttributes extends CurveAttributes {
 /** Angle - given in radians - under which comb elements are positioned. */
  angle?: Number
 /** Frequency of comb elements. */
  frequency?: Number
 /** Attributes for first defining point of the comb. */
  point1?: LineAttributes
 /** Attributes for second defining point of the comb. */
  point2?: LineAttributes
 /** Should the comb go right to left instead of left to right. */
  reverse?: Boolean
 /** Width of the comb. */
  width?: Number
 }

 interface ConicAttributes extends CurveAttributes {
 /** Attributes for center point. */
  center?: Point
 /** Attributes for foci points. */
  foci?: Point
 /** Attributes for parabola line in case the line is given by two points or coordinate pairs. */
  line?: Line
 /** Attributes for five points defining the conic, if some of them are given as coordinates. */
  point?: Point
 }

 interface CurveDifferenceAttributes extends CurveAttributes {
 }

 interface CurveIntersectionAttributes extends CurveAttributes {
 }

 interface CurveUnionAttributes extends CurveAttributes {
 }

 interface DerivativeAttributes extends CurveAttributes {
 }

 interface EllipseAttributes extends ConicAttributes {
 }

 interface ParametricSurface3DAttributes extends Curve3DAttributes {
 /** Number of intervals the mesh is divided into in direction of parameter u. */
  stepsU?: Number
 /** Number of intervals the mesh is divided into in direction of parameter v. */
  stepsV?: Number
 }

 interface Face3DAttributes extends GeometryElement3DAttributes {
 }

 interface FunctiongraphAttributes extends CurveAttributes {
 }

 interface Functiongraph3DAttributes extends Curve3DAttributes {
 }

 interface GliderAttributes extends PointAttributes {
 }

 interface Glider3DAttributes extends Point3DAttributes {
 }

 interface GridAttributes extends CurveAttributes {
 /** Include the the zero line in the grid */
 drawZero?: Boolean
 /** Include the the boundary lines in the grid */
 includeBoundaries?: Boolean
 /** Attributes for Major Grid Elements */
 major?: GeometryElementAttributes
 /** Attributes for Minor Grid Elements */
 minor?: GeometryElementAttributes
 /** Number of elements in minor grid between elements of the major grid. */
 minorElements?: Number|'auto'
 /**  */
  snapSizeX?: Boolean
 /**  */
  snapSizeY?: Boolean
 /**  */
  snapToGrid?: Boolean
 }

 interface HatchAttributes extends TicksAttributes {
 }

 interface HyperbolaAttributes extends ConicAttributes {
 }

 interface IncenterAttributes extends PointAttributes {
 }

 interface IncircleAttributes extends CircleAttributes {
 /** Attributes of circle center. */
  center?:  GeometryElementAttributes
 }

 interface InequalityAttributes extends CurveAttributes {
 /** By default an inequality is less (or equal) than. Set inverse to true will consider the inequality greater (or equal) than. */
  inverse?: Boolean
 }

 interface InputAttributes extends TextAttributes {
 /** Control the attribute ”disabled” of the HTML input field. */
  disabled?: Boolean
 /** Control the attribute ”maxlength” of the HTML input field. */
  maxlength?: Number
 }

 interface IntegralAttributes extends CurveAttributes {
 /** Attributes of the (left) base point of the integral. */
  baseLeft?: Point
 /** Attributes of the (right) base point of the integral. */
  baseRight?: Point
 /** Attributes of the (left) starting point of the integral. */
  curveLeft?: Point
 /** Attributes of the (right) end point of the integral. */
  curveRight?: Point
 /** Attributes for integral label. */
  label?: LabelAttributes
 }

 interface IntersectionAttributes extends PointAttributes {
 /**  */
  alwaysIntersect?: Boolean
 }

 interface LabelAttributes extends TextAttributes {
 }

 interface LocusAttributes extends CurveAttributes {
 }

 interface MajorArcAttributes extends CurveAttributes {
 }

 interface MajorSectorAttributes extends CurveAttributes {
 }

 interface MetapostsplineAttributes extends CurveAttributes {
 /** Controls if the data points of the cardinal spline when given as arrays should be converted into JXG.Points. */
  createPoints?: Boolean
 /** If set to true, the supplied coordinates are interpreted as [[x_0, y_0], [x_1, y_1], p, ...]. Otherwise, if the data consists of two arrays of equal length, it is interpreted as [[x_o x_1, ..., x_n], [y_0, y_1, ..., y_n]] */
  isArrayOfCoordinates?: Boolean
 /** Attributes for the points generated by Metapost spline in cases createPoints is set to true */
  points?: Object
 }

 interface MidpointAttributes extends PointAttributes {
 }

 interface MinorArcAttributes extends CurveAttributes {
 }

 interface MinorSectorAttributes extends CurveAttributes {
 }

 interface mirrorelementAttributes extends GeometryElementAttributes {
 /** Attributes of circle center, i.e. the center of the circle, if a circle is the mirror element and the transformation type is 'Euclidean' */
  center?: Point
 /** Attributes of mirror point, i.e. the point along which the element is mirrored. */
  point?: Point
 /** Type of transformation. Possible values are 'Euclidean', 'projective'.If the value is 'Euclidean', the mirror element of a circle is again a circle, otherwise it is a conic section. */
  type?: String
 }

 interface MirrorpointAttributes extends PointAttributes {
 }

 interface NonReflexAngleAttributes extends AngleAttributes {
 }

 interface NormalAttributes extends LineAttributes {
 /** Attributes of helper point of normal. */
  point?: Point
 }

 interface OrthogonalprojectionAttributes extends PointAttributes {
 }

 interface OtherIntersectionAttributes extends PointAttributes {
 }

 interface ParabolaAttributes extends ConicAttributes {
 }

 interface ParallelpointAttributes extends PointAttributes {
 }

 interface SegmentAttributes extends LineAttributes {
 }

 interface ParallelogramAttributes extends PolygonAttributes {
 /** Attributes of helper point of normal. */
  parallelpoint?: DisplayPoint
 }

 interface PerpendicularAttributes extends SegmentAttributes {
 }

 interface PerpendicularPointAttributes extends PointAttributes {
 }

 interface PerpendicularSegmentAttributes extends SegmentAttributes {
 }

 interface PolarLineAttributes extends LineAttributes {
 }

 interface PolePointAttributes extends PointAttributes {
 }

 interface PolygonalChainAttributes extends PolygonAttributes {
 }

 interface Polyhedron3DAttributes extends GeometryElement3DAttributes {
 /** Opacity of each face. */
  fillOpacity?: number
 /** Array of face colors. */
  fillColorArray?: string[]
 }

 interface RadicalAxisAttributes extends LineAttributes {
 }

 interface ReflectionAttributes extends GeometryElementAttributes {
 /** Type of transformation. Possible values are 'Euclidean', 'projective'.If the value is 'Euclidean', the reflected element of a circle is again a circle, otherwise it is a conic section. */
  type?: String
 }

 interface ReflexAngleAttributes extends AngleAttributes {
 }

 interface RegularPolygonAttributes extends PolygonAttributes {
 /** Attributes for the polygon border lines. */
  borders?: LineAttributes
 /** If true, moving the mouse over inner points triggers hasPoint. */
  hasInnerPoints?: Boolean
 /** Attributes for the polygon vertices.   eg: {vertices: { opacity: 0 }}, */
  vertices?: GeometryElementAttributes
 /** Is the polygon bordered by lines? */
  withLines?: Boolean
 }

 interface RiemannsumAttributes extends CurveAttributes {
 }

 interface SemicircleAttributes extends ArcAttributes {
 /** Attributes for center point of the semicircle. */
  center?: Point
 }

 interface SliderAttributes extends GliderAttributes {
 /** If the difference between the slider value and one of the elements of snapValues is less than this number (in user coordinate units), the slider will snap to that value. */
 stepWidth?: Number
 /** Attributes for the base line of the slider. */
  baseline?: GeometryElementAttributes
 /** Attributes for the highlighting line of the slider. */
  highline?: GeometryElementAttributes
 /** The number of digits of the slider value displayed in the optional text. */
  digits?: Number
 /** Internationalization support for slider labels. */
  intl?: object
 /** Attributes for the slider label. */
  label?: LabelAttributes
 /** If true, 'up' events on the baseline will trigger slider moves. */
  moveOnUp?: Boolean
 /** Attributes for first (left) helper point defining the slider position. */
  point1?: LineAttributes
 /** Attributes for second (right) helper point defining the slider position. */
  point2?: LineAttributes
 /** If not null, this is appended to the value and to unitLabel in the slider label. Possible types: string, number or function. */
  postLabel?: String
 /** Size of slider point. */
  size?: Number
 /** If the difference between the slider value and one of the elements of snapValues is less than this number (in user coordinate units), the slider will snap to that value. */
  snapValueDistance?: Number
 /** List of values to snap to. If the glider is within snapValueDistance (in user coordinate units) of one of these points, then the glider snaps to that point. */
  snapValues?: [Number,Number]
 /** The slider only returns integer multiples of this value, e.g. for discrete values set this property to 1. For continuous results set this to -1. */
  snapWidth?: Number
 /** If not null, this replaces the part ”name = ” in the slider label. Possible types: string, number or function. */
  suffixLabel?: String
 /** Attributes for the ticks of the base line of the slider. */
  ticks?: TicksAttributes
 /** If not null, this is appended to the value in the slider label. Possible types: string, number or function. */
  unitLabel?: String
 /** Show slider label. */
  withLabel?: Boolean
 /** Show slider ticks. */
  withTicks?: Boolean
 }

 interface SlopefieldAttributes extends VectorfieldAttributes {
 /** Customize arrow heads of vectors. Be careful! If enabled this will slow down the performance. Fields are:enabled: Booleansize: length of the arrow head legs (in pixel)angle: angle of the arrow head legs In radians. */
  arrowhead?: Object
 /** Set length of the vectors in user coordinates. This in contrast to vector fields, where this attribute just scales the vector. */
  scale?: Object
 }

 interface SlopetriangleAttributes extends LineAttributes {
 /** Attributes for the base line. */
  baseline?: Line
 /** Attributes for the base point. */
  basepoint?: Point
 /** Attributes for the gliding helper point. */
  glider?: Point
 /** Attributes for the slope triangle label. */
  label?: LabelAttributes
 /** Attributes for the tangent. The tangent is constructed by slop triangle if the construction is based on a glider, solely. */
  tangent?: Line
 /** Attributes for the top point. */
  toppoint?: Point
 }

 interface SmartlabelAttributes extends TextAttributes {
 /** CSS classes for the smart label. Available classes are:'smart-label-solid''smart-label-outline''smart-label-pure'By default, an additional class is given specific for the element type. Available classes are 'smart-label-angle', 'smart-label-circle', 'smart-label-line', 'smart-label-point', 'smart-label-polygon'. */
  cssClass?: String
 /** Display of point coordinates either as row vector or column vector. Available values are 'row' or 'column'. */
  dir?: String
 /** CSS classes for the smart label when highlighted. */
  highlightCssClass?: String
 /** Type of measurement. Available values are: 'deg', 'rad' for angles'area', 'perimeter', 'radius' for circles'length', 'slope' for lines'area', 'perimeter' for polygonsDependent on this value, i.e. the type of measurement, the label is positioned differently on the object. */
  measure?: String
 /** Prefix text for the smartlabel. Comes before the measurement value. */
  prefix?: String
 /** Suffix text for the smartlabel. Comes after unit. */
  suffix?: String
 /** Measurement unit appended to the output text. For areas, the unit is squared automatically. Comes directly after the measurement value. */
  unit?: String
 }

 interface Sphere3DAttributes extends GeometryElement3DAttributes {
 }

 interface SplineAttributes extends CurveAttributes {
 }

 interface StepfunctionAttributes extends CurveAttributes {
 }

 interface TangentAttributes extends LineAttributes {
 }

 interface tangentToAttributes extends LineAttributes {
 /** Attributes for the intersection point of the conic/circle with the polar line of the tangentTo construction. */
  point?: PointAttributes
 /** Attributes for the polar line of the tangentTo construction. */
  polar?: PolarLineAttributes
 }

 interface TapemeasureAttributes extends SegmentAttributes {
 /** The precision of the tape measure value displayed in the optional text. */
  digits?: Number
 /** Attributes for the tape measure label. */
  label?: LabelAttributes
 /** Attributes for first helper point defining the tape measure position. */
  point1?: LineAttributes
 /** Attributes for second helper point defining the tape measure position. */
  point2?: LineAttributes
 /** The precision of the tape measure value displayed in the optional text. Replaced by the attribute digits */
  precision?: Number
 /** Text rotation in degrees. */
  rotate?: Number
 /** Attributes for the ticks of the tape measure. */
  ticks?: Ticks
 /** Show tape measure label. */
  withLabel?: Boolean
 /** Show tape measure ticks. */
  withTicks?: Boolean
 }

 interface TracecurveAttributes extends CurveAttributes {
 /** The number of evaluated data points. */
  numberPoints?: Number
 }

 interface TransformAttributes extends GeometryElementAttributes {
 }

 interface TransformPointAttributes extends PointAttributes {
 }

 interface View3DAttributes extends GeometryElement3DAttributes {
 /** Choose the projection type to be used: `parallel` or `central`. `parallel` is parallel projection, also called orthographic projection.   `central` is central projection, also called perspective projection */
 projection?: `parallel`|`central`
 /** Specify the user handing of the azimuth. */
 az?: screenControls
 /** Specify the user handing of the bank angle. */
 bank?: screenControls
 /** Specify the user handing of the elevation. */
 el?: screenControls
 /** Support occlusion by ordering points? */
 depthorderpoints?: Boolean
 /** use {enable:true, layers:[12]} */
 depthOrder?: Object
 /** Position of the main axes in a View3D element. Possible values are 'center' and 'border'. */
 axesPosition?: String
 /** Allow vertical dragging of objects, i.e. in direction of the z-axis. Subobjects areenabled: truekey: 'shift'Possible values for attribute key: 'shift' or 'ctrl'. */
 verticalDrag?: Object
 /** Attributes of the 3D x-axis. */
 xAxis?: Object
 /** Attributes of the 3D plane orthogonal to the x-axis at the ”front” of the cube. */
 xPlaneFront?: Object
 /** Attributes of the 3D y-axis on the 3D plane orthogonal to the x-axis at the ”front” of the cube. */
 xPlaneFrontYAxis?: Object
 /** Attributes of the 3D z-axis on the 3D plane orthogonal to the x-axis at the ”front” of the cube. */
 xPlaneFrontZAxis?: Object
 /** Attributes of the 3D plane orthogonal to the x-axis at the ”rear” of the cube. */
 xPlaneRear?: Object
 /** Attributes of the 3D y-axis on the 3D plane orthogonal to the x-axis at the ”rear” of the cube. */
 xPlaneRearYAxis?: Object
 /** Attributes of the 3D z-axis on the 3D plane orthogonal to the x-axis at the ”rear” of the cube. */
 xPlaneRearZAxis?: Object
 /** Attributes of the 3D y-axis. */
 yAxis?: Line3D
 /** Attributes of the 3D plane orthogonal to the y-axis at the ”front” of the cube. */
 yPlaneFront?: Object
 /** Attributes of the 3D x-axis on the 3D plane orthogonal to the y-axis at the ”front” of the cube. */
 yPlaneFrontXAxis?: Object
 /** Attributes of the 3D z-axis on the 3D plane orthogonal to the y-axis at the ”front” of the cube. */
 yPlaneFrontZAxis?: Object
 /** Attributes of the 3D plane orthogonal to the y-axis at the ”rear” of the cube. */
 yPlaneRear?: Object
 /** Attributes of the 3D x-axis on the 3D plane orthogonal to the y-axis at the ”rear” of the cube. */
 yPlaneRearXAxis?: Object
 /** Attributes of the 3D z-axis on the 3D plane orthogonal to the y-axis at the ”rear” of the cube. */
 yPlaneRearZAxis?: Object
 /** Attributes of the 3D z-axis. */
 zAxis?: Line3D
 /** Attributes of the 3D plane orthogonal to the z-axis at the ”front” of the cube. */
 zPlaneFront?: Object
 /** Attributes of the 3D x-axis on the 3D plane orthogonal to the z-axis at the ”front” of the cube. */
 zPlaneFrontXAxis?: Object
 /** Attributes of the 3D y-axis on the 3D plane orthogonal to the z-axis at the ”front” of the cube. */
 zPlaneFrontYAxis?: Object
 /** Attributes of the 3D plane orthogonal to the z-axis at the ”rear” of the cube. */
 zPlaneRear?: Object
 /** Attributes of the 3D x-axis on the 3D plane orthogonal to the z-axis at the ”rear” of the cube. */
 zPlaneRearXAxis?: Object
 /** Attributes of the 3D y-axis on the 3D plane orthogonal to the z-axis at the ”rear” of the cube. */
 zPlaneRearYAxis?: Object
 }

 interface TranslateAttributes extends TransformAttributes {
 }

 interface RotateAttributes extends TransformAttributes {
 }

 interface ScaleAttributes extends TransformAttributes {
 }

        type NumberFunction = Number|Function

        /** A 'point' has a position in space.  The only characteristic that distinguishes one point from another is its position. */
        type pointAddr =  NumberFunction[] | [number,number] |[number,Function]|[Function,number]|[Function|Function] // allow tuples or arrays


        type line  = [Point|pointAddr,Point|pointAddr]


        // to define 'matAny' (eg: 2x3 array) we need three steps
        type arrayNumber = Number[]
        type arrayNumber2 = arrayNumber|Number
        type matAny = arrayNumber2[]



        interface MoveToOptions{
           callback?:Function,
           effect?: "==" | "<>" | "--" | "<" | ">",
           repeat?:number
        }

        ///////////////////////////////////////////
        ///////  stuff for View3D elevation controls
        interface pointerControls{
            /**  specifies whether pointer navigation is allowed by elevation. */
            enabled?:Boolean,
            /** Number indicating how many passes the range of the el_slider makes when the cursor crosses the entire board once in the horizontal direction.*/
            speed?: number,
            /** specifies whether the pointer navigation is continued when the cursor leaves the board. */
            outside?: Boolean,
            /** Which button of the pointer should be used? ('-1' (=no button), '0' or '2') */
            button?: '-1'|'0'|'2'
            /** Should an additional key be pressed? ('none', 'shift' or 'ctrl') */
            key?: 'none'|'shift'|'ctrl'
        }
        interface keyboardControls{
           /** specifies whether the keyboard (arrow keys) can be used to navigate the board.*/
           enabled?: Boolean
           /** Size of the step per keystroke. */
           step?: number
            /** Should an additional key be pressed? ('none', 'shift' or 'ctrl') */
            key?: 'none'|'shift'|'ctrl'
        }
        interface sliderControls extends SliderAttributes{
            min?: number, // Minimum value.
            max?: number,  //Maximum value.
            start?: number, //Start value.
        }

        interface screenControls{
            /** an object */
           pointer?: pointerControls,
            /** an object */
           keyboard?: keyboardControls,
           continuous?:Boolean,
            /** an object */
           slider?: sliderControls,
        }
        ////////  end View3D elevation controls
        //////////////////////////////////////////

        // there is no constructor for labels, but we need the attributes anyhow for Tick, etc.
        interface LabelAttributes extends TextAttributes{
            /** Automatic position of label text.*/
            autoPosition?:Boolean
            /** The auto position algorithm tries to put a label to a conflict-free position around it's anchor element. */
            autoPositionMaxDistance?:Number
            /** The auto position algorithm tries to put a label to a conflict-free position around it's anchor element.*/
            autoPositionMinDistance?:Number
            /** Label offset from label anchor. */
            offset?: [Number,Number]
            /** Possible string values for the position of a label for label anchor points.  First and Last are only for lines. */
            position?: 'first'|'last'|'lft'|'rt'|'top'|'bot'|'ulft'|'urt'|'llft'|'lrt'
            anchorX?: 'left'|'middle'|'right',
            anchorY?: 'top'|'middle'|'bottom',
            toFraction?: Boolean,
            useMathjax?: Boolean,

        }

        interface DisplayPoint extends ParallelpointAttributes{
            size?:Number
            face?: 'cross'| 'plus' | 'minus' | 'divide'| 'diamond'| 'triangledown' | 'triangleleft' | 'triangleright'| 'triangleup' | 'square' |'circle'

        }

        interface VertexAttributes{
            visible?:Boolean
        }

        interface PanAttributes{
            enabled?: Boolean
            throttle?: number
            needTwoFingers?:Boolean
        }


        // utility function for determining whether an object is a JSX object (or part of this wrapper)
        function isJSXAttribute(maybe:any):Boolean{
            return (typeof (maybe) == 'object' && !Array.isArray(maybe) && !('elValue' in maybe) && !('elType' in maybe))
        }


        /**
        *  Constant: user coordinates relative to the coordinates system defined by the bounding box.
        */
       const COORDS_BY_USER= 0x0001
       /**
        *  Constant: screen coordinates in pixel relative to the upper left corner of the div element.
        */
       const COORDS_BY_SCREEN= 0x0002


       interface JSXMathAttributes {
       }

        interface InitBoardAttributes {
           /** Time (in msec) between two animation steps. */
           animationDelay?: Number
           /** Show default axis. */
           axis?: boolean
           /** Bounding box of the visible area in user coordinates. [left,top,right,bottom] eg: [-5,5,5,-5] */
           boundingbox?:[Number,Number,Number,Number]
           /** Enable browser scrolling on touch interfaces if the user double taps into an empty region of the board. */
           browserPan?: Boolean
           /** Attributes for the default axes in case of the attribute axis:true in JXG.JSXGraph#initBoard. */
           defaultAxes?: {x?:AxisAttributes,y?:AxisAttributes}
           /** if grid true, then draw the zeroGrid? */
           drawZero?: Boolean,
           /** speed optimization.  value should be 'svg' */
           minimizeReflow?: string,

        //    /** Description string for the board. */
        //    description?: String
        //    /** Supply the document object. */
        //    document?: String
        //    /** Control the possibilities for dragging objects. */
        //    drag?: Object
           /** Attribute(s) to control the fullscreen icon. */
           fullscreen?: Object
           /** Show grid? */
           grid?: Boolean
        //    /** If set true and hasPoint() is true for both an element and it's label, the element (and not the label) is taken as drag element. */
        //    ignoreLabels?: Boolean
        //    /** Support for internationalization of number formatting. */
        //    intl?: Object
           /** If set to true, the ratio between horizontal and vertical unit sizes stays constant - independent of size changes of the hosting HTML div element.
            * 

 true is useful for keeping circles round, but may keep you from setting the boundingbox you desire"
           */
           keepAspectRatio?: Boolean
        //    /** Control using the keyboard to change the construction. */
        //    keyboard?: Object
        //    /** If enabled, user activities are logged in array "board.userLog". */
        //    logging?: Boolean
        //    /** Maximal bounding box of the visible area in user coordinates. */
        //    maxBoundingBox?: [Number,Number,Number,Number]
           /** Maximum frame rate of the board, i.e. */
           maxFrameRate?: Number
        //    /** Maximum number of digits in automatic label generation. */
        //    maxNameLength?: Number
        //    /** Change redraw strategy in SVG rendering engine. */
        //    moveTarget?: Object
        //    /** A number that will be added to the absolute position of the board used in mouse coordinate calculations in JXG.Board#getCoordsTopLeftCorner. */
        //    offsetX?: Number
        //    /** A number that will be added to the absolute position of the board used in mouse coordinate calculations in JXG.Board#getCoordsTopLeftCorner. */
        //    offsetY?: Number
           /** Control the possibilities for panning interaction (i.e. */
           pan?: PanAttributes
           /** Allow user interaction by registering mouse, pointer, keyboard or touch events. */
           registerEvents?: Object
           /** Listen to fullscreen event. */
           registerFullscreenEvent?: Boolean
           /** Listen to resize events, i.e. */
           registerResizeEvent?: Boolean
           /** Control if JSXGraph reacts to resizing of the JSXGraph container element by the user / browser. */
           resize?: PanAttributes
        //    /** Attributes to control the screenshot function. */
        //    screenshot?: Object
        //    /** Control the possibilities for a selection rectangle. */
        //    selection?: Object
        //    /** Show a button which allows to clear all traces of a board. */
        //    showClearTraces?: Boolean
           /** Show copyright string in canvas. */
           showCopyright?: Boolean
           /** Show a button in the navigation bar to start fullscreen mode. */
           showFullscreen?: Boolean
           /** If true, the infobox is shown on mouse/pen over for all points which have set their attribute showInfobox to 'inherit'. */
           showInfobox?: Boolean
           /** Display of navigation arrows and zoom buttons in the navigation bar. */
           showNavigation?: Boolean
           /** Show a button in the navigation bar to force reload of a construction. */
           showReload?: Boolean
           /** Show a button in the navigation bar to enable screenshots. */
           showScreenshot?: Boolean
           /** Display of zoom buttons in the navigation bar. */
           showZoom?: Boolean
           /** set a visual theme for the board */
           theme?: String
        //    /** If true the first element of the set JXG.board.objects having hasPoint==true is taken as drag element. */
        //    takeFirst?: Number
        //    /** If true, when read from a file or string - the size of the div can be changed by the construction text. */
        //    takeSizeFromFile?: Number
        //    /** Title string for the board. */
        //    title?: String
           /** Control the possibilities for zoom interaction. */
           zoom?: PanAttributes
        //    /** Zoom factor in horizontal direction. */
        //    zoomX?: Number
        //    /** Zoom factor in vertical direction. */
        //    zoomY?: Number
    }


        export class JSXMath{
            static board:TSXBoard

        }


        ///// some math classes by hand
        export class IntervalArithmetic{
        }
        export class PolyMonomial{
        }
        export class PolyPolynomial{
        }
        export class Symbolic{
        }


            /** JSXGraph library wrapped in TypeScript */
            export class TSXGraph{

            // this is the 'alternative mixins' pattern for TypeScript

        /** use this to create mixins in Typescript.  Each mixin is a traditional ES class,
         *  For example, to add classes Jumpable and Duckable to class Sprite, you add
         * an interface which merges the expected mixins using the same name as your base, and
         * then apply the mixins at runtime.
        ```js
        class Jumpable {  jump() {}  }
        class Duckable {  duck() {}  }
        class Sprite { x = 0; y = 0; }   // base class
        interface Sprite extends Jumpable, Duckable {}
        TXG.TSXGraph.applyMixins(Sprite, [Jumpable, Duckable]);

        let s = new Sprite()  // now includes methods from mixins
        s.jump();
        ~~~
                 */
                static applyMixins(derivedCtor: any, constructors: any[]):void {
                    constructors.forEach((baseCtor) => {
                      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
                        Object.defineProperty(
                          derivedCtor.prototype,
                          name,
                          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                            Object.create(null)
                        );
                      });
                    });
                  }





            static defaultAttrs:Object = {name:''}

            /** Initialize a new board. The first parameter 'html' should be the ID of a <DIV> in your web page.


             * ```js
<div id="jxgbox" class="jxgbox" style="width:1000px; height:1000px;float:left;"></div>
<script src="lunar.js" type="module" defer>  </script>

// start your .ts with something like this
import { TXG } from "../src/tsxgraph.js";
const board = TXG.TSXGraph.initBoard('jxgbox', { axis: true });
```
            */
            static initBoard(html: string, attributeObj:InitBoardAttributes={}): TSXBoard {

                   const newBoard = new TSXBoard()

                   // add some defaults that we prefer
                   if (!('resize' in attributeObj))
                       attributeObj['resize'] = {enabled: true, throttle: 200}

                   newBoard.board = (window as any).JXG.JSXGraph.initBoard(html, attributeObj) as unknown as TSXBoard
                   JSXMath.board = newBoard.board  // make a copy for JSXMath and its decendents
                   return newBoard
            }


            // /** Delete a board and all its contents. */
            static freeBoard(board: TSXBoard): void {
                (window as any).JXG.JSXGraph.freeBoard(board)
            }

            // /** set Katex as default for board (names, labels, everything).  useKatex() need only be set ONCE, no way to unset. the text element has a 'useKatex' attribute that lets you turn Katex on and off for individual text fields.
            // * ```js
            // *     TSX.useKatex()
            // * ```
            // */
            // static useKatex(){
            //     (window as any).JXG.Options.text.useKatex = true;
            // }

            // utility to dereference parameter- if they use TSXGraph objects then  use the JSXGraph objects instead
            static dereference(params: any|any[]): any[] {
                let ret:any
                if(Array.isArray(params)){
                    ret = params.map((x) => (typeof x == 'object' && x.hasOwnProperty('elValue')) ? x.elValue : x)
                }else{
                    ret = (typeof params == 'object' && params.hasOwnProperty('elValue')) ? params.elValue : params
                }
                return ret
            }


            // add in any default attributes
            static defaultAttributes(attrs:Object){
                for (const property in TSXGraph.defaultAttrs) {
                    if (!attrs.hasOwnProperty(property)) {   // if the user has not specified a value for this property
                        (attrs as any)[property] = (TSXGraph.defaultAttrs as any)[property]
                    }
                }


                // if the user specifies the attribute 'labeled', then use it instead of 'name'
                if((attrs.hasOwnProperty('labeled'))){
                    (attrs as any).name = (attrs as any).labeled
                    }
                if((attrs.hasOwnProperty('labelled'))){      // also brit spelling?
                    (attrs as any).name = (attrs as any).labelled
                }

                // console.log(attrs)
                return attrs
            }



        }

        export type spaceIcon =
            'icons/alien-1.png' |
            'icons/alien-2.png' |
            'icons/alien-3.png' |
            'icons/alien-4.png' |
            'icons/alien-5.png' |
            'icons/alien-abduction.png' |
            'icons/alien-ship-2.png' |
            'icons/alien-ship-beam.png' |
            'icons/alien-ship.png' |
            'icons/asteroid-2.png' |
            'icons/asteroid.png' |
            'icons/astronaut-helmet.png' |
            'icons/atom.png' |
            'icons/atronaut.png' |
            'icons/bb-8.png' |
            'icons/big-dipper.png' |
            'icons/black-hole.png' |
            'icons/brain-slug.png' |
            'icons/cassiopeia.png' |
            'icons/chewbacca.png' |
            'icons/comet.png' |
            'icons/cylon-raider.png' |
            'icons/darth-vader.png' |
            'icons/death-star.png' |
            'icons/earth.png' |
            'icons/falling-asteroid.png' |
            'icons/falling-space-capsule.png' |
            'icons/falling-star.png' |
            'icons/flag.png' |
            'icons/fly\ icon\ licence.png' |
            'icons/flyicon.png' |
            'icons/galaxy.png' |
            'icons/intl-space-station.png' |
            'icons/jupiter.png' |
            'icons/landing-space-capsule.png' |
            'icons/laser-gun.png' |
            'icons/mars.png' |
            'icons/millennium-falcon.png' |
            'icons/mission-control.png' |
            'icons/moon-full-almost.png' |
            'icons/moon-full-moon.png' |
            'icons/moon-last-quarter.png' |
            'icons/moon-new-moon.png' |
            'icons/moon-waning-cresent.png' |
            'icons/moon-waning-gibbous.png' |
            'icons/morty.png' |
            'icons/neptune.png' |
            'icons/pluto.png' |
            'icons/princess-leia.png' |
            'icons/rick.png' |
            'icons/ring-ship.png' |
            'icons/rocket-launch.png' |
            'icons/rocket.png' |
            'icons/satellite.png' |
            'icons/saturn.png' |
            'icons/solar-system.png' |
            'icons/space-capsule.png' |
            'icons/space-cockpit.png' |
            'icons/space-invader.png' |
            'icons/space-observatory.png' |
            'icons/space-rocket.png' |
            'icons/space-rover-1.png' |
            'icons/space-rover-2.png' |
            'icons/space-satellite-dish.png' |
            'icons/space-ship_1.png' |
            'icons/space-ship_2.png' |
            'icons/space-ship_3.png' |
            'icons/space-ship.png' |
            'icons/space-shuttle-launch.png' |
            'icons/space-shuttle.png' |
            'icons/sputnick-1.png' |
            'icons/sputnick-2.png' |
            'icons/star.png' |
            'icons/stars.png' |
            'icons/stormtrooper.png' |
            'icons/sun.png' |
            'icons/telescope.png' |
            'icons/uranus.png' |
            'icons/venus.png' |
            'icons/moon-dreamy.png'


 interface CurveMultiDefn{
 /**  Plot a set of points or a function from arrays X and Y  */
 ( xArray: number[]|Function,  yArray: number[]|Function,  attrs?: CurveAttributes) : Curve
 /**  Plot a set of points or a function from arrays X and Y  */
 ( xArray: number[]|Function,  yArray: number[]|Function,  left: NumberFunction,  right: NumberFunction,  attrs?: CurveAttributes) : Curve
}
 interface ImplicitcurveMultiDefn{
 /**  An implicit curve is a plane curve defined by an implicit equation relating two coordinate variables, commonly x and y. For example, the unit circle is defined by the implicit equation x2 + y2 = 1. In general, every implicit curve is defined by an equation of the form f(x, y) = 0 for some function f of two variables.  IMPLICIT means that the equation is not expressed as a solution for either x in terms of y or vice versa.  */
 ( f: Function|String,  attrs?: ImplicitcurveAttributes) : Implicitcurve
 /**  An implicit curve is a plane curve defined by an implicit equation relating two coordinate variables, commonly x and y. For example, the unit circle is defined by the implicit equation x2 + y2 = 1. In general, every implicit curve is defined by an equation of the form f(x, y) = 0 for some function f of two variables.  IMPLICIT means that the equation is not expressed as a solution for either x in terms of y or vice versa.  */
 ( f: Function|String,  dfx: Function|String,  dfy: Function|String,  attrs?: ImplicitcurveAttributes) : Implicitcurve
}
 interface LineMultiDefn{
 /**  Create a line defined by two points (or point addresses]

*```js
TSX.line([3,2],[3,3],{strokeColor:'blue',strokeWidth:5,strokeOpacity:.5})
let P1 = TSX.point([3,2])
TSX.line(p1,[3,3])

*```
                       */
 ( p1: Point|pointAddr,  p2: Point|pointAddr,  attrs?: LineAttributes) : Line
 /**  Create a line for the equation a*x+b*y+c*z = 0',

*```js
TSX.line(2,3,()=>offset())   // create a line for the equation a*x+b*y+c*z = 0

*```
                       */
 ( A: number|Function,  B: number|Function,  C: number|Function,  attrs?: LineAttributes) : Line
}
 interface AngleMultiDefn{
 /**  The angle element is used to denote an angle defined by three points (from, around,to), or two lines and two directions (either points or plus-or-minus 1 to indicate direction.
~~~js

TSX.angle(p1,p2,p3)                                  // angle from 3 points
TSX.angle(l1, l2, [5.5, 0], [4, 3], { radius: 1 })   // 2 lines, two directions
TSX.angle(l1, l2, 1, -1, { radius: 2 })              // 2 lines two +/- values
~~~
             As opposed to the sector, an angle has two angle points and no radius point.
 
 type=='sector': Sector is displayed.
 
 type=='square': a parallelogram is displayed.
 
 type=='auto':  a square is displayed if the angle is near orthogonal.  */
 ( from: Point|pointAddr,  around: Point|pointAddr,  to: Point|pointAddr,  attrs?: AngleAttributes) : Angle
 /**  The angle element is used to denote an angle defined by three points (from, around,to), or two lines and two directions (either points or plus-or-minus 1 to indicate direction.
~~~js

TSX.angle(p1,p2,p3)                                  // angle from 3 points
TSX.angle(l1, l2, [5.5, 0], [4, 3], { radius: 1 })   // 2 lines, two directions
TSX.angle(l1, l2, 1, -1, { radius: 2 })              // 2 lines two +/- values
~~~
             As opposed to the sector, an angle has two angle points and no radius point.
 
 type=='sector': Sector is displayed.
 
 type=='square': a parallelogram is displayed.
 
 type=='auto':  a square is displayed if the angle is near orthogonal.  */
 ( line1: Line|line,  line2: Line|line,  direction1: [Number,Number],  direction2: [Number,Number],  attrs?: AngleAttributes) : Angle
 /**  The angle element is used to denote an angle defined by three points (from, around,to), or two lines and two directions (either points or plus-or-minus 1 to indicate direction.
~~~js

TSX.angle(p1,p2,p3)                                  // angle from 3 points
TSX.angle(l1, l2, [5.5, 0], [4, 3], { radius: 1 })   // 2 lines, two directions
TSX.angle(l1, l2, 1, -1, { radius: 2 })              // 2 lines two +/- values
~~~
             As opposed to the sector, an angle has two angle points and no radius point.
 
 type=='sector': Sector is displayed.
 
 type=='square': a parallelogram is displayed.
 
 type=='auto':  a square is displayed if the angle is near orthogonal.  */
 ( line1: Line|line,  line2: Line|line,  dirPlusMinus1: Number,  dirPlusMinus2: Number,  attrs?: AngleAttributes) : Angle
}
 interface ParallelMultiDefn{
 /**  A line parallel to a given line (or two points), through a point.  */
 ( line: Line|[Point,Point],  point: Point|pointAddr,  attrs?: ParallelAttributes) : Parallel
 /**  A line parallel to a given line (or two points), through a point.  */
 ( lineP1: Point|pointAddr,  lineP2: Point|pointAddr,  Point: Point|pointAddr,  attrs?: ParallelAttributes) : Parallel
}
 interface ConicIface {
 z_ignore: Object,
 /** Just as two (distinct) points determine a line, five points (no three collinear) determine a conic. */
   fivePoints( A:Point|pointAddr, B:Point|pointAddr, C:Point|pointAddr, D:Point|pointAddr, E:Point|pointAddr,attributes?:ConicAttributes):Conic
 /** Build a plane algebraic curve from six numbers that satisfies Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0, and A,B,C not all zero.  This might be a circle, ellipse, parabola, or hyperbola. */
   sixNumbers( A:Number, B:Number, C:Number, D:Number, E:Number, F:Number,attributes?:ConicAttributes):Conic
 /** An Ellipse from 3 points */
   threePoints( focalPoint1:Point|pointAddr, focalPoint2:Point|pointAddr, outerPoint:Point|pointAddr,attributes?:EllipseAttributes):Ellipse
 /** Three Points, plus start and end. */
   ellipseArc( focalPoint1:Point|pointAddr, focalPoint2:Point|pointAddr, outerPoint:Point|pointAddr, startAngle:Number|Function, endAngle:Number|Function,attributes?:EllipseAttributes):Ellipse
}

 interface ConicMultiDefn{
 /**  Build a plane algebraic curve from six numbers that satisfies Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0, and A,B,C not all zero.  This might be a circle, ellipse, parabola, or hyperbola.  */
 ( A: Number,  B: Number,  C: Number,  D: Number,  E: Number,  F: Number,  attrs?: ConicAttributes) : Conic
}
 interface GliderMultiDefn{
 /**  A point bound to a GeometryElement like Line, Circle, or Curve, with  optionally a starting point defined by [X,Y]
```js
let c1 = TSX.circle(a, 1)
let g1 = TSX.glider(c1)
let g2 = TSX.glider(c1,[0,0])  // includes initial point
```   */
 ( hostElement: GeometryElement,  attrs?: GliderAttributes) : Glider
 /**  A point bound to a GeometryElement like Line, Circle, or Curve, with  optionally a starting point defined by [X,Y]
```js
let c1 = TSX.circle(a, 1)
let g1 = TSX.glider(c1)
let g2 = TSX.glider(c1,[0,0])  // includes initial point
```   */
 ( hostElement: GeometryElement,  initialPosition: number[],  attrs?: GliderAttributes) : Glider
}
 interface GridMultiDefn{
 /**  Creates a grid to support the user with element placement or to improve determination of position.  */
 ( axis1: Axis,  axis2: Axis,  attrs?: GridAttributes) : Grid
 /**  Creates a grid to support the user with element placement or to improve determination of position.  */
 ( attrs?: GridAttributes) : Grid
}
 interface MidpointMultiDefn{
 /**  A point in the middle of two given points or a line segment.  */
 ( p1: Point,  p2: Point,  attrs?: MidpointAttributes) : Midpoint
 /**  A point in the middle of two given points or a line segment.  */
 ( line: Line,  attrs?: MidpointAttributes) : Midpoint
}
 interface NormalMultiDefn{
 /**  A line through a given point on an element of type line, circle, curve, or turtle and orthogonal (at right angle) to that object.  */
 ( object: Line|Circle|Curve,  point: Point,  attrs?: NormalAttributes) : Normal
 /**  A line through a given point on an element of type line, circle, curve, or turtle and orthogonal (at right angle) to that object.  */
 ( glider: Glider,  attrs?: NormalAttributes) : Normal
}
 interface ParallelpointMultiDefn{
 /**  A parallel point is given by three points, or a line and a point. Taking the Euclidean vector from the first to the second point, the parallel point is determined by adding that vector to the third point. The line determined by the first two points is parallel to the line determined by the third point and the constructed point.  */
 ( line: Line|[Point,Point],  point: Point|pointAddr,  attrs?: ParallelpointAttributes) : Parallelpoint
 /**  A parallel point is given by three points, or a line and a point. Taking the Euclidean vector from the first to the second point, the parallel point is determined by adding that vector to the third point. The line determined by the first two points is parallel to the line determined by the third point and the constructed point.  */
 ( P1: Point,  P2: Point,  P3: Point,  attrs?: ParallelpointAttributes) : Parallelpoint
}
 interface SegmentMultiDefn{
 /**  Create a line segment between two points. If there is a third variable then the segment has a fixed length (which may be a function) determined by the absolute value of that number.  */
 ( P1: Point|pointAddr,  P2: Point|pointAddr,  attrs?: SegmentAttributes) : Segment
 /**  Create a line segment between two points. If there is a third variable then the segment has a fixed length (which may be a function) determined by the absolute value of that number.  */
 ( P1: Point|pointAddr,  P2: Point|pointAddr,  length: number|Function,  attrs?: SegmentAttributes) : Segment
}
 interface SlopetriangleMultiDefn{
 /**  A slope triangle is an imaginary triangle that helps you find the slope of a line or a line segment (use the method '.Value()' ). The hypotenuse of the triangle (the diagonal) is the line you are interested in finding the slope of. The two 'legs' of the triangle are the 'rise' and 'run' used in the slope formula.  */
 ( tangent: Point | Tangent,  attrs?: SlopetriangleAttributes) : Slopetriangle
 /**  A slope triangle is an imaginary triangle that helps you find the slope of a line or a line segment (use the method '.Value()' ). The hypotenuse of the triangle (the diagonal) is the line you are interested in finding the slope of. The two 'legs' of the triangle are the 'rise' and 'run' used in the slope formula.  */
 ( line: Line,  point: Point,  attrs?: SlopetriangleAttributes) : Slopetriangle
}
 interface TangentMultiDefn{
 /**  A tangent to a point on a line, circle, or curve.  Usually the point is a Glider.  */
 ( point: Glider,  attrs?: TangentAttributes) : Tangent
 /**  A tangent to a point on a line, circle, or curve.  Usually the point is a Glider.  */
 ( point: Point,  curve: Line|Circle|Curve,  attrs?: TangentAttributes) : Tangent
}
 interface JSXMathJSXMathIface {
 } 

 interface MatrixJSXMathIface {
 /** Calculates the cross product of two vectors both of length three. */
 crossProduct(v1:number[],v2:number[]):number[],
 /** Generates a 4x4 matrix for 3D to 2D projections. */
 frustum(left:Number,right:Number,top:Number,bottom:Number,near:Number,far:Number):matAny,
 /** Generates an identity matrix of size m x n.  (Yes it is possible to have a non-square identity matrix) */
 identity(m:number,n:number):matAny,
 /** Inner product of two vectors a and b.  Inner product is a generalization of Dot product for an arbitrary vector space. */
 innerProduct(v1:number[],v2:number[]):number,
 /** Compute the inverse of an nxn matrix with Gauss elimination.  Returns [] if there is a singularity. */
 inverse(mat:matAny):matAny,
 /** Computes the product of the two matrices mat1*mat2. */
 matMatMult(mat1:matAny,mat2:matAny):matAny,
 /** Initializes a matrix as an array of rows with the given value. */
 matrix(nRows:number,mCols:number,init:number):matAny,
 /** Multiplies a vector vec to a matrix mat: mat * vec.  The matrix is a two-dimensional array of numbers. The inner arrays describe the columns, the outer ones the matrix rows. eg: [[2,1],[3,2]] where [2,1] is the first colummn. */
 matVecMult(mat:matAny,vec:number[]):number[],
 /** Generates a 4x4 matrix for 3D to 2D projections. */
 projection(fov:Number,ratio:Number,near:Number,far:Number):matAny,
 /** Transposes a matrix given as a two dimensional array. */
 transpose(mat:matAny):matAny,
 /** Initializes a vector of size n wih coefficients set to the given value. */
 vector(n:number,init:number):number[],
 } 

 interface GeometryJSXMathIface {
 affineDistance():Number[],
 affineRatio():Number[],
 angle():Number[],
 angleBisector():Number[],
 bezierArc():Number[],
 calcLabelQuadrant():Number[],
 calcLineDelimitingPoints():Number[],
 calcStraight():Number[],
 circumcenter():Number[],
 circumcenterMidpoint():Number[],
 det3p():Number[],
 distance():Number[],
 distPointLine():Number[],
 GrahamScan():Number[],
 intersectionFunction():Number[],
 isSameDir():Number[],
 isSameDirection():Number[],
 meet():Number[],
 meetBezierCurveRedBlueSegments():Number[],
 meetBeziersegmentBeziersegment():Number[],
 meetCircleCircle():Number[],
 meetCurveCurve():Number[],
 meetCurveLine():Number[],
 meetCurveLineContinuous():Number[],
 meetCurveLineDiscrete():Number[],
 meetCurveRedBlueSegments():Number[],
 meetLineBoard():Number[],
 meetLineCircle():Number[],
 meetLineLine():Number[],
 meetPathPath():Number[],
 meetPolygonLine():Number[],
 meetSegmentSegment():Number[],
 perpendicular():Number[],
 pnpoly():Number[],
 projectCoordsToBeziersegment():Number[],
 projectCoordsToCurve():Number[],
 projectCoordsToPolygon():Number[],
 projectCoordsToSegment():Number[],
 projectPointToBoard():Number[],
 projectPointToCircle():Number[],
 projectPointToCurve():Number[],
 projectPointToLine():Number[],
 projectPointToPoint():Number[],
 projectPointToTurtle():Number[],
 rad():Number[],
 reflection():Number[],
 reuleauxPolygon():Number[],
 rotation():Number[],
 signedPolygon():Number[],
 signedTriangle():Number[],
 sortVertices():Number[],
 trueAngle():Number[],
 windingNumber():Number[],
 } 

 interface NumericsJSXMathIface {
 bezier(points:Point[]):[Function,Function,number,Function],
 bspline(points:Point[],order:number):any[],
 CardinalSpline(points:Point[],tau:number|Function):Function[],
 } 

 interface StatisticsJSXMathIface {
 /** Generate value of a standard normal random variable with given mean and standard deviation.
                                   See {@link https://en.wikipedia.org/wiki/Normal_distribution} */
 randomNormal(mean:number,stdDev:number):number,
 /** Generate value of a uniform distributed random variable in the interval [a, b]. */
 randomUniform(a:number,b:number):number,
 /** Generate value of a random variable with exponential distribution.
                                    See {@link https://en.wikipedia.org/wiki/Exponential_distribution}.
                                    Algorithm: D.E. Knuth, TAOCP 2, p. 128. */
 randomExponential(lambda:number):number,
 /** Generate value of a random variable with gamma distribution of order alpha.  Default scale is 1. Default threshold is 0.
                        See {@link https://en.wikipedia.org/wiki/Gamma_distribution}.
                        Algorithm: D.E. Knuth, TAOCP 2, p. 129. */
 randomGamma(shape:number,scale?:number,threshold?:number):number,
 /** Generate value of a random variable with Pareto distribution with shape gamma and scale k.
                                   See {@link https://en.wikipedia.org/wiki/Pareto_distribution}. */
 randomPareto(shape:number,scale?:number,threshold?:number):number,
 /** Generate value of a random variable with beta distribution with shape parameters alpha and beta.
                                    See {@link https://en.wikipedia.org/wiki/Beta_distribution}. */
 randomBeta(alpha:number,beta:number):number,
 /** Generate value of a random variable with chi-square distribution with k (>0) degrees of freedom.
                                    See {@link https://en.wikipedia.org/wiki/Chi-squared_distribution}. */
 randomChisquare(k:number):number,
 /** Generate value of a random variable with F-distribution with d1 and d2 degrees of freedom.
                                    See {@link https://en.wikipedia.org/wiki/F-distribution}. */
 randomF(d1:number,d2:number):number,
 /** Generate value of a random variable with Students-t-distribution with v degrees of freedom.
                                    See {@link https://en.wikipedia.org/wiki/Student%27s_t-distribution}. */
 randomT(v:number):number,
 /** Generate values for a random variable in binomial distribution with parameters n and p
                                    See {@link https://en.wikipedia.org/wiki/Binomial_distribution}. */
 randomBinomial(n:number,p:number):number,
 /** Generate values for a random variable in geometric distribution with propability <i>p</i>.
                                    See {@link https://en.wikipedia.org/wiki/Geometric_distribution}. */
 randomGeometric(p:number):number,
 /** Generate values for a random variable in Poisson distribution with mean <i>mu</i>..
                                    See {@link https://en.wikipedia.org/wiki/Poisson_distribution}. */
 randomPoisson(mu:number):number,
 /** Generate values for a random variable in hypergeometric distribution.
                                    See {@link https://en.wikipedia.org/wiki/Hypergeometric_distribution}
                                    Samples are drawn from a hypergeometric distribution with specified parameters, <i>good</i> (ways to make a good selection),
                                    <i>bad</i> (ways to make a bad selection), and <i>samples</i> (number of items sampled, which is less than or equal to <i>good + bad</i>). */
 randomHypergeometric(good:number,bad:number,samples:number):number,
 /** Compute the histogram of a dataset.  Range can be false or [min(x), max(x)]. If density is true then normalize the counts by dividing by sum(counts). Returns [number[],number[]], the first array contains start value of bins, the second array countains the counts. */
 histogram(data:number[], bins?:number, range?:boolean|[number,number], density?:boolean, cumulative?:boolean):[number[],number[]],
 /** Determines the absolute value of every given value.  */
 abs(arr:number[]|number):Number[]|Number,
 /** The P-th percentile ( 0 < P ≤ 100 ) of a list of N ordered values (sorted from least to greatest) is the smallest value in the list such that no more than P percent of the data is strictly less than the value and at least P percent of the data is less than or equal to that value. */
 percentile(data:number[],ranges:number[]):number[],
 } 



                export class TSXBoard {
                    /** the underlying JSXGraph board object.  Might be null.  To walk the elements in the board, use: for (let el in (TSX.board! as any).objects) {...}       */
                    board: TSXBoard | null

                    private printLineNumber:number = 0   // added a print() function, this tracks the line#

                    /** Version of underlying JSX library */
                    public get version():String {
                        return (window as any).JXG.JSXGraph.version as string
                    }

                    public get defaultAxes():GeometryElement {
                        return (this.board as any).defaultAxes as GeometryElement
                    }

                    public get canvasWidth():number {
                        return (this.board as any).canvasWidth as number
                    }
                    public get canvasHeight():number {
                        return (this.board as any).canvasHeight as number
                    }

                    /** allows setting default attributes by class or across the board */
                    public setDefaultAttributes(attrs: Object) {
                        TSXGraph.defaultAttrs = attrs
                    }

                    /** get a 2D canvas context (warning: cannot mix SVG and canvas) */
                    public getCanvasCTX(): CanvasRenderingContext2D{
                        const boardID = (this.board as any).container
                        const div = (document as any).getElementById(boardID);
                        (window as any).JXG.CanvasRenderer(div, [this.canvasWidth, this.canvasHeight]);
                        return (window as any).JXG.context as CanvasRenderingContext2D
                    }

                    /** given a PointerEvent (eg: TSX.on('down', (e:Event)=> ... ) returns [x,y] absolute coordinates of the boards container top left corner.  use with getPosition() to get board absolute addresses. */
                    getCoordsTopLeftCorner(e:Event):number[]{
                        return (this.board as any).getCoordsTopLeftCorner(e)
                    }

                    /** given a PointerEvent (eg: TSX.on('down', (e:Event)=> ... ) returns [x,y] coordinates relative to the documents's top left corner.  See also getCoordsTopLeftCorner() */
                    getPosition(e:Event):number[]{
                        return (window as any).JXG.getPosition(e)
                    }

                    /** given a PointerEvent (eg: TSX.on('down', (e:Event)=> ... ), returns the mouse coordinates [x,y] in JSXGraph coordinates.  */
                    getMouseCoords(e:Event):number[]{
                        let cPos = (this.board as any).getCoordsTopLeftCorner(e)
                        let absPos = (window as any).JXG.getPosition(e)
                        let dx = absPos[0] - cPos[0]
                        let dy = absPos[1] - cPos[1]

                        let coords =  new (window as any).JXG.Coords(2, [dx, dy],this.board);
                        return [coords.usrCoords[1],coords.usrCoords[2]]
                    }


                    setBoundingBox(left:Number,top:Number,right:Number,bottom:Number):TSXBoard{
                        return (this.board as any).setBoundingBox([left,top,right,bottom])
                    }

                    getBoundingBox():[number,number]{
                        return (this.board as any).getBoundingBox()
                    }

                    addGrid():TSXBoard{
                        return (this.board as any).addGrid()
                    }
                    removeGrids():TSXBoard{
                        return (this.board as any).removeGrids() // Note: remove GRIDS, not GRID
                    }


                    /** set Katex as default for board (names, labels, everything).  useKatex() need only be set ONCE, no way to unset. the text element has a 'useKatex' attribute that lets you turn Katex on and off for individual text fields.
                    * ```js
                    *     TSX.useKatex()
                    * ```
                    */
                    useKatex(){
                        (window as any).JXG.Options.text.useKatex = true;
                    }




                    addAxis():Board{
                        (this as any).axis([0,0],[1,0]);
                        (this as any).axis([0,0],[0,1]);
                        return (this as any as Board);
                    }

                    setAttribute(attrs:object):Board{
                        return (this.board as any).setAttribute(attrs)
                    }

                    // removeObject(object:Board,testForChildren:Boolean=false)


                    /** Legacy method to create elements. */
                    create(elType: string, params: any[] = [], attributes: Object = {}): GeometryElement {
                        return new GeometryElement(elType, params, attributes)
                    }

                    /** force board update */
                    update():void{
                        (this.board as any).update()
                    }

                    /** run through the board and call update() on each element */
                    updateElements():void{
                        (this.board as any).updateElements()
                    }

                    on(event: string, handler: (e: Event) => void, context?: unknown): void{
                        // JSXGraph doesn't share keyboard events, but I want them
                        if(event == 'keypress' || event == 'keydown' || event == 'keyup'){
                            (window as any).document.addEventListener(event, handler)
                        }else{
                            (this.board as any).on(event, handler, context)
                        }
                    }


                    // I cannot figure out how to get the keybard to respond.  mouse works fine
                    // addKeyboardEventHandlers():void{
                    //     (this.board as any).addKeyboardEventHandlers()
                    // }


                    /** Set the current frame.  If it doesn't exist, it will be created. Optionally set a location.  Example:  TSX.setFrame('starship',[4,4]) */
                    public setFrame(name:string,location?:number[]){
                        (this.board as any).setFrame(name,location)
                    }

                    public print(...args: any[]) {
                        let bbox = (this.board as any).getBoundingBox()   // get every time, in case setBoundingBox()
                        let left = bbox[0] // align x to left border
                        let lineHeight = (bbox[1] - bbox[3]) / 20  //
                        let top = bbox[1] - (2 * lineHeight) - (this.printLineNumber * lineHeight)  // align y to top border

                        let helper = (stringText: string, item: any): string => {
                            if (typeof item == null) {
                                stringText += 'null, ';
                            } else if (item == undefined) {
                                stringText += 'undefined';
                            } else if (typeof item == 'string') {
                                stringText += '\'' + item + '\'';
                            } else if (typeof item == 'number') {
                                stringText += Number.isInteger(item)?item.toString():item.toFixed(2);
                            } else if (typeof item == 'boolean') {
                                stringText += item ? 'true' : 'false';
                            } else if (Array.isArray(item)) {
                                stringText += '['
                                stringText = item.reduce((acc, curr) => acc + helper('', curr), stringText)
                                stringText += ']'
                            } else if (typeof item == 'object') {
                                stringText += '{'
                                if('elType' in item){
                                    stringText += item.elType
                                }else if('elV2Math' in item){
                                    stringText += [item.X(),item.Y()]
                                }
                                stringText += '}'
                            } else {
                                stringText += 'UNKNOWN';
                            }
                            stringText += ', '
                            return stringText
                        }


                        let stringText = ''
                        args.forEach((argn) => {
                            stringText = helper(stringText, argn)
                        });

                        (this.board as any).create('text', this.dereference([left, top,stringText]), { fontSize: 10, strokeColor: 'blue',fontUnits:'EM' })
                        this.printLineNumber += 1
                    }



                    suspendUpdate():void{
                        (this.board as any).suspendUpdate()
                    }

                    unsuspendUpdate():void{
                        (this.board as any).unsuspendUpdate()
                    }

                    // utility to dereference parameter- if they use TSXGraph objects then  use the JSXGraph objects instead
                    private dereference(params: any | any[]): any[] {
                        let ret: any
                        if (Array.isArray(params)) {
                            ret = params.map((x) => (typeof x == 'object' && x.hasOwnProperty('elValue')) ? x.elValue : x)
                        } else {
                            ret = (typeof params == 'object' && params.hasOwnProperty('elValue')) ? params.elValue : params
                        }
                        return ret
                    }







                    /////////////////////////////
                    /////////////////////////////
                    /////////////////////////////

                    ///////////  V2 Math Library


                    // /** new Points from point, angle, and distance.  Angle is in radians. */
                    // public V2AngleDistance(origin: TXG.Point, distance: number, angle: number, dest?: TXG.Point): TXG.Point {
                    //     console.log(origin, origin.tsxBoard)
                    //     if (!dest) { dest = JSXMath.board.point([0, 0], { name: '' }) }

                    //     let x = origin.X() + distance * Math.cos(angle)
                    //     let y = origin.Y() + distance * Math.sin(angle)
                    //     console.log(x,y)
                    //     dest.setPositionDirectly([x, y])
                    //     return dest
                    // }






        
 /**  */
 conic:ConicIface
 JSXMathMath:JSXMathJSXMathIface
 MatrixMath:MatrixJSXMathIface
 GeometryMath:GeometryJSXMathIface
 NumericsMath:NumericsJSXMathIface
 StatisticsMath:StatisticsJSXMathIface

           constructor(){
            this.board = null

            
 this.conic = {
 /** @protected */ 
 z_ignore: {}, 
   /** Just as two (distinct) points determine a line, five points (no three collinear) determine a conic. */
   fivePoints( A:Point|pointAddr, B:Point|pointAddr, C:Point|pointAddr, D:Point|pointAddr, E:Point|pointAddr,attributes: ConicAttributes ={}) : Conic {
 return new Conic('Conic',[A, B, C, D, E, ],attributes)
 },
   /** Build a plane algebraic curve from six numbers that satisfies Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0, and A,B,C not all zero.  This might be a circle, ellipse, parabola, or hyperbola. */
   sixNumbers( A:Number, B:Number, C:Number, D:Number, E:Number, F:Number,attributes: ConicAttributes ={}) : Conic {
 return new Conic('Conic',[A, B, C, D, E, F, ],attributes)
 },
   /** An Ellipse from 3 points */
   threePoints( focalPoint1:Point|pointAddr, focalPoint2:Point|pointAddr, outerPoint:Point|pointAddr,attributes: EllipseAttributes ={}) : Ellipse {
 return new Ellipse('Ellipse',[focalPoint1, focalPoint2, outerPoint, ],attributes) as Ellipse
 },
   /** Three Points, plus start and end. */
   ellipseArc( focalPoint1:Point|pointAddr, focalPoint2:Point|pointAddr, outerPoint:Point|pointAddr, startAngle:Number|Function, endAngle:Number|Function,attributes: EllipseAttributes ={}) : Ellipse {
 return new Ellipse('Ellipse',[focalPoint1, focalPoint2, outerPoint, startAngle, endAngle, ],attributes) as Ellipse
 },
 }
 this.conic.z_ignore = this
 this.JSXMathMath = { 
 } 

 this.MatrixMath = { 
 /** Calculates the cross product of two vectors both of length three. */
 crossProduct(v1:number[],v2:number[]):number[] { return (window as any).JXG.Math.crossProduct(v1,v2)  as number[]} ,
 /** Generates a 4x4 matrix for 3D to 2D projections. */
 frustum(left:Number,right:Number,top:Number,bottom:Number,near:Number,far:Number):matAny { return (window as any).JXG.Math.frustum(left,right,top,bottom,near,far)  as matAny} ,
 /** Generates an identity matrix of size m x n.  (Yes it is possible to have a non-square identity matrix) */
 identity(m:number,n:number):matAny { return (window as any).JXG.Math.identity(m,n)  as matAny} ,
 /** Inner product of two vectors a and b.  Inner product is a generalization of Dot product for an arbitrary vector space. */
 innerProduct(v1:number[],v2:number[]):number { return (window as any).JXG.Math.innerProduct(v1,v2)  as number} ,
 /** Compute the inverse of an nxn matrix with Gauss elimination.  Returns [] if there is a singularity. */
 inverse(mat:matAny):matAny { return (window as any).JXG.Math.inverse(mat)  as matAny} ,
 /** Computes the product of the two matrices mat1*mat2. */
 matMatMult(mat1:matAny,mat2:matAny):matAny { return (window as any).JXG.Math.matMatMult(mat1,mat2)  as matAny} ,
 /** Initializes a matrix as an array of rows with the given value. */
 matrix(nRows:number,mCols:number,init:number):matAny { return (window as any).JXG.Math.matrix(nRows,mCols,init)  as matAny} ,
 /** Multiplies a vector vec to a matrix mat: mat * vec.  The matrix is a two-dimensional array of numbers. The inner arrays describe the columns, the outer ones the matrix rows. eg: [[2,1],[3,2]] where [2,1] is the first colummn. */
 matVecMult(mat:matAny,vec:number[]):number[] { return (window as any).JXG.Math.matVecMult(mat,vec)  as number[]} ,
 /** Generates a 4x4 matrix for 3D to 2D projections. */
 projection(fov:Number,ratio:Number,near:Number,far:Number):matAny { return (window as any).JXG.Math.projection(fov,ratio,near,far)  as matAny} ,
 /** Transposes a matrix given as a two dimensional array. */
 transpose(mat:matAny):matAny { return (window as any).JXG.Math.transpose(mat)  as matAny} ,
 /** Initializes a vector of size n wih coefficients set to the given value. */
 vector(n:number,init:number):number[] { return (window as any).JXG.Math.vector(n,init)  as number[]} ,
 } 

 this.GeometryMath = { 
 affineDistance():Number[] { return (window as any).JXG.Math.Geometry.affineDistance()  as Number[]} ,
 affineRatio():Number[] { return (window as any).JXG.Math.Geometry.affineRatio()  as Number[]} ,
 angle():Number[] { return (window as any).JXG.Math.Geometry.angle()  as Number[]} ,
 angleBisector():Number[] { return (window as any).JXG.Math.Geometry.angleBisector()  as Number[]} ,
 bezierArc():Number[] { return (window as any).JXG.Math.Geometry.bezierArc()  as Number[]} ,
 calcLabelQuadrant():Number[] { return (window as any).JXG.Math.Geometry.calcLabelQuadrant()  as Number[]} ,
 calcLineDelimitingPoints():Number[] { return (window as any).JXG.Math.Geometry.calcLineDelimitingPoints()  as Number[]} ,
 calcStraight():Number[] { return (window as any).JXG.Math.Geometry.calcStraight()  as Number[]} ,
 circumcenter():Number[] { return (window as any).JXG.Math.Geometry.circumcenter()  as Number[]} ,
 circumcenterMidpoint():Number[] { return (window as any).JXG.Math.Geometry.circumcenterMidpoint()  as Number[]} ,
 det3p():Number[] { return (window as any).JXG.Math.Geometry.det3p()  as Number[]} ,
 distance():Number[] { return (window as any).JXG.Math.Geometry.distance()  as Number[]} ,
 distPointLine():Number[] { return (window as any).JXG.Math.Geometry.distPointLine()  as Number[]} ,
 GrahamScan():Number[] { return (window as any).JXG.Math.Geometry.GrahamScan()  as Number[]} ,
 intersectionFunction():Number[] { return (window as any).JXG.Math.Geometry.intersectionFunction()  as Number[]} ,
 isSameDir():Number[] { return (window as any).JXG.Math.Geometry.isSameDir()  as Number[]} ,
 isSameDirection():Number[] { return (window as any).JXG.Math.Geometry.isSameDirection()  as Number[]} ,
 meet():Number[] { return (window as any).JXG.Math.Geometry.meet()  as Number[]} ,
 meetBezierCurveRedBlueSegments():Number[] { return (window as any).JXG.Math.Geometry.meetBezierCurveRedBlueSegments()  as Number[]} ,
 meetBeziersegmentBeziersegment():Number[] { return (window as any).JXG.Math.Geometry.meetBeziersegmentBeziersegment()  as Number[]} ,
 meetCircleCircle():Number[] { return (window as any).JXG.Math.Geometry.meetCircleCircle()  as Number[]} ,
 meetCurveCurve():Number[] { return (window as any).JXG.Math.Geometry.meetCurveCurve()  as Number[]} ,
 meetCurveLine():Number[] { return (window as any).JXG.Math.Geometry.meetCurveLine()  as Number[]} ,
 meetCurveLineContinuous():Number[] { return (window as any).JXG.Math.Geometry.meetCurveLineContinuous()  as Number[]} ,
 meetCurveLineDiscrete():Number[] { return (window as any).JXG.Math.Geometry.meetCurveLineDiscrete()  as Number[]} ,
 meetCurveRedBlueSegments():Number[] { return (window as any).JXG.Math.Geometry.meetCurveRedBlueSegments()  as Number[]} ,
 meetLineBoard():Number[] { return (window as any).JXG.Math.Geometry.meetLineBoard()  as Number[]} ,
 meetLineCircle():Number[] { return (window as any).JXG.Math.Geometry.meetLineCircle()  as Number[]} ,
 meetLineLine():Number[] { return (window as any).JXG.Math.Geometry.meetLineLine()  as Number[]} ,
 meetPathPath():Number[] { return (window as any).JXG.Math.Geometry.meetPathPath()  as Number[]} ,
 meetPolygonLine():Number[] { return (window as any).JXG.Math.Geometry.meetPolygonLine()  as Number[]} ,
 meetSegmentSegment():Number[] { return (window as any).JXG.Math.Geometry.meetSegmentSegment()  as Number[]} ,
 perpendicular():Number[] { return (window as any).JXG.Math.Geometry.perpendicular()  as Number[]} ,
 pnpoly():Number[] { return (window as any).JXG.Math.Geometry.pnpoly()  as Number[]} ,
 projectCoordsToBeziersegment():Number[] { return (window as any).JXG.Math.Geometry.projectCoordsToBeziersegment()  as Number[]} ,
 projectCoordsToCurve():Number[] { return (window as any).JXG.Math.Geometry.projectCoordsToCurve()  as Number[]} ,
 projectCoordsToPolygon():Number[] { return (window as any).JXG.Math.Geometry.projectCoordsToPolygon()  as Number[]} ,
 projectCoordsToSegment():Number[] { return (window as any).JXG.Math.Geometry.projectCoordsToSegment()  as Number[]} ,
 projectPointToBoard():Number[] { return (window as any).JXG.Math.Geometry.projectPointToBoard()  as Number[]} ,
 projectPointToCircle():Number[] { return (window as any).JXG.Math.Geometry.projectPointToCircle()  as Number[]} ,
 projectPointToCurve():Number[] { return (window as any).JXG.Math.Geometry.projectPointToCurve()  as Number[]} ,
 projectPointToLine():Number[] { return (window as any).JXG.Math.Geometry.projectPointToLine()  as Number[]} ,
 projectPointToPoint():Number[] { return (window as any).JXG.Math.Geometry.projectPointToPoint()  as Number[]} ,
 projectPointToTurtle():Number[] { return (window as any).JXG.Math.Geometry.projectPointToTurtle()  as Number[]} ,
 rad():Number[] { return (window as any).JXG.Math.Geometry.rad()  as Number[]} ,
 reflection():Number[] { return (window as any).JXG.Math.Geometry.reflection()  as Number[]} ,
 reuleauxPolygon():Number[] { return (window as any).JXG.Math.Geometry.reuleauxPolygon()  as Number[]} ,
 rotation():Number[] { return (window as any).JXG.Math.Geometry.rotation()  as Number[]} ,
 signedPolygon():Number[] { return (window as any).JXG.Math.Geometry.signedPolygon()  as Number[]} ,
 signedTriangle():Number[] { return (window as any).JXG.Math.Geometry.signedTriangle()  as Number[]} ,
 sortVertices():Number[] { return (window as any).JXG.Math.Geometry.sortVertices()  as Number[]} ,
 trueAngle():Number[] { return (window as any).JXG.Math.Geometry.trueAngle()  as Number[]} ,
 windingNumber():Number[] { return (window as any).JXG.Math.Geometry.windingNumber()  as Number[]} ,
 } 

 this.NumericsMath = { 
 bezier(points:Point[]):[Function,Function,number,Function] { return (window as any).JXG.Math.Numerics.bezier(TSXGraph.dereference(points))  as [Function,Function,number,Function]} ,
 bspline(points:Point[],order:number):any[] { return (window as any).JXG.Math.Numerics.bspline(TSXGraph.dereference(points),order)  as any[]} ,
 CardinalSpline(points:Point[],tau:number|Function):Function[] { return (window as any).JXG.Math.Numerics.CardinalSpline(TSXGraph.dereference(points),tau)  as Function[]} ,
 } 

 this.StatisticsMath = { 
 /** Generate value of a standard normal random variable with given mean and standard deviation.
                                   See {@link https://en.wikipedia.org/wiki/Normal_distribution} */
 randomNormal(mean:number,stdDev:number):number { return (window as any).JXG.Math.Statistics.randomNormal(mean,stdDev)  as number} ,
 /** Generate value of a uniform distributed random variable in the interval [a, b]. */
 randomUniform(a:number,b:number):number { return (window as any).JXG.Math.Statistics.randomUniform(a,b)  as number} ,
 /** Generate value of a random variable with exponential distribution.
                                    See {@link https://en.wikipedia.org/wiki/Exponential_distribution}.
                                    Algorithm: D.E. Knuth, TAOCP 2, p. 128. */
 randomExponential(lambda:number):number { return (window as any).JXG.Math.Statistics.randomExponential(lambda)  as number} ,
 /** Generate value of a random variable with gamma distribution of order alpha.  Default scale is 1. Default threshold is 0.
                        See {@link https://en.wikipedia.org/wiki/Gamma_distribution}.
                        Algorithm: D.E. Knuth, TAOCP 2, p. 129. */
 randomGamma(shape:number,scale?:number,threshold?:number):number { return (window as any).JXG.Math.Statistics.randomGamma(shape,scale,threshold)  as number} ,
 /** Generate value of a random variable with Pareto distribution with shape gamma and scale k.
                                   See {@link https://en.wikipedia.org/wiki/Pareto_distribution}. */
 randomPareto(shape:number,scale?:number,threshold?:number):number { return (window as any).JXG.Math.Statistics.randomPareto(shape,scale,threshold)  as number} ,
 /** Generate value of a random variable with beta distribution with shape parameters alpha and beta.
                                    See {@link https://en.wikipedia.org/wiki/Beta_distribution}. */
 randomBeta(alpha:number,beta:number):number { return (window as any).JXG.Math.Statistics.randomBeta(alpha,beta)  as number} ,
 /** Generate value of a random variable with chi-square distribution with k (>0) degrees of freedom.
                                    See {@link https://en.wikipedia.org/wiki/Chi-squared_distribution}. */
 randomChisquare(k:number):number { return (window as any).JXG.Math.Statistics.randomChisquare(k)  as number} ,
 /** Generate value of a random variable with F-distribution with d1 and d2 degrees of freedom.
                                    See {@link https://en.wikipedia.org/wiki/F-distribution}. */
 randomF(d1:number,d2:number):number { return (window as any).JXG.Math.Statistics.randomF(d1,d2)  as number} ,
 /** Generate value of a random variable with Students-t-distribution with v degrees of freedom.
                                    See {@link https://en.wikipedia.org/wiki/Student%27s_t-distribution}. */
 randomT(v:number):number { return (window as any).JXG.Math.Statistics.randomT(v)  as number} ,
 /** Generate values for a random variable in binomial distribution with parameters n and p
                                    See {@link https://en.wikipedia.org/wiki/Binomial_distribution}. */
 randomBinomial(n:number,p:number):number { return (window as any).JXG.Math.Statistics.randomBinomial(n,p)  as number} ,
 /** Generate values for a random variable in geometric distribution with propability <i>p</i>.
                                    See {@link https://en.wikipedia.org/wiki/Geometric_distribution}. */
 randomGeometric(p:number):number { return (window as any).JXG.Math.Statistics.randomGeometric(p)  as number} ,
 /** Generate values for a random variable in Poisson distribution with mean <i>mu</i>..
                                    See {@link https://en.wikipedia.org/wiki/Poisson_distribution}. */
 randomPoisson(mu:number):number { return (window as any).JXG.Math.Statistics.randomPoisson(mu)  as number} ,
 /** Generate values for a random variable in hypergeometric distribution.
                                    See {@link https://en.wikipedia.org/wiki/Hypergeometric_distribution}
                                    Samples are drawn from a hypergeometric distribution with specified parameters, <i>good</i> (ways to make a good selection),
                                    <i>bad</i> (ways to make a bad selection), and <i>samples</i> (number of items sampled, which is less than or equal to <i>good + bad</i>). */
 randomHypergeometric(good:number,bad:number,samples:number):number { return (window as any).JXG.Math.Statistics.randomHypergeometric(good,bad,samples)  as number} ,
 /** Compute the histogram of a dataset.  Range can be false or [min(x), max(x)]. If density is true then normalize the counts by dividing by sum(counts). Returns [number[],number[]], the first array contains start value of bins, the second array countains the counts. */
 histogram(data:number[], bins?:number, range?:boolean|[number,number], density?:boolean, cumulative?:boolean):[number[],number[]] { return (window as any).JXG.Math.Statistics.histogram(data,{bins:bins??10, range:range??false, density:density??true, cumulative:cumulative??false})  as [number[],number[]]} ,
 /** Determines the absolute value of every given value.  */
 abs(arr:number[]|number):Number[]|Number { return (window as any).JXG.Math.Statistics.abs(arr)  as Number[]|Number} ,
 /** The P-th percentile ( 0 < P ≤ 100 ) of a list of N ordered values (sorted from least to greatest) is the smallest value in the list such that no more than P percent of the data is strictly less than the value and at least P percent of the data is less than or equal to that value. */
 percentile(data:number[],ranges:number[]):number[] { return (window as any).JXG.Math.Statistics.percentile(TSXGraph.dereference(data),TSXGraph.dereference(ranges))  as number[]} ,
 } 

}

 /** create a chart */
chart(f:Number[], attributes: ChartAttributes ={} ):Chart{return new Chart('Chart', [f,], attributes)
}


 /** A circle can be constructed by providing a center and a point on the circle,
                         or a center and a radius (given as a number, function, line, or circle).
                         If the radius is a negative value, its absolute values is taken.
                
*```js
                TSX.circle(P1,1])
                TSX.circle([0,0],[1,0])
                
*```
                
Also see: Circumcircle is a circle described by three points.  An Arc is a segment of a circle. */
circle(centerPoint:Point|pointAddr|Function, remotePoint:Point|pointAddr|Line|line|Number|Function|Circle, attributes: CircleAttributes ={} ):Circle{
  let newObject:any  // special case for circle with immediate segment eg:  circle(point,[[1,2],[3,4]]  )
                            if (Array.isArray(remotePoint) && Array.isArray(remotePoint[0] ) && Array.isArray(remotePoint[1] )) {
                                return new Circle(`circle`, TSXGraph.dereference([centerPoint, remotePoint[0] ,remotePoint[1]]), TSXGraph.defaultAttributes(attributes))
                            } else {
                                return new Circle(`circle`, TSXGraph.dereference([centerPoint, remotePoint]), TSXGraph.defaultAttributes(attributes))
                            }
}


            // implementation of signature,  hidden from user
            curve:CurveMultiDefn = (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Curve => {
 let newObject: Curve = {} as Curve // just so it is initialized
   let params = []
   let attrs = {}
   if (b === undefined) {
      if(isJSXAttribute(a)){
          attrs = TSXGraph.defaultAttributes(a)
          params = TSXGraph.dereference([])
      }else{
          params = TSXGraph.dereference([a,])
      }
   }    else {
   if (c === undefined) {
      if(isJSXAttribute(b)){
          attrs = TSXGraph.defaultAttributes(b)
          params = TSXGraph.dereference([a,])
      }else{
          params = TSXGraph.dereference([a,b,])
      }
   }    else {
   if (d === undefined) {
      if(isJSXAttribute(c)){
          attrs = TSXGraph.defaultAttributes(c)
          params = TSXGraph.dereference([a,b,])
      }else{
          params = TSXGraph.dereference([a,b,c,])
      }
   }    else {
   if (e === undefined) {
      if(isJSXAttribute(d)){
          attrs = TSXGraph.defaultAttributes(d)
          params = TSXGraph.dereference([a,b,c,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,])
      }
   }    else {
   if (f === undefined) {
      if(isJSXAttribute(e)){
          attrs = TSXGraph.defaultAttributes(e)
          params = TSXGraph.dereference([a,b,c,d,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,e,])
      }
   } }}}}
   return new Curve('curve', params, TSXGraph.defaultAttributes(attrs)) // as Curve
 }

 /** A cubic bezier curve.  The input is 3k + 1 points; those at positions k mod 3 = 0 (eg: 0, 3, 6 are the data points, the two points between each data points are the control points.
                
*```js
    let points: TXG.Point[] = []
    points.push(TSX.point([-2, -1], { size: 4, color: 'blue', name: '0' }))

    points.push(TSX.point([-2, -2.5], { name: '1' }))
    points.push(TSX.point([-1, -2.5], { name: '2' }))

    points.push(TSX.point([2, -2], { size: 4, color: 'blue', name: '3' }))

    let curve = TSX.bezierCurve(points, { strokeColor: 'orange', strokeWidth: 5, fixed: false }); // Draggable curve

    // 'BezierCurve()' is just a shorthand for the following two lines:
    // let bz = TSX.NumericsMath.bezier(points)
    // let curve = TSX.curve(bz[0], bz[1])
                
*```

                 */
bezierCurve(points:Point[], attributes: BezierCurveAttributes ={} ):Curve{
  return new Curve('curve', (window as any).JXG.Math.Numerics.bezier(this.dereference(points)), TSXGraph.defaultAttributes(attributes));
}


 /** This element is used to provide a constructor for arbitrary content in an SVG foreignObject container.
```js
TSX.foreignObject(
    `<video width="300" height="200" src="https://eucbeniki.sio.si/vega2/278/Video_metanje_oge_.mp4" type="html5video" controls>`,
    [0, -3], [9, 6],
    {layer: 8, fixed: true})
```
              */
foreignObject(content:string, position:number[], size:number[]|null=null, attributes: ForeignObjectAttributes ={} ):ForeignObject{return new ForeignObject('ForeignObject', [content,position,size,], attributes)
}


 /** Array of Points */
group(pointArray:Point[]|Polygon, attributes: GroupAttributes ={} ):Group{return new Group('Group', [pointArray,], attributes)
}


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
image(url:String|spaceIcon, lowerLeft:pointAddr, widthHeight:[Number,Number]=[1,1], attributes: ImageAttributes ={} ):Image{return new Image('Image', [url,lowerLeft,widthHeight,], attributes)
}


            // implementation of signature,  hidden from user
            implicitcurve:ImplicitcurveMultiDefn = (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Implicitcurve => {
 let newObject: Implicitcurve = {} as Implicitcurve // just so it is initialized
   let params = []
   let attrs = {}
   if (b === undefined) {
      if(isJSXAttribute(a)){
          attrs = TSXGraph.defaultAttributes(a)
          params = TSXGraph.dereference([])
      }else{
          params = TSXGraph.dereference([a,])
      }
   }    else {
   if (c === undefined) {
      if(isJSXAttribute(b)){
          attrs = TSXGraph.defaultAttributes(b)
          params = TSXGraph.dereference([a,])
      }else{
          params = TSXGraph.dereference([a,b,])
      }
   }    else {
   if (d === undefined) {
      if(isJSXAttribute(c)){
          attrs = TSXGraph.defaultAttributes(c)
          params = TSXGraph.dereference([a,b,])
      }else{
          params = TSXGraph.dereference([a,b,c,])
      }
   }    else {
   if (e === undefined) {
      if(isJSXAttribute(d)){
          attrs = TSXGraph.defaultAttributes(d)
          params = TSXGraph.dereference([a,b,c,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,])
      }
   }    else {
   if (f === undefined) {
      if(isJSXAttribute(e)){
          attrs = TSXGraph.defaultAttributes(e)
          params = TSXGraph.dereference([a,b,c,d,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,e,])
      }
   } }}}}
   return new Implicitcurve('implicitcurve', params, TSXGraph.defaultAttributes(attrs)) // as Implicitcurve
 }

            // implementation of signature,  hidden from user
            line:LineMultiDefn = (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Line => {
 let newObject: Line = {} as Line // just so it is initialized
   let params = []
   let attrs = {}
   if (b === undefined) {
      if(isJSXAttribute(a)){
          attrs = TSXGraph.defaultAttributes(a)
          params = TSXGraph.dereference([])
      }else{
          params = TSXGraph.dereference([a,])
      }
   }    else {
   if (c === undefined) {
      if(isJSXAttribute(b)){
          attrs = TSXGraph.defaultAttributes(b)
          params = TSXGraph.dereference([a,])
      }else{
          params = TSXGraph.dereference([a,b,])
      }
   }    else {
   if (d === undefined) {
      if(isJSXAttribute(c)){
          attrs = TSXGraph.defaultAttributes(c)
          params = TSXGraph.dereference([a,b,])
      }else{
          params = TSXGraph.dereference([a,b,c,])
      }
   }    else {
   if (e === undefined) {
      if(isJSXAttribute(d)){
          attrs = TSXGraph.defaultAttributes(d)
          params = TSXGraph.dereference([a,b,c,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,])
      }
   }    else {
   if (f === undefined) {
      if(isJSXAttribute(e)){
          attrs = TSXGraph.defaultAttributes(e)
          params = TSXGraph.dereference([a,b,c,d,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,e,])
      }
   } }}}}
 if(typeof a == 'number' || typeof a == 'function')
                             // reorder the a,b,c elements of the line
                             return new Line('line', TSXGraph.dereference([c,a,b]), TSXGraph.defaultAttributes(attrs)) // as Line
                          else
                             return new Line('line', params, TSXGraph.defaultAttributes(attrs)) // as Line
             
 }

 /** Create a point. If any parent elements are functions or the attribute 'fixed' is true then point will be constrained.
            
*```js
TSX.point([3,2],{strokeColor:'blue',strokeWidth:5,strokeOpacity:.5})
TSX.point([3,3]),{fixed:true, showInfobox:true}
TSX.point([()=>p1.X()+2,()=>p1.Y()+2]) // 2 up 2 right from p1
TSX.point([1,2,2])  // three axis definition - [z,x,y]
            
*```
            
 also create points with Intersection, Midpoint, TransformPoint, Circumcenter, Glider, and others. */
point(position:pointAddr, attributes: PointAttributes ={} ):Point{
 return new Point('Point', position, TSXGraph.defaultAttributes(attributes))
}


 /** Array of Points */
polygon(pointArray:Point[]|pointAddr[], attributes: PolygonAttributes ={} ):Polygon{return new Polygon('Polygon', [pointArray,], attributes)
}


 /** Display a message
                                
*```js
TSX.text([3,2],[3,3], {fontSize:20, strokeColor:'blue'})
TSX.text([0, 4], () => 'BD ' + B.distance(D).toFixed(2))
TSX.text([-4, 2], '\pm\sqrt{a^2 + b^2}', { useKatex: true })
                                
*``` */
text(position:Point|pointAddr, label:String|Function, attributes: TextAttributes ={} ):Text{
 (position as any).push(label);
                        return new Text('Text', TSXGraph.dereference(position),TSXGraph.defaultAttributes(attributes));
}


 /** A circular sector is a subarea of the area enclosed by a circle. It is enclosed by two radii and an arc. */
sector(P1:Point|pointAddr, P2:Point|pointAddr, P3:Point|pointAddr, attributes: SectorAttributes ={} ):Sector{return new Sector('Sector', [P1,P2,P3,], attributes)
}


 /** Vector field. Plot a vector field either given by two functions f1(x, y) and f2(x,y) or by a function f(x, y) returning an array of size 2. */
vectorfield(fxfy:Function[], horizontalMesh:Number[]=[-6,25,6], verticalMesh:Number[]=[-6,25,6], attributes: VectorfieldAttributes ={} ):Vectorfield{return new Vectorfield('Vectorfield', [fxfy,horizontalMesh,verticalMesh,], attributes)
}


            // implementation of signature,  hidden from user
            angle:AngleMultiDefn = (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Angle => {
 let newObject: Angle = {} as Angle // just so it is initialized
   let params = []
   let attrs = {}
   if (b === undefined) {
      if(isJSXAttribute(a)){
          attrs = TSXGraph.defaultAttributes(a)
          params = TSXGraph.dereference([])
      }else{
          params = TSXGraph.dereference([a,])
      }
   }    else {
   if (c === undefined) {
      if(isJSXAttribute(b)){
          attrs = TSXGraph.defaultAttributes(b)
          params = TSXGraph.dereference([a,])
      }else{
          params = TSXGraph.dereference([a,b,])
      }
   }    else {
   if (d === undefined) {
      if(isJSXAttribute(c)){
          attrs = TSXGraph.defaultAttributes(c)
          params = TSXGraph.dereference([a,b,])
      }else{
          params = TSXGraph.dereference([a,b,c,])
      }
   }    else {
   if (e === undefined) {
      if(isJSXAttribute(d)){
          attrs = TSXGraph.defaultAttributes(d)
          params = TSXGraph.dereference([a,b,c,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,])
      }
   }    else {
   if (f === undefined) {
      if(isJSXAttribute(e)){
          attrs = TSXGraph.defaultAttributes(e)
          params = TSXGraph.dereference([a,b,c,d,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,e,])
      }
   } }}}}
   return new Angle('angle', params, TSXGraph.defaultAttributes(attrs)) // as Angle
 }

 /** Create a circular Arc defined by three points (because a circle can be defined by three points - see circumcircle).
                            
*```js
                            let arc = TSX.arc([-8,5],[-4,5],[-9,9]])
                            
*```
                            
 To create an arc with origin, startpoint, and angle, look at MajorArc/MinorArc. */
arc(origin:Point|pointAddr, from:Point|pointAddr, to:Point|pointAddr, attributes: ArcAttributes ={} ):Arc{return new Arc('Arc', [origin,from,to,], attributes)
}


 /** Arrow defined by two points (like a Segment) with arrow at P2
                            
*```js
                            
 let arrow = TSX.arrow([-8,5],[-4,5])
                            
*```
                            
 */
arrow(p1:Point|pointAddr, p2:Point|pointAddr, attributes: ArrowAttributes ={} ):Arrow{return new Arrow('Arrow', [p1,p2,], attributes)
}


            // implementation of signature,  hidden from user
            parallel:ParallelMultiDefn = (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Parallel => {
 let newObject: Parallel = {} as Parallel // just so it is initialized
   let params = []
   let attrs = {}
   if (b === undefined) {
      if(isJSXAttribute(a)){
          attrs = TSXGraph.defaultAttributes(a)
          params = TSXGraph.dereference([])
      }else{
          params = TSXGraph.dereference([a,])
      }
   }    else {
   if (c === undefined) {
      if(isJSXAttribute(b)){
          attrs = TSXGraph.defaultAttributes(b)
          params = TSXGraph.dereference([a,])
      }else{
          params = TSXGraph.dereference([a,b,])
      }
   }    else {
   if (d === undefined) {
      if(isJSXAttribute(c)){
          attrs = TSXGraph.defaultAttributes(c)
          params = TSXGraph.dereference([a,b,])
      }else{
          params = TSXGraph.dereference([a,b,c,])
      }
   }    else {
   if (e === undefined) {
      if(isJSXAttribute(d)){
          attrs = TSXGraph.defaultAttributes(d)
          params = TSXGraph.dereference([a,b,c,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,])
      }
   }    else {
   if (f === undefined) {
      if(isJSXAttribute(e)){
          attrs = TSXGraph.defaultAttributes(e)
          params = TSXGraph.dereference([a,b,c,d,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,e,])
      }
   } }}}}
   return new Parallel('parallel', params, TSXGraph.defaultAttributes(attrs)) // as Parallel
 }

 /** Create an Arrow parallel to a segment. The constructed arrow contains p3 and has the same slope as the line through p1 and p2. */
arrowparallel(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: ArrowparallelAttributes ={} ):Arrowparallel{return new Arrowparallel('Arrowparallel', [p1,p2,p3,], attributes)
}


 /** Create an Axis with two points (like a Line) */
axis(p1:Point|pointAddr, p2:Point|pointAddr, attributes: AxisAttributes ={} ):Axis{return new Axis('Axis', [p1,p2,], attributes)
}


 /** Bisect an Angle defined with three points A,B,C, and divides the angle ABC into two equal sized parts. */
bisector(A:Point|pointAddr, B:Point|pointAddr, C:Point|pointAddr, attributes: BisectorAttributes ={} ):Bisector{return new Bisector('Bisector', [A,B,C,], attributes)
}


 /** Bisect a Line defined with two points */
bisectorlines(l1:Line, l2:Line, attributes: BisectorlinesAttributes ={} ):Bisectorlines{return new Bisectorlines('Bisectorlines', [l1,l2,], attributes)
}


 /** create a button */
button(position:pointAddr, label:String|Function, handler:Function, attributes: ButtonAttributes ={} ):Button{
 (position as any).push(label,handler);
                        return new Button('Button', position,TSXGraph.defaultAttributes(attributes));
}


 /** This element is used to provide a constructor for cardinal spline curves. Create a dynamic cardinal spline interpolated curve given by sample points p_1 to p_n. */
cardinalspline(data:Point[]|number[][], funct:Function, splineType:`uniform`|`centripetal`, attributes: CardinalsplineAttributes ={} ):Curve{return new Cardinalspline('Cardinalspline', [data,funct,splineType,], attributes)
}


 /** This element is used to provide a constructor for special texts containing a form checkbox element. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML checkbox element can be accessed through the sub-object 'rendNodeCheck', e.g. to add event listeners. */
checkbox(position:pointAddr, label:String|Function, attributes: CheckboxAttributes ={} ):Checkbox{
 (position as any).push(label);
                        return new Checkbox('Checkbox', position,TSXGraph.defaultAttributes(attributes));
}


 /** Creates a Point at the center of a circle defined by 3 points */
circumcenter(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: CircumcenterAttributes ={} ):Circumcenter{return new Circumcenter('Circumcenter', [p1,p2,p3,], attributes)
}


 /** Draw a circle defined by 3 points */
circumcircle(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: CircumcircleAttributes ={} ):Circumcircle{return new Circumcircle('Circumcircle', [p1,p2,p3,], attributes)
}


 /** Draw an arc from P1 to P3 (missing P3 to P1) defined by 3 points */
circumcircleArc(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: CircumcircleArcAttributes ={} ):CircumcircleArc{return new CircumcircleArc('CircumcircleArc', [p1,p2,p3,], attributes)
}


 /** Creates a CircumCenter and draws a sector from P1 to P3 (missing P3 to P1) defined by 3 points */
circumcircleSector(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: CircumcircleSectorAttributes ={} ):CircumcircleSector{return new CircumcircleSector('CircumcircleSector', [p1,p2,p3,], attributes)
}


 /** A comb to display domains of inequalities. */
comb(p1:Point|pointAddr, p2:Point|pointAddr, attributes: CombAttributes ={} ):Comb{return new Comb('Comb', [p1,p2,], attributes)
}


 /** Difference of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
curveDifference(curve1:GeometryElement, curve2:GeometryElement, attributes: CurveDifferenceAttributes ={} ):CurveDifference{return new CurveDifference('CurveDifference', [curve1,curve2,], attributes)
}


 /** Intersection of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
curveIntersection(curve1:GeometryElement, curve2:GeometryElement, attributes: CurveIntersectionAttributes ={} ):CurveIntersection{return new CurveIntersection('CurveIntersection', [curve1,curve2,], attributes)
}


 /** Union of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
curveUnion(curve1:GeometryElement, curve2:GeometryElement, attributes: CurveUnionAttributes ={} ):CurveUnion{return new CurveUnion('CurveUnion', [curve1,curve2,], attributes)
}


 /** This element is used to provide a constructor for the graph showing the (numerical) derivative of a given curve. */
derivative(curve:Curve, attributes: DerivativeAttributes ={} ):Derivative{return new Derivative('Derivative', [curve,], attributes)
}


 /**  An ellipse is given by two points (the foci) and a third point on the ellipse or the length of the major axis. */
ellipse(p1:Point|pointAddr, p2:Point|pointAddr, radius:Point|pointAddr|Number|Function, attributes: EllipseAttributes ={} ):Ellipse{return new Ellipse('Ellipse', [p1,p2,radius,], attributes)
}


 /** Functiongraph visualizes a map x → f(x).  It is a wrapper for element Curve. The graph is drawn for x in the interval [a,b] default -10 to 10.
```js
let f = TSX.functiongraph((x: number) => 3 * Math.pow(x, 2))
``` */
functiongraph(funct:(x:number)=>number, leftBorder?:number, rightBorder?:number, attributes: FunctiongraphAttributes ={} ):Curve{return new Functiongraph('Functiongraph', [funct,leftBorder,rightBorder,], attributes)
}


            // implementation of signature,  hidden from user
            glider:GliderMultiDefn = (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Glider => {
 let newObject: Glider = {} as Glider // just so it is initialized
   let params = []
   let attrs = {}
   if (b === undefined) {
      if(isJSXAttribute(a)){
          attrs = TSXGraph.defaultAttributes(a)
          params = TSXGraph.dereference([])
      }else{
          params = TSXGraph.dereference([a,])
      }
   }    else {
   if (c === undefined) {
      if(isJSXAttribute(b)){
          attrs = TSXGraph.defaultAttributes(b)
          params = TSXGraph.dereference([a,])
      }else{
          params = TSXGraph.dereference([a,b,])
      }
   }    else {
   if (d === undefined) {
      if(isJSXAttribute(c)){
          attrs = TSXGraph.defaultAttributes(c)
          params = TSXGraph.dereference([a,b,])
      }else{
          params = TSXGraph.dereference([a,b,c,])
      }
   }    else {
   if (e === undefined) {
      if(isJSXAttribute(d)){
          attrs = TSXGraph.defaultAttributes(d)
          params = TSXGraph.dereference([a,b,c,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,])
      }
   }    else {
   if (f === undefined) {
      if(isJSXAttribute(e)){
          attrs = TSXGraph.defaultAttributes(e)
          params = TSXGraph.dereference([a,b,c,d,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,e,])
      }
   } }}}}
 params = b? TSXGraph.dereference([b[0]??0,b[1]??0,a]):TSXGraph.dereference([0,0,a])
                         return new Point('Glider', params ,TSXGraph.defaultAttributes(attrs));
 }

            // implementation of signature,  hidden from user
            grid:GridMultiDefn = (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Grid => {
 let newObject: Grid = {} as Grid // just so it is initialized
   let params = []
   let attrs = {}
   if (b === undefined) {
      if(isJSXAttribute(a)){
          attrs = TSXGraph.defaultAttributes(a)
          params = TSXGraph.dereference([])
      }else{
          params = TSXGraph.dereference([a,])
      }
   }    else {
   if (c === undefined) {
      if(isJSXAttribute(b)){
          attrs = TSXGraph.defaultAttributes(b)
          params = TSXGraph.dereference([a,])
      }else{
          params = TSXGraph.dereference([a,b,])
      }
   }    else {
   if (d === undefined) {
      if(isJSXAttribute(c)){
          attrs = TSXGraph.defaultAttributes(c)
          params = TSXGraph.dereference([a,b,])
      }else{
          params = TSXGraph.dereference([a,b,c,])
      }
   }    else {
   if (e === undefined) {
      if(isJSXAttribute(d)){
          attrs = TSXGraph.defaultAttributes(d)
          params = TSXGraph.dereference([a,b,c,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,])
      }
   }    else {
   if (f === undefined) {
      if(isJSXAttribute(e)){
          attrs = TSXGraph.defaultAttributes(e)
          params = TSXGraph.dereference([a,b,c,d,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,e,])
      }
   } }}}}
   return new Grid('grid', params, TSXGraph.defaultAttributes(attrs)) // as Grid
 }

 /** Hatches can be used to mark congruent lines or curves. */
hatch(line:Line|line, numberHatches:Number, attributes: HatchAttributes ={} ):Hatch{return new Hatch('Hatch', [line,numberHatches,], attributes)
}


 /** This element is used to provide a constructor for an hyperbola. An hyperbola is given by two points (the foci) and a third point on the hyperbola or the length of the major axis. */
hyperbola(point1:Point|pointAddr, point2:Point|pointAddr, point3:Point|pointAddr|Number, start:Number=-3.14, end:Number=3.14, attributes: HyperbolaAttributes ={} ):Hyperbola{return new Hyperbola('Hyperbola', [point1,point2,point3,start,end,], attributes)
}


 /** Constructs the incenter of the triangle described by the three given points. https://mathworld.wolfram.com/Incenter.html */
incenter(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: IncenterAttributes ={} ):Incenter{return new Incenter('Incenter', [p1,p2,p3,], attributes)
}


 /** An incircle is given by three points. */
incircle(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: IncircleAttributes ={} ):Incircle{return new Incircle('Incircle', [p1,p2,p3,], attributes)
}


 /** Creates an area indicating the solution of a linear inequality or an inequality of a function graph, i.e. an inequality of type y */
inequality(boundaryLine:Line|line|Curve, attributes: InequalityAttributes ={} ):Inequality{return new Inequality('Inequality', [boundaryLine,], attributes)
}


 /** This element is used to provide a constructor for special texts containing a HTML form input element. If the width of element is set with the attribute ”cssStyle”, the width of the label must be added. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML input field can be accessed through the sub-object 'rendNodeInput', e.g. to add event listeners. */
input(position:Point|pointAddr, label:String|Function, initial:String="", attributes: InputAttributes ={} ):Input{
 (position as any).push(label,initial);
                        return new Input('Input', TSXGraph.dereference(position),TSXGraph.defaultAttributes(attributes));
}


 /** This element is used to visualize the integral of a given curve over a given interval. */
integral(range:Number[], curve:Curve, attributes: IntegralAttributes ={} ):Integral{return new Integral('Integral', [range,curve,], attributes)
}


 /** An intersection point is a point which lives on two JSXGraph elements, i.e. it is one point of the set consisting of the intersection points of the two elements. The following element types can be (mutually) intersected: line, circle, curve, polygon, polygonal chain. */
intersection(element1:Line|Circle|Curve, element2:Line|Circle, attributes: IntersectionAttributes ={} ):Point{
 return new Intersection('intersection', TSXGraph.dereference([element1,element2,0]), TSXGraph.defaultAttributes(attributes)) as TXG.Point
}


 /** A major arc is a segment of the circumference of a circle having measure greater than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc. */
majorArc(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: MajorArcAttributes ={} ):MajorArc{return new MajorArc('MajorArc', [p1,p2,p3,], attributes)
}


 /** A major sector is a sector of a circle having measure greater than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
majorSector(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: MajorSectorAttributes ={} ):MajorSector{return new MajorSector('MajorSector', [p1,p2,p3,], attributes)
}


            // implementation of signature,  hidden from user
            midpoint:MidpointMultiDefn = (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Midpoint => {
 let newObject: Midpoint = {} as Midpoint // just so it is initialized
   let params = []
   let attrs = {}
   if (b === undefined) {
      if(isJSXAttribute(a)){
          attrs = TSXGraph.defaultAttributes(a)
          params = TSXGraph.dereference([])
      }else{
          params = TSXGraph.dereference([a,])
      }
   }    else {
   if (c === undefined) {
      if(isJSXAttribute(b)){
          attrs = TSXGraph.defaultAttributes(b)
          params = TSXGraph.dereference([a,])
      }else{
          params = TSXGraph.dereference([a,b,])
      }
   }    else {
   if (d === undefined) {
      if(isJSXAttribute(c)){
          attrs = TSXGraph.defaultAttributes(c)
          params = TSXGraph.dereference([a,b,])
      }else{
          params = TSXGraph.dereference([a,b,c,])
      }
   }    else {
   if (e === undefined) {
      if(isJSXAttribute(d)){
          attrs = TSXGraph.defaultAttributes(d)
          params = TSXGraph.dereference([a,b,c,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,])
      }
   }    else {
   if (f === undefined) {
      if(isJSXAttribute(e)){
          attrs = TSXGraph.defaultAttributes(e)
          params = TSXGraph.dereference([a,b,c,d,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,e,])
      }
   } }}}}
   return new Midpoint('midpoint', params, TSXGraph.defaultAttributes(attrs)) // as Midpoint
 }

 /** A minor arc is a segment of the circumference of a circle having measure less than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc. */
minorArc(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: MinorArcAttributes ={} ):MinorArc{return new MinorArc('MinorArc', [p1,p2,p3,], attributes)
}


 /** A minor sector is a sector of a circle having measure less than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
minorSector(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: MinorSectorAttributes ={} ):MinorSector{return new MinorSector('MinorSector', [p1,p2,p3,], attributes)
}


 /** A mirror element of a point, line, circle, curve, polygon will be constructed. */
mirrorelement(element:Point|Line|Circle|Curve|Polygon, acrossPoint:Point|pointAddr, attributes: mirrorelementAttributes ={} ):mirrorelement{return new mirrorelement('mirrorelement', [element,acrossPoint,], attributes)
}


 /** A mirror point will be constructed. */
mirrorpoint(p1:Point, p2:Point, attributes: MirrorpointAttributes ={} ):Mirrorpoint{return new Mirrorpoint('Mirrorpoint', [p1,p2,], attributes)
}


 /** A non-reflex angle is the acute or obtuse instance of an angle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
nonReflexAngle(point1:Point, point2:Point, point3:Point, attributes: NonReflexAngleAttributes ={} ):NonReflexAngle{return new NonReflexAngle('NonReflexAngle', [point1,point2,point3,], attributes)
}


            // implementation of signature,  hidden from user
            normal:NormalMultiDefn = (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Normal => {
 let newObject: Normal = {} as Normal // just so it is initialized
   let params = []
   let attrs = {}
   if (b === undefined) {
      if(isJSXAttribute(a)){
          attrs = TSXGraph.defaultAttributes(a)
          params = TSXGraph.dereference([])
      }else{
          params = TSXGraph.dereference([a,])
      }
   }    else {
   if (c === undefined) {
      if(isJSXAttribute(b)){
          attrs = TSXGraph.defaultAttributes(b)
          params = TSXGraph.dereference([a,])
      }else{
          params = TSXGraph.dereference([a,b,])
      }
   }    else {
   if (d === undefined) {
      if(isJSXAttribute(c)){
          attrs = TSXGraph.defaultAttributes(c)
          params = TSXGraph.dereference([a,b,])
      }else{
          params = TSXGraph.dereference([a,b,c,])
      }
   }    else {
   if (e === undefined) {
      if(isJSXAttribute(d)){
          attrs = TSXGraph.defaultAttributes(d)
          params = TSXGraph.dereference([a,b,c,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,])
      }
   }    else {
   if (f === undefined) {
      if(isJSXAttribute(e)){
          attrs = TSXGraph.defaultAttributes(e)
          params = TSXGraph.dereference([a,b,c,d,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,e,])
      }
   } }}}}
   return new Normal('normal', params, TSXGraph.defaultAttributes(attrs)) // as Normal
 }

 /** An `orthogonalprojection` is a locked point determined by projecting a point orthogonally onto a line.
```js
let s1 = TSX.segment(p1, p2)
let p3 = TSX.point([0, -1])
TSX.orthogonalprojection(p3, s1)
``` */
orthogonalprojection(point:Point|pointAddr, line:Line|line, attributes: OrthogonalprojectionAttributes ={} ):Orthogonalprojection{return new Orthogonalprojection('Orthogonalprojection', [point,line,], attributes)
}


 /** This element is used to provide a constructor for the ”other” intersection point. */
otherIntersection(element1:Line|Circle, element2:Line|Circle, firstIntersection:Point, attributes: OtherIntersectionAttributes ={} ):Point{
  return new OtherIntersection('otherintersection', TSXGraph.dereference([element1,element2,firstIntersection]), attributes)
}


 /** This element is used to provide a constructor for a parabola. A parabola is given by one point (the focus) and a line (the directrix). */
parabola(focalPoint:Point|pointAddr, line:Line|line, attributes: ParabolaAttributes ={} ):Parabola{return new Parabola('Parabola', [focalPoint,line,], attributes)
}


            // implementation of signature,  hidden from user
            parallelpoint:ParallelpointMultiDefn = (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Parallelpoint => {
 let newObject: Parallelpoint = {} as Parallelpoint // just so it is initialized
   let params = []
   let attrs = {}
   if (b === undefined) {
      if(isJSXAttribute(a)){
          attrs = TSXGraph.defaultAttributes(a)
          params = TSXGraph.dereference([])
      }else{
          params = TSXGraph.dereference([a,])
      }
   }    else {
   if (c === undefined) {
      if(isJSXAttribute(b)){
          attrs = TSXGraph.defaultAttributes(b)
          params = TSXGraph.dereference([a,])
      }else{
          params = TSXGraph.dereference([a,b,])
      }
   }    else {
   if (d === undefined) {
      if(isJSXAttribute(c)){
          attrs = TSXGraph.defaultAttributes(c)
          params = TSXGraph.dereference([a,b,])
      }else{
          params = TSXGraph.dereference([a,b,c,])
      }
   }    else {
   if (e === undefined) {
      if(isJSXAttribute(d)){
          attrs = TSXGraph.defaultAttributes(d)
          params = TSXGraph.dereference([a,b,c,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,])
      }
   }    else {
   if (f === undefined) {
      if(isJSXAttribute(e)){
          attrs = TSXGraph.defaultAttributes(e)
          params = TSXGraph.dereference([a,b,c,d,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,e,])
      }
   } }}}}
   return new Parallelpoint('parallelpoint', params, TSXGraph.defaultAttributes(attrs)) // as Parallelpoint
 }

            // implementation of signature,  hidden from user
            segment:SegmentMultiDefn = (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Segment => {
 let newObject: Segment = {} as Segment // just so it is initialized
   let params = []
   let attrs = {}
   if (b === undefined) {
      if(isJSXAttribute(a)){
          attrs = TSXGraph.defaultAttributes(a)
          params = TSXGraph.dereference([])
      }else{
          params = TSXGraph.dereference([a,])
      }
   }    else {
   if (c === undefined) {
      if(isJSXAttribute(b)){
          attrs = TSXGraph.defaultAttributes(b)
          params = TSXGraph.dereference([a,])
      }else{
          params = TSXGraph.dereference([a,b,])
      }
   }    else {
   if (d === undefined) {
      if(isJSXAttribute(c)){
          attrs = TSXGraph.defaultAttributes(c)
          params = TSXGraph.dereference([a,b,])
      }else{
          params = TSXGraph.dereference([a,b,c,])
      }
   }    else {
   if (e === undefined) {
      if(isJSXAttribute(d)){
          attrs = TSXGraph.defaultAttributes(d)
          params = TSXGraph.dereference([a,b,c,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,])
      }
   }    else {
   if (f === undefined) {
      if(isJSXAttribute(e)){
          attrs = TSXGraph.defaultAttributes(e)
          params = TSXGraph.dereference([a,b,c,d,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,e,])
      }
   } }}}}
   return new Segment('segment', params, TSXGraph.defaultAttributes(attrs)) // as Segment
 }

 /**  */
parallelogram(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: ParallelogramAttributes ={} ):Parallelogram{return new Parallelogram('Parallelogram', [p1,p2,p3,], attributes)
}


 /** Create a line orthogonal to a given line and containing a given point. If you want a Perpendicular to a Curve, look at Normal(). */
perpendicular(line:Line|line, point:Point|pointAddr, attributes: PerpendicularAttributes ={} ):Perpendicular{return new Perpendicular('Perpendicular', [line,point,], attributes)
}


 /** Create a point on a line where a perpendicular to a given point would intersect that line. */
perpendicularPoint(line:Line|line, point:Point|pointAddr, attributes: PerpendicularPointAttributes ={} ):PerpendicularPoint{return new PerpendicularPoint('PerpendicularPoint', [line,point,], attributes)
}


 /** Create a segment orthogonal to a given line and containing a given point.  If you want a Perpendicular to a Curve, look at Normal(). */
perpendicularSegment(line:Line|line, point:Point|pointAddr, attributes: PerpendicularSegmentAttributes ={} ):PerpendicularSegment{return new PerpendicularSegment('PerpendicularSegment', [line,point,], attributes)
}


 /** This element is used to provide a constructor for the polar line of a point with respect to a conic or a circle. */
polarLine(conic:Conic|Circle, point:Point, attributes: PolarLineAttributes ={} ):PolarLine{return new PolarLine('PolarLine', [conic,point,], attributes)
}


 /** This element is used to provide a constructor for the pole point of a line with respect to a conic or a circle. */
polePoint(conic:Conic|Circle, line:Line, attributes: PolePointAttributes ={} ):PolePoint{return new PolePoint('PolePoint', [conic,line,], attributes)
}


 /** Array of Points */
polygonalChain(pointArray:Point[]|pointAddr[], attributes: PolygonalChainAttributes ={} ):PolygonalChain{return new PolygonalChain('PolygonalChain', [pointArray,], attributes)
}


 /** This element is used to provide a constructor for the radical axis with respect to two circles with distinct centers. The angular bisector of the polar lines of the circle centers with respect to the other circle is always the radical axis. The radical axis passes through the intersection points when the circles intersect. When a circle about the midpoint of circle centers, passing through the circle centers, intersects the circles, the polar lines pass through those intersection points. */
radicalAxis(circle1:Circle, circle2:Circle, attributes: RadicalAxisAttributes ={} ):RadicalAxis{return new RadicalAxis('RadicalAxis', [circle1,circle2,], attributes)
}


 /** A reflected element (point, polygon, line or curve) from an object of the same type and a line of reflection. */
reflection(object:Point|Line|Curve|Polygon, reflectLine:Line, attributes: ReflectionAttributes ={} ):Reflection{return new Reflection('Reflection', [object,reflectLine,], attributes)
}


 /** A reflex angle is the neither acute nor obtuse instance of an angle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
reflexAngle(point1:Point, point2:Point, point3:Point, attributes: ReflexAngleAttributes ={} ):ReflexAngle{return new ReflexAngle('ReflexAngle', [point1,point2,point3,], attributes)
}


 /** Constructs a regular polygon. It needs two points which define the base line and the number of vertices. */
regularPolygon(P1:Point|pointAddr, P2:Point|pointAddr, nVertices:Number, attributes: RegularPolygonAttributes ={} ):RegularPolygon{return new RegularPolygon('RegularPolygon', [P1,P2,nVertices,], attributes)
}


 /** A semicircle is a special arc defined by two points. The arc hits both points. */
semicircle(P1:Point|pointAddr, P2:Point|pointAddr, attributes: SemicircleAttributes ={} ):Semicircle{return new Semicircle('Semicircle', [P1,P2,], attributes)
}


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
slider(StartPoint:Point|pointAddr, EndPoint:Point|pointAddr, minimum_initial_maximum:[number,number,number], attributes: SliderAttributes ={} ):Slider{return new Slider('Slider', [StartPoint,EndPoint,minimum_initial_maximum,], attributes)
}


 /** Slope field. Plot a slope field given by a function f(x, y) returning a number. */
slopefield(func:Function, xData:NumberFunction[], yData:NumberFunction[], attributes: SlopefieldAttributes ={} ):Slopefield{return new Slopefield('Slopefield', [func,xData,yData,], attributes)
}


            // implementation of signature,  hidden from user
            slopetriangle:SlopetriangleMultiDefn = (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Slopetriangle => {
 let newObject: Slopetriangle = {} as Slopetriangle // just so it is initialized
   let params = []
   let attrs = {}
   if (b === undefined) {
      if(isJSXAttribute(a)){
          attrs = TSXGraph.defaultAttributes(a)
          params = TSXGraph.dereference([])
      }else{
          params = TSXGraph.dereference([a,])
      }
   }    else {
   if (c === undefined) {
      if(isJSXAttribute(b)){
          attrs = TSXGraph.defaultAttributes(b)
          params = TSXGraph.dereference([a,])
      }else{
          params = TSXGraph.dereference([a,b,])
      }
   }    else {
   if (d === undefined) {
      if(isJSXAttribute(c)){
          attrs = TSXGraph.defaultAttributes(c)
          params = TSXGraph.dereference([a,b,])
      }else{
          params = TSXGraph.dereference([a,b,c,])
      }
   }    else {
   if (e === undefined) {
      if(isJSXAttribute(d)){
          attrs = TSXGraph.defaultAttributes(d)
          params = TSXGraph.dereference([a,b,c,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,])
      }
   }    else {
   if (f === undefined) {
      if(isJSXAttribute(e)){
          attrs = TSXGraph.defaultAttributes(e)
          params = TSXGraph.dereference([a,b,c,d,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,e,])
      }
   } }}}}
   return new Slopetriangle('slopetriangle', params, TSXGraph.defaultAttributes(attrs)) // as Slopetriangle
 }

 /** This element is used to provide a constructor for (natural) cubic spline curves. Create a dynamic spline interpolated curve given by sample points p_1 to p_n. */
spline(points:Point[]|number[][], attributes: SplineAttributes ={} ):Curve{
 return new Spline('spline', TSXGraph.dereference(points), TSXGraph.defaultAttributes(attributes))
}


            // implementation of signature,  hidden from user
            tangent:TangentMultiDefn = (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Tangent => {
 let newObject: Tangent = {} as Tangent // just so it is initialized
   let params = []
   let attrs = {}
   if (b === undefined) {
      if(isJSXAttribute(a)){
          attrs = TSXGraph.defaultAttributes(a)
          params = TSXGraph.dereference([])
      }else{
          params = TSXGraph.dereference([a,])
      }
   }    else {
   if (c === undefined) {
      if(isJSXAttribute(b)){
          attrs = TSXGraph.defaultAttributes(b)
          params = TSXGraph.dereference([a,])
      }else{
          params = TSXGraph.dereference([a,b,])
      }
   }    else {
   if (d === undefined) {
      if(isJSXAttribute(c)){
          attrs = TSXGraph.defaultAttributes(c)
          params = TSXGraph.dereference([a,b,])
      }else{
          params = TSXGraph.dereference([a,b,c,])
      }
   }    else {
   if (e === undefined) {
      if(isJSXAttribute(d)){
          attrs = TSXGraph.defaultAttributes(d)
          params = TSXGraph.dereference([a,b,c,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,])
      }
   }    else {
   if (f === undefined) {
      if(isJSXAttribute(e)){
          attrs = TSXGraph.defaultAttributes(e)
          params = TSXGraph.dereference([a,b,c,d,])
      }else{
          params = TSXGraph.dereference([a,b,c,d,e,])
      }
   } }}}}
   return new Tangent('tangent', params, TSXGraph.defaultAttributes(attrs)) // as Tangent
 }

 /** Construct the tangent line through a point to a conic or a circle. There will be either two, one or no such tangent, depending if the point is outside of the conic, on the conic, or inside of the conic. Similar to the intersection of a line with a circle, the specific tangent can be chosen with a third (optional) parameter number. */
tangentTo(conic:Conic|Circle, point:Point|pointAddr, N:Number=0, attributes: tangentToAttributes ={} ):tangentTo{return new tangentTo('tangentTo', [conic,point,N,], attributes)
}


 /** A tape measure can be used to measure distances between points. */
tapemeasure(P1:Point|pointAddr, P2:Point|pointAddr, attributes: TapemeasureAttributes ={} ):Tapemeasure{return new Tapemeasure('Tapemeasure', [P1,P2,], attributes)
}


 /** This element is used to provide a constructor for trace curve (simple locus curve), which is realized as a special curve. */
tracecurve(glider:Glider, point:Point, attributes: TracecurveAttributes ={} ):Tracecurve{return new Tracecurve('Tracecurve', [glider,point,], attributes)
}


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
transformPoint(point:Point, transform:Transform|Transform[], attributes: TransformPointAttributes ={} ):Point{
  return new Point('point', TSXGraph.dereference([point,TSXGraph.dereference(transform)]),TSXGraph.defaultAttributes(attributes))
}


 /** Here, lower is an array of the form [x, y] and dim is an array of the form [w, h]. The arrays [x, y] and [w, h] define the 2D frame into which the 3D cube is (roughly) projected. If the view azimuth=0 and elevation=0, the 3D view will cover a rectangle with lower left corner [x,y] and side lengths [w, h] of the board. The 'cube' is of the form [[x1, x2], [y1, y2], [z1, z2]] which determines the coordinate ranges of the 3D cube.  */
view3D(x:Number=-13, y:Number=-10, w:Number=20, h:Number=20, xBounds:Number[]=[-5,5], yBounds:Number[]=[-5,5], zBounds:Number[]=[-5,5], attributes: View3DAttributes={
                        depthorderpoints:true,
                         // Main axes
                         axesPosition: 'center',
                         //xAxis: { strokeColor: 'blue', strokeWidth: 3 },
                         // Planes
                         xPlaneRear: { fillColor: 'yellow', mesh3d: { visible: false } },
                         // yPlaneFront: { visible: true, fillColor: 'blue' },
                         // Axes on planes
                         xPlaneRearYAxis: { strokeColor: 'red' },
                         xPlaneRearZAxis: { strokeColor: 'red' },
                         yPlaneFrontXAxis: { strokeColor: 'blue' },
                         yPlaneFrontZAxis: { strokeColor: 'blue' },
                         zPlaneFrontXAxis: { visible: false },
                         zPlaneFrontYAxis: { visible: false }
                     }, ):View3D{
 return new View3D('view3D',[ [x,y],[w,h],[xBounds,yBounds,zBounds]], attributes)
}


 /** Create a Transform object with Translate properties. */
translate(dx:number|Function, dy:number|Function, attributes: TranslateAttributes ={} ):Transform{
 return new Transform('Transform', TSXGraph.dereference([dx,dy]), {type:'translate'})
}


 /** Create a Transform object with Rotate properties. */
rotate(angle:number|Function, around:Point|pointAddr, attributes: RotateAttributes ={} ):Transform{
 return new Transform('Transform', TSXGraph.dereference([angle,around]), {type:'rotate'})
}


 /** Create a Transform object with Scale properties.  Scaling is relative to [0,0]. */
scale(xMultiplier:number|Function, yMultiplier:number|Function, attributes: ScaleAttributes ={} ):Transform{
 return new Transform('Transform', TSXGraph.dereference([xMultiplier,yMultiplier]), {type:'scale'})
}

}

 export class GeometryElement {
 elValue: Object = {}
 tsxBoard: TSXBoard = JSXMath.board  // copy, sometimes need access to board
 scaleXY:number = 1   // used by V2 math library
 constructor(className:string, params:any[], attrs: GeometryElementAttributes){
 if (className == 'Polygon' || className == 'PolygonalChain' || className == 'Group') {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs))
 } else {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs))
 }
 if (attrs.hasOwnProperty('scaleXY')) {
    this.scaleXY = (attrs as any).scaleXY    // for V2 Math
}
 }

 /**  */
 public get x():GeometryElement {
  return (this.elValue as any).x as GeometryElement
}

 /**  */
 public get y():GeometryElement {
  return (this.elValue as any).y as GeometryElement
}

 /**  */
 public get elType():String {
  return (this.elValue as any).elType as String
}

 /**  */
 public get name():String {
  return (this.elValue as any).name as String
}

 /**  */
 public get isDraggable():Boolean {
  return (this.elValue as any).isDraggable as Boolean
}
 public set isDraggable(param:Boolean) {
  (this.elValue as any).isDraggable = param
}

 /** Removes all ticks from a line or curve. */
 removeAllTicks(): Object {
  return (this.elValue as any).removeAllTicks() as Object
}

 /** Add an element as a child to the current element. */
 addChild(): GeometryElement {
  return (this.elValue as any).addChild() as GeometryElement
}

 /** Adds ids of elements to the array this.parents. */
 addParents(parents:GeometryElement[]): Object {
  return (this.elValue as any).addParents(TSXGraph.dereference(parents)) as Object
}

 /** Rotate texts or images by a given degree. */
 addRotation(): String {
  return (this.elValue as any).addRotation() as String
}

 /** Adds ticks to this line or curve. */
 addTicks(): String {
  return (this.elValue as any).addTicks() as String
}

 /** Animates properties for that object like stroke or fill color, opacity and maybe even more later. */
 animate(): GeometryElement {
  return (this.elValue as any).animate() as GeometryElement
}

 /** Dimensions of the smallest rectangle enclosing the element. */
 bounds(): Number[] {
  return (this.elValue as any).bounds() as Number[]
}

 /** Removes all objects generated by the trace function. */
 clearTrace(): GeometryElement {
  return (this.elValue as any).clearTrace() as GeometryElement
}

 /** Copy the element to background. */
 cloneToBackground(): GeometryElement {
  return (this.elValue as any).cloneToBackground() as GeometryElement
}

 /** Creates a label element for this geometry element. */
 createLabel(): boolean {
  return (this.elValue as any).createLabel() as boolean
}

 /** Format a number according to the locale set in the attribute ”intl”. */
 formatNumberLocale(): String|Number {
  return (this.elValue as any).formatNumberLocale() as String|Number
}

 /** Array of strings containing the polynomials defining the element. */
 generatePolynomial(): Number[] {
  return (this.elValue as any).generatePolynomial() as Number[]
}

 /** Get the value of the property key. */
 getAttribute(): Object {
  return (this.elValue as any).getAttribute() as Object
}

 /** Retrieve a copy of the current visProp. */
 getAttributes(): Object {
  return (this.elValue as any).getAttributes() as Object
}

 /** Returns the elements name. */
 getName(): String {
  return (this.elValue as any).getName() as String
}

 /** List of the element ids resp. */
 getParents(): Number[] {
  return (this.elValue as any).getParents() as Number[]
}

 /** Deprecated alias for JXG.GeometryElement#getAttribute. */
 getProperty(): Number[] {
  return (this.elValue as any).getProperty() as Number[]
}

 /** The type of the element as used in JXG.Board#create. */
 getType(): String {
  return (this.elValue as any).getType() as String
}

 /** Move an element to its nearest grid point. */
 handleSnapToGrid(): GeometryElement {
  return (this.elValue as any).handleSnapToGrid() as GeometryElement
}

 /** Hide the element. */
 hide(): GeometryElement {
  return (this.elValue as any).hide() as GeometryElement
}

 /** Hide the element. */
 hideElement(): GeometryElement {
  return (this.elValue as any).hideElement() as GeometryElement
}

 /**  */
 labelColor(): Board {
  return (this.elValue as any).labelColor() as Board
}

 /** Uses the ”normal” properties of the element. */
 noHighlight(): Board {
  return (this.elValue as any).noHighlight() as Board
}

 /** Removes the element from the construction. */
 remove(): Object {
  return (this.elValue as any).remove() as Object
}

 /** Remove an element as a child from the current element. */
 removeChild(): Object {
  return (this.elValue as any).removeChild() as Object
}

 /** Alias of JXG.EventEmitter.off. */
 removeEvent(): Number {
  return (this.elValue as any).removeEvent() as Number
}

 /** Removes ticks identified by parameter named tick from this line or curve. */
 removeTicks(): Object {
  return (this.elValue as any).removeTicks() as Object
}

 /** Determines whether the element has arrows at start or end of the arc. */
 setArrow(): GeometryElement {
  return (this.elValue as any).setArrow() as GeometryElement
}

 /** Sets an arbitrary number of attributes. */
 setAttribute(attrs:GeometryElementAttributes): void {
  return (this.elValue as any).setAttribute(attrs) as void
}

 /** Sets a label and its text If label doesn't exist, it creates one */
 setLabel(txt:string): Object {
  return (this.elValue as any).setLabel(txt) as Object
}

 /** Updates the element's label text, strips all html. */
 setLabelText(): Object {
  return (this.elValue as any).setLabelText() as Object
}

 /** Updates the element's label text and the element's attribute ”name”, strips all html. */
 setName(): Object {
  return (this.elValue as any).setName() as Object
}

 /** Sets ids of elements to the array this.parents. */
 setParents(): Object {
  return (this.elValue as any).setParents() as Object
}

 /** Translates the object by (x, y). */
 setPosition(transform:Transform): GeometryElement {
  return (this.elValue as any).setPosition(COORDS_BY_USER,transform) as GeometryElement
}

 /** Moves an element by the difference of two coordinates. */
 setPositionDirectly(address:number[]): Point {
  return (this.elValue as any).setPositionDirectly(COORDS_BY_USER,address) as Point
}

 /** Deprecated alias for JXG.GeometryElement#setAttribute. */
 setProperty(): GeometryElement {
  return (this.elValue as any).setProperty() as GeometryElement
}

 /** Make the element visible. */
 show(): GeometryElement {
  return (this.elValue as any).show() as GeometryElement
}

 /** Make the element visible. */
 showElement(): GeometryElement {
  return (this.elValue as any).showElement() as GeometryElement
}

 /** Snaps the element to points. */
 snapToPoints(): GeometryElement {
  return (this.elValue as any).snapToPoints() as GeometryElement
}

 /** Checks if locale is enabled in the attribute. */
 useLocale(): Boolean {
  return (this.elValue as any).useLocale() as Boolean
}

 /**  */
 on(event:string,handler:Function): any {
  return (this.elValue as any).on(event,handler) as any
}
}

 export class GeometryElement3D {
 elValue: Object = {}
 tsxBoard: TSXBoard = JSXMath.board  // copy, sometimes need access to board
 scaleXY:number = 1   // used by V2 math library
 constructor(className:string, params:any[], attrs: GeometryElement3DAttributes){
 if (className == 'Polygon' || className == 'PolygonalChain' || className == 'Group') {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs))
 } else {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs))
 }
 if (attrs.hasOwnProperty('scaleXY')) {
    this.scaleXY = (attrs as any).scaleXY    // for V2 Math
}
 }

 /**  */
 public get element2D():Number[] {
  return (this.elValue as any).element2D as Number[]
}

 /**  */
 public get is3D():Boolean {
  return (this.elValue as any).is3D as Boolean
}

 /**  */
 public get view():View3D {
  return (this.elValue as any).view as View3D
}

 /**  */
 public get strokeColor():String {
  return (this.elValue as any).strokeColor as String
}

 /**  */
 public get strokeWidth():Number {
  return (this.elValue as any).strokeWidth as Number
}

 /**  */
 public get size():Number {
  return (this.elValue as any).size as Number
}

 /**  */
 public get fillColor():String {
  return (this.elValue as any).fillColor as String
}

 /**  */
 public get visible():Boolean {
  return (this.elValue as any).visible as Boolean
}

 /**  */
 setAttribute(attrs:GeometryElement3DAttributes): void {
  return (this.elValue as any).setAttribute(attrs) as void
}
}

 export class Board {
 elValue: Object = {}
 tsxBoard: TSXBoard = JSXMath.board  // copy, sometimes need access to board
 scaleXY:number = 1   // used by V2 math library
 constructor(className:string, params:any[], attrs: BoardAttributes){
 if (className == 'Polygon' || className == 'PolygonalChain' || className == 'Group') {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs))
 } else {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs))
 }
 if (attrs.hasOwnProperty('scaleXY')) {
    this.scaleXY = (attrs as any).scaleXY    // for V2 Math
}
 }
}

 export class Infobox {
 elValue: Object = {}
 tsxBoard: TSXBoard = JSXMath.board  // copy, sometimes need access to board
 scaleXY:number = 1   // used by V2 math library
 constructor(className:string, params:any[], attrs: InfoboxAttributes){
 if (className == 'Polygon' || className == 'PolygonalChain' || className == 'Group') {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs))
 } else {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs))
 }
 if (attrs.hasOwnProperty('scaleXY')) {
    this.scaleXY = (attrs as any).scaleXY    // for V2 Math
}
 }
}

 export class CA {
 elValue: Object = {}
 tsxBoard: TSXBoard = JSXMath.board  // copy, sometimes need access to board
 scaleXY:number = 1   // used by V2 math library
 constructor(className:string, params:any[], attrs: CAAttributes){
 if (className == 'Polygon' || className == 'PolygonalChain' || className == 'Group') {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs))
 } else {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs))
 }
 if (attrs.hasOwnProperty('scaleXY')) {
    this.scaleXY = (attrs as any).scaleXY    // for V2 Math
}
 }

 /** f = map (x) -> x*sin(x); Usages: h = D(f, x); h = map (x) -> D(f, x); or D(x^2, x); */
 expandDerivatives(): any {
  return (this.elValue as any).expandDerivatives() as any
}

 /** Declare all subnodes as math nodes, i.e recursively set node.isMath = true; */
 setMath(): any {
  return (this.elValue as any).setMath() as any
}
}

 export class Chart extends GeometryElement {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get elements():any[] {
  return (this.elValue as any).elements as any[]
}

 /** Create bar chart defined by two data arrays. */
 drawBar(): any[] {
  return (this.elValue as any).drawBar() as any[]
}

 /** Create line chart where the curve is given by a regression polynomial defined by two data arrays. */
 drawFit(): Curve {
  return (this.elValue as any).drawFit() as Curve
}

 /** Create line chart defined by two data arrays. */
 drawLine(): Curve {
  return (this.elValue as any).drawLine() as Curve
}

 /** Create pie chart. */
 drawPie(): Object {
  return (this.elValue as any).drawPie() as Object
}

 /** Create chart consisting of JSXGraph points. */
 drawPoints(): Number[] {
  return (this.elValue as any).drawPoints() as Number[]
}

 /** Create radar chart. */
 drawRadar(): Object {
  return (this.elValue as any).drawRadar() as Object
}

 /** Create line chart that consists of a natural spline curve defined by two data arrays. */
 drawSpline(): Curve {
  return (this.elValue as any).drawSpline() as Curve
}

 /** Template for dynamic charts update. */
 updateDataArray(): Chart {
  return (this.elValue as any).updateDataArray() as Chart
}
}

 export class Circle extends GeometryElement {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /** Circle area */
 Area(): Number {
  return (this.elValue as any).Area() as Number
}

 /** Perimeter (circumference) of circle. */
 Perimeter(): Number {
  return (this.elValue as any).Perimeter() as Number
}

 /** Calculates the radius of the circle. */
 Radius(): Number {
  return (this.elValue as any).Radius() as Number
}

 /** Treats the circle as parametric curve and calculates its X coordinate. */
 X(): Number {
  return (this.elValue as any).X() as Number
}

 /** Treats the circle as parametric curve and calculates its Y coordinate. */
 Y(): Number {
  return (this.elValue as any).Y() as Number
}

 /** Treat the circle as parametric curve and calculates its Z coordinate. */
 Z(): Number {
  return (this.elValue as any).Z() as Number
}
}

 export class Circle3D extends GeometryElement3D {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Complex {
 elValue: Object = {}
 tsxBoard: TSXBoard = JSXMath.board  // copy, sometimes need access to board
 scaleXY:number = 1   // used by V2 math library
 constructor(className:string, params:any[], attrs: ComplexAttributes){
 if (className == 'Polygon' || className == 'PolygonalChain' || className == 'Group') {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs))
 } else {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs))
 }
 if (attrs.hasOwnProperty('scaleXY')) {
    this.scaleXY = (attrs as any).scaleXY    // for V2 Math
}
 }

 /**  */
 public get absval():Number {
  return (this.elValue as any).absval as Number
}

 /**  */
 public get angle():Number {
  return (this.elValue as any).angle as Number
}

 /**  */
 public get imaginary():Number {
  return (this.elValue as any).imaginary as Number
}

 /**  */
 public get isComplex():Boolean {
  return (this.elValue as any).isComplex as Boolean
}

 /**  */
 public get real():Number {
  return (this.elValue as any).real as Number
}

 /** Add another complex number to this complex number. */
 add(): Complex {
  return (this.elValue as any).add() as Complex
}

 /** Conjugate a complex number in place. */
 conj(): Complex {
  return (this.elValue as any).conj() as Complex
}

 /** Divide this complex number by the given complex number. */
 div(): Complex {
  return (this.elValue as any).div() as Complex
}

 /** Multiply another complex number to this complex number. */
 mult(): Complex {
  return (this.elValue as any).mult() as Complex
}

 /** Subtract another complex number from this complex number. */
 sub(): Complex {
  return (this.elValue as any).sub() as Complex
}

 /** Converts a complex number into a string. */
 toString(): String {
  return (this.elValue as any).toString() as String
}
}

 export class Composition {
 elValue: Object = {}
 tsxBoard: TSXBoard = JSXMath.board  // copy, sometimes need access to board
 scaleXY:number = 1   // used by V2 math library
 constructor(className:string, params:any[], attrs: CompositionAttributes){
 if (className == 'Polygon' || className == 'PolygonalChain' || className == 'Group') {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs))
 } else {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs))
 }
 if (attrs.hasOwnProperty('scaleXY')) {
    this.scaleXY = (attrs as any).scaleXY    // for V2 Math
}
 }

 /** Adds an element to the composition container. */
 add(): Boolean {
  return (this.elValue as any).add() as Boolean
}

 /** Invokes fullUpdate for every stored element with a fullUpdate method and hands over the given arguments. */
 fullUpdate(): Boolean {
  return (this.elValue as any).fullUpdate() as Boolean
}

 /** Invokes highlight for every stored element with a highlight method and hands over the given arguments. */
 highlight(): Boolean {
  return (this.elValue as any).highlight() as Boolean
}

 /** Invokes noHighlight for every stored element with a noHighlight method and hands over the given arguments. */
 noHighlight(): Boolean {
  return (this.elValue as any).noHighlight() as Boolean
}

 /** Invokes prepareUpdate for every stored element with a prepareUpdate method and hands over the given arguments. */
 prepareUpdate(): Boolean {
  return (this.elValue as any).prepareUpdate() as Boolean
}

 /** Remove an element from the composition container. */
 remove(): Boolean {
  return (this.elValue as any).remove() as Boolean
}

 /** Invokes setParents for every stored element with a setParents method and hands over the given arguments. */
 setParents(): any {
  return (this.elValue as any).setParents() as any
}

 /** Invokes updateRenderer for every stored element with a updateRenderer method and hands over the given arguments. */
 updateRenderer(): any {
  return (this.elValue as any).updateRenderer() as any
}
}

 export class Coords {
 elValue: Object = {}
 tsxBoard: TSXBoard = JSXMath.board  // copy, sometimes need access to board
 scaleXY:number = 1   // used by V2 math library
 constructor(className:string, params:any[], attrs: CoordsAttributes){
 if (className == 'Polygon' || className == 'PolygonalChain' || className == 'Group') {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs))
 } else {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs))
 }
 if (attrs.hasOwnProperty('scaleXY')) {
    this.scaleXY = (attrs as any).scaleXY    // for V2 Math
}
 }

 /**  */
 public get board():Board {
  return (this.elValue as any).board as Board
}

 /**  */
 public get emitter():boolean {
  return (this.elValue as any).emitter as boolean
}

 /**  */
 public get scrCoords():Number[] {
  return (this.elValue as any).scrCoords as Number[]
}

 /**  */
 public get usrCoords():Number[] {
  return (this.elValue as any).usrCoords as Number[]
}

 /** Test if one of the usrCoords is NaN or the coordinates are infinite. */
 isReal(): Boolean {
  return (this.elValue as any).isReal() as Boolean
}

 /** Set coordinates by either user coordinates or screen coordinates and recalculate the other one. */
 setCoordinates(): Coords {
  return (this.elValue as any).setCoordinates() as Coords
}
}

 export class Curve extends GeometryElement {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get dataX():Number[] {
  return (this.elValue as any).dataX as Number[]
}
 public set dataX(param:Number[]) {
  (this.elValue as any).dataX = param
}

 /**  */
 public get dataY():Number[] {
  return (this.elValue as any).dataY as Number[]
}
 public set dataY(param:Number[]) {
  (this.elValue as any).dataY = param
}

 /**  */
 public get ticks():Number[] {
  return (this.elValue as any).ticks as Number[]
}

 /** Allocate points in the Coords array this.points */
 allocatePoints(): Number[] {
  return (this.elValue as any).allocatePoints() as Number[]
}

 /** Converts the JavaScript/JessieCode/GEONExT syntax of the defining function term into JavaScript. */
 generateTerm(): Number[] {
  return (this.elValue as any).generateTerm() as Number[]
}

 /** Gives the default value of the right bound for the curve. */
 maxX(): Number {
  return (this.elValue as any).maxX() as Number
}

 /** Gives the default value of the left bound for the curve. */
 minX(): Number {
  return (this.elValue as any).minX() as Number
}

 /** Shift the curve by the vector 'where'. */
 moveTo(): Curve {
  return (this.elValue as any).moveTo() as Curve
}

 /** Finds dependencies in a given term and notifies the parents by adding the dependent object to the found objects child elements. */
 notifyParents(): Curve {
  return (this.elValue as any).notifyParents() as Curve
}

 /** Computes the curve path */
 updateCurve(): Curve {
  return (this.elValue as any).updateCurve() as Curve
}

 /** For dynamic dataplots updateCurve can be used to compute new entries for the arrays JXG.Curve#dataX and JXG.Curve#dataY. */
 updateDataArray(func:Function): void {
  return (this.elValue as any).updateDataArray(func) as void
}

 /** Updates the visual contents of the curve. */
 updateRenderer(): Curve {
  return (this.elValue as any).updateRenderer() as Curve
}

 /** Applies the transformations of the curve to the given point p. */
 updateTransform(): Point {
  return (this.elValue as any).updateTransform() as Point
}

 /** The parametric function which defines the x-coordinate of the curve. */
 X(): Number {
  return (this.elValue as any).X() as Number
}

 /** The parametric function which defines the y-coordinate of the curve. */
 Y(): Number {
  return (this.elValue as any).Y() as Number
}

 /** Treat the curve as curve with homogeneous coordinates. */
 Z(): Number {
  return (this.elValue as any).Z() as Number
}
}

 export class BezierCurve extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Curve3D extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /** Function which maps u to x; i.e. */
 X(): any {
  return (this.elValue as any).X() as any
}

 /** Function which maps u to y; i.e. */
 Y(): any {
  return (this.elValue as any).Y() as any
}

 /** Function which maps u to z; i.e. */
 Z(): any {
  return (this.elValue as any).Z() as any
}
}

 export class Dump {
 elValue: Object = {}
 tsxBoard: TSXBoard = JSXMath.board  // copy, sometimes need access to board
 scaleXY:number = 1   // used by V2 math library
 constructor(className:string, params:any[], attrs: DumpAttributes){
 if (className == 'Polygon' || className == 'PolygonalChain' || className == 'Group') {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs))
 } else {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs))
 }
 if (attrs.hasOwnProperty('scaleXY')) {
    this.scaleXY = (attrs as any).scaleXY    // for V2 Math
}
 }

 /** Adds markers to every element of the board */
 addMarkers(): Dump {
  return (this.elValue as any).addMarkers() as Dump
}

 /** Converts an array of different values into a parameter string that can be used by the code generators. */
 arrayToParamStr(): Dump {
  return (this.elValue as any).arrayToParamStr() as Dump
}

 /** Removes markers from every element on the board. */
 deleteMarkers(): Dump {
  return (this.elValue as any).deleteMarkers() as Dump
}

 /** Generate a save-able structure with all elements. */
 dump(): Dump {
  return (this.elValue as any).dump() as Dump
}

 /** Eliminate default values given by JXG.Options from the attributes object. */
 minimizeObject(): Dump {
  return (this.elValue as any).minimizeObject() as Dump
}

 /** Prepare the attributes object for an element to be dumped as JavaScript or JessieCode code. */
 prepareAttributes(): Dump {
  return (this.elValue as any).prepareAttributes() as Dump
}

 /** Stringifies a string, i.e. */
 str(): Dump {
  return (this.elValue as any).str() as Dump
}

 /** Saves the construction in board to JavaScript. */
 toJavaScript(): Dump {
  return (this.elValue as any).toJavaScript() as Dump
}

 /** Converts a JavaScript object into a JCAN (JessieCode Attribute Notation) string. */
 toJCAN(): Dump {
  return (this.elValue as any).toJCAN() as Dump
}

 /** Saves the construction in board to JessieCode. */
 toJessie(): Dump {
  return (this.elValue as any).toJessie() as Dump
}
}

 export class ForeignObject extends GeometryElement {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get content():Number[] {
  return (this.elValue as any).content as Number[]
}

 /**  */
 public get size():Number[] {
  return (this.elValue as any).size as Number[]
}

 /** Returns the height of the foreignObject in user coordinates. */
 H(): number {
  return (this.elValue as any).H() as number
}

 /** Checks whether (x,y) is over or near the image; */
 hasPoint(): Boolean {
  return (this.elValue as any).hasPoint() as Boolean
}

 /** Set the width and height of the foreignObject. */
 setSize(): ForeignObject {
  return (this.elValue as any).setSize() as ForeignObject
}

 /** Returns the width of the foreignObject in user coordinates. */
 W(): number {
  return (this.elValue as any).W() as number
}
}

 export class Group extends Composition {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get coords():Object {
  return (this.elValue as any).coords as Object
}

 /** Adds all points in a group to this group. */
 addGroup(group:Group): Group {
  return (this.elValue as any).addGroup(group) as Group
}

 /** Adds ids of elements to the array this.parents. */
 addParents(parents:GeometryElement[]): Object {
  return (this.elValue as any).addParents(TSXGraph.dereference(parents)) as Object
}

 /** Adds an Point to this group. */
 addPoint(point:Point|pointAddr|Image): Group {
  return (this.elValue as any).addPoint(TSXGraph.dereference(point)) as Group
}

 /** Adds multiple points to this group. */
 addPoints(points:Point[]): Group {
  return (this.elValue as any).addPoints(TSXGraph.dereference(points)) as Group
}

 /** Adds a point to the set of rotation points of the group. */
 addRotationPoint(point:Point): Group {
  return (this.elValue as any).addRotationPoint(TSXGraph.dereference(point)) as Group
}

 /** Adds a point to the set of the scale points of the group. */
 addScalePoint(point:Point,direction:number|Function): Group {
  return (this.elValue as any).addScalePoint(TSXGraph.dereference(point),direction) as Group
}

 /** Adds a point to the set of the translation points of the group. */
 addTranslationPoint(point:Point): Group {
  return (this.elValue as any).addTranslationPoint(TSXGraph.dereference(point)) as Group
}

 /** List of the element ids resp. */
 getParents(): Number[] {
  return (this.elValue as any).getParents() as Number[]
}

 /** Removes a point from the group. */
 removePoint(point:Point): Group {
  return (this.elValue as any).removePoint(TSXGraph.dereference(point)) as Group
}

 /** Removes the rotation property from a point of the group. */
 removeRotationPoint(point:Point): Group {
  return (this.elValue as any).removeRotationPoint(TSXGraph.dereference(point)) as Group
}

 /** Removes the scaling property from a point of the group. */
 removeScalePoint(point:Point): Group {
  return (this.elValue as any).removeScalePoint(TSXGraph.dereference(point)) as Group
}

 /** Removes the translation property from a point of the group. */
 removeTranslationPoint(point:Point): Group {
  return (this.elValue as any).removeTranslationPoint(TSXGraph.dereference(point)) as Group
}

 /** Sets the center of rotation for the group. */
 setRotationCenter(pivot:Point|pointAddr|"centroid"): Group {
  return (this.elValue as any).setRotationCenter(TSXGraph.dereference(pivot)) as Group
}

 /** Sets the rotation points of the group. */
 setRotationPoints(points:Point|Point[]): Group {
  return (this.elValue as any).setRotationPoints(TSXGraph.dereference(points)) as Group
}

 /** Sets the center of scaling for the group. */
 setScaleCenter(point:Point|pointAddr): Group {
  return (this.elValue as any).setScaleCenter(TSXGraph.dereference(point)) as Group
}

 /** Sets the scale points of the group. */
 setScalePoints(points:Point|Point[]): Group {
  return (this.elValue as any).setScalePoints(TSXGraph.dereference(points)) as Group
}

 /** Sets the translation points of the group. */
 setTranslationPoints(points:Point|Point[]): Group {
  return (this.elValue as any).setTranslationPoints(TSXGraph.dereference(points)) as Group
}

 /** Releases all elements of this group. */
 ungroup(): Group {
  return (this.elValue as any).ungroup() as Group
}
}

 export class Image extends GeometryElement {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get size():Number[] {
  return (this.elValue as any).size as Number[]
}

 /**  */
 public get url():string {
  return (this.elValue as any).url as string
}

 /** Returns the height of the image in user coordinates. */
 H(): number {
  return (this.elValue as any).H() as number
}

 /** Checks whether (x,y) is over or near the image; */
 hasPoint(): Boolean {
  return (this.elValue as any).hasPoint() as Boolean
}

 /** Set the width and height of the image. */
 setSize(): GeometryElement {
  return (this.elValue as any).setSize() as GeometryElement
}

 /** Returns the width of the image in user coordinates. */
 W(): number {
  return (this.elValue as any).W() as number
}
}

 export class Implicitcurve extends GeometryElement {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Intersectioncircle3D extends GeometryElement3D {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Legend {
 elValue: Object = {}
 tsxBoard: TSXBoard = JSXMath.board  // copy, sometimes need access to board
 scaleXY:number = 1   // used by V2 math library
 constructor(className:string, params:any[], attrs: LegendAttributes){
 if (className == 'Polygon' || className == 'PolygonalChain' || className == 'Group') {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs))
 } else {
    this.elValue = (JSXMath.board  as any).create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs))
 }
 if (attrs.hasOwnProperty('scaleXY')) {
    this.scaleXY = (attrs as any).scaleXY    // for V2 Math
}
 }

 /**  */
 public get colors():Number[] {
  return (this.elValue as any).colors as Number[]
}

 /**  */
 public get labels():Number[] {
  return (this.elValue as any).labels as Number[]
}

 /**  */
 public get rowHeight():Number {
  return (this.elValue as any).rowHeight as Number
}

 /**  */
 public get style():String {
  return (this.elValue as any).style as String
}
}

 export class Line extends GeometryElement {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get defaultTicks():Ticks {
  return (this.elValue as any).defaultTicks as Ticks
}

 /**  */
 public get parentPolygon():Polygon {
  return (this.elValue as any).parentPolygon as Polygon
}

 /** Attributes for first defining point of the line. */
 public get point1():Point {
  return (this.elValue as any).point1 as Point
}

 /** Attributes for second defining point of the line. */
 public get point2():Point {
  return (this.elValue as any).point2 as Point
}

 /** Attributes for ticks of the line. */
 public get ticks():Number[] {
  return (this.elValue as any).ticks as Number[]
}

 /** Determines the angle between the positive x axis and the line. */
 getAngle(): Number {
  return (this.elValue as any).getAngle() as Number
}

 /** Calculates the y intersect of the line. */
 getRise(): Number {
  return (this.elValue as any).getRise() as Number
}

 /** Alias for line.Slope */
 getSlope(): Number {
  return (this.elValue as any).getSlope() as Number
}

 /** Checks whether (x,y) is near the line. */
 hasPoint(): Boolean {
  return (this.elValue as any).hasPoint() as Boolean
}

 /** The distance between the two points defining the line. */
 L(): Number {
  return (this.elValue as any).L() as Number
}

 /** Calculates the slope of the line. */
 Slope(): Number {
  return (this.elValue as any).Slope() as Number
}

 /** Treat the line as parametric curve in homogeneous coordinates, where the parameter t runs from 0 to 1. */
 X(): number {
  return (this.elValue as any).X() as number
}

 /** Treat the line as parametric curve in homogeneous coordinates. */
 Y(): number {
  return (this.elValue as any).Y() as number
}

 /** Treat the line as parametric curve in homogeneous coordinates. */
 Z(): number {
  return (this.elValue as any).Z() as number
}
}

 export class LineEqn extends Line {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Line3D extends GeometryElement3D {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get direction():number[]|Function {
  return (this.elValue as any).direction as number[]|Function
}

 /**  */
 public get point():Point3D {
  return (this.elValue as any).point as Point3D
}

 /**  */
 public get point1():Point3D {
  return (this.elValue as any).point1 as Point3D
}

 /**  */
 public get point2():Point3D {
  return (this.elValue as any).point2 as Point3D
}

 /**  */
 public get range():Number[] {
  return (this.elValue as any).range as Number[]
}
}

 export class Plane3D extends GeometryElement3D {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get d():Number[] {
  return (this.elValue as any).d as Number[]
}

 /**  */
 public get direction1():number[]|Function {
  return (this.elValue as any).direction1 as number[]|Function
}

 /**  */
 public get direction2():number[]|Function {
  return (this.elValue as any).direction2 as number[]|Function
}

 /**  */
 public get normal():Number[] {
  return (this.elValue as any).normal as Number[]
}

 /**  */
 public get point():Point3D {
  return (this.elValue as any).point as Point3D
}

 /**  */
 public get range1():Number[] {
  return (this.elValue as any).range1 as Number[]
}

 /**  */
 public get range2():Number[] {
  return (this.elValue as any).range2 as Number[]
}

 /**  */
 public get vec1():Number[] {
  return (this.elValue as any).vec1 as Number[]
}

 /**  */
 public get vec2():Number[] {
  return (this.elValue as any).vec2 as Number[]
}

 /**  */
 public get vec3():Number[] {
  return (this.elValue as any).vec3 as Number[]
}
}

 export class Point extends GeometryElement {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 coords(): Number[] {
  return (this.elValue as any).coords() as Number[]
}

 /**  */
 startAnimation(direction:Number,stepCount:Number,delayMSec:Number): void {
  return (this.elValue as any).startAnimation(direction,stepCount,delayMSec) as void
}

 /** Calculates Euclidean distance for two Points, eg:  p1.Dist(p2) */
 Dist(toPoint:Point|pointAddr): number {
  return (this.elValue as any).Dist(TSXGraph.dereference(toPoint)) as number
}

 /** Set the face of a point element. */
 face(style:'cross'|'circle'|'square'|'plus'|'minus'|'diamond'): Boolean {
  return (this.elValue as any).face(style) as Boolean
}

 /** Updates the position of the point. */
 update(): number[] {
  return (this.elValue as any).update() as number[]
}

 /**  */
 X(): number {
  return (this.elValue as any).X() as number
}

 /**  */
 Y(): number {
  return (this.elValue as any).Y() as number
}

 /**  */
 Z(): number {
  return (this.elValue as any).Z() as number
}

 /** Moves an element towards coordinates, optionally tweening over time.  Time is in ms.  WATCH OUT, there
                        is no AWAIT for the tween to finish, a second moveTo() starts immediately. Thats GOOD if you
                        want to move two different points at the same time, BAD if you want to move the same point repeatedly.  EG:
                        
```js 

P.moveTo([A.X(), A.Y()], 5000)

``` */
 moveTo(p:number[]|Function[],time:number=0,callback:Function=()=>{},effect:"=="|"<>"|">"|"<"="=="): any {
  return (this.elValue as any).moveTo(TSXGraph.dereference(p),time,{callback:callback,effect:effect}) as any
}

 /** Moves an element towards coordinates, optionally tweening over time.  Time is in ms.  WATCH OUT, there
                        is no AWAIT for the tween to finish, a second moveTo() starts immediately. Thats GOOD if you
                        want to move two different points at the same time, BAD if you want to move the same point repeatedly.  EG:
                        
```js 

P.moveTo([A.X(), A.Y()], 5000)

``` */
 visit(p:number[]|Function[],time:number=0,callback:Function=()=>{},effect:"=="|"<>"|">"|"<"="==", repeat:number=1): any {
  return (this.elValue as any).visit(TSXGraph.dereference(p),time,{callback:callback,effect:effect,repeat:repeat}) as any
}
                    /** Point location in vector form [n,n] */
                    XY(): [number,number] {
                    return [(this.elValue as any).X() as number,(this.elValue as any).Y() as number]
                    }
                
}

 export class Point3D extends GeometryElement3D {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get slide():GeometryElement3D {
  return (this.elValue as any).slide as GeometryElement3D
}

 /** Set the position of a 3D point. */
 setPosition(coords:number[],noEvent:boolean=true): Point3D {
  return (this.elValue as any).setPosition(coords,noEvent) as Point3D
}

 /** Get x-coordinate of a 3D point. */
 X(): number {
  return (this.elValue as any).X() as number
}

 /** Get y-coordinate of a 3D point. */
 Y(): number {
  return (this.elValue as any).Y() as number
}

 /** Get z-coordinate of a 3D point. */
 Z(): number {
  return (this.elValue as any).Z() as number
}
}

 export class Polygon extends GeometryElement {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /** Attributes for the polygon border lines. */
 public get borders():Number[] {
  return (this.elValue as any).borders as Number[]
}

 /** Attributes for the polygon vertices. */
 public get vertices():VertexAttributes {
  return (this.elValue as any).vertices as VertexAttributes
}

 /** Checks whether (x,y) is near the polygon. */
 hasPoint(x:number,y:number): Boolean {
  return (this.elValue as any).hasPoint(x,y) as Boolean
}

 /** Uses the boards renderer to update the polygon. */
 updateRenderer(): any {
  return (this.elValue as any).updateRenderer() as any
}
}

 export class Polygon3D extends GeometryElement3D {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Text extends GeometryElement {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get size():Number[] {
  return (this.elValue as any).size as Number[]
}

 /**  */
 setAttribute(attrs:TextAttributes): void {
  return (this.elValue as any).setAttribute(attrs) as void
}

 /** Returns the bounding box of the text element in user coordinates as an array of length 4: [upper left x, upper left y, lower right x, lower right y]. */
 bounds(): Number[] {
  return (this.elValue as any).bounds() as Number[]
}

 /** A very crude estimation of the dimensions of the textbox in case nothing else is available. */
 crudeSizeEstimate(): Number[] {
  return (this.elValue as any).crudeSizeEstimate() as Number[]
}

 /** Returns the value of the attribute ”anchorX”. */
 getAnchorX(): Number {
  return (this.elValue as any).getAnchorX() as Number
}

 /** Returns the value of the attribute ”anchorY”. */
 getAnchorY(): Number {
  return (this.elValue as any).getAnchorY() as Number
}

 /** Return the width of the text element. */
 getSize(): Number[] {
  return (this.elValue as any).getSize() as Number[]
}

 /** Replace _{} by <sub> */
 replaceSub(): String {
  return (this.elValue as any).replaceSub() as String
}

 /** Replace ^{} by <sup> */
 replaceSup(): String {
  return (this.elValue as any).replaceSup() as String
}

 /** Sets the offset of a label element to the position with the least number of overlaps with other elements, while retaining the distance to its anchor element. */
 setAutoPosition(): Text {
  return (this.elValue as any).setAutoPosition() as Text
}

 /** Move the text to new coordinates. */
 setCoords(x:Number,y:Number): object {
  return (this.elValue as any).setCoords(x,y) as object
}

 /** Defines new content. */
 setText(newText:String): Text {
  return (this.elValue as any).setText(newText) as Text
}

 /** Defines new content but converts < and > to HTML entities before updating the DOM. */
 setTextJessieCode(): this {
  return (this.elValue as any).setTextJessieCode() as this
}

 /** Evaluates the text. */
 update(): this {
  return (this.elValue as any).update() as this
}

 /** Recompute the width and the height of the text box. */
 updateSize(): this {
  return (this.elValue as any).updateSize() as this
}

 /** Decode unicode entities into characters. */
 utf8_decode(): String {
  return (this.elValue as any).utf8_decode() as String
}
}

 export class Text3D extends GeometryElement3D {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Ticks extends GeometryElement {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get equidistant():Boolean {
  return (this.elValue as any).equidistant as Boolean
}

 /**  */
 public get fixedTicks():Number[] {
  return (this.elValue as any).fixedTicks as Number[]
}

 /**  */
 public get labelCounter():number {
  return (this.elValue as any).labelCounter as number
}

 /** User defined labels for special ticks. */
 public get labels():Number[] {
  return (this.elValue as any).labels as Number[]
}

 /**  */
 public get labelsData():Number[] {
  return (this.elValue as any).labelsData as Number[]
}

 /**  */
 public get line():Line {
  return (this.elValue as any).line as Line
}

 /**  */
 public get ticks():Number[] {
  return (this.elValue as any).ticks as Number[]
}

 /** Formats label texts to make labels displayed in scientific notation look beautiful. */
 beautifyScientificNotationLabel(): String {
  return (this.elValue as any).beautifyScientificNotationLabel() as String
}

 /** Checks whether (x,y) is near the line. */
 hasPoint(): Boolean {
  return (this.elValue as any).hasPoint() as Boolean
}

 /** Sets x and y coordinate of the tick. */
 setPositionDirectly(): Point {
  return (this.elValue as any).setPositionDirectly() as Point
}

 /** Uses the boards renderer to update the arc. */
 updateRenderer(): Ticks {
  return (this.elValue as any).updateRenderer() as Ticks
}
}

 export class Turtle extends GeometryElement {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /** Move the turtle backwards. */
 back(): Turtle {
  return (this.elValue as any).back() as Turtle
}

 /** Alias for JXG.Turtle#back */
 bk(): Turtle {
  return (this.elValue as any).bk() as Turtle
}

 /** Removes the turtle curve from the board. */
 clean(): Turtle {
  return (this.elValue as any).clean() as Turtle
}

 /** Removes the turtle completely and resets it to its initial position and direction. */
 clearScreen(): Turtle {
  return (this.elValue as any).clearScreen() as Turtle
}

 /** Alias for JXG.Turtle#clearScreen */
 cs(): Number {
  return (this.elValue as any).cs() as Number
}

 /** The ”co”-coordinate of the turtle curve at position t is returned. */
 evalAt(): Number {
  return (this.elValue as any).evalAt() as Number
}

 /** Alias for JXG.Turtle#forward */
 fd(): Turtle {
  return (this.elValue as any).fd() as Turtle
}

 /** Move the turtle forward. */
 forward(): Turtle {
  return (this.elValue as any).forward() as Turtle
}

 /** Get most recently set turtle color. */
 getHighlightPenColor(): Boolean {
  return (this.elValue as any).getHighlightPenColor() as Boolean
}

 /** Get most recently set turtle color. */
 getPenColor(): Boolean {
  return (this.elValue as any).getPenColor() as Boolean
}

 /** Get most recently set turtle size (in pixel). */
 getPenSize(): Boolean {
  return (this.elValue as any).getPenSize() as Boolean
}

 /** Checks whether (x,y) is near the curve. */
 hasPoint(): Boolean {
  return (this.elValue as any).hasPoint() as Boolean
}

 /** Sets the visibility of the turtle head to false, */
 hideTurtle(): Turtle {
  return (this.elValue as any).hideTurtle() as Turtle
}

 /** Moves the turtle to position [0,0]. */
 home(): Turtle {
  return (this.elValue as any).home() as Turtle
}

 /** Alias for JXG.Turtle#hideTurtle */
 ht(): Turtle {
  return (this.elValue as any).ht() as Turtle
}

 /** Rotate the turtle direction to the right. */
 left(): Turtle {
  return (this.elValue as any).left() as Turtle
}

 /** Rotates the turtle into a new direction. */
 lookTo(): Turtle {
  return (this.elValue as any).lookTo() as Turtle
}

 /** Alias for JXG.Turtle#left */
 lt(): Turtle {
  return (this.elValue as any).lt() as Turtle
}

 /** Gives the upper bound of the parameter if the turtle is treated as parametric curve. */
 maxX(): Turtle {
  return (this.elValue as any).maxX() as Turtle
}

 /** Gives the lower bound of the parameter if the turtle is treated as parametric curve. */
 minX(): Turtle {
  return (this.elValue as any).minX() as Turtle
}

 /** Moves the turtle to a given coordinate pair. */
 moveTo(): Turtle {
  return (this.elValue as any).moveTo() as Turtle
}

 /** Alias for JXG.Turtle#penDown */
 pd(): Turtle {
  return (this.elValue as any).pd() as Turtle
}

 /** Pen down, continues visible drawing */
 penDown(): Turtle {
  return (this.elValue as any).penDown() as Turtle
}

 /** Pen up, stops visible drawing */
 penUp(): Turtle {
  return (this.elValue as any).penUp() as Turtle
}

 /** Alias for JXG.Turtle#popTurtle */
 pop(): Turtle {
  return (this.elValue as any).pop() as Turtle
}

 /** Gets the last position of the turtle on the stack, sets the turtle to this position and removes this position from the stack. */
 popTurtle(): Turtle {
  return (this.elValue as any).popTurtle() as Turtle
}

 /** Alias for JXG.Turtle#penUp */
 pu(): Turtle {
  return (this.elValue as any).pu() as Turtle
}

 /** Alias for JXG.Turtle#pushTurtle */
 push(): Turtle {
  return (this.elValue as any).push() as Turtle
}

 /** Pushes the position of the turtle on the stack. */
 pushTurtle(): Turtle {
  return (this.elValue as any).pushTurtle() as Turtle
}

 /** Rotate the turtle direction to the right */
 right(): Turtle {
  return (this.elValue as any).right() as Turtle
}

 /** Alias for JXG.Turtle#right */
 rt(): Turtle {
  return (this.elValue as any).rt() as Turtle
}

 /** Sets the highlight pen color. */
 setHighlightPenColor(): Turtle {
  return (this.elValue as any).setHighlightPenColor() as Turtle
}

 /** Sets the pen color. */
 setPenColor(): Turtle {
  return (this.elValue as any).setPenColor() as Turtle
}

 /** Sets the pen size. */
 setPenSize(): Turtle {
  return (this.elValue as any).setPenSize() as Turtle
}

 /** Moves the turtle without drawing to a new position */
 setPos(): Turtle {
  return (this.elValue as any).setPos() as Turtle
}

 /** Sets the visibility of the turtle head to true, */
 showTurtle(): Turtle {
  return (this.elValue as any).showTurtle() as Turtle
}

 /** Alias for JXG.Turtle#showTurtle */
 st(): Number {
  return (this.elValue as any).st() as Number
}

 /** if t is not supplied the x-coordinate of the turtle is returned. */
 X(): Number {
  return (this.elValue as any).X() as Number
}

 /** if t is not supplied the y-coordinate of the turtle is returned. */
 Y(): Number {
  return (this.elValue as any).Y() as Number
}

 /**  */
 Z(): Number {
  return (this.elValue as any).Z() as Number
}
}

 export class Sector extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get point1():Point {
  return (this.elValue as any).point1 as Point
}

 /**  */
 public get point2():Point {
  return (this.elValue as any).point2 as Point
}

 /**  */
 public get point3():Point {
  return (this.elValue as any).point3 as Point
}

 /**  */
 public get point4():Point {
  return (this.elValue as any).point4 as Point
}

 /** Checks whether (x,y) is within the area defined by the sector. */
 hasPointSector(): Boolean {
  return (this.elValue as any).hasPointSector() as Boolean
}

 /** Returns the radius of the sector. */
 Radius(): Number {
  return (this.elValue as any).Radius() as Number
}
}

 export class Vectorfield extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /** Set the defining functions of vector field. */
 setF(): Object {
  return (this.elValue as any).setF() as Object
}
}

 export class Angle extends Sector {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get point():Point {
  return (this.elValue as any).point as Point
}

 /** Frees an angle from a prescribed value. */
 free(): Object {
  return (this.elValue as any).free() as Object
}

 /** Set an angle to a prescribed value given in radians. */
 setAngle(angle:number|Function): Object {
  return (this.elValue as any).setAngle(angle) as Object
}

 /** Returns the value of the angle. */
 Value(): Number {
  return (this.elValue as any).Value() as Number
}
}

 export class Arc extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get anglepoint():Point {
  return (this.elValue as any).anglepoint as Point
}

 /**  */
 public get radiuspoint():Point {
  return (this.elValue as any).radiuspoint as Point
}

 /**  */
 getRadius(): Number {
  return (this.elValue as any).getRadius() as Number
}

 /** Checks whether (x,y) is within the sector defined by the arc. */
 hasPointSector(): Boolean {
  return (this.elValue as any).hasPointSector() as Boolean
}

 /** Determines the arc's current radius. */
 Radius(): Number {
  return (this.elValue as any).Radius() as Number
}

 /** Returns the length of the arc or the value of the angle spanned by the arc. */
 Value(): Number {
  return (this.elValue as any).Value() as Number
}
}

 export class Arrow extends Line {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Parallel extends Line {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Arrowparallel extends Parallel {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Axis extends Line {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get defaultTicks():Ticks {
  return (this.elValue as any).defaultTicks as Ticks
}
}

 export class Bisector extends Line {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Bisectorlines extends Composition {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Button extends Text {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get rendNodeButton():HTMLButtonElement {
  return (this.elValue as any).rendNodeButton as HTMLButtonElement
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
 onClick(action:Function): void {
  (window as any).JXG.addEvent((this.elValue as any).rendNodeButton,`click`,action) as void
}
}

 export class Cardinalspline extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Checkbox extends Text {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 setAttribute(attrs:CheckboxAttributes): void {
  return (this.elValue as any).setAttribute(attrs) as void
}

 /** Returns the value of the checkbox element */
 Value(): Boolean {
  return (this.elValue as any).Value() as Boolean
}

 /**  */
 onChange(action:Function): void {
  (window as any).JXG.addEvent((this.elValue as any).rendNodeCheckbox,`change`,action) as void
}
}

 export class Circumcenter extends Point {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Circumcircle extends Circle {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class CircumcircleArc extends Arc {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class CircumcircleSector extends Sector {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get center():Circumcenter {
  return (this.elValue as any).center as Circumcenter
}
}

 export class Comb extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Conic extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class CurveDifference extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class CurveIntersection extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class CurveUnion extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Derivative extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Ellipse extends Conic {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class ParametricSurface3D extends Curve3D {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Face3D extends GeometryElement3D {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get dataX():number[] {
  return (this.elValue as any).dataX as number[]
}

 /**  */
 public get dataY():number[] {
  return (this.elValue as any).dataY as number[]
}

 /**  */
 public get dataZ():number[] {
  return (this.elValue as any).dataZ as number[]
}
}

 export class Functiongraph extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Functiongraph3D extends Curve3D {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Glider extends Point {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Glider3D extends Point3D {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Grid extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Hatch extends Ticks {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get ticksDistance():Number {
  return (this.elValue as any).ticksDistance as Number
}
}

 export class Hyperbola extends Conic {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Incenter extends Point {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Incircle extends Circle {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Inequality extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Input extends Text {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /** Sets value of the input element. */
 set(value:String): GeometryElement {
  return (this.elValue as any).set(value) as GeometryElement
}

 /** Returns the value (content) of the input element */
 Value(): string {
  return (this.elValue as any).Value() as string
}

 /**  */
 onChange(action:Function): void {
  (window as any).JXG.addEvent((this.elValue as any).rendNodeInput,`change`,action) as void
}
}

 export class Integral extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /** Attributes of the (left) base point of the integral. */
 public get baseLeft():Point {
  return (this.elValue as any).baseLeft as Point
}

 /** Attributes of the (right) base point of the integral. */
 public get baseRight():Point {
  return (this.elValue as any).baseRight as Point
}

 /** Attributes of the (left) starting point of the integral. */
 public get curveLeft():Point {
  return (this.elValue as any).curveLeft as Point
}

 /** Attributes of the (right) end point of the integral. */
 public get curveRight():Point {
  return (this.elValue as any).curveRight as Point
}

 /** Returns the current value of the integral. */
 Value(): Point {
  return (this.elValue as any).Value() as Point
}
}

 export class Intersection extends Point {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Label extends Text {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Locus extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get ctime():Number {
  return (this.elValue as any).ctime as Number
}

 /**  */
 public get eq():String {
  return (this.elValue as any).eq as String
}
}

 export class MajorArc extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class MajorSector extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Metapostspline extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Midpoint extends Point {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class MinorArc extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class MinorSector extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class mirrorelement extends GeometryElement {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Mirrorpoint extends Point {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class NonReflexAngle extends Angle {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Normal extends Line {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Orthogonalprojection extends Point {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class OtherIntersection extends Point {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Parabola extends Conic {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Parallelpoint extends Point {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Segment extends Line {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Parallelogram extends Polygon {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Perpendicular extends Segment {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class PerpendicularPoint extends Point {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class PerpendicularSegment extends Segment {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get point():PerpendicularPoint {
  return (this.elValue as any).point as PerpendicularPoint
}
}

 export class PolarLine extends Line {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class PolePoint extends Point {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class PolygonalChain extends Polygon {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Polyhedron3D extends GeometryElement3D {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get faces():Face3D[] {
  return (this.elValue as any).faces as Face3D[]
}
}

 export class RadicalAxis extends Line {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Reflection extends GeometryElement {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class ReflexAngle extends Angle {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class RegularPolygon extends Polygon {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Riemannsum extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /** Returns the value of the Riemann sum, i.e. */
 Value(): Number {
  return (this.elValue as any).Value() as Number
}
}

 export class Semicircle extends Arc {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get midpoint():Midpoint {
  return (this.elValue as any).midpoint as Midpoint
}
}

 export class Slider extends Glider {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /** Sets the maximum value of the slider. */
 setMax(value:number): Object {
  return (this.elValue as any).setMax(value) as Object
}

 /** Sets the minimum value of the slider. */
 setMin(value:number): Object {
  return (this.elValue as any).setMin(value) as Object
}

 /** Sets the value of the slider. */
 setValue(value:number): Object {
  return (this.elValue as any).setValue(value) as Object
}

 /** Returns the current slider value. */
 Value(): number {
  return (this.elValue as any).Value() as number
}

 /**  */
 onChange(action:Function): void {
  (this.elValue as any).on(`drag`,action) as void
}
}

 export class Slopefield extends Vectorfield {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /** Set the defining functions of slope field. */
 setF(): Object {
  return (this.elValue as any).setF() as Object
}
}

 export class Slopetriangle extends Line {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /** Returns the value of the slope triangle, that is the slope of the tangent. */
 Value(): Number {
  return (this.elValue as any).Value() as Number
}
}

 export class Smartlabel extends Text {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Sphere3D extends GeometryElement3D {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Spline extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Stepfunction extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Tangent extends Line {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class tangentTo extends Line {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Tapemeasure extends Segment {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /** Returns the length of the tape measure. */
 Value(): Number {
  return (this.elValue as any).Value() as Number
}
}

 export class Tracecurve extends Curve {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Transform extends GeometryElement {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

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
 point(fromPoint:Point,attributes:PointAttributes={}): Point {
  return JSXMath.board.create('point',[TSXGraph.dereference(fromPoint), this.elValue],TSXGraph.defaultAttributes(attributes)) as Point as Point
}

 /**  */
 applyOnce(element:GeometryElement): void {
  return (this.elValue as any).applyOnce(TSXGraph.dereference(element)) as void
}

 /**  Binds a transformation to a GeometryElement or an array of elements. In every update of the GeometryElement(s), the transformation is executed. That means, in order to immediately apply the transformation, a call of board.update() has to follow. */
 bindTo(element:GeometryElement): void {
  return (this.elValue as any).bindTo(TSXGraph.dereference(element)) as void
}

 /**  */
 melt(t:Transform): Transform {
  this.elValue = (this.elValue as any).melt(TSXGraph.dereference(t));
 return this  as Transform
}

 /**  */
 setMatrix(): Transform {
  return (this.elValue as any).setMatrix() as Transform
}
}

 export class TransformPoint extends Point {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class View3D extends GeometryElement3D {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}

 /**  */
 public get defaultAxes():Object {
  return (this.elValue as any).defaultAxes as Object
}

 /**  */
 public get matrix3D():Object {
  return (this.elValue as any).matrix3D as Object
}

 /**  */
 setView(azimuth:number,elevation:number,radius?:number): View3D {
  return (this.elValue as any).setView(azimuth,elevation,radius) as View3D
}

 /** This element is used to provide a constructor for a 3D Point. */
 point3D(xyz:NumberFunction[]|Function,attributes:Point3DAttributes={}): Point3D {
  return (this.elValue as any).create("point3d",[xyz],attributes) as Point3D
}

 /** This element is used to provide a constructor for a 3D line. */
 line3D(point1:Point3D|NumberFunction[],point2:Point3D|NumberFunction[],attributes:GeometryElement3DAttributes={}): Line3D {
  return (this.elValue as any).create("line3d",TSXGraph.dereference([point1,point2]),attributes) as Line3D
}

 /** This element creates a 3D parametric curve. */
 curve3D(xFunction:Function,yFunction:Function,zFunction:Function,range:NumberFunction[],attributes:Object={}): Curve3D {
  return (this.elValue as any).create("curve3d",TSXGraph.dereference([xFunction,yFunction,zFunction,range]),attributes) as Curve3D
}

 /**  */
 sphere3D(center:number[]|Point3D,radius:number|number[]|Point3D,attributes:Object={}): Sphere3D {
  return (this.elValue as any).create("sphere3d",TSXGraph.dereference([center,radius]),attributes) as Sphere3D
}

 /**  */
 polygon3D(points:Point3D[]|number[][],attributes:Object={}): Sphere3D {
  return (this.elValue as any).create("polygon3d",TSXGraph.dereference(points),attributes) as Sphere3D
}

 /** In 3D space, a circle consists of all points on a given plane with a given distance from a given point. The given point is called the center, and the given distance is called the radius. A circle can be constructed by providing a center, a normal vector, and a radius (given as a number or function). */
 circle3D(point:Point3D,normal:number[],radius:number,attributes:Object={}): Circle3D {
  return (this.elValue as any).create("circle3d",TSXGraph.dereference([point,normal,radius]),attributes) as Circle3D
}

 /** Glider3D is an alias for JSXGraph's Point3d(). */
 glider3D(element:Curve3D|Line3D, initial:number[]=[0,0,0],attributes:Object={}): Point3D {
  return (this.elValue as any).create("point3d",[...initial,TSXGraph.dereference(element)],attributes) as Point3D
}

 /** This element is used to provide a constructor for a 3D Text. */
 text3D(position: NumberFunction[], text:string|Function,attributes:Object={}): Text3D {
  return (this.elValue as any).create("text3d",[...TSXGraph.dereference(position),text],attributes) as Text3D
}

 /** This element is used to provide a constructor for a 3D Polyhedron. */
 polyhedron3D(points: [number,number,number][]|Object, faces:number[][]|string[][],attributes:Object={}): Polyhedron3D {
  return (this.elValue as any).create("polyhedron3d",[points,faces],attributes) as Polyhedron3D
}

 /** Create a 3D plane object defined by a point and two directions, and extending negative and positive distanced in those directions by a range.  Remember to set visible:true.
                            
*```js 

 let pnt = [[-1, 1, 1]]
 let axis1 = [0, 1, 0], axis2 = [0, 0, 1]
 let range1 = [0,3], range2 = [0,3]
 view.plane3D'(pnt, axis1, axis2, range1, range2,
        { fillColor: 'red', gradientSecondColor: 'blue', fillOpacity: .5, strokeColor: 'blue',
         gradient: 'linear', visible:true })
                            
``` */
 plane3D(point:Point3D|number[]|Function,axis1:number[]|Function,axis2:number[]|Function,range1:number[],range2:number[],attributes:Object={}): Plane3D {
  return (this.elValue as any).create("plane3d",TSXGraph.dereference([point,axis1,axis2,range1,range2]),attributes) as Plane3D
}

 /**  */
 functiongraph3D(xyFunction:Function,xRange:NumberFunction[],yRange:NumberFunction[],attributes:Object={}): Functiongraph3D {
  return (this.elValue as any).create("functiongraph3d",TSXGraph.dereference([xyFunction,xRange,yRange]),attributes) as Functiongraph3D
}

 /**  */
 parametricsurface3D(xFunction:Function,yFunction:Function,zFunction:Function,xRange:NumberFunction[],yRange:NumberFunction[],attributes:Object={}): Curve3D {
  return (this.elValue as any).create("parametricsurface3d",TSXGraph.dereference([xFunction,yFunction,zFunction,xRange,yRange]),attributes) as Curve3D
}

 /**  */
 intersectioncircle3D(sphere1:Sphere3D,sphere2:Sphere3D,attributes:Object={}): Circle3D {
  return (this.elValue as any).create("intersectioncircle3d",TSXGraph.dereference([sphere1,sphere2,]),attributes) as Circle3D
}

 /**  */
 intersectionline3D(plane1:Plane3D,plane2:Plane3D,attributes:Object={}): Line3D {
  return (this.elValue as any).create("intersectionline3d",TSXGraph.dereference([plane1,plane2,]),attributes) as Line3D
}

 /**  */
 animateAzimuth(): Object {
  return (this.elValue as any).animateAzimuth() as Object
}

 /** Creates a new 3D element of type elementType. */
 create(): Object {
  return (this.elValue as any).create() as Object
}

 /** Intersect a ray with the bounding cube of the 3D view. */
 intersectionLineCube(): Number[] {
  return (this.elValue as any).intersectionLineCube() as Number[]
}

 /**  */
 intersectionPlanePlane(): Number[] {
  return (this.elValue as any).intersectionPlanePlane() as Number[]
}

 /** Test if coordinates are inside of the bounding cube. */
 isInCube(): Number[] {
  return (this.elValue as any).isInCube() as Number[]
}

 /** Project a 2D coordinate to the plane defined by point ”foot” and the normal vector `normal`. */
 project2DTo3DPlane(): Number[] {
  return (this.elValue as any).project2DTo3DPlane() as Number[]
}

 /** Project a 2D coordinate to a new 3D position by keeping the 3D x, y coordinates and changing only the z coordinate. */
 project2DTo3DVertical(): Number[] {
  return (this.elValue as any).project2DTo3DVertical() as Number[]
}

 /** Project 3D coordinates to 2D board coordinates The 3D coordinates are provides as three numbers x, y, z or one array of length 3. */
 project3DTo2D(): Number[] {
  return (this.elValue as any).project3DTo2D() as Number[]
}

 /** Limit 3D coordinates to the bounding cube. */
 project3DToCube(): GeometryElement3D|Composition {
  return (this.elValue as any).project3DToCube() as GeometryElement3D|Composition
}

 /** Select a single or multiple elements at once. */
 select(): GeometryElement3D|Composition {
  return (this.elValue as any).select() as GeometryElement3D|Composition
}

 /**  */
 stopAzimuth(): any {
  return (this.elValue as any).stopAzimuth() as any
}
}

 export class Translate extends Transform {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Rotate extends Transform {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}

 export class Scale extends Transform {
 constructor(className:string, params:any[], attrs: Object){
   super(className, TSXGraph.dereference(params), attrs)
}
}}