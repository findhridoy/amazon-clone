import axios from "axios";
import { useEffect, useState } from "react";
import electronics from "../Images/categories/electronics.jpg";
import jewelery from "../Images/categories/jewelery.jpg";
import mensClothing from "../Images/categories/mens-clothing.jpg";
import womensClothing from "../Images/categories/womens-clothing.jpg";

export const useCategories = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);

  const images = [electronics, jewelery, mensClothing, womensClothing];
  let categoryData = [];

  categories.forEach(function (e, i) {
    categoryData.push({
      title: e,
      imgUrl: images[i],
    });
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);
  return { loading, error, categoryData };
};
