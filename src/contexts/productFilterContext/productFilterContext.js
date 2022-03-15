import { createContext, useReducer, useContext } from "react";

const ProductFilterContext = createContext();

const ProductFilterContextProvider = ({ children }) => {
  const productFilterReducer = (productAndFilterState, action) => {
    const actionType = action.type;
    const ww = action.data.orgProducts;
    switch (actionType) {
      case "SET_FRESH_DATA":
        return {
          ...productAndFilterState,
          orgProducts: ww,
          productsToShow: ww,
        };

      case "FILTER_PRODUCTS_BY_RATING":
        return applyFilter({
          ...productAndFilterState,
          filters: {
            ...productAndFilterState.filters,
            productRating: action.data.filterBytating,
          },
        });

      case "SORT_BY_PRICE":
        return {
          ...productAndFilterState,
          sortByPrice: action.data.sortByPrice,
          productsToShow: [...productAndFilterState.productsToShow].sort(
            (a, b) => {
              const beta = action.data.sortByPrice === "LOW_TO_HIGH" ? +1 : -1;
              return beta * (Number(b.salePrice) - Number(a.salePrice));
            }
          ),
        };

      case "DEFAULT_ALL_FILTERS":
        return productAndFilterState;

      default:
        console.log("");
    }

    return productAndFilterState;
  };

  const [productAndFilterState, setProductAndFilterState] = useReducer(
    productFilterReducer,
    {
      orgProducts: [],
      productsToShow: [],
      sortByPrice: "HIGH_TO_LOW",
      filters: {
        productCategories: [],
        productRating: -1,
        priceRange: {
          minPrice: null,
          maxPrice: null,
        },
      },
    }
  );

  return (
    <ProductFilterContext.Provider
      value={{ productAndFilterState, setProductAndFilterState }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
};

const useProductFilter = () => useContext(ProductFilterContext);

export { ProductFilterContextProvider, useProductFilter };

const applyFilter = (productAndFilterState) => {
  const f = productAndFilterState.filters;

  return {
    ...productAndFilterState,
    productsToShow: productAndFilterState.orgProducts.filter((product) => {
      return product.productRating >= f.productRating;
    }),
  };
};
