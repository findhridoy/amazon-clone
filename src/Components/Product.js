import React from "react";
import product from "../Images/amazon_product.png";

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">Product title</p>
        <p className="product__price">
          <small>$</small>
          <strong>15.99</strong>
        </p>
        <div className="product__rating">⭐</div>
        <img src={product} alt="" />
        <button>Add to Basket</button>
      </div>
    </div>
  );
};

export default Product;
