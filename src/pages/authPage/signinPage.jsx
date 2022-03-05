import "./auth-page.css"

export default function SiginInPage() {
    return(
    
        <section class="page-wrap">
        <section class="page-nav">
            
        </section>

        <section class="page-sidebar">

        </section>

        <section class="page-main">
            <main class="main-content">

                <form class="dui-auth-card dui-util-bdr-radi-10px-m dui-util-gry-shdw">
                    <h2 class="dui-auth-card__title dui-util-fw-bld">Login</h2>
                    {/* <!-- Input Component Starts --> */}
                    <div class="dui-inp-txt">
                        <label for="email-id" class="dui-util-txt-sm dui-util-fw-sbld">Email Address
                            <input id="email-id"
                                class="dui-inp-txt__input dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-input-inherit-parent"
                                type="text" placeholder="sample@neog.camp" />
                            <p class="dui-util-txt-xsm dui-util-disp-none">*Some Additional Info</p>
                        </label>
                    </div>
                    {/* <!-- Input Component Ends --> */}

                    {/* <!-- Input Component Starts --> */}
                    <div class="dui-inp-txt">
                        <label for="password" class="dui-util-txt-sm dui-util-fw-sbld">Password
                            <input id="password"
                                class="dui-inp-txt__input dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-input-inherit-parent"
                                type="text" placeholder="Password" />
                            <p class="dui-util-txt-sm dui-util-disp-none">*Please enter correct input</p>
                        </label>
                    </div>
                    {/* <!-- Input Component Ends --> */}

                    <div class="dui-auth-card__actions">
                        <div class="dui-auth-card__sub-actions">
                            {/* <!-- Checkbox Component Starts --> */}
                            <label class="dui-inp-chkbox dui-util-txt-sm dui-util-disp-inline-block">Remember me
                                <input type="checkbox" checked="checked" />
                                <span class="dui-inp-chkbox__checkmark"></span>
                            </label>
                            {/* <!-- Checkbox Component Ends --> */}

                            {/* <!-- Link Button Component Starts -- Link Txt Primary --> */}
                            <a class="dui-link dui-link--txt-primary dui-util-txt-sm" href="#">
                                Forgot your Password ?
                            </a>
                            {/* <!-- Link Button Component Ends -- Link Txt Primary --> */}

                        </div>

                        {/* <!-- Button Component Starts -- Primary --> */}
                        <button type="submit"
                            class="dui-btn dui-btn--primary dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-button-inherit-parent">
                            Login
                        </button>
                        {/* <!-- Button Component Ends -- Primary --> */}


                        {/* <!-- Link Button Component Starts -- Link Txt Primary --> */}
                        <a class="dui-link dui-link--txt-primary dui-util-bdr-radi-5px-s dui-util-txt-sm dui-util-spc-pad-0_8rem-xs dui-util-disp-block"
                            href="#">
                            Create a New Account
                        </a>
                        {/* <!-- Link Button Component Ends -- Link Txt Primary --> */}
                    </div>
                </form>

            </main>
        </section>

        <section class="page-footer">
            <footer class="footer">
                Some Footer Information
            </footer>
        </section>
    </section>
    )
}