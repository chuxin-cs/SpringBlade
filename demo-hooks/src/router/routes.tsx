import routesHooks from "./modules/hooks";
import { RouteObject } from "react-router-dom";

const routesList: RouteObject[] = [
  {
    path: "/",
    element: <>hooks</>,
  },
  ...routesHooks,
];

export default routesList;
