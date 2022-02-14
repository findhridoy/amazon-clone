import React from "react";
import Footer from "../Components/Footer";
import Product from "../Components/Product";
import { useGlobalContext } from "../Context/GlobalContext";
import ErrorText from "../Layout/ErrorText";
import LayoutWithoutFooter from "../Layout/LayoutWithoutFooter";

const SearchResult = () => {
  // use context
  const { searchResultProducts, searchKey } = useGlobalContext();

  return (
    <LayoutWithoutFooter>
      {!searchKey && <ErrorText text="No search result!" />}
      {searchResultProducts?.length > 0 ? (
        <>
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
          <Footer />
        </>
      ) : (
        searchKey && <ErrorText text="Product don't match!" />
      )}
    </LayoutWithoutFooter>
  );
};
export default SearchResult;
