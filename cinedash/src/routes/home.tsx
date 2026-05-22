import { createFileRoute, redirect } from "@tanstack/react-router";
import { HomePage } from "../pages/home";
import { useAuthStore } from "../stores/auth/use-auth-store";

export const Route = createFileRoute("/home")({
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated;

    if (!isAuthenticated) {
      throw redirect({
        to: "/redirect",
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <HomePage />;
}
