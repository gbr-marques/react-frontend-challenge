import { createFileRoute } from '@tanstack/react-router'
import HomePage from '../pages/home/ui/home-page'

export const Route = createFileRoute('/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return <HomePage />
}
