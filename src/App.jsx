import "./styles.css";
import {
  ProductListingPage,
  SiginInPage,
  SiginUpPage,
  WishlistPage,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import MockAPI from "./mockman/MockAPI";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/sign-in" element={<SiginInPage />} />
        <Route path="/sign-up" element={<SiginUpPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/mock-api" element={<MockAPI />} />
      </Routes>
    </div>
  );
}
