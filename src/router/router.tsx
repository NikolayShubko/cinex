import { createBrowserRouter } from "react-router";
import Layout from "../pages/Layout/Layout";
import Movies from "../pages/Movies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/movies", element: <Movies /> }],
  },
]);
