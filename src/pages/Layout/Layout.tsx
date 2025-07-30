import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
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
