import axios from "axios";
import { useEffect, useState } from "react";

export const useCart = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await axios.get(
                    "https://fakestoreapi.com/carts"
                );
                setCart(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setError(true);
                setLoading(false);
            }
        };
        fetchCategories();


    }, []);
    return { loading, error, cart };
};
