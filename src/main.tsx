import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RandomColorGenerator from "./challenges/RandomColorGenerator.tsx";
import UsingProps from "./challenges/UsingProps.tsx";
import CardList from "./challenges/CardList.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />, //Add Layout component here
    children: [
      { index: true, element: <App /> },
      {
        path: "/random-color-generator",
        element: <RandomColorGenerator />,
      },
      {
        path: "/using-props",
        element: <UsingProps />,
      },
      {
        path: "/card",
        element: <CardList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
