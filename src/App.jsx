import { initTheme } from "./utilScripts/initTheme";
import {ProductListingPage} from "./pages";
import "./styles.css";

export default function App() {
  return (
    <div className={"App " + initTheme()}>
        <ProductListingPage></ProductListingPage>
    </div>
  );
}
