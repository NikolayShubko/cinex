import { Outlet } from "react-router";
import { HeaderLogin } from "../../components";

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
