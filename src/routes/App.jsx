import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import '../styles/global.css';

const App = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Layout>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/recovery-password" component={RecoveryPassword}/>
                    <Route component={NotFoud}/>
                </Layout>
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;