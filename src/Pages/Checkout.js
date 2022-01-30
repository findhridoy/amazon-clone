import React from "react";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__ad">
          <img
            src="https://ds.rokomari.store/rokomari110/banner/3a894087-7ac1-4f15-9c12-ab1b1ae3f2c9.png"
            alt=""
          />
        </div>
        <h3>Basket Items</h3>
      </div>
      <div className="checkout__right">Total Amount</div>
    </div>
  );
};

export default Checkout;
