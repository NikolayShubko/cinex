import { Outlet } from "react-router";
import HeaderLogin from "../../components/Header/HeaderLogin/HeaderLogin";

const LoginLayout = () => {
  return (
    <>
      <HeaderLogin />
      <main>
        {/* <div className="container flex-column full-width full-height"> */}
        <Outlet />
        {/* </div> */}
      </main>
    </>
  );
};

export default LoginLayout;
