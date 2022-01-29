import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useCategories } from "../Hooks/useCategories";
import Loader from "../Layout/Loader";

const Categories = () => {
  const { loading, error, categoryData } = useCategories();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="categories">
          {categoryData?.map((category, index) => (
            <NavLink to="/seemore" className="categories__card" key={index}>
              <h2 className="categories__title">{category.title}</h2>
              <div className="categories__image">
                <img src={category.imgUrl} alt="Category Img" />
              </div>
              <span className="categories__link--text">See more</span>
            </NavLink>
          ))}
        </div>
      )}
      {error && <div>Categories not found!</div>}
    </>
  );
};

export default Categories;
