import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Profile from "./pages/Profile";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path=":id" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="profile" element={<Layout />}>
          <Route path=":id" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
