import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mission from './Page/Mission'
import ContactForm from './Page/ContactForm'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mission />,
  },
  {
    path: '/contact',
    element: <ContactForm />,
  },
])

export default function Routes({ children }) {
  return <RouterProvider router={router} />
}
