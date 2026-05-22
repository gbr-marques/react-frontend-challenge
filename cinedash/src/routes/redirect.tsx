import { createFileRoute } from "@tanstack/react-router"
import { RedirectPage } from "../pages/redirect"

export const Route = createFileRoute('/redirect')({
  component: RouteComponent,
})

function RouteComponent() {
  return <RedirectPage></RedirectPage>
}
