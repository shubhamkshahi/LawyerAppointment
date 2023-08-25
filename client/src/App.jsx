import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LawyerScreen from "./screens/LawyerScreen";

import {
  HomeLayout,
  Register,
  Login,
  DashboardLayout,
  Landing,
  Error,
  Stats,
  Profile,
  Admin,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },

      {
        path: "register",
        element: <Register />,
      },

      {
        path: "login",
        element: <Login />,
      },
    ],
  }, //delete this

  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
      {
        path: "lawyers",
        element: <HomeScreen />,
      },
      {
        path: "lawyers/:id",
        element: <LawyerScreen />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },

  {
    path: "about",
    element: (
      <div>
        <h1>about</h1>
      </div>
    ),
  },

  //   ]
  // },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
