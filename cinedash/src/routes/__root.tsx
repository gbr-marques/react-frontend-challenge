import * as React from "react";
import {
  Outlet,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import Header from "../widgets/header";
import Footer from "../widgets/footer";
import { useAuthStore } from "../stores/auth/use-auth-store";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const { isAuthenticated } = useAuthStore();

  const isPublicRoute = ["/", "/redirect"].includes(pathname);

  console.log(isPublicRoute);

  return (
    <React.Fragment>
      {isAuthenticated && !isPublicRoute && <Header />}
      <Outlet />
      {isAuthenticated && !isPublicRoute && <Footer />}
    </React.Fragment>
  );
}
