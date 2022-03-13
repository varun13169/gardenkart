import { useProductFilter } from "../../contexts/productFilterContext/productFilterContext";
import "./sidebar.css";

export default function SideBar() {
  const { state, dispatch } = useProductFilter();

  return (
    <aside className="sidebar dui-util-spc-pad-1_6rem-s">
      <div className="sidebar__fliter">
        <p className="dui-util-txt-sm dui-util-fw-bld dui-util-disp-inln-blk">
          Filters
        </p>

        <button
          className="dui-btn dui-util-txt-sm dui-util-bdr-radi-5px-s reset-button-inherit-parent"
          onClick={() => dispatch({ type: "DEFAULT_ALL_FILTERS", data: {} })}
        >
          Clear
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
            max="100"
            value="50"
          />
          <p>1000</p>
        </div>
      </div>

      <div className="sidebar__category">
        <p className="dui-util-txt-sm dui-util-fw-bld dui-util-disp-inln-blk">
          Category
        </p>

        <div>
          {/* <!-- Checkbox Component Starts --> */}
          <label className="dui-inp-chkbox dui-util-txt-sm">
            Indoor
            <input type="checkbox" defaultChecked />
            <span className="dui-inp-chkbox__checkmark"></span>
          </label>

          <label className="dui-inp-chkbox dui-util-txt-sm">
            Outdoor
            <input type="checkbox" defaultChecked />
            <span className="dui-inp-chkbox__checkmark"></span>
          </label>
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
            4 Star & above
            <input type="radio" name="rating" defaultChecked />
            <span className="dui-inp-radio-btn__checkmark"></span>
          </label>

          <label className="dui-inp-radio-btn dui-util-txt-sm">
            3 Star & above
            <input type="radio" name="rating" />
            <span className="dui-inp-radio-btn__checkmark"></span>
          </label>

          <label className="dui-inp-radio-btn dui-util-txt-sm">
            2 Star & above
            <input type="radio" name="rating" />
            <span className="dui-inp-radio-btn__checkmark"></span>
          </label>

          <label className="dui-inp-radio-btn dui-util-txt-sm">
            1 Star & above
            <input type="radio" name="rating" />
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
              checked={state.sortByPrice === "LOW_TO_HIGH"}
              onChange={() =>
                dispatch({
                  type: "FILTER_SORT_BY_PRICE",
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
              checked={state.sortByPrice === "HIGH_TO_LOW"}
              onChange={() =>
                dispatch({
                  type: "FILTER_SORT_BY_PRICE",
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
