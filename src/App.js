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
          <Route path="/cali-workspace-frontend" element={<Home />} />
          <Route path="/cali-workspace-frontend/login" element={<Login />} />
          <Route
            path="/cali-workspace-frontend//register"
            element={<Register />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
