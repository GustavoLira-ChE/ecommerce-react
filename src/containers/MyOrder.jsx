import React from 'react';
import OrderSummary from '../components/OrderSummary';
import ShoppingCard from '../components/ShoppingCard';
import "../styles/myOrder.scss";

const MyOrder = () => {
    return(
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My order</h1>
                <OrderSummary />
                <ShoppingCard />
                <ShoppingCard />
                <ShoppingCard />
                <ShoppingCard />
            </div>
        </div>
    );
};

export default MyOrder;