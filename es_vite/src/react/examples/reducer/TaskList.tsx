import Input,{InputRef} from "antd/es/input/Input";
import { ITask } from "./ReducerComponent";
import Checkbox from "antd/es/checkbox/Checkbox";
import Button from "antd/es/button/button";
import React from "react";

export interface ITaskList {
    tasks:ITask[];
    onChangeTask:(task:ITask)=>void;
    onDeleteTask:(id:number)=>void;
}


export const TaskList:React.FC<ITaskList> = (props)=>{

    const {tasks,onChangeTask,onDeleteTask} = props;

    const inputRef = React.useRef<InputRef>(null);

    return <>
    <ul className="tasks">
        {
            tasks.length>0?
                    tasks.map(v=>{
                        return <li key={v.id}>
                            <Input placeholder={v.text} ref={inputRef} />
                            <Checkbox checked={v.done}/>
                            <Button onClick={()=>onChangeTask({...v,text:inputRef.current?.input?.value!})}>Edit</Button>
                            <Button onClick={()=>onDeleteTask(v.id)}>Del</Button>
                        </li>
                    })
            :<></>
        }
        </ul>
    </>
}

export default TaskList;