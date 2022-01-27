import React from "react";
import heroImage from "../Images/hero-image.jpg";
import Layout from "../Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="home__section">
        <div className="home__image">
          <img src={heroImage} alt="Hero Img" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
