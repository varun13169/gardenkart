import "./styles.css";
import {
  CartPage,
  HomePage,
  ProductListingPage,
  SiginInPage,
  SignOutPage,
  SiginUpPage,
  WishlistPage,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import MockAPI from "./mockman/MockAPI";
import { initTheme } from "./utils";
import { useTheme } from "./contexts";
import { RequiresAuth } from "./components";

export default function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={"App " + initTheme(theme)}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/sign-in" element={<SiginInPage />} />
        <Route path="/sign-up" element={<SiginUpPage />} />
        <Route path="/sign-out" element={<SignOutPage />} />

        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <WishlistPage />
            </RequiresAuth>
          }
        />

        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <CartPage />
            </RequiresAuth>
          }
        />

        <Route path="/mock-api" element={<MockAPI />} />
      </Routes>
    </div>
  );
}
