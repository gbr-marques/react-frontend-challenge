import * as React from "react";
import { Outlet, createRootRoute, useRouterState } from "@tanstack/react-router";
import Header from "../widgets/header";
import Footer from "../widgets/footer";

export const Route = createRootRoute({
  component: RootComponent,
});



function RootComponent() {
  const pathname = useRouterState({
  select: (state) => state.location.pathname,
})
  return (
    <React.Fragment>
      {pathname !== '/' && <Header />}
      <Outlet />
      {pathname !== '/' && <Footer />}
    </React.Fragment>
  );
}
