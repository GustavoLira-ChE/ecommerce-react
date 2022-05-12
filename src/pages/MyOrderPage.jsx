import React from "react";
import Header from "../components/Header";
import MyOrderDetails from "../containers/MyOrderDetails";
import MyOrder from "../containers/MyOrder";

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