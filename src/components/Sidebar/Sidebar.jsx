import { useProductFilter } from "../../contexts";
import "./sidebar.css";

export default function SideBar() {
  const { productAndFilterState, setProductAndFilterState } =
    useProductFilter();

  return (
    <aside className="sidebar dui-util-spc-pad-1_6rem-s">
      <div className="sidebar__fliter">
        <p className="dui-util-txt-sm dui-util-fw-bld dui-util-disp-inln-blk">
          Filters
        </p>

        <button
          className="dui-btn dui-util-txt-sm dui-util-bdr-radi-5px-s reset-button-inherit-parent"
          onClick={() =>
            setProductAndFilterState({ type: "DEFAULT_ALL_FILTERS", data: {} })
          }
        >
          <p>Clear</p>
        </button>
      </div>

      <div className="sidebar__price">
        <p className="dui-util-txt-sm dui-util-fw-bld">Price</p>
        <div className="dui-inp-slider dui-util-spc-mgn-xs dui-util-disp-flex-row">
          <p>0</p>
          <input
            className="dui-slider dui-util-bdr-radi-max"
            type="range"
            min="1"
            max="300"
            value={productAndFilterState.filters.priceRange.maxPrice ?? 150}
            onChange={(e) => {
              setProductAndFilterState({
                type: "FILTER_PRODUCTS_BY_PRICE_RANGE",
                data: { maxPrice: e.currentTarget.value },
              });
            }}
          />
          <p>300</p>
        </div>
      </div>

      <div className="sidebar__category">
        <p className="dui-util-txt-sm dui-util-fw-bld dui-util-disp-inln-blk">
          Category
        </p>

        <div>
          {/* <!-- Checkbox Component Starts --> */}
          {Object.keys(productAndFilterState.filters.productCategories).map(
            (e) => {
              const productCategory =
                productAndFilterState.filters.productCategories[e];
              return (
                <label
                  className="dui-inp-chkbox dui-util-txt-sm"
                  key={productCategory._id}
                >
                  {productCategory.categoryName}
                  <input
                    type="checkbox"
                    checked={productCategory.filterVal}
                    onChange={() =>
                      setProductAndFilterState({
                        type: "FILTER_PRODUCTS_BY_CATEGORY",
                        data: { categoryId: productCategory._id },
                      })
                    }
                  />
                  <span className="dui-inp-chkbox__checkmark"></span>
                </label>
              );
            }
          )}
          {/* <!-- Checkbox Component Ends --> */}
        </div>
      </div>

      <div className="sidebar__rating">
        <p className="dui-util-txt-sm dui-util-fw-bld dui-util-disp-inln-blk">
          Rating
        </p>

        <div>
          {/* <!-- Radio Button Component Starts --> */}
          <label className="dui-inp-radio-btn dui-util-txt-sm">
            4 Star &amp; above
            <input
              type="radio"
              name="rating"
              checked={productAndFilterState.filters.productRating === 4}
              onChange={() =>
                setProductAndFilterState({
                  type: "FILTER_PRODUCTS_BY_RATING",
                  data: { filterBytating: 4 },
                })
              }
            />
            <span className="dui-inp-radio-btn__checkmark"></span>
          </label>

          <label className="dui-inp-radio-btn dui-util-txt-sm">
            3 Star &amp; above
            <input
              type="radio"
              name="rating"
              checked={productAndFilterState.filters.productRating === 3}
              onChange={() =>
                setProductAndFilterState({
                  type: "FILTER_PRODUCTS_BY_RATING",
                  data: { filterBytating: 3 },
                })
              }
            />
            <span className="dui-inp-radio-btn__checkmark"></span>
          </label>

          <label className="dui-inp-radio-btn dui-util-txt-sm">
            2 Star &amp; above
            <input
              type="radio"
              name="rating"
              checked={productAndFilterState.filters.productRating === 2}
              onChange={() =>
                setProductAndFilterState({
                  type: "FILTER_PRODUCTS_BY_RATING",
                  data: { filterBytating: 2 },
                })
              }
            />
            <span className="dui-inp-radio-btn__checkmark"></span>
          </label>

          <label className="dui-inp-radio-btn dui-util-txt-sm">
            1 Star &amp; above
            <input
              type="radio"
              name="rating"
              checked={productAndFilterState.filters.productRating === 1}
              onChange={() =>
                setProductAndFilterState({
                  type: "FILTER_PRODUCTS_BY_RATING",
                  data: { filterBytating: 1 },
                })
              }
            />
            <span className="dui-inp-radio-btn__checkmark"></span>
          </label>
          {/* <!-- Radio Button Component Ends --> */}
        </div>
      </div>

      <div className="sidebar__sort-by">
        <p className="dui-util-txt-sm dui-util-fw-bld dui-util-disp-inln-blk">
          Sort by
        </p>

        <div>
          {/* <!-- Radio Button Component Starts --> */}
          <label className="dui-inp-radio-btn dui-util-txt-sm">
            Price - Low to High
            <input
              type="radio"
              name="sort-by"
              checked={productAndFilterState.sortByPrice === "LOW_TO_HIGH"}
              onChange={() =>
                setProductAndFilterState({
                  type: "SORT_BY_PRICE",
                  data: { sortByPrice: "LOW_TO_HIGH" },
                })
              }
            />
            <span className="dui-inp-radio-btn__checkmark"></span>
          </label>

          <label className="dui-inp-radio-btn dui-util-txt-sm">
            Price - High to Low
            <input
              type="radio"
              name="sort-by"
              checked={productAndFilterState.sortByPrice === "HIGH_TO_LOW"}
              onChange={() =>
                setProductAndFilterState({
                  type: "SORT_BY_PRICE",
                  data: { sortByPrice: "HIGH_TO_LOW" },
                })
              }
            />
            <span className="dui-inp-radio-btn__checkmark"></span>
          </label>
          {/* <!-- Radio Button Component Ends --> */}
        </div>
      </div>
    </aside>
  );
}
