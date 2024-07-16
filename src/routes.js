import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { NewMeetupsPage, FavoritesPage, AllMeetupsPage } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AllMeetupsPage />
      },
      {
        path: '/favorites',
        element: <FavoritesPage />
      },
      {
        path: '/new-meetup',
        element: <NewMeetupsPage />
      }
    ]
  }
])

export default router
