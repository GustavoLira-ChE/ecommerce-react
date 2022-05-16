import React from "react";
import "../styles/notFound.scss"
import Header from "../components/Header"

const NotFound = () => {
    return(
        <div>
            <Header />
            <h1>
                Not Found, error 404. <strong>:(</strong>
            </h1>
        </div>
    );
}

export default NotFound;