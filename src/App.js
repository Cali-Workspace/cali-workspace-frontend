import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Footer = React.lazy(() => import("./footer/Footer"));
const Header = React.lazy(() => import("./header/Header"));
const Home = React.lazy(() => import("./home/Home"));
const Login = React.lazy(() => import("./auth/Login"));
const Register = React.lazy(() => import("./auth/Register"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
