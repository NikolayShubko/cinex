export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  size?: "wide" | "large" | "medium" | "small" | "xs";
  variant?: "list" | "disabled" | "white" | "black" | "primary" | "iconOnly";
  disabled?: boolean;
  className?: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  isLink?: boolean;
  ariaLabel?: string;
  path?: string;
  target?: "_self" | "_blank" | "_parent";
  rel?: string;
  isActive?: boolean;
}
