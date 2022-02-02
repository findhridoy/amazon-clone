import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Rating from "../Components/Rating";
import { useProductById } from "../Hooks/useProductById";
import ErrorText from "../Layout/ErrorText";
import Layout from "../Layout/Layout";
import Loader from "../Layout/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const { loading, error, products } = useProductById(id);
  useEffect(() => { }, [id])
  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <section className="productDetails__section">
          <div className="container">
            <div className="productDetails__container">
              <div className="productDetails__image">
                <img src={products?.image} alt="Product Img" />
              </div>
              <div className="productDetails__data">
                <NavLink
                  className="productDetails__category"
                  to={`/category/${products?.category}`}
                >
                  {products?.category}
                </NavLink>
                <h2 className="productDetails__title">{products?.title}</h2>
                <Rating rating={products?.rating} />
                <h3 className="productDetails__price">$ {products?.price}</h3>
                <p className="productDetails__description">
                  {products?.description}
                </p>
                <Button variant="contained">
                  <ShoppingCartIcon />
                  Add to Basket
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
      {error && <ErrorText text="Products not found." />}
    </Layout>
  );
};

export default ProductDetails;
