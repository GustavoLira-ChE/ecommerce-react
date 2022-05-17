import React, {useContext} from 'react';
import ShoppingCard from '../components/ShoppingCard';
import '../styles/myOrderDetails.scss';
import AppContext from "../context/AppContext";


const MyOrderDetails = () => {
    const {state} = useContext(AppContext);
    const totalPrice = () => {
        const reducer = (sum, num) => sum + num.price;
        const sum = state.cart.reduce(reducer,0);
        return sum;
    }
    return(
        <aside className="product-detail">
            <div className="title-container">
                <img src="./assets/icons/flechita.svg" alt="arrow" />
                <p className="title">My order</p>
                </div>

                <div className="my-order-content">
                {state.cart.map(item => (
                    <ShoppingCard product={item} key={`orderItem-${item.id}`} />
                ))}
                <div className="order">
                    <p>
                    <span>Total</span>
                    </p>
                    <p>${totalPrice()}</p>
                </div>
                <button className="primary-button">
                    Checkout
                </button>
            </div>
        </aside>
    );
};

export default MyOrderDetails;