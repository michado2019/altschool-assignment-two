import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import SignUpPage from "../pages/signUpPage/SignUpPage";
import ErrorPage from "../pages/errorPage/ErrorPage";

let Home = React.lazy(() => import("../pages/home/Home"));
export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
