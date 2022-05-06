import React from "react";
import {BrowserRouter, Routes,  Route} from 'react-router-dom'
import Layout from "./../containers/Layout";
import Home from './../pages/Home';
import Login from "./../containers/Login";
import RecoveryPassword from "./../containers/RecoveryPassword";
import NotFound from './../pages/NotFound';
import '../styles/global.css';

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="recovery" element={<RecoveryPassword />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;