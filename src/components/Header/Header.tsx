import Icon from "../Icon/Icon";
import s from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
import { mainRoutes } from "../../router/ROUTES";
import Logo from "./Logo/Logo";

import Button from "../Button/Button";
import { useAppSelector } from "../../hooks/reduxHooks";
const Header = () => {
  const isLogin = useAppSelector((state) => state.auth.isLogin);
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
        {!isLogin && (
          <Button isLink={true} path="/login" size="large">
            sign in
          </Button>
        )}
        {/* <Link to={"/login"}>sign in</Link> */}
      </div>
    </header>
  );
};

export default Header;
