import { lazy } from "react";
import LayoutIndex from "@/layouts";
import { RouteObject } from "react-router-dom";

const routesHooks: RouteObject[] = [
  {
    path: "/hooks",
    element: <LayoutIndex />,
    children: [
      {
        path: "useState",
        Component: lazy(() => import("@/pages/UseState/index")),
      },
    ],
  },
];

export default routesHooks;
