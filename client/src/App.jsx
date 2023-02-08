import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const [count, setCount] = useState(0);

  const currentUser = false;

  const Layout = () => {
    return (
      <div>
        <Sidebar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/reset-password",
      element: <Reset />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
