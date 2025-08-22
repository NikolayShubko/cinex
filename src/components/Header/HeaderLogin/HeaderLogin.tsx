import Logo from "../Logo/Logo";
import s from "./HeaderLogin.module.scss";
const HeaderLogin = () => {
  return (
    <header className={s.login_header}>
      <Logo />
    </header>
  );
};

export default HeaderLogin;
