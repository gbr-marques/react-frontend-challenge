import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../widgets/header";
import Footer from "../widgets/footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </React.Fragment>
  );
}
