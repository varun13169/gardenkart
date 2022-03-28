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

      case "FILTER_PRODUCTS_BY_CATEGORY":
        // update each category and apply filter
        return applyFilter({
          ...productAndFilterState,
          filters: {
            ...productAndFilterState.filters,
            productCategories: {
              ...productAndFilterState.filters.productCategories,
              [action.data.categoryId]: {
                ...productAndFilterState.filters.productCategories[
                  action.data.categoryId
                ],
                filterVal:
                  !productAndFilterState.filters.productCategories[
                    action.data.categoryId
                  ].filterVal,
              },
            },
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

      case "INIT_CATEGORY_FILTER":
        let newProductAndFilterState = {
          ...productAndFilterState,
          filters: { ...productAndFilterState.filters, productCategories: {} },
        };

        // setting category default as false unless passed by homepage
        action.data.categoryArr.forEach((category) => {
          newProductAndFilterState.filters.productCategories[category._id] = {
            ...category,
            filterVal: category._id === action.data.initCategory ? true : false,
          };
        });
        return applyFilter(newProductAndFilterState);

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
        productCategories: {},
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
    productsToShow: productAndFilterState.orgProducts
      .filter((product) => {
        return product.productRating >= f.productRating;
      })
      .filter((product) => {
        // Get list of checked categories
        const listOfCheckedCategories = Object.keys(
          productAndFilterState.filters.productCategories
        ).filter(
          (category) =>
            productAndFilterState.filters.productCategories[category].filterVal
        );
        // apply filter based on the category list
        return listOfCheckedCategories.length != 0
          ? listOfCheckedCategories.includes(product.categoryId)
          : true;
      }),
  };
};
