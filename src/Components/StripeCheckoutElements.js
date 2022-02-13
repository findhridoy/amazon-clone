import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const StripeCheckoutElements = ({ condition, orderId }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm condition={condition} orderId={orderId} />
    </Elements>
  );
};

export default StripeCheckoutElements;
