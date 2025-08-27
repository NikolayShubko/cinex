export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  size?: "large" | "medium" | "small";
  variant?: "list";
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  isLink?: boolean;
  ariaLabel?: string;
  path?: string;
  target?: "_self" | "_blank" | "_parent";
  rel?: string;
  isActive?: boolean;
}
