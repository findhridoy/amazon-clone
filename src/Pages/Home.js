import React from "react";
import Categories from "../Components/Categories";
import heroImage from "../Images/hero-image.jpg";
import Layout from "../Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="home__section">
        <div className="home__image">
          <img src={heroImage} alt="Hero Img" />
        </div>
        <main className="main__container">
          <div className="container">
            <Categories />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
