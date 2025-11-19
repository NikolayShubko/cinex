import s from "./Header.module.scss";
import { mainRoutes } from "../../router/ROUTES";
import { Button, Logo, Navigation, Icon } from "../index";
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
      </div>
    </header>
  );
};

export default Header;
