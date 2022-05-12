import React from 'react';
import ShoppingCard from '../containers/ShoppingCard';

const MyOrderDetails = () => {
    return(
        <aside className="product-detail">
            <div className="title-container">
                <img src="./assets/icons/flechita.svg" alt="arrow" />
                <p className="title">My order</p>
                </div>

                <div className="my-order-content">
                <ShoppingCard />
                <ShoppingCard />
                <ShoppingCard />
                <ShoppingCard />
                <div className="order">
                    <p>
                    <span>Total</span>
                    </p>
                    <p>$560.00</p>
                </div>
                <button className="primary-button">
                    Checkout
                </button>
            </div>
        </aside>
    );
};

export default MyOrderDetails;