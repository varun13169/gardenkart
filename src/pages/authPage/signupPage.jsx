import "./auth-page.css";
import { useReducer } from "react";
import { signupHandler, signupReducer } from "./authUtils";

export default function SiginUpPage() {
  //   const signupHandler = async (signupDetails) => {
  //     try {
  //       const response = await axios.post(`/api/auth/signup`, signupDetails);
  //       // saving the encodedToken in the localStorage
  //       console.log(response.data.encodedToken);
  //       localStorage.setItem("token", response.data.encodedToken);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   const signupReducer = (signupState, signupAction) => {
  //     switch (signupAction.type) {
  //       case "EMAIL_CHANGE":
  //         return { ...signupState, email: signupAction.data.email };
  //       case "PASSWORD_CHANGE":
  //         return { ...signupState, password: signupAction.data.password };
  //       case "CONFIRM_PASSWORD_CHANGE":
  //         return {
  //           ...signupState,
  //           confirmPassword: signupAction.data.confirmPassword,
  //         };
  //       case "FIRST_NAME_CHANGE":
  //         return { ...signupState, firstName: signupAction.data.firstName };
  //       case "LAST_NAME_CHANGE":
  //         return { ...signupState, lastName: signupAction.data.lastName };
  //       case "RESET_LOGIN_FORM":
  //         return {
  //           ...signupState,
  //           firstName: "",
  //           lastName: "",
  //           email: "",
  //           password: "",
  //           confirmPassword: "",
  //         };
  //       default:
  //         console.log("Error: Check Action Type");
  //     }
  //   };
  const [signupState, signupActionDispatch] = useReducer(signupReducer, {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(signupState);
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
              signupHandler(signupState);
              signupActionDispatch({ type: "RESET_SIGNUP_FORM" });
            }}
          >
            <h2 className="dui-auth-card__title dui-util-fw-bld">Signup</h2>

            {/* <!-- Input Component Starts --> */}
            <div className="dui-inp-txt">
              <label
                for="first-name"
                className="dui-util-txt-sm dui-util-fw-sbld"
              >
                First Name
                <input
                  id="first-name"
                  className="dui-inp-txt__input dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-input-inherit-parent"
                  type="text"
                  placeholder="Adarsh"
                  value={signupState.firstName}
                  onChange={(e) =>
                    signupActionDispatch({
                      type: "FIRST_NAME_CHANGE",
                      data: { firstName: e.currentTarget.value },
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
                for="last-name"
                className="dui-util-txt-sm dui-util-fw-sbld"
              >
                Last Name
                <input
                  id="last-name"
                  className="dui-inp-txt__input dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-input-inherit-parent"
                  type="text"
                  placeholder="Balika"
                  value={signupState.lastName}
                  onChange={(e) =>
                    signupActionDispatch({
                      type: "LAST_NAME_CHANGE",
                      data: { lastName: e.currentTarget.value },
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
                for="email-id"
                className="dui-util-txt-sm dui-util-fw-sbld"
              >
                Email Address
                <input
                  id="email-id"
                  className="dui-inp-txt__input dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-input-inherit-parent"
                  type="text"
                  placeholder="sample@neog.camp"
                  value={signupState.email}
                  onChange={(e) =>
                    signupActionDispatch({
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
                  value={signupState.password}
                  onChange={(e) =>
                    signupActionDispatch({
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

            {/* <!-- Input Component Starts --> */}
            <div className="dui-inp-txt">
              <label
                for="confirm-password"
                className="dui-util-txt-sm dui-util-fw-sbld"
              >
                Confirm Password
                <input
                  id="confirm-password"
                  className="dui-inp-txt__input dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-input-inherit-parent"
                  type="text"
                  placeholder="Confirm Password"
                  value={signupState.confirmPassword}
                  onChange={(e) =>
                    signupActionDispatch({
                      type: "CONFIRM_PASSWORD_CHANGE",
                      data: { confirmPassword: e.currentTarget.value },
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
                  I accept all Terms &amp; Conditions
                  <input type="checkbox" checked="checked" />
                  <span className="dui-inp-chkbox__checkmark"></span>
                </label>
                {/* <!-- Checkbox Component Ends --> */}
              </div>

              {/* <!-- Button Component Starts -- Primary --> */}
              <button
                type="submit"
                className="dui-btn dui-btn--primary dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-button-inherit-parent"
              >
                Create New Account
              </button>
              {/* <!-- Button Component Ends -- Primary --> */}

              {/* <!-- Link Button Component Starts -- Link Txt Primary --> */}
              <a
                className="dui-link dui-link--txt-primary dui-util-bdr-radi-5px-s dui-util-txt-sm dui-util-spc-pad-0_8rem-xs dui-util-disp-block"
                href="#"
              >
                Already have an New Account
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
