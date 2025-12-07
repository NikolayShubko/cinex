import { Button, LoginForm } from "../../components";
import LoginScrollBig from "../../components/Slider/MarqueSlider/MarqueSlider";
import s from "./Login.module.scss";

import { Link } from "react-router";
const topWide = import.meta.glob("/src/assets/LoginFirstScrollBig/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});
const topWideSlider = Object.values(topWide) as string[];
const topSmall = import.meta.glob("/src/assets/LoginFirstScrollSmall/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});
const topSmallSlider = Object.values(topSmall) as string[];
const botWide = import.meta.glob("/src/assets/LoginSecondScrollBig/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});
const botWideSlider = Object.values(botWide) as string[];
const botSmall = import.meta.glob("/src/assets/LoginSecondScrollSmall/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});
const botSmallSlider = Object.values(botSmall) as string[];
const Login = () => {
  return (
    <>
      <div className={s.gradient}>
        <div className={`${s.marque}`}>
          <div className={s.marque_sliders}>
            <LoginScrollBig images={topWideSlider} variant="big" />
            <LoginScrollBig images={topSmallSlider} variant="small" />
          </div>
          <div className={s.marque_sliders}>
            <LoginScrollBig images={botWideSlider} variant="big" />
            <LoginScrollBig images={botSmallSlider} variant="small" />
          </div>
        </div>
      </div>
      <div className={s.form}>
        <p className={s.login_header}>Sign In</p>
        <LoginForm />
        <p className={s.login_alternate_header}>OR</p>
        <div className={s.login_alternate_with}>
          <Button type="button" size="wide" variant="white" disabled={true}>
            Sign in with Google
            <img
              className={s.login_alternate_with_image}
              src="/images/LoginWithIcons/google.png"
            />
          </Button>
          <Button type="button" size="wide" variant="white" disabled={true}>
            Sign in with Apple
            <img
              className={s.login_alternate_with_image}
              src="/images/LoginWithIcons/apple.png"
            />
          </Button>
          <Button type="button" size="wide" variant="white" disabled={true}>
            Sign in with Facebook
            <img
              className={s.login_alternate_with_image}
              src="/images/LoginWithIcons/facebook.png"
            />
          </Button>
        </div>
        <p className={s.signup}>
          New to Cine<span className={s.signup_cinex}>X</span>?
          <Link className={s.signup_link} to={"/register"}>
            Sign up now
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
