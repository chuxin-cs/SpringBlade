import ReactDOM from "react-dom/client";
import { Suspense, LazyExoticComponent, lazy } from "react";
import {
  createHashRouter, //  hash 模式
  // createBrowserRouter,// history 模式
  RouterProvider, //
  Link, // 路由跳转
} from "react-router-dom";

interface ILazyImportComponent {
  lazyChildren: LazyExoticComponent<() => JSX.Element>;
}
const LazyImportComponent = (props: ILazyImportComponent) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <props.lazyChildren />
    </Suspense>
  );
};

function Router() {
  const router = createHashRouter([
    {
      path: "/",
      element: (
        <>
          home <Link to="about">go to about</Link>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          about<Link to="/">go to home</Link>
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <LazyImportComponent
          lazyChildren={lazy(() => import("@/pages/Login/index.tsx"))}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Router />
  </>
);
