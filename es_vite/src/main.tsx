import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { cControl } from './controller/CControl.ts'
import './i18n/config.ts'
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import {loader as rootLoader,action as rootAction} from './routes/ContactModel.ts'
import ErrorPage from './routes/ErrorPage.tsx'
import Contact from './routes/Contact.tsx'
import Root from './routes/Root.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<ErrorPage/>,
    loader:rootLoader,
    action:rootAction,
    children:[
      {
        path:"/contacts/:contactID",
        element:<Contact/>
      }
    ]
  },
  
])



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(



  <React.StrictMode>

    
    <App />

    {/* <RouterProvider router={router}/> */}

  </React.StrictMode>,
);

(window as any).c = cControl;
