import { createFileRoute, redirect } from "@tanstack/react-router";
import { DiscoverPage } from "../pages/discover";
import { useAuthStore } from "../stores/auth/use-auth-store";

export const Route = createFileRoute("/discover")({
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
  return <DiscoverPage />;
}
