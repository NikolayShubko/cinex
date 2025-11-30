import { forwardRef } from "react";
import Icon from "../Icon/Icon";
import s from "./Input.module.scss";
import { InputProps } from "../../types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, id, label, name, error, ...rest }, ref) => {
    switch (type) {
      case "checkbox":
        return (
          <>
            <label
              htmlFor={id}
              className={`${s.input_label} ${s.input_checkbox}`}
            >
              <Icon iconName={rest.checked ? "checkbox-checked" : "checkbox"} />

              <input
                {...rest}
                ref={ref}
                type={type}
                id={id}
                name={name}
                className={s.checkbox}
              />

              <p className={s.input_title_checkbox}>{label}</p>
            </label>
          </>
        );
      default:
        return (
          <>
            <label htmlFor={id} className={s.input_label}>
              <p className={s.input_title}>{label}</p>

              <input
                {...rest}
                ref={ref}
                type={type}
                id={id}
                name={name}
                className={s.input_input}
              />
              <p className={s.input_error}>{error}</p>
            </label>
          </>
        );
    }
  }
);

export default Input;
