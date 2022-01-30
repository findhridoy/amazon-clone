import axios from "axios";
import { useEffect, useState } from "react";

export const useLimitProduct = (limit) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductByCategory = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products?limit=${limit}`
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
  }, [limit]);
  return { loading, error, products };
};
