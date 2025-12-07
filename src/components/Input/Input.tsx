import { forwardRef } from "react";
import Icon from "../Icon/Icon";
import s from "./Input.module.scss";
import { InputProps } from "../../types";
import clsx from "clsx";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, id, label, name, error, variant, ...rest }, ref) => {
    const inputClasses = clsx(s.input_label, s[`input_label_${variant}`]);
    switch (type) {
      case "checkbox":
        return (
          <>
            <label
              htmlFor={id}
              className={`${inputClasses} ${s.input_checkbox}`}
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
            <label htmlFor={id} className={inputClasses}>
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
