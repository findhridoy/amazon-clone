import axios from "axios";
import { useEffect, useState } from "react";

export const useSearchProduct = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [searchResultProducts, setSearchResultProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(
                    "https://fakestoreapi.com/products"
                );
                setProducts(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setError(true);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const getSearchProducts = (key) => {
            if (key !== "") {
                const newProducts = products?.filter((product) => {
                    return Object.values(product).join(" ")?.toLowerCase()?.includes(searchKey?.toLowerCase());
                });
                setSearchResultProducts(newProducts);
            } else {
                setSearchResultProducts([]);
            }
        }
        getSearchProducts(searchKey);
    }, [searchKey, products])
    return { loading, error, setSearchKey, searchResultProducts };
};
