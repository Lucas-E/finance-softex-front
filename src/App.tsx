import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('./pages/Home/Home'))
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'))

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/dashboard',
      element: <Dashboard/>
    }
  ])

  return (
    <>
      <ChakraProvider>
        <RouterProvider router={router}/>
      </ChakraProvider>
    </>
  )
}

export default App
