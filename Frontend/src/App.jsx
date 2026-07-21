import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import router from "./Routes";
import { RouterProvider } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <RouterProvider router={router}></RouterProvider>
    </CookiesProvider>
  );
}

export default App;
