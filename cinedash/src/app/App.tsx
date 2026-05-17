import { createRouter, RouterProvider } from '@tanstack/react-router'
import { useState } from 'react'
import { routeTree } from '../routeTree.gen'

const router = createRouter({ routeTree })

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
