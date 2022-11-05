import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';
import 'semantic-ui-css/semantic.min.css'

import Busos from './Views/Productos/Busos/index'
import Camisas from './Views/Productos/Camisas/index'
import Principal from './Views/Principal/index'
import NotFound from './Views/NotFound/index'
import Login from './Views/Usuario/Login/index'
import SignUp from './Views/Usuario/SignUp/index'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal/>,
  },
  {
    path: "/camisas",
    element: <Camisas/>,
  },
  {
    path: "/busos",
    element: <Busos/>,
  },
  {
    path: "/login",
    element: <Login/>,
  }, 
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/*",
    element: <NotFound/>,
  },
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
