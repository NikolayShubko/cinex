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
        <Button variant="iconOnly" size="xs">
          <Icon iconName="search" />
        </Button>
        <Button variant="iconOnly" size="xs">
          <Icon iconName="bell" />
        </Button>
        {!isLogin && (
          <Button isLink={true} path="/login" variant="primary" size="large">
            sign in
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
