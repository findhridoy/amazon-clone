import axios from "axios";
import { useEffect, useState } from "react";

export const useProductByCategory = (category) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProductByCategory = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    };
    fetchProductByCategory();
  }, [category]);
  return { loading, error, products };
};
