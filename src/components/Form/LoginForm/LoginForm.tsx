import { useState } from "react";
import { useLoginMutation } from "../../../store/api/auth/authApiSlice";
import s from "./LoginForm.module.scss";
import { Link, useNavigate } from "react-router";
import { setIsLogin, setToken } from "../../../store/api/auth/authSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { Input, Button } from "../../index";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormValues } from "../../../types";
type ApiError = {
  status: number;
  data: {
    error: string;
  };
  error?: string;
};

const LoginForm = () => {
  const { register, handleSubmit, formState, watch } = useForm<LoginFormValues>(
    {
      mode: "onChange",
      defaultValues: {
        username: "",
        password: "",
        rememberMe: false,
      },
    }
  );
  const checked = watch("rememberMe");
  const [loginErrorMsg, setLoginErrorMsg] = useState<string>("");
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      const userData = await login(data).unwrap();
      if (!isLoading && userData) {
        localStorage.setItem("rememberMe", `${data.rememberMe}`);
        dispatch(setIsLogin(true));
        dispatch(setToken(userData.accessToken));
        navigate("/", { replace: true });
      }
    } catch (err) {
      const loginError = err as ApiError;
      if (loginError?.data && loginError?.data.error) {
        setLoginErrorMsg(loginError?.data.error);
      } else if (loginError && loginError?.error) {
        setLoginErrorMsg("Network error. Please try again later.");
      } else {
        setLoginErrorMsg("Something went wrong.. Try Again");
      }
    }
  };
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={s.form_error}>{loginErrorMsg}</p>
      <Input
        {...register("username", { required: "Enter username or email" })}
        error={
          formState.touchedFields.username
            ? formState.errors.username?.message
            : undefined
        }
        type="text"
        name="username"
        id="username"
        label={"Your e-mail or phone number"}
        variant="black"
      />
      <Input
        {...register("password", { required: "Password required!" })}
        type="password"
        name="password"
        id="password"
        error={
          formState.touchedFields.password
            ? formState.errors.password?.message
            : undefined
        }
        label={"password"}
        variant="black"
      />

      <Input
        {...register("rememberMe")}
        type="checkbox"
        name="rememberMe"
        id="rememberMe"
        checked={checked}
        label={"Remember me"}
        variant="black"
      />
      <Link to={"#"} className={s.resetpass}>
        Forgot your password?
      </Link>
      <Button
        size="wide"
        type="submit"
        variant={isLoading ? "disabled" : undefined}
        disabled={isLoading}
      >
        {isLoading ? "Trying to sign in...." : "Sign In"}
      </Button>
    </form>
  );
};

export default LoginForm;
