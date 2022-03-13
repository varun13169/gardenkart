import { createContext, useReducer, useContext } from "react";

const ProductFilterContext = createContext();

const ProductFilterContextProvider = ({ children }) => {
  const productFilterReducer = (state, action) => {
    const actionType = action.type;
    const ww = action.data.orgProducts;
    switch (actionType) {
      case "SET_FRESH_DATA":
        return {
          ...state,
          orgProducts: ww,
          productsToShow: ww,
        };

      case "FILTER_SORT_BY_PRICE":
        let newState = {
          ...state,
          sortByPrice: action.data.sortByPrice,
          productsToShow: [...state.productsToShow].sort((a, b) => {
            const beta = action.data.sortByPrice === "LOW_TO_HIGH" ? +1 : -1;
            return beta * (Number(b.salePrice) - Number(a.salePrice));
          }),
        };
        return newState;
      case "DEFAULT_ALL_FILTERS":
        return state;

      default:
        console.log("");
    }

    return state;
  };

  const [state, dispatch] = useReducer(productFilterReducer, {
    orgProducts: [],
    productsToShow: [],
    sortByPrice: "HIGH_TO_LOW",
    filters: {
      productCategories: [],
      productRating: null,
      priceRange: {
        minPrice: null,
        maxPrice: null,
      },
    },
  });

  return (
    <ProductFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductFilterContext.Provider>
  );
};

const useProductFilter = () => useContext(ProductFilterContext);

export { ProductFilterContextProvider, useProductFilter };

const applyFilter = (state) => {};
