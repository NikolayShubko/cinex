import { FC } from "react";
import Icon from "../Icon/Icon";
import s from "./Input.module.scss";
import { InputProps } from "../../types";

const Input: FC<InputProps> = ({
  type,
  id,
  value,
  label,
  onChange,
  name,
  checked,
}) => {
  switch (type) {
    case "checkbox":
      return (
        <>
          <label
            htmlFor={id}
            className={`${s.input_label} ${s.input_checkbox}`}
          >
            <Icon iconName={checked ? "checkbox-checked" : "checkbox"} />

            <input
              type={type}
              id={id}
              value={value}
              onChange={onChange}
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
              type={type}
              id={id}
              value={value}
              onChange={onChange}
              name={name}
              className={s.input_input}
            />
          </label>
        </>
      );
  }
};

export default Input;
