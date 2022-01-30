import axios from "axios";
import { useEffect, useState } from "react";

export const useSpecificProduct = (specificID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductByCategory = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${specificID}`
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
  }, [specificID]);
  return { loading, error, products };
};
