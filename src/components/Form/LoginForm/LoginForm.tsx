import React, { useState } from "react";
import { useLoginMutation } from "../../../store/api/auth/authApiSlice";
import s from "./LoginForm.module.scss";
import { Link, useNavigate } from "react-router";
import { setIsLogin } from "../../../store/api/auth/authSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { Input, Button } from "../../index";
const LoginForm = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit = async () => {
    const userData = await login(value).unwrap();
    if (!isLoading && userData) {
      dispatch(setIsLogin());
      navigate("/", { replace: true });
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form className={s.form}>
      {isLoading && <div>loading</div>}
      <p>{error && error?.data.error}</p>
      <Input
        type="text"
        name="username"
        id="username"
        value={value.username}
        onChange={handleChange}
        label={"Your e-mail or phone number"}
      />
      <Input
        type="password"
        name="password"
        id="password"
        value={value.password}
        onChange={handleChange}
        label={"password"}
      />

      <Input
        type="checkbox"
        name="remember"
        id="remember"
        onChange={() => {
          setValue((prev) => ({ ...prev, rememberMe: !value.rememberMe }));
        }}
        checked={value.rememberMe}
        label={"Remember me"}
      />
      <Link to={"#"} className={s.resetpass}>
        Forgot your password?
      </Link>
      <Button onClick={onSubmit} size="wide">
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
