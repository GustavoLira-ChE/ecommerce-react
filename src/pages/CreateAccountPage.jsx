import React from "react";
import Header from "../components/Header";
import CreateAccount from './../containers/CreateAccount';

const CreateAccountPage = () => {
    return(
        <div>
            <Header />
            <CreateAccount />
        </div>
    );
};

export default CreateAccountPage;