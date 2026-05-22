import { createFileRoute, redirect } from "@tanstack/react-router";
import { WatchListPage } from "../pages/watchlist";
import { useAuthStore } from "../stores/auth/use-auth-store";

export const Route = createFileRoute("/watchlist")({
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
  return <WatchListPage></WatchListPage>;
}
