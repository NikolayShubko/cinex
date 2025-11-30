export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  size?: "wide" | "large" | "medium" | "small" | "wideWhite";
  variant?: "list" | "disabled";
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
