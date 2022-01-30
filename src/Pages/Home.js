import React from "react";
import Categories from "../Components/Categories";
import Product from "../Components/Product";
import { useLimitProduct } from "../Hooks/useLimitProduct";
import { useSpecificProduct } from "../Hooks/useSpecificProduct";
import heroImage from "../Images/hero-image.jpg";
import Layout from "../Layout/Layout";

const Home = () => {
  const { products } = useLimitProduct(5);
  const { products: specificProducts } = useSpecificProduct(14);
  return (
    <Layout>
      <div className="home__section">
        <div className="home__image">
          <img src={heroImage} alt="Hero Img" />
        </div>
        <main className="main__container">
          <div className="container">
            <Categories />
            <section className="main__products--section">
              <div className="main__products--container">
                {products?.map((product) => (
                  <div className="main__products" key={product.id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>
              <div className="main__single--products">
                <Product product={specificProducts} />
              </div>
            </section>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
