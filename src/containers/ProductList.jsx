import React from "react";
import ProductCard from "../components/ProductCard";
import './../styles/productlist.scss';

const ProductList = () => {
    return(
        <section className="main-container">
            <div className="cards-container">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    );
}

export default ProductList;