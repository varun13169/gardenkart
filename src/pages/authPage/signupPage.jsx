import "./auth-page.css"

export default function SiginUpPage() {
    return(
    
        <section className="page-wrap">
        <section className="page-nav">
            
        </section>

        <section className="page-sidebar">

        </section>

        <section className="page-main">
            <main className="main-content">

                <form className="dui-auth-card dui-util-bdr-radi-10px-m dui-util-gry-shdw">
                    <h2 className="dui-auth-card__title dui-util-fw-bld">Signup</h2>


                    {/* <!-- Input Component Starts --> */}
                    <div className="dui-inp-txt">
                        <label for="email-id" className="dui-util-txt-sm dui-util-fw-sbld">Email Address
                            <input id="email-id"
                                className="dui-inp-txt__input dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-input-inherit-parent"
                                type="text" placeholder="sample@neog.camp" />
                            <p className="dui-util-txt-xsm dui-util-disp-none">*Some Additional Info</p>
                        </label>
                    </div>
                    {/* <!-- Input Component Ends --> */}

                    {/* <!-- Input Component Starts --> */}
                    <div className="dui-inp-txt">
                        <label for="password" className="dui-util-txt-sm dui-util-fw-sbld">Password
                            <input id="password"
                                className="dui-inp-txt__input dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-input-inherit-parent"
                                type="text" placeholder="Password" />
                            <p className="dui-util-txt-sm dui-util-disp-none">*Please enter correct input</p>
                        </label>
                    </div>
                    {/* <!-- Input Component Ends --> */}

                    {/* <!-- Input Component Starts --> */}
                    <div className="dui-inp-txt">
                        <label for="confirm-password" className="dui-util-txt-sm dui-util-fw-sbld">Confirm Password
                            <input id="confirm-password"
                                className="dui-inp-txt__input dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-input-inherit-parent"
                                type="text" placeholder="Confirm Password" />
                            <p className="dui-util-txt-sm dui-util-disp-none">*Please enter correct input</p>
                        </label>
                    </div>
                    {/* <!-- Input Component Ends --> */}

                    <div className="dui-auth-card__actions">
                        <div className="dui-auth-card__sub-actions">
                            {/* <!-- Checkbox Component Starts --> */}
                            <label className="dui-inp-chkbox dui-util-txt-sm dui-util-disp-inline-block">I accept all Terms &amp; Conditions
                                <input type="checkbox" checked="checked" />
                                <span className="dui-inp-chkbox__checkmark"></span>
                            </label>
                            {/* <!-- Checkbox Component Ends --> */}
                        </div>

                        {/* <!-- Button Component Starts -- Primary --> */}
                        <button type="submit"
                            className="dui-btn dui-btn--primary dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-button-inherit-parent">
                            Create New Account
                        </button>
                        {/* <!-- Button Component Ends -- Primary --> */}


                        {/* <!-- Link Button Component Starts -- Link Txt Primary --> */}
                        <a className="dui-link dui-link--txt-primary dui-util-bdr-radi-5px-s dui-util-txt-sm dui-util-spc-pad-0_8rem-xs dui-util-disp-block"
                            href="#">
                            Already have an New Account
                        </a>
                        {/* <!-- Link Button Component Ends -- Link Txt Primary --> */}
                    </div>
                </form>
            </main>
        </section>

        <section className="page-footer">
            <footer className="footer">
                Some Footer Information
            </footer>
        </section>
    </section>
    )
}