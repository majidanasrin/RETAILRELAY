import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../pages/signup"; 
import SigninSupplier from "../pages/SigninSupplier";
import ForgotPassword from "../pages/ForgotPassword"; 

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/Signin-Supplier" element={<SigninSupplier/>} />
      <Route path="/Forgot-Password" element={<ForgotPassword/>} />
    </Routes>
  );
}

export default AppRoutes;