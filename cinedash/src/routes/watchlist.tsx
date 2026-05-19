import { createFileRoute } from '@tanstack/react-router'
import { WatchListPage } from '../pages/watchlist'

export const Route = createFileRoute('/watchlist')({
  component: RouteComponent,
})

function RouteComponent() {
  return <WatchListPage></WatchListPage>
}
