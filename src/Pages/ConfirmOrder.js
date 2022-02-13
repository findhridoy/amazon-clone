import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import React from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import OrderItems from "../Components/OrderItems";
import OrderSummery from "../Components/OrderSummery";
import ShippingData from "../Components/ShippingData";
import { useGlobalContext } from "../Context/GlobalContext";
import Layout from "../Layout/Layout";

const ConfirmOrder = ({ history }) => {
  // use context
  const {
    state: { basketItems, shippingAddress, paymentMethod },
    removeFromBasket,
    addPlaceOrder,
    resetStorage,
  } = useGlobalContext();

  // submit order
  const handleSubmitOrder = () => {
    let id = uniqid("#", "-a7m5a4z9o3n");

    addPlaceOrder({
      id,
      shippingAddress,
      paymentMethod,
      basketItems,
    });
    resetStorage();
    history.push("/order");
  };

  return (
    <Layout>
      <section className="confirmOrder__section">
        <div className="container">
          {basketItems ? (
            <h2 className="confirmOrder__title">Review your order</h2>
          ) : (
            <h2 className="confirmOrder__title">There is no items</h2>
          )}

          <div className="confirmOrder__container">
            <div className="confirmOrder__content">
              <div className="confrimOrder__data">
                <h3 className="confirmOrder__subtitle">Shipping Address</h3>
                {shippingAddress ? (
                  <ShippingData shippingAddress={shippingAddress} />
                ) : (
                  <span className="confirmOrder__notPayment">
                    <CancelIcon />
                    Shipping Address Required!{" "}
                    <small>
                      <strong>
                        <Link to="/shippingAddress">Update your address</Link>
                      </strong>
                    </small>
                  </span>
                )}
              </div>
              <div className="confrimOrder__data">
                <h3 className="confirmOrder__subtitle">Payment Method</h3>
                {paymentMethod ? (
                  <span className="confirmOrder__sucessPayment">
                    <CheckCircleIcon />
                    Payment was successfull!
                  </span>
                ) : (
                  <span className="confirmOrder__notPayment">
                    <CancelIcon />
                    Not Paid{" "}
                    <small>
                      <strong>
                        <Link to="/paymentMethod">Paid now</Link>
                      </strong>
                    </small>
                  </span>
                )}
              </div>
              <div className="confrimOrder__data">
                {basketItems?.length > 0 ? (
                  <h3 className="confirmOrder__subtitle">Order items</h3>
                ) : (
                  <h3 className="confirmOrder__subtitle">No Order items</h3>
                )}

                {basketItems?.map((product) => (
                  <OrderItems
                    product={product}
                    key={product.id}
                    removeFromBasket={removeFromBasket}
                  />
                ))}
              </div>
            </div>
            <div className="confrimOrder__data--orderSummery">
              <OrderSummery
                basketItems={basketItems}
                handleSubmitOrder={handleSubmitOrder}
                shippingAddress={shippingAddress}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ConfirmOrder;
