import { useEffect } from 'react';
import './App.css'
import { ConfigProvider } from 'antd'
import MainLayout from './layout/MainLayout';
import { CControlContext } from './controller/CControl';
import React from 'react';
import { getHitokoto } from './util/net/api';
import _ from "lodash"

function App() {

  let cControl = React.useContext(CControlContext);
  
  
  

  useEffect(() => {
    getHitokoto().then((data: any) => {
      cControl.hitokoto = data;
    });
    return () => {
      let obj = {a:1};
      let b = _.cloneDeep(obj);
      console.table([obj,b]);
    }
  }, [])


  return (
    <>

      <ConfigProvider theme={
        {
          "token": {
            "wireframe": false,
            // "colorPrimary": "#081527"
          }
        }
      }>
        <CControlContext.Provider value={cControl}>
          <MainLayout />
        </CControlContext.Provider>
      </ConfigProvider>
    </>
  )
}

export default App
