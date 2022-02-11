import { Button } from "@material-ui/core";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import CheckoutForm from "../Components/CheckoutForm";
import Layout from "../Layout/Layout";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const PaymentMethod = () => {
  const [radioState, setRadioState] = useState("paymentNow");
  console.log(radioState);
  return (
    <Layout>
      <section className="paymentMethod">
        <div className="container">
          <div className="paymentMethod__container">
            <div className="paymentMethod__radio--form">
              <h2 className="paymentMethod__title">Payment Method</h2>
              <label htmlFor="paymentNow" className="radio__label">
                <input
                  className="radio__control"
                  type="radio"
                  id="paymentNow"
                  value="paymentNow"
                  onChange={(e) => setRadioState(e.target.value)}
                  checked={radioState === "paymentNow"}
                />
                <span className="radio__text">Payment Now</span>
              </label>

              <label htmlFor="paymentLater" className="radio__label">
                <input
                  className="radio__control"
                  type="radio"
                  id="paymentLater"
                  value="paymentLater"
                  onChange={(e) => setRadioState(e.target.value)}
                  checked={radioState === "paymentLater"}
                />
                <span className="radio__text">Payment Later</span>
              </label>
              {radioState === "paymentLater" && (
                <div className="paymentMethod__btn">
                  <Button type="submit" variant="contained">
                    Continue
                  </Button>
                </div>
              )}
            </div>
            {radioState === "paymentNow" && (
              <div className="paymentMethod__form">
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default PaymentMethod;
