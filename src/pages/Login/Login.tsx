import LoginScrollBig from "../../components/Slider/LoginScrollBig/LoginScrollBig";
import s from "./Login.module.scss";
import LoginForm from "../../components/Form/LoginForm/LoginForm";
import Button from "../../components/Button/Button";
import { Link } from "react-router";
const Login = () => {
  const imagesFirstBig = import.meta.glob(
    "/src/assets/LoginFirstScrollBig/*.png",
    { eager: true, query: "?url", import: "default" }
  );
  const imageFirstBig = Object.values(imagesFirstBig) as string[];
  const imagesSmall = import.meta.glob(
    "/src/assets/LoginFirstScrollSmall/*.png",
    {
      eager: true,
      query: "?url",
      import: "default",
    }
  );
  const imageFirstSmall = Object.values(imagesSmall) as string[];
  const imagesSecondBig = import.meta.glob(
    "/src/assets/LoginSecondScrollBig/*.png",
    { eager: true, query: "?url", import: "default" }
  );
  const imageSecondBig = Object.values(imagesSecondBig) as string[];
  const imagesSecondSmall = import.meta.glob(
    "/src/assets/LoginSecondScrollSmall/*.png",
    { eager: true, query: "?url", import: "default" }
  );
  const imageSecondSmall = Object.values(imagesSecondSmall) as string[];
  return (
    <>
      <div className={s.gradient}>
        <div className={`${s.marque}`}>
          <div className={s.marque_sliders}>
            <LoginScrollBig images={imageFirstBig} variant="big" />
            <LoginScrollBig images={imageFirstSmall} variant="small" />
          </div>
          <div className={s.marque_sliders}>
            <LoginScrollBig images={imageSecondBig} variant="big" />
            <LoginScrollBig images={imageSecondSmall} variant="small" />
          </div>
        </div>
      </div>
      <div className={s.form}>
        <p className={s.login_header}>Sign In</p>
        <LoginForm />
        <p className={s.login_alternate_header}>OR</p>
        <div className={s.login_alternate_with}>
          <Button type="button" size="wideWhite">
            Sign in with Google{" "}
            <img
              className={s.login_alternate_with_image}
              src="/images/LoginWithIcons/google.png"
            />
          </Button>
          <Button type="button" size="wideWhite">
            Sign in with Apple{" "}
            <img
              className={s.login_alternate_with_image}
              src="/images/LoginWithIcons/apple.png"
            />
          </Button>
          <Button type="button" size="wideWhite">
            Sign in with Facebook
            <img
              className={s.login_alternate_with_image}
              src="/images/LoginWithIcons/facebook.png"
            />
          </Button>
        </div>
        <p className={s.signup}>
          New to Cine<span className={s.signup_cinex}>X</span>?
          <Link className={s.signup_link} to={"/"}>
            Sign up now
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
