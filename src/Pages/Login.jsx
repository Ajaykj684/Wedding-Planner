import React from "react";
import LoginPage from "../Components/LoginRegister/Login";
import Navbar from "../Components/HomePage/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <LoginPage />
    </>
  );
}

export default Login;

// import { motion } from "framer-motion";
// <motion.div
// className="container text-center  bg-black"
// initial={{ opacity: 0 }}
// animate={{ opacity: 1 }}
// exit={{ opacity: 0 }}
// transition={{ duration: 3 }}
// >
// </motion.div>
