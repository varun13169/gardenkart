import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  CartContextProvider,
  ProductFilterContextProvider,
  AuthContextProvider,
  ThemeContextProvider,
} from "./contexts";
import { makeServer } from "./server";
import axios from "axios";
import { WishlistContextProvider } from "./contexts";

// Call make Server
makeServer();

//
// const signupHandler = async () => {
//   try {
//     const response = await axios.post(`/api/auth/signup`, {
//       firstName: "Adarsh",
//       lastName: "Balika",
//       email: "adarshbalika@neog.camp",
//       password: "adarshBalika",
//     });
//     // saving the encodedToken in the localStorage
//     localStorage.setItem("token", response.data.encodedToken);
//   } catch (error) {
//     console.log(error);
//   }
// };
// signupHandler();
//

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <CartContextProvider>
            <WishlistContextProvider>
              <ProductFilterContextProvider>
                <App />
              </ProductFilterContextProvider>
            </WishlistContextProvider>
          </CartContextProvider>
        </BrowserRouter>
      </AuthContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
  rootElement
);
