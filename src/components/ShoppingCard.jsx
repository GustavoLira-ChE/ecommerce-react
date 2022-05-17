import React, {useContext} from "react";
import AppContext from "../context/AppContext";
import "../styles/shoppingCard.scss";


const ShoppingCard = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = product => {
    removeFromCart(product);
  }
    return(
        <div className="shopping-cart">
          <figure>
            <img src={product.images} alt={product.title} />
          </figure>
          <p>{product.title}</p>
          <p>${product.price}</p>
          <img src="./assets/icons/icon_close.png" alt="close" onClick={() => handleRemove(product)}/>
        </div>
    );
};

export default ShoppingCard;