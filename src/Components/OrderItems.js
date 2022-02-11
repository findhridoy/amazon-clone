import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

const OrderItems = ({ product, removeFromBasket }) => {
  return (
    <div className="orderItems">
      <img src={product?.image} alt="" />
      <span>{product?.title}</span>
      <span>$ {product?.price}</span>
      <span>
        <IconButton size="small" onClick={() => removeFromBasket(product?.id)}>
          <CloseIcon />
        </IconButton>
      </span>
    </div>
  );
};

export default OrderItems;
