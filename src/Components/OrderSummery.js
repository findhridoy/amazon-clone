import { Button } from "@material-ui/core";
import React from "react";

const OrderSummery = ({ getSubTotal, basketItems }) => {
  return (
    <div className="orderSummery">
      <h3 className="orderSummery__title">Order Summery</h3>
      <span className="orderSummery__data">
        <span>Items</span>
        <span>{basketItems?.length}</span>
      </span>
      <span className="orderSummery__data">
        <span>Shipping</span>
        <span>$ 0</span>
      </span>
      <span className="orderSummery__data">
        <span>Tax</span>
        <span>$ {basketItems?.length * 7}</span>
      </span>
      <span className="orderSummery__data orderSummery__total">
        <span>Total</span>
        <span>
          $ {(getSubTotal(basketItems) + basketItems?.length * 7).toFixed(2)}
        </span>
      </span>
      <div className="orderSummery__btn">
        <Button variant="contained">Place Order</Button>
      </div>
    </div>
  );
};

export default OrderSummery;
