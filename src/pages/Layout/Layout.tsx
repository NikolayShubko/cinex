import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
const Layout = () => {
  return (
    <>
      <Header />
      <BackgroundImage />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
