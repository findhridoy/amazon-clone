import { Button } from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "../Context/GlobalContext";
import StripeCheckoutElements from "./StripeCheckoutElements";

const OrderSummery = ({
  basketItems,
  handleSubmitOrder,
  shippingAddress,
  paymentMethod,
  condition,
  orderId,
}) => {
  const { getSubTotal } = useGlobalContext();
  return (
    <div className="orderSummery">
      <div className="orderSummery__container">
        <div className="orderSummery__content">
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
              ${" "}
              {(getSubTotal(basketItems) + basketItems?.length * 7).toFixed(2)}
            </span>
          </span>
          {!condition && (
            <div className="orderSummery__btn">
              <Button
                variant="contained"
                onClick={handleSubmitOrder}
                disabled={!shippingAddress}
              >
                Place Order
              </Button>
            </div>
          )}
        </div>
      </div>
      {!paymentMethod && condition && (
        <div className="orderSummery__form">
          <StripeCheckoutElements condition={condition} orderId={orderId} />
        </div>
      )}
    </div>
  );
};

export default OrderSummery;
