import { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import RootLayout from "./layouts/RootLayout";
import Register from "./Pages/Authentication/Register/Register";
import Login from "./Pages/Authentication/Login/Login";
import Group from "./Pages/Group/Group";
import Profile from "./Pages/Profile/Profile";
import Chat from "./Pages/Chat/Chat";

//https://reactrouter.com/start/modes#data
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/register", Component: Register },
      { path: "/login", Component: Login },
      { path: "/group/:groupId", Component: Group },
      { path: "/profile/:userId", Component: Profile },
      { path: "/chat/:recipientId", Component: Chat },
    ],
  },
]);

export default router;
