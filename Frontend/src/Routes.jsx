import { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import RootLayout from "./layouts/RootLayout";
import Register from "./Pages/Authentication/Register/Register";

//https://reactrouter.com/start/modes#data
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/register", Component: Register },
    ],
  },
]);

export default router;
