import { HostMsg, writeMoodleLog } from './writeMoodleLog';


/****  I had to add this to node_modules/babylonjs/babylon.module.d.ts
 * issue is latest version of typescript vs latest version of babylon
 *
 *
interface OffscreenCanvas extends HTMLCanvasElement{}
interface MouseWheelEvent extends PointerEvent{}
interface OffscreenCanvasRenderingContext2D extends CanvasRenderingContext2D{}
type NavigatorUserMediaSuccessCallback = any
type NavigatorUserMediaErrorCallback = any
type MSGesture = any
interface WebGLObject {}
declare var WebGLObject: {
    prototype: WebGLObject;
    new(): WebGLObject;
};

*/

import { LIB_VERSION } from './version';
import { Buffer } from "buffer";

import * as monaco from "monaco-editor";
// import * as BABYLON from 'babylonjs';
// import * as PlanetCute from './planetcute'
// import { TXG } from './tsxgraph'

import lib_es5 from "./extraLibs/lib.es5.d.ts.txt";
import lib_es6 from "./extraLibs/lib.es6.d.ts.txt";  // not sure why i need both but parseInt() fails without es5
// import lib_baby from "./extraLibs/baby.d.ts.txt";
import lib_dom_mini from "./extraLibs/lib.dom_mini.d.ts.txt";
// import lib_dom from "./extraLibs/lib.dom.d.ts.txt";
import lib_dom_iterable from "./extraLibs/dom.iterable.d.ts.txt";

import lib_es2015_collection from "./extraLibs/lib.es2015.collection.d.ts.txt"
import lib_es2015_core from "./extraLibs/lib.es2015.core.d.ts.txt"
import lib_es2015_promise from "./extraLibs/lib.es2015.promise.d.ts.txt"
import lib_es2015_iterable from "./extraLibs/lib.es2015.iterable.d.ts.txt"
import lib_es2016_array_include from "./extraLibs/lib.es2016.array.include.d.ts.txt"
import lib_es2017_string from "./extraLibs/lib.es2017.string.d.ts.txt"
import lib_es2017_typedarrays from "./extraLibs/lib.es2017.typedarrays.d.ts.txt"
import lib_es2018_asynciterable from "./extraLibs/lib.es2018.asynciterable.d.ts.txt"
import lib_es2019_string from "./extraLibs/lib.es2019.string.d.ts.txt"
import lib_es2020_bigint from "./extraLibs/lib.es2020.bigint.d.ts.txt"
import lib_es2021_string from "./extraLibs/lib.es2021.string.d.ts.txt"
import lib_es2022_array from "./extraLibs/lib.es2022.array.d.ts.txt"
import lib_es2023_array from "./extraLibs/lib.es2023.array.d.ts.txt"

// import babylonjs from "./extraLibs/babylonjs.d.ts.txt"

import lib_es2099 from "./extraLibs/lib.es2099.d.ts.txt"

// import lib_jsx_tiny from "./extraLibs/jsx_tiny.d.ts.txt"
import lib_tsxgraph from "./extraLibs/tsxgraph.d.ts.txt"

import mathcode from "./extraLibs/mathcode.d.ts.txt"
// import matter from "./extraLibs/matter.d.ts.txt"

// import { RuntimeAnimation } from "babylonjs/Animations/runtimeAnimation";
// import { Observable } from "./observer";

// let x = JXG         // just to make sure webpack loads them
// let y = BABYLON




// let known = [2]

// let foo = (n: number) => (n + 1)
// for (let i = 0; i < 10; i++) {
//     foo(i)
// }

// // using reduce()
// let t:number
// // reducer simply adds up ALL the remainders.
// let reducer = (accumulator:number,currentV:number) => accumulator + (t % currentV==0?0:1 )
// for (t = 3; t < 150; t++)
//     if (known.reduce(reducer)>0)
//         known.push(t)

// console.log(known)

// // using filter()
// known=[]
// for (let t = 3; t < 150; t++)
//     if (known.filter((n) => t % n == 0).length == 0)
//         known.push(t)

// console.log(known)


// // using find()
// known=[]
// for (let t = 3; t < 150; t++)
//     if (known.find((n) => t % n == 0)==undefined)
//         known.push(t)

// console.log(known)









// import { Baby } from 'baby'

// the Editor is also responsible for RUNNING the game.  if you want to
// run a snippet without user input, then you STILL give it to the editor to run.



export class Editor {

    editor: monaco.editor.IStandaloneCodeEditor
    initFile: string = "";
    el: HTMLElement
    storageKey: string
    safeDelay: number
    hiddenCode: string
    hiddenDecl: string
    visibleCode: string


    // prefixDecl = ''     // hidden decl for TS for THIS instance of the editor
    // prefixCode = ''     // hidden code for THIS instance of the editor

    editorCode = ''

