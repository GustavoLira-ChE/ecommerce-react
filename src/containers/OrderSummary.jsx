import React from "react";
import "../styles/oderSummary.scss";

const OrderSummary = () => {
    return(
        <div className="my-order-content">
            <div className="order">
            <p>
                <span>03.25.21</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            </div>
      </div>
    );
};

export default OrderSummary;