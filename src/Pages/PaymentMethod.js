import { Button } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import React, { useState } from "react";
import StripeCheckoutElements from "../Components/StripeCheckoutElements";
import { useGlobalContext } from "../Context/GlobalContext";
import Layout from "../Layout/Layout";

const PaymentMethod = ({ history }) => {
  const [radioState, setRadioState] = useState("paymentNow");

  // use context
  const {
    state: { paymentMethod },
  } = useGlobalContext();
  return (
    <Layout>
      <section className="paymentMethod">
        <div className="container">
          <div className="paymentMethod__container">
            <div className="paymentMethod__radio--form">
              <h2 className="paymentMethod__title">Payment Method</h2>

              {paymentMethod ? (
                <span className="confirmOrder__sucessPayment radio__label">
                  <CheckCircleIcon />
                  Payment was successfull!
                </span>
              ) : (
                <>
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
                  </label>{" "}
                </>
              )}

              {(radioState === "paymentLater" || paymentMethod) && (
                <div className="paymentMethod__btn">
                  <Button
                    type="submit"
                    variant="contained"
                    onClick={() => history.push("/confirmOrder")}
                  >
                    Continue
                  </Button>
                </div>
              )}
            </div>
            {radioState === "paymentNow" && !paymentMethod && (
              <div className="paymentMethod__form">
                <StripeCheckoutElements />
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default PaymentMethod;
