import React, {useContext} from "react";
import './../styles/productcard.scss';
import AppContext from "../context/AppContext";

const ProductCard = ({product}) => {
    const {addToCart} = useContext(AppContext);
    const handleClick = item => {
        addToCart(item);
    };
    return(
        <div className="product-card">
            <img src={product.images} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src="./assets/icons/bt_add_to_cart.svg" alt=""/>
                </figure>
            </div>
        </div>
    );
}

export default ProductCard;