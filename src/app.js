import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/about";
import Contact from "./component/contact";
import Error from "./component/Error";
import Restmen from "./component/resmenu";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
const Alayout=()=>{
    return(
    <div id="layout">
     <Header/>
     <Outlet/>
    </div>
)
}
const approuter=createBrowserRouter([{
    path:"/",
    element:<Alayout/>,
    children:[{
        path:"/",
        element:<Body/>
    },
        {
            path:"/about",
            element:<About />,
        },{
            path:"/contactus",
            element:<Contact />,
        },{
            path:"/restaurant/:resId",
            element:<Restmen/>
        }
    ],
    errorElement:<Error/>
},])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={approuter}/>);