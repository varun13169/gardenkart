import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ProductFilterContextProvider } from "./contexts";
import { makeServer } from "./server";

// Call make Server
makeServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ProductFilterContextProvider>
      <App />
    </ProductFilterContextProvider>
  </StrictMode>,
  rootElement
);
