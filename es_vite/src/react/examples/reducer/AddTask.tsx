import { Button } from "antd"
import Input, { InputRef } from "antd/es/input/Input";
import DirectoryTree from "antd/es/tree/DirectoryTree";
import { useRef } from "react";
import type RcTree from 'rc-tree';

export const AddTask = (props:{onAddTask:(tn:string)=>void}) => {
    
    const {onAddTask} = props;
    const inputRef = useRef<InputRef>(null);
    const treeRef = useRef<RcTree>(null);

    return <>
        <Input
            placeholder="Add a task..."
            ref={inputRef}
        />
        <Button 
            onClick={()=>onAddTask(inputRef.current?.input?.value!)}
        >Add</Button>
        <DirectoryTree
            ref={treeRef}
        />
    </>
}

export default AddTask;