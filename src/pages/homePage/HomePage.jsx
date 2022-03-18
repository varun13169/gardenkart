import "./home-page.css";
import { useState, useEffect } from "react";
import Carousal from "../../components/Carousal/Carousal";
import { Navbar } from "../../components";
import axios from "axios";
import imgg from "./dummy-pot-plant.png";
import { Link } from "react-router-dom";
import { useProductFilter } from "../../contexts";

function HomePage() {
  const [categoryArr, setCategoryArr] = useState([]);

  const { productAndFilterState, setProductAndFilterState } =
    useProductFilter();

  useEffect(() => {
    // Fetch Categories
    (async function () {
      const { data } = await axios.get("/api/categories");
      setCategoryArr((categoryArr) => data.categories);
    })();

    // Fetch Products
    (async function () {
      const { data } = await axios.get("/api/products");
      setProductAndFilterState({
        type: "SET_FRESH_DATA",
        data: { orgProducts: data.products },
      });
    })();
  }, []);

  return (
    <div className="home-page-namespace page-wrap">
      <section className="home-page-namespace page-nav">
        <Navbar></Navbar>
      </section>

      <section className="home-page-namespace page-main">
        <main className="home-page-namespace main-content">
          <header className="home-page-namespace header">
            <Carousal></Carousal>
          </header>

          <h2 className="promo-catagory-header">Shop By Category</h2>
          <div className="promo-catagory-holder">
            {categoryArr.map((category) => {
              return (
                <div className="promo-catagory dui-primary-p2-bdr-s dui-util-gry-shdw dui-util-bdr-radi-m">
                  <Link
                    to={`/products?${category._id}`}
                    className="dui-link dui-util-disp-inline-block"
                  >
                    <img src={imgg} />
                  </Link>
                  <p className="promo-catagory__title">
                    {category.categoryName}
                  </p>
                </div>
              );
            })}
          </div>
        </main>
      </section>
    </div>
  );
}

export default HomePage;
