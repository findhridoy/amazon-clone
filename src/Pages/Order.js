import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import React, { useEffect, useState } from "react";
import OrderItems from "../Components/OrderItems";
import OrderSummery from "../Components/OrderSummery";
import ShippingData from "../Components/ShippingData";
import { useGlobalContext } from "../Context/GlobalContext";
import ErrorText from "../Layout/ErrorText";
import Layout from "../Layout/Layout";

const Order = () => {
  const [matchOrder, setMatchOrder] = useState([]);
  // use context
  const {
    state: { orders, userInfo },
  } = useGlobalContext();

  useEffect(() => {
    const matchUser = orders?.filter(
      (order) => order?.shippingAddress?.email === userInfo?.email
    );
    setMatchOrder(matchUser);
  }, [userInfo, orders]);

  return (
    <Layout>
      {matchOrder?.map((order) => (
        <section className="confirmOrder__section" key={order?.id}>
          <div className="container">
            <h2 className="confirmOrder__title order__title">
              Order {order?.id}
            </h2>

            <div className="confirmOrder__container">
              <div className="confirmOrder__content">
                <div className="confrimOrder__data">
                  <h3 className="confirmOrder__subtitle">Shipping Address</h3>
                  <ShippingData shippingAddress={order?.shippingAddress} />
                </div>
                <div className="confrimOrder__data">
                  <h3 className="confirmOrder__subtitle">Payment Method</h3>
                  {order?.paymentMethod ? (
                    <span className="confirmOrder__sucessPayment">
                      <CheckCircleIcon />
                      Payment was successfull!
                    </span>
                  ) : (
                    <span className="confirmOrder__notPayment">
                      <CancelIcon />
                      Not Paid
                    </span>
                  )}
                </div>
                <div className="confrimOrder__data">
                  <h3 className="confirmOrder__subtitle">Order items</h3>
                  {order?.basketItems?.map((product) => (
                    <OrderItems
                      product={product}
                      key={product.id}
                      condition={true}
                    />
                  ))}
                </div>
              </div>
              <div className="confrimOrder__data--orderSummery">
                <OrderSummery
                  basketItems={order?.basketItems}
                  paymentMethod={order?.paymentMethod}
                  condition={true}
                  orderId={order?.id}
                />
              </div>
            </div>
          </div>
        </section>
      ))}
      {matchOrder?.length === 0 && <ErrorText text="No order found!" />}
    </Layout>
  );
};

export default Order;
