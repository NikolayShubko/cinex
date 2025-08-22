import Icon from "../Icon/Icon";
import s from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
import { mainRoutes } from "../../router/ROUTES";
import Logo from "./Logo/Logo";
import { Link } from "react-router";
const Header = () => {
  return (
    <header className={s.header + " " + "container"}>
      <Logo />
      <Navigation links={mainRoutes} variant={"main"} basePath="/" />
      <div className={s.controls}>
        <button>
          <Icon iconName="search" />
        </button>
        <button>
          <Icon iconName="bell" />
        </button>
        <Link to={"/login"}>sign in</Link>
      </div>
    </header>
  );
};

export default Header;
