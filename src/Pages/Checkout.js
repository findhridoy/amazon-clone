import React from "react";
import { useCart } from "../Hooks/useCart";

const Checkout = () => {
  const { cart } = useCart();
  console.log(cart);


  const handleSubmit = () => {
    fetch('https://fakestoreapi.com/carts', {
      method: "POST",
      body: JSON.stringify(
        {
          userId: 5,
          date: new Date(),
          products: [{ productId: 5, quantity: 1 }, { productId: 1, quantity: 5 }]
        }
      )
    })
      .then(res => res.json())
      .then(json => console.log(json))
  }
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
        <button onClick={handleSubmit}>Add to Cart</button>
      </div>
      <div className="checkout__right">Total Amount</div>
    </div>
  );
};

export default Checkout;
