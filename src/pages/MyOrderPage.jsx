import React from "react";
import Header from "../components/Header";
import MyOrderDetails from "../components/MyOrderDetails";
import MyOrder from "../components/MyOrder";

const MyOrderPage = () => {
    return(
        <div>
            <Header />
            <MyOrderDetails />
            <MyOrder />
        </div>
    );
};

export default MyOrderPage;