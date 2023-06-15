import React from 'react';

import { Divider, Layout, Switch, theme } from 'antd';
import { NavMenu } from '../menu/NavMenu';
import CAvatar from '../common/user/Avator';
import "./MainLayout.css"
import MdParser from '../common/md/MdParser';
import FloatTool from '../common/FloatTool';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n/config';
import TaskList from '../react/examples/reducer/TaskList';
import TaskApp from '../react/examples/reducer/ReducerComponent';
import { KonvaStage } from '../konva/KonvaStage';
const { Header, Content, Footer, Sider } = Layout;



const MainLayout: React.FC = () => {

    const {t} = useTranslation();
    const {
        token: { colorBgContainer,colorPrimary },
    } = theme.useToken();
    const [isTranslation,setIsTranslation] = React.useState(false);



    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div style={{ height: 32, padding: 16, background: colorPrimary }} />
                <NavMenu/>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className='site-header' style={{  background: colorBgContainer}}>
                    <CAvatar/>
                    <Switch 
                        checkedChildren="中文" 
                        unCheckedChildren="英文" 
                        defaultChecked
                        checked={isTranslation}
                        onChange={()=>{
                            setIsTranslation((value)=>{
                                return !value;
                            })
                            i18n.changeLanguage(isTranslation?"en":"zh-CN");
                        }}
                    />
                </Header>
                <Divider/>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: colorBgContainer }}>
                        <KonvaStage/>
                        {/* <ObjectMethods/> */}
                        {/* <MdParser/> */}
                        {/* <TaskApp/> */}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>{t('copy right')}</Footer>
            </Layout>
            <FloatTool/>
        </Layout>
    );
};

export default MainLayout;