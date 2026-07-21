import { useState } from "react";

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
