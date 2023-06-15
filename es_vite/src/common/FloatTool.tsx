import React from 'react';
import { FloatButton } from 'antd';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { CControlContext } from '../controller/CControl';

const FloatTool: React.FC = () => {
  const cControl = React.useContext(CControlContext);
  const loadChapter: React.MouseEventHandler<HTMLElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    cControl.loadChapter();
  }
  return <>
    <FloatButton.Group shape="circle" style={{ right: 0 }}>
      <FloatButton icon={<QuestionCircleOutlined />} />
      <FloatButton
        icon={<SyncOutlined />}
        onClick={loadChapter}
      />
      <FloatButton.BackTop visibilityHeight={400} />
    </FloatButton.Group>
  </>
}




export default FloatTool;