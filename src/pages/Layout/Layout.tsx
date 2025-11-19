import { Outlet } from "react-router";
import { BackgroundImage, Header } from "../../components";

const Layout = () => {
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
