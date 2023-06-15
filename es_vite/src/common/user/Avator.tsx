import { Avatar, Badge, Space } from 'antd';
import {  Typography } from 'antd';
import React, { MouseEvent } from 'react';
import { IHitokoto } from '../../controller/Type';
import { getHitokoto } from '../../util/net/api';
import { CControlContext } from '../../controller/CControl';
import { EVENTS } from '../../controller/Constant';
import { AVATAR } from '../../assets/avatar';

const { Paragraph } = Typography;


const CAvatar: React.FC = () => {

    const cControl = React.useContext(CControlContext);
    const [hitokoto,setHitokoto] = React.useState<IHitokoto>();


    function updateHitokoto(){
        if(cControl.hitokoto){
            setHitokoto(cControl.hitokoto);
        }
    }

    React.useEffect(()=> {
        getHitokoto().then((data: any) => {
            setHitokoto(data)
        });
        cControl.on("data."+EVENTS.hitokotoChange,updateHitokoto);
        return ()=>{
            cControl.off("data."+EVENTS.hitokotoChange);
        }
    },[]);




    return <>
        <Space 
            size={24}
            align='baseline'
        >
            <Badge count={1}>
                <Avatar
                    // src="/imgs/avatar.jpg"
                    src = {AVATAR}
                    shape="circle"
                />

            </Badge>
            <Paragraph
                copyable={{
                    tooltips:false
                }}
                onClick={(e:MouseEvent)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    cControl.updateHitokoto();
                    cControl.fire("data."+EVENTS.hitokotoChange);
                }}
            >
                {hitokoto && hitokoto.hitokoto}
            </Paragraph>
        </Space>

    </>
}




export default CAvatar;

