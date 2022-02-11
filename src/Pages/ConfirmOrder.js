import CancelIcon from "@material-ui/icons/Cancel";
import React from "react";
import OrderItems from "../Components/OrderItems";
import OrderSummery from "../Components/OrderSummery";
import ShippingData from "../Components/ShippingData";
import { useGlobalContext } from "../Context/GlobalContext";
import Layout from "../Layout/Layout";

const ConfirmOrder = () => {
  // use context
  const {
    state: { userInfo, basketItems, shippingAddress },
    removeFromBasket,
    getSubTotal,
  } = useGlobalContext();
  return (
    <Layout>
      <section className="confirmOrder__section">
        <div className="container">
          <h2 className="confirmOrder__title">Review your order</h2>
          <div className="confirmOrder__container">
            <div className="confirmOrder__content">
              <div className="confrimOrder__data">
                <h3 className="confirmOrder__subtitle">Shipping Address</h3>
                <ShippingData shippingAddress={shippingAddress} />
              </div>
              <div className="confrimOrder__data">
                <h3 className="confirmOrder__subtitle">Payment Method</h3>
                <span className="confirmOrder__notPayment">
                  <CancelIcon />
                  Not Paid
                </span>
              </div>
              <div className="confrimOrder__data">
                <h3 className="confirmOrder__subtitle">Order items</h3>
                {basketItems?.map((product) => (
                  <OrderItems
                    product={product}
                    key={product.id}
                    removeFromBasket={removeFromBasket}
                  />
                ))}
              </div>
            </div>
            <div className="confrimOrder__data">
              <OrderSummery
                getSubTotal={getSubTotal}
                basketItems={basketItems}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ConfirmOrder;
