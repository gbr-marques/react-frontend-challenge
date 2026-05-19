import { createFileRoute } from '@tanstack/react-router'
import { DetailsPage } from '../pages/details'

export const Route = createFileRoute('/details')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DetailsPage></DetailsPage>
}
