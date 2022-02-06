import axios from "axios";
import { useEffect, useState } from "react";

export const useProductById = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    };
    fetchProductById();
  }, [id]);
  return { loading, error, product };
};
