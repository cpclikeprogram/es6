import React from "react";
import AceEditor from "react-ace";


//懒加载
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-tsx";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css"; 
import "ace-builds/src-noconflict/mode-html"; 
import "ace-builds/src-noconflict/mode-jsx"; 

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-terminal";

import "ace-builds/src-noconflict/ext-language_tools";
import { CodeEditorProps } from "./Type";



export const CodeEditor: React.FC<CodeEditorProps> = (props: CodeEditorProps) => {


    

    return <>
        <AceEditor
            width={"100%"}
            mode={props.mode}
            theme={props.theme}
            name={props.name}
            editorProps={{ $blockScrolling: true }}
        />
    </>
}