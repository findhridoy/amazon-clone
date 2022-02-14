import { Button } from "@material-ui/core";
import React from "react";
import CurrencyFormat from "react-currency-format";
import BasketCard from "../Components/BasketCard";
import { useGlobalContext } from "../Context/GlobalContext";
import ads from "../Images/ads/ads.png";
import LayoutWithoutFooter from "../Layout/LayoutWithoutFooter";

const Basket = ({ history }) => {
  const {
    state: { basketItems },
    getSubTotal,
  } = useGlobalContext();
  return (
    <LayoutWithoutFooter>
      <section className="basket__section">
        <div className="container">
          <div className="basket__container">
            <div className="basket__left">
              <div className="basket__ads">
                <img src={ads} alt="ads" />
              </div>
              <div className="basket__content">
                {basketItems?.length > 0 ? (
                  <h2 className="basket__title">Your Shopping Basket</h2>
                ) : (
                  <h2 className="basket__title">
                    Your Shopping Basket is empty
                  </h2>
                )}
                <div className="basket__data">
                  {basketItems?.map((product) => (
                    <BasketCard product={product} key={product?.id} />
                  ))}

                  {basketItems?.length > 0 && (
                    <CurrencyFormat
                      renderText={(value) => (
                        <>
                          <h3 className="basket__subtotal">
                            Subtotal ({basketItems?.length} items):{" "}
                            <span className="basket__subtotal--price">
                              {value}
                            </span>
                          </h3>
                        </>
                      )}
                      decimalScale={2}
                      value={getSubTotal(basketItems)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  )}
                </div>
              </div>
            </div>

            {basketItems?.length > 0 && (
              <div className="basket__right">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h4 className="subtotal">
                        Subtotal ({basketItems?.length} items):{" "}
                        <span className="subtotal__price">{value}</span>
                      </h4>
                      <label htmlFor="checkbox" className="subtotal__gift">
                        <input type="checkbox" id="checkbox" /> This order
                        contains a gift
                      </label>
                    </>
                  )}
                  decimalScale={2}
                  value={getSubTotal(basketItems)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <div className="checkout__btn">
                  <Button
                    variant="contained"
                    onClick={() => history.push("/shippingAddress")}
                  >
                    Proceed to checkout
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </LayoutWithoutFooter>
  );
};

export default Basket;
