import SignUpForm from "../../components/Form/SignUpForm/SignUpForm";
import s from "./SignUp.module.scss";
const SignUp = () => {
  return (
    <div className={s.form}>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
