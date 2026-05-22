import { createFileRoute } from '@tanstack/react-router'
import { DetailsPage } from '../../pages/details'

export const Route = createFileRoute('/details/$id')({
  component: DetailsPage,
})