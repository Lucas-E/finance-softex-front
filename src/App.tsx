import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Logout } from "./pages/Logout/Logout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useState } from "react";
import api from "./utils/services/api";
import ProtectedRoute from "./components/PrivateRoute";

function App() {
  const [cookies] = useCookies(["authData"]);
  const { authData } = cookies;
  const queryClient = new QueryClient();
  const [fetchingAuthData, setFetchingAuthData] = useState(true);

  useEffect(() => {
    if (authData?.token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${authData.token}`;
    }
    setFetchingAuthData(false);
  }, [authData]);

  if (fetchingAuthData) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route path="/login" element={<Home />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
