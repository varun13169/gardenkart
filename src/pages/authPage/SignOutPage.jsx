import "./auth-page.css";
import { useReducer } from "react";
import { signupHandler, signupReducer } from "./authUtils";
import { Navbar } from "../../components";
import { SmileSVG } from "../../assets/svgReactComponents";

export default function SignOutPage() {
  return (
    <section className="auth-page-namespace page-wrap">
      <section className="auth-page-namespace page-nav">
        <Navbar></Navbar>
      </section>

      <section className="auth-page-namespace page-main">
        <main className="auth-page-namespace main-content">
          <div className="dui-auth-card dui-auth-card-logout dui-util-spc-mgn-m dui-util-bdr-radi-10px-m dui-util-gry-shdw">
            <SmileSVG></SmileSVG>
            <h2 className="dui-auth-card__title dui-util-fw-bld">
              You have been successfully logged out
            </h2>
          </div>
        </main>
      </section>
    </section>
  );
}
