import React from "react";
import { useParams } from "react-router-dom";
import Product from "../Components/Product";
import { useProductByCategory } from "../Hooks/useProductByCategory";
import ErrorText from "../Layout/ErrorText";
import Layout from "../Layout/Layout";
import Loader from "../Layout/Loader";

const ProductByCategory = () => {
  const { title } = useParams();
  const { loading, error, products } = useProductByCategory(title);
  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <section className="categoryProduct__section">
          <div className="container">
            <h2 className="categoryProduct__title">{title}</h2>
            <div className="categoryProduct__container">
              {products?.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          </div>
        </section>
      )}
      {error && <ErrorText text="No data found." />}
    </Layout>
  );
};

export default ProductByCategory;
