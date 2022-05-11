import React from "react";
import {BrowserRouter, Routes,  Route} from 'react-router-dom'
import Layout from "./../containers/Layout";
import Home from './../pages/Home';
import NotFound from './../pages/NotFound';
import '../styles/global.css';
import LoginPage from "../pages/LoginPage";
import RecoveryPasswordPage from "../pages/RecoveryPasswordPage";
import RecoveryPasswordVerificationPage from "../pages/RecoveryPasswordVerificationPage";
import CreateAccountPage from "../pages/CreateAccountPage";
import MyAccountPage from "../pages/MyAccountPage";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="loginPage" element={<LoginPage />} />
                    <Route path="createAccount" element={<CreateAccountPage />} />
                    <Route path="myAccount" element={<MyAccountPage />} />
                    <Route path="recovery" element={<RecoveryPasswordPage />} />
                    <Route path="recoveryVerification" element={<RecoveryPasswordVerificationPage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;