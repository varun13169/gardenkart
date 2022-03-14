import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductFilterContextProvider } from "./contexts";
import { makeServer } from "./server";

// Call make Server
makeServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ProductFilterContextProvider>
        <App />
      </ProductFilterContextProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
