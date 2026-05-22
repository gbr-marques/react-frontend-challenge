import { createRouter, RouterProvider } from "@tanstack/react-router";
import { useState } from "react";
import { routeTree } from "../routeTree.gen";
import { Toaster } from "../components/ui/sonner";

const router = createRouter({ routeTree });

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
