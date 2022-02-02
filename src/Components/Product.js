import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="product__card">
      <div className="product__card--header">
        <NavLink to={`/product/${product?.id}`} className="product__card--title">
          {product?.title}
        </NavLink>
        <div className="product__card--price">
          <span>$</span>
          <strong>{product?.price}</strong>
        </div>
        <Rating rating={product?.rating}/>
      </div>
      <div className="product__card--footer">
        <img src={product?.image} alt="Product Img" />
        <Button variant="contained">
          <ShoppingCartIcon />
          Add to Basket
        </Button>
      </div>
    </div>
  );
};

export default Product;
