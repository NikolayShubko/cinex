import { FC } from "react";
import { NavLink, useLocation } from "react-router";
import s from "./Navigation.module.scss";
import { RouteType } from "../types/routetype.tsx";

interface NavigationProps {
  links: RouteType[];
  variant: "main" | "secondary";
  basePath: string;
}

const Navigation: FC<NavigationProps> = ({ links, variant, basePath }) => {
  const location = useLocation();
  const isHomeActive =
    location.pathname === "/" ||
    location.pathname.startsWith("/recommended-for-you") ||
    location.pathname.startsWith("/trending-now") ||
    location.pathname.startsWith("/keep-watching") ||
    location.pathname.startsWith("/new") ||
    location.pathname.startsWith("/most-popular");
  return (
    <nav className={s.nav}>
      {links.map((link) => {
        const to =
          variant === "main"
            ? `${link.route}`
            : `${basePath}/${link.route}`.replace("//", "/");
        return (
          <NavLink
            key={link.name}
            to={to}
            id={link.name}
            className={({ isActive }) => {
              if (link.name === "Home" && variant === "main") {
                return isHomeActive ? s.navlink_active : s.navlink;
              }
              return isActive ? s.navlink_active : s.navlink;
            }}
          >
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navigation;
