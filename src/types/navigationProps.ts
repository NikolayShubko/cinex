import { RouteType } from "./routetype";

export interface NavigationProps {
  links: RouteType[];
  variant: "main" | "secondary";
  basePath: string;
}
