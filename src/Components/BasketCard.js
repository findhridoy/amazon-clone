import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context/GlobalContext";
import Rating from "./Rating";

const BasketCard = ({ product }) => {
  const { removeFromBasket } = useGlobalContext();
  return (
    <div className="basket__card">
      <div className="basket__card--img">
        <img src={product?.image} alt="Product Img" />
      </div>

      <div className="basket__card--data">
        <span className="basket__cart--instock">In Stock</span>
        <NavLink
          to={`/product/${product?.id}`}
          className="basket__card--title"
          exact
        >
          {product?.title}
        </NavLink>
        <Rating rating={product?.rating} />
        <span className="basket__price">$ {product?.price}</span>
        <div className="basket__cart--btn">
          <Button
            variant="contained"
            onClick={() => removeFromBasket(product?.id)}
          >
            <DeleteIcon />
            Remove From Basket
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
