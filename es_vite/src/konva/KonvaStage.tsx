
import { useRef, useState } from "react";
import { TextAreaRef } from "antd/es/input/TextArea";
import { Input } from "antd";
import { Stage, Layer, Group } from "react-konva";
import KonvaImage from "./Image";
import {withTransform} from "./withTransform"
const url = '/imgs/avatar.jpg';



function downloadURI(uri:string,name:string){
    var link = document.createElement('a');
    link.download = name;
    link.href = uri; 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
}


export function KonvaStage() {

    const stageRef = useRef<any>(null);
    const [selectId,setSelectId] = useState("");

    const HKonvaImage = withTransform(KonvaImage);

   

    const exportToImage = ()=>{
        const uri = stageRef.current!.toDataURL();
        downloadURI(uri,'stage.png');
    }

   

    




    


    return <>
        <Stage width={1000} height={600} ref={stageRef}
            style={{
                backgroundColor:"black"
            }}
        >
            <Layer>
                <Group>
                    <HKonvaImage
                        url = {url}
                        isSelected = {selectId === "selected"}
                        handleSelected ={()=>{setSelectId("selected")}}
                    />
                </Group>
            </Layer>
        </Stage>
        
       

    </>
}


