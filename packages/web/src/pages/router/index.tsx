import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './routes.enum'
import { Home } from '@pages/home/home.page'
import { About } from '@pages/about/about.page'

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.ABOUT,
    element: <About />,
  },
])

export default router
