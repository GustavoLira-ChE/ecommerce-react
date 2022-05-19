import React from "react";
import { Outlet } from "react-router-dom";

//This component helps to render the children inside Layout
const Layout = () => {
    return(
        <div className="Layout">
            <Outlet />
        </div>
    );
}

export default Layout;