import { RouteType } from "../components/types/routetype";

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
    name: "Keep Watching",
    route: "keep-watching",
  },
  {
    name: "Recommended For You",
    route: "recommended-for-you",
  },
  {
    name: "Trending Now",
    route: "trending-now",
  },
];
