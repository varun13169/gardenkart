import "./auth-page.css";
import { useReducer } from "react";
import { signinHandler, signinReducer } from "./authUtils";

export default function SiginInPage() {
  //   const signinHandler = async (loginDetails) => {
  //     try {
  //       const response = await axios.post(`/api/auth/login`, loginDetails);
  //       // saving the encodedToken in the localStorage
  //       console.log(response.data.encodedToken);
  //       localStorage.setItem("token", response.data.encodedToken);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   const signinReducer = (loginState, loginAction) => {
  //     switch (loginAction.type) {
  //       case "EMAIL_CHANGE":
  //         return { ...loginState, email: loginAction.data.email };
  //       case "PASSWORD_CHANGE":
  //         return { ...loginState, password: loginAction.data.password };
  //       case "RESET_LOGIN_FORM":
  //         return { ...loginState, email: "", password: "" };
  //       default:
  //         console.log("Error: Check Action Type");
  //     }
  //   };
  const [loginState, loginActionDispatch] = useReducer(signinReducer, {
    email: "",
    password: "",
  });

  return (
    <section className="auth-page-namespace page-wrap">
      <section className="auth-page-namespace page-nav"></section>

      <section className="auth-page-namespace page-sidebar"></section>

      <section className="auth-page-namespace page-main">
        <main className="auth-page-namespace main-content">
          <form
            className="dui-auth-card dui-util-bdr-radi-10px-m dui-util-gry-shdw"
            onSubmit={(e) => {
              e.preventDefault();
              signinHandler(loginState);
              loginActionDispatch({ type: "RESET_LOGIN_FORM" });
            }}
          >
            <h2 className="dui-auth-card__title dui-util-fw-bld">Login</h2>
            {/* <!-- Input Component Starts --> */}
            <div className="dui-inp-txt">
              <label
                for="email-id"
                className="dui-util-txt-sm dui-util-fw-sbld"
              >
                Email Address
                <input
                  id="email-id"
                  className="dui-inp-txt__input dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-input-inherit-parent"
                  type="text"
                  placeholder="sample@neog.camp"
                  value={loginState.email}
                  onChange={(e) =>
                    loginActionDispatch({
                      type: "EMAIL_CHANGE",
                      data: { email: e.currentTarget.value },
                    })
                  }
                />
                <p className="dui-util-txt-xsm dui-util-disp-none">
                  *Some Additional Info
                </p>
              </label>
            </div>
            {/* <!-- Input Component Ends --> */}

            {/* <!-- Input Component Starts --> */}
            <div className="dui-inp-txt">
              <label
                for="password"
                className="dui-util-txt-sm dui-util-fw-sbld"
              >
                Password
                <input
                  id="password"
                  className="dui-inp-txt__input dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-input-inherit-parent"
                  type="text"
                  placeholder="Password"
                  value={loginState.password}
                  onChange={(e) =>
                    loginActionDispatch({
                      type: "PASSWORD_CHANGE",
                      data: { password: e.currentTarget.value },
                    })
                  }
                />
                <p className="dui-util-txt-sm dui-util-disp-none">
                  *Please enter correct input
                </p>
              </label>
            </div>
            {/* <!-- Input Component Ends --> */}

            <div className="dui-auth-card__actions">
              <div className="dui-auth-card__sub-actions">
                {/* <!-- Checkbox Component Starts --> */}
                <label className="dui-inp-chkbox dui-util-txt-sm dui-util-disp-inline-block">
                  Remember me
                  <input type="checkbox" checked="checked" />
                  <span className="dui-inp-chkbox__checkmark"></span>
                </label>
                {/* <!-- Checkbox Component Ends --> */}

                {/* <!-- Link Button Component Starts -- Link Txt Primary --> */}
                <a
                  className="dui-link dui-link--txt-primary dui-util-txt-sm"
                  href="#"
                >
                  Forgot your Password ?
                </a>
                {/* <!-- Link Button Component Ends -- Link Txt Primary --> */}
              </div>

              {/* <!-- Button Component Starts -- Primary --> */}
              <button
                type="submit"
                className="dui-btn dui-btn--primary dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-button-inherit-parent"
              >
                Login
              </button>
              {/* <!-- Button Component Ends -- Primary --> */}

              {/* <!-- Link Button Component Starts -- Link Txt Primary --> */}
              <a
                className="dui-link dui-link--txt-primary dui-util-bdr-radi-5px-s dui-util-txt-sm dui-util-spc-pad-0_8rem-xs dui-util-disp-block"
                href="#"
              >
                Create a New Account
              </a>
              {/* <!-- Link Button Component Ends -- Link Txt Primary --> */}
            </div>
          </form>
        </main>
      </section>

      <section className="auth-page-namespace page-footer">
        <footer className="footer">Some Footer Information</footer>
      </section>
    </section>
  );
}
