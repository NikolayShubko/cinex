import { Link } from "react-router";
import { ButtonProps } from "../types/button";
import clsx from "clsx";
import s from "./Button.module.scss";
const Button = ({
  children,
  type = "button",
  variant,
  size,
  disabled = false,
  className,
  onClick,
  isLink,
  ariaLabel,
  path = "/",
  target = "_self",
  rel = "",
  isActive = false,
}: ButtonProps) => {
  const Component = isLink ? Link : "button";
  const sizeClass = size && s[`button_${size}`];
  const buttonClassName = clsx(
    s.button,
    s[`button_${variant}`],
    sizeClass,
    isActive && s.active,
    className
  );
  return (
    <Component to={isLink ? path : "/"} className={buttonClassName}>
      {children}
    </Component>
  );
};

export default Button;
