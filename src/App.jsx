import "./styles.css";
import { ProductListingPage } from "./pages";
import { Route, Routes } from "react-router-dom";
import MockAPI from "./mockman/MockAPI";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/mock-api" element={<MockAPI />} />
      </Routes>
    </div>
  );
}
