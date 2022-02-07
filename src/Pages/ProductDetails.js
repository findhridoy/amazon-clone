import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Rating from "../Components/Rating";
import { useGlobalContext } from "../Context/GlobalContext";
import { useProductById } from "../Hooks/useProductById";
import ErrorText from "../Layout/ErrorText";
import Layout from "../Layout/Layout";
import Loader from "../Layout/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const { loading, error, product } = useProductById(id);

  // use context
  const {
    addToBasket,
    state: { basketItems },
  } = useGlobalContext();

  // find the existing product
  const existingProduct = basketItems?.some((x) => x.id === product.id);

  useEffect(() => {}, [id]);
  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <section className="productDetails__section">
          <div className="container">
            <div className="productDetails__container">
              <div className="productDetails__image">
                <img src={product?.image} alt="Product Img" />
              </div>
              <div className="productDetails__data">
                <NavLink
                  className="productDetails__category"
                  to={`/category/${product?.category}`}
                  exact
                >
                  {product?.category}
                </NavLink>
                <h2 className="productDetails__title">{product?.title}</h2>
                <Rating rating={product?.rating} />
                <h3 className="productDetails__price">$ {product?.price}</h3>
                <p className="productDetails__description">
                  {product?.description}
                </p>
                <Button
                  variant="contained"
                  onClick={() => addToBasket(product)}
                  disabled={existingProduct}
                >
                  <ShoppingCartIcon />
                  Add to Basket
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
      {error && <ErrorText text="Product not found." />}
    </Layout>
  );
};

export default ProductDetails;
