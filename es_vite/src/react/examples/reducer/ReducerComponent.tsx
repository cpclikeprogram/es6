import { useReducer, useState } from 'react';
import AddTask from './AddTask.tsx';
import TaskList from './TaskList.tsx';
import React from 'react';

let nextId = 3;
const initialTasks:ITask[] = [
    { id: 0, text: '参观卡夫卡博物馆', done: true },
    { id: 1, text: '看木偶戏', done: false },
    { id: 2, text: '打卡列侬墙', done: false },
];

const actions = [
    {type: 'added', id: 1, text: '参观卡夫卡博物馆'},
    {type: 'added', id: 2, text: '看木偶戏'},
    {type: 'deleted', id: 1},
    {type: 'added', id: 3, text: '打卡列侬墙'},
]


export interface StateType {
    tasks:ITask[]
}

export type ActionType  = {
    type:string,
    payload:any,
}

// const tasks = [];

const tasksReducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case "added":
            {
                return {
                    tasks:[...state.tasks, { id: action.payload.id, text: action.payload.text, done: false }]
                }
            }
        case "changed":
            {
                return {
                    tasks:state.tasks.map(v => {
                        if (v.id === action.payload.task.id) {
                            return action.payload.task;
                        } else {
                            return v;
                        }
    
                    })
                }
            }
        case "deleted":
            {
                return {
                    tasks:state.tasks.filter(v => v.id !== action.payload.id)
                }
            }
        default:
            return state;
    }
}

export  const TaskApp:React.FC = ()=> {

    const [tasks,dispatch] = useReducer(tasksReducer,{tasks:initialTasks});


    

    // const [tasks, setTasks] = useState(initialTasks);

    // let finalState = actions.reduce( tasksReducer as any,tasks);

    const output:HTMLElement|null = document.getElementById('output');
    if(output){
        // output!.textContent = JSON.stringify(finalState, null, 2);
    }

    

    

    function handleAddTask(tn: string): void {
        dispatch({
            type: "added",
            payload: {
                id: nextId++,
                text: tn,
            }
        })
    }

    function handleChangeTask(task: ITask): void {
        dispatch({
            type: "changed",
            payload:{
                task: task,
            }
        })
    }

    function handleDeleteTask(id: number): void {
        dispatch({
            type: "deleted",
            payload: {
                id: id,
            }
        })
    }

    //   function handleAddTask(text:string) {
    //     setTasks([
    //       ...tasks,
    //       {
    //         id: nextId++,
    //         text: text,
    //         done: false,
    //       },
    //     ]);
    //   }

    //   function handleChangeTask(task:ITask) {
    //     setTasks(
    //       tasks.map((t) => {
    //         if (t.id === task.id) {
    //           return task;
    //         } else {
    //           return t;
    //         }
    //       })
    //     );
    //   }

    //   function handleDeleteTask(taskId:number) {
    //     setTasks(tasks.filter((t) => t.id !== taskId));
    //   }

    React.useEffect(()=>{
        // fetch("/txt/safe.txt").then(res=>res.text()).then(content=>{
        //     let regx = new RegExp("(\s|\n)(第)([\u4e00-\u9fa5a-zA-Z0-9]{1,7})[章节卷集部回][^\n]{1,35}(|\n)");
        //     // let m = content.match(regx);
        // })
    })

    return (
        <>
            <h1>布拉格的行程安排</h1>
            <pre id="output"></pre>
            <AddTask onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks.tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}

export interface ITask {
    id: number,
    text: string,
    done: boolean,
}


export default TaskApp;
