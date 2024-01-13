import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Logout } from "./pages/Logout/Logout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";

function App() {
  const [cookies] = useCookies(["authData"]);
  const { authData } = cookies;

  const commonRoutes = [
    {
      path: "/logout",
      element: <Logout />,
    },
  ];

  const router = createBrowserRouter(
    [...commonRoutes].concat(
      authData?.token
        ? [
            {
              path: "/dashboard",
              element: <Dashboard />,
            },
          ]
        : [
            {
              path: "/login",
              element: <Home />,
            },
          ],
    ),
  );

  return (
    <>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  );
}

export default App;
