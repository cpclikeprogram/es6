import { Col, Row, Avatar, Card, Skeleton, Switch, Space } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { CodeEditor } from "../../common/CodeEditor";
import { useRef, useState } from "react";
import Meta from "antd/es/card/Meta";
import { InputRef } from "antd/es/input/Input";
import { TextAreaRef } from "antd/es/input/TextArea";
import { Input } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { KonvaImage } from "../../konva/Image";
import { Stage, Layer, Star, Group } from "react-konva";
import { withTransform } from "../../konva/withTransform";
import { set } from "lodash";
const { TextArea } = Input;
const url = '/imgs/avatar.jpg';

const img = {
    id:"img",
    url:url,
}


function downloadURI(uri:string,name:string){
    var link = document.createElement('a');
    link.download = name;
    link.href = uri; //link.setAttribute('href',uri); //not working in Firefox.  Link.setAttribute('download',name
    document.body.appendChild(link); //needed for Firefox https://codegeex.cn
    link.click(); //or link.blur() to get rid of the link.  Not working in Firefox https://codegeex.cn
    document.body.removeChild(link); //needed for Firefox https://codegeex.cn
}


export function ObjectMethods() {

    const stageRef = useRef<any>(null);
    const [selectId,setSelectId] = useState("");

    const HKonvaImage = withTransform(KonvaImage);

    const [loading, setLoading] = useState(true);
    const text = useRef<TextAreaRef>(null);
    const [originCode, setOriginCode] = useState("");

   


    return <>
        
        <h1>ObjectMethods</h1>

        <h1>Assign Demo</h1>
       

        {/* <Switch checked={!loading} onChange={onChange} /> */}
        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
            <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
                title="Assign Demo"
                description="This is the description"
            />
            <CodeEditor

            />
        </Card>
        <Card
            style={{ width: 300, marginTop: 16 }}
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Skeleton loading={loading} avatar active>
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
                    title="Card title"
                    description="This is the description"
                />
            </Skeleton>
        </Card>

        <Input

        />

        <Space align="center">
            <TextArea
                cols={40}
                rows={20}
                ref={text}
                defaultValue={"place"}
                onChange={(e) => {
                    let _v = e.target.value;
                    let _res = [];
                    let isUpper = false;
                    if (_v) {
                        let arr = _v.split("\n");
                        for (const line of arr) {
                            let attr = "";
                            if (line.includes("?")) {
                                attr = line.split("?")[0];
                            } else {
                                attr = line.split(":")[0];
                                isUpper = true;
                            }
                            _res.push(attr);
                        }
                    }
                    setOriginCode(_res.map(v => isUpper ? v.toUpperCase() : v).join("\n"));
                }}

            />

            <TextArea
                cols={40}
                rows={20}
                value={originCode}
            />
        </Space>


        <Paragraph copyable>{originCode.toUpperCase()}</Paragraph>

    </>
}