    constructor(el: HTMLElement, initFile: string, hiddenCode: string = '', hiddenDecl: string = '', visibleCode = '') {
        // return;
        this.el = el
        this.initFile = initFile
        this.storageKey = ''
        this.safeDelay = 5000
        this.hiddenCode = hiddenCode
        this.hiddenDecl = hiddenDecl
        this.visibleCode = visibleCode


        // monaco.languages.typescript.typescriptDefaults.addExtraLib(`import { TXG } from './dist.${LIB_VERSION}/tsxgraph.js'; let TSX = TXG.TXGraph.initBoard('jxgbox');`)
        monaco.languages.typescript.typescriptDefaults.addExtraLib(`let TSX = TXG.TXGraph.initBoard('jxgbox') as TXG.TSXBoard;`)


        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            allowNonTsExtensions: true,
            inlineSourceMap: true,
            inlineSources: true,
            experimentalDecorators: true,

            noLib: true,
            lib: ["es5, es6, es2015.core, es2015.interable, dom.iterable"],    // for some reason, dom.iterable is required for destructuring    [x,y] = [1,2]

            sourceMap: true,
            strict: false,
            alwaysStrict: false,

            noImplicitAny: false,

            noUnusedParameters: false,       // easier for beginners
            noUnusedLocals: true,            // i filter those errors out from the alert
            allowUnreachableCode: true,
            allowUnusedLabels: true,
            noImplicitThis: false,

            strictFunctionTypes: true,       // show the error, it will run anyhow
            strictNullChecks: true,
            target: monaco.languages.typescript.ScriptTarget.ES2020

            // noImplicitReturns: true,

        });


        monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
            noSemanticValidation: true,
            noSyntaxValidation: true,
            target: monaco.languages.typescript.ScriptTarget.ES2020,
            noLib: true,                        // don't bring DOM into intellisense
            strictNullChecks: false,
        });

        monaco.editor.defineTheme('myTheme', {
            base: 'vs',
            inherit: true,
            rules: [],
            colors: {
                'editorInlayHint.background': '#00FF00',
                'editorInlayHint.foreground': '#FF00FF',
            }
        });


        // monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_baby_plus, "lib.baby.d.ts");
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_es5, "lib.es5.d.ts");
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_es6, "lib.es6.d.ts");
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_dom_mini, "lib.dom_mini.d.ts");
        // monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_dom, "lib.dom.d.ts");
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_dom_iterable, "lib.dom.iterable.d.ts");

        // monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_promise, "lib.es2015.promise.d.ts");

        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_es2015_collection)
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_es2015_core)
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_es2015_promise)
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_es2015_iterable)
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_es2016_array_include)
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_es2017_string)
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_es2017_typedarrays)
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_es2018_asynciterable)
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_es2019_string)
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_es2020_bigint)
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_es2021_string)
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_es2022_array)
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_es2023_array)

        // monaco.languages.typescript.typescriptDefaults.addExtraLib(babylonjs)

        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_es2099)      // stuff that Typescript hasn't provided

        // monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_jsx_tiny)    // my simply remix of the upper level call

        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib_tsxgraph)    // wrapper version
        monaco.languages.typescript.typescriptDefaults.addExtraLib(mathcode)    // my simple remix of the upper level call
        // monaco.languages.typescript.typescriptDefaults.addExtraLib(matter)    // my simply remix of the upper level call

        // this stuff has to go into the EVAL, since it doesn't see otherwise

        // let TSX = XGraph.freeBoard(undefined)  // just to make sure webpack keeps it


        monaco.languages.typescript.typescriptDefaults.addExtraLib(this.hiddenDecl)

        // console.log('value of this.visibleCode:', this.visibleCode)

        this.editor = monaco.editor.create(this.el, {
            automaticLayout: true,
            language: "typescript",
            // language: "javascript",
            scrollBeyondLastLine: true,

            value: (this.visibleCode == '')
                ? window.localStorage.getItem(this.storageKey) || this.initFile
                : this.visibleCode,

            minimap: {
                enabled: false
            }
        });
        let safeTimeout: number;


        this.editor.onDidChangeModelContent(() => {
            if (safeTimeout) {
                clearTimeout(safeTimeout);
            }
            safeTimeout = window.setTimeout(
                () => {
                    window.localStorage.setItem(this.storageKey, this.editor.getValue()),
                        this.safeDelay
                })

        });
    }

    download(fileName: string) {
        // console.log('clicked on upload')
        const data = new Blob([this.editor.getValue()], { type: "text/plain" });
        if (this.initFile) {
            window.URL.revokeObjectURL(this.initFile);
        }
        this.initFile = window.URL.createObjectURL(data);
        const link = document.createElement("a");
        link.download = fileName;
        link.href = this.initFile;
        link.dispatchEvent(new MouseEvent("click"));
    }

    upload() {
        // console.log('clicked on upload')
        const input = document.createElement("input");
        input.type = "file";
        input.onchange = () => {
            const fileReader = new FileReader();
            fileReader.onload = () => this.editor.setValue(fileReader.result as string);
            fileReader.readAsText(input.files![0]);
        };
        input.click();
    }

    copyToEditor(code: string, hidden: string, decls: string) {
        // console.log('%ccopyToEditor', 'color:red;', 'hiddencode:', hidden, 'hiddendecl', decls)
        this.hiddenCode = hidden
        this.hiddenDecl = decls
        console.log('copyToEditor:', hidden, decls)
        this.editor.setValue(code)
    }


    command(fileName: string) {
        // console.log('clicked on command')
    }



    transpileLog(hiddenCode: string) {

        // console.log('transpile()\n', hiddenCode)

    }


    async transpile(hiddenCode: string) {

        // console.log('transpile()\n', hiddenCode)


        // const args = names.map((key) => scope[key]);
        const model = this.editor.getModel();
        // console.log('model from editor is', model)

        if (model !== null) {    // typescript needs a typeguard to be happy
            const resource = model.uri;  // returns an ITextModel

            const errors = monaco.editor.getModelMarkers({ resource })
            // console.log('errors', errors);

            let errorString = ''
            errors.forEach(m => {
                switch (m.code) {
                    case '6133':        // ignore 'unused local' errors
                    case '7044':        // ignore parameter not typed errors
                        break;
                    default:
                        errorString += `Line ${m.startLineNumber}: ${m.message} (${m.code})\n`;
                }
            });
            if (errorString.length > 0) {
                // alert('errors coming')
                alert(errorString)    //
                console.log(errors);
                return
            }


            const worker = await monaco.languages.typescript.getTypeScriptWorker();
            const client = await worker(resource);
            const output = await client.getEmitOutput(resource.toString());
            const sourceCode = await client.getScriptText(resource.toString())

            // const line = this.editor.getPosition()!.lineNumber
            // const col = this.editor.getPosition()!.column;


            this.editorCode = output.outputFiles[0].text as string;
            let source64 = Buffer.from(sourceCode, 'utf8').toString('base64');


            // TODO, get correct ID and textbook
            // writeMoodleLog({'datacode': 'LOG_EditorRun', id:0, textbook:'', data05: sourceCode})

            this.runEditorCode(source64, this.editorCode)      // and run the whole mess
        }

        // if model is null, do nothing
    }


    runEditorCode(tsCode64: string, editorCode: string) {
        // console.log('runeditorcode', editorCode, hiddenCode)


        // console.log('code', code)



        let plotWindow = window.open("", "jxgframe", "popup=true,left=100,top=100,width=320,height=320");
        let html = '';

        html += this.generateSourceCode(tsCode64, editorCode)

        // console.log('code to write:', html)
        plotWindow.document.open();
        plotWindow.document.write(html);
        plotWindow.document.close();

        //////////////////////////
        // end popup
        //////////////////////////



        // wipe any observables from the last run
        // Observable.resetUserObservers()

        // eval() is crazy dangerous because it runs in the local context
        // Function() is a bit safer

        // eval(code)

        // try {
        //     let f = new Function(code)
        //     f()
        // }
        // catch (err) {
        //     alert(err.message);
        // }


    }

    /** create <script></script>  */
    generateSourceCode(tsCode64: string, editorCode: string): string {
        // console.log('%chiddencode','color:pink;', this.hiddenCode, this.hiddenDecl)
        // let code = ''
        // code += "\r\n" + this.hiddenCode + "\r\n"
        // code += "\r\n" + editorCode + "\r\n"

        let html = '<!DOCTYPE html>';
        html += '<head>';

        html += `\n<script type="text/javascript" charset="UTF-8" src="dist.${LIB_VERSION}/bootstrap/bootstrap-5.3.3.min.js"></script>`
        html += `\n<link rel="stylesheet" type="text/css" href="dist.${LIB_VERSION}/bootstrap/bootstrap-5.3.3.min.css" />`;

        html += `\n<script type="text/javascript" charset="UTF-8" src="dist.${LIB_VERSION}/jsxgraphcore.js"></script>`
        html += `\n<link rel="stylesheet" type="text/css" href="dist.${LIB_VERSION}/jsxgraph.css" />`;
        html += '</head>';
        html += '<body>';

        html += `<div id='source64' style='display:none;'>${tsCode64}</div>`
        html += '<div id="jxgbox" class="jxgbox" style="width:850px; height:850px;"></div>';

        html += '<script type="module" defer>'
        html += "\r\n" + `import { TXG } from "./dist.${LIB_VERSION}/tsxgraph.js";`  // this import is always provided because lib version
        html += "\r\n" + `let TSX = TXG.TSXGraph.initBoard('jxgbox');`


        html += "\r\n" + this.hiddenCode   // before try/catch
        html += "\r\n try {"

        html += editorCode

        html += "\r\n }"
        html += "\r\n catch(error) {"
        html += "\r\n console.log(error);"
        html += "\r\n alert(error);"
        html += "\r\n }"
        html += '</script>';
        // html += `<div id='source64' style='display:none;'>${tsCode64}</div>`
        html += '</body>';
        html += '</head>';

        // console.log('%cgenerateSourceCode\n', 'background-color:blue;', html)
        return html
    }


}




// new Function(src) is a safer form of eval().
// code = `app.floor(30,30,5);let cube = app.cube().color('blue').move('up',1)`
// var app = new Baby(code)

// return () => new Function(src).call(window, args);
// // } else {
//     return () => { alert("no source"); };  // have to return something if typeguard fails




