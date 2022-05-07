import React from "react";
import ProductCard from "../containers/ProductCard";
import './../styles/productlist.scss';

const ProductList = () => {
    return(
        <section class="main-container">
            <div class="cards-container">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    );
}

export default ProductList;