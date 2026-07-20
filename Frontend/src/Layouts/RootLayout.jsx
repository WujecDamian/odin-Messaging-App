import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

function RootLayout() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default RootLayout;
