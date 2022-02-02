import React from "react";
import Product from "./Product";

const SearchResult = ({ searchResultProducts }) => {
    return (
        <>
            {
                searchResultProducts?.length > 0 &&
                <section className="searchReasult">
                    <div className="container">
                        <div className="searchResult__container">
                            {searchResultProducts?.map((product) => (
                                <div className="searchReasult__products" key={product?.id}>
                                    <Product product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            }
        </>
    )
}
export default SearchResult;