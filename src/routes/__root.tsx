import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="hidden ">
        <Link to="/">Home</Link>
        <Link to="/plans">Planes</Link>
        <Link to="/resume">Resumen</Link>
      </div>
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
