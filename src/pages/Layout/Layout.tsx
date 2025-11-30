import { Outlet } from "react-router";
import { BackgroundImage, Header } from "../../components";
import { useAuthInit } from "../../hooks/useAuthInit";

const Layout = () => {
  useAuthInit();
  return (
    <>
      <Header />
      <BackgroundImage />
      <main>
        <div className="container flex-column full-width full-height">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
