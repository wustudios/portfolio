import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mission from './Mission'
import ContactForm from './ContactForm'

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
