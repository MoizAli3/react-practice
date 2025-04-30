import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
