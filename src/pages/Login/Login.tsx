import LoginScrollBig from "../../components/Slider/LoginScrollBig/LoginScrollBig";
import s from "./Login.module.scss";
const Login = () => {
  const imagesFirstBig = import.meta.glob(
    "/src/assets/LoginFirstScrollBig/*.png",
    { eager: true, query: "?url", import: "default" }
  );
  const imageFirstBig = Object.values(imagesFirstBig);
  const imagesSmall = import.meta.glob(
    "/src/assets/LoginFirstScrollSmall/*.png",
    { eager: true, query: "?url", import: "default" }
  );
  const imageFirstSmall = Object.values(imagesSmall);
  const imagesSecondBig = import.meta.glob(
    "/src/assets/LoginSecondScrollBig/*.png",
    { eager: true, query: "?url", import: "default" }
  );
  const imageSecondBig = Object.values(imagesSecondBig);
  const imagesSecondSmall = import.meta.glob(
    "/src/assets/LoginSecondScrollSmall/*.png",
    { eager: true, query: "?url", import: "default" }
  );
  const imageSecondSmall = Object.values(imagesSecondSmall);
  return (
    <div className={s.gradient}>
      <div className={`${s.marque} ${s.gradient}`}>
        <div className={s.marque_sliders}>
          <LoginScrollBig images={imageFirstBig} variant="big" />
          <LoginScrollBig images={imageFirstSmall} variant="small" />
        </div>
        <div className={s.marque_sliders}>
          <LoginScrollBig images={imageSecondBig} variant="big" />
          <LoginScrollBig images={imageSecondSmall} variant="small" />
        </div>
      </div>
      <div className={s.form}></div>
    </div>
  );
};

export default Login;
