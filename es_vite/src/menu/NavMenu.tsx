import { MenuProps } from 'antd';
import {  Menu } from 'antd';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Chapter } from './Type';
import { CControlContext } from '../controller/CControl';
import { getChapter } from '../util/net/api';
import { BASEEVENT, EVENTS } from '../controller/Constant';




export const NavMenu: React.FC = () => {
    const cControl = React.useContext(CControlContext);
    const icons = [
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        BarChartOutlined,
        CloudOutlined,
        AppstoreOutlined,
        TeamOutlined,
        ShopOutlined,
    ]
    
    const [items, setItems] = useState<MenuProps['items']>(cControl.chapters ? [...genItems(cControl.chapters)!] : []);





    const handleClick = (info: {
        key: string;
        keyPath: string[];
        item: React.ReactInstance;
        domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
    }) => {
        cControl.read(info.key);
        cControl.fire("data."+EVENTS.mdChange);
    }

    function updateChapter() {
        if (cControl.chapters) {
            setItems(genItems(cControl.chapters))
        } else {
            setItems([]);
        }
    }

    function genItems(data: Chapter[]): MenuProps['items'] {
        let items: MenuProps['items'] = [];
        items = data.map((v: Chapter) => ({
            key: v.GUID,
            title: v.title,
            label: v.title,
            icon: React.createElement(icons[0]),
        }))
        return items;
    }

    useEffect(() => {
        cControl.on(BASEEVENT.DATA + "." + EVENTS.navChange, updateChapter);
        getChapter().then(res => {
            setItems(genItems(res))
        }).catch(err => {
            console.error(err);
        })
        return () => {
            cControl.off(BASEEVENT.DATA + "." + EVENTS.navChange);
        }
    }, [])

    return (<>
        <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['4']}
            items={items}
            onClick={handleClick}
        />
    </>
    )
}