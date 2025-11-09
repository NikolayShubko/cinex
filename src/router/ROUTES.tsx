import { RouteType } from "../types/routetype";

export const mainRoutes: RouteType[] = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Movies",
    route: "/movies",
  },
  {
    name: "TV Shows",
    route: "/series",
  },
  {
    name: "My List",
    route: "/my-list",
  },
];

export const categoryRoutes: RouteType[] = [
  {
    name: "New",
    route: "new",
  },
  {
    name: "Most Popular",
    route: "most-popular",
  },
  {
    name: "Trending Now",
    route: "trending-now",
  },
];
