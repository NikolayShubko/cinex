import clsx from "clsx";
import s from "./Form.module.scss";
import { FC } from "react";
type FormProps = {
  children: React.ReactNode;
  variant: "login" | "signup";
};
const Form: FC<FormProps> = ({ onSubmit, children, variant }) => {
  const formClasses = clsx(s.button, `s.[form_${variant}]`);
  return (
    <form className={s.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
