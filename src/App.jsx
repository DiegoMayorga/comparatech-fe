import Navbar from "./components/Navbar";
import "./App.css";
import "./restar-password.css";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import RestarPassword from "./pages/RestarPassword";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import SignUp from "./pages/Signup";
import AdminHome from "./pages/AdminHome";

const App = () => {
  const [isAuthenticated] = useState(localStorage.getItem("isAuthenticated") || false);

  return (
    <BrowserRouter>
      <div>
        <Navbar user={isAuthenticated} />
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/home" /> : <Login/>}
          />
          <Route
            path="/signup"
            element={isAuthenticated ? <Navigate to="/home" /> : <SignUp/>}
          />
          <Route
            path="/forgot-password"
            element={isAuthenticated ? <Navigate to="/home" /> : <ForgotPassword/>}
          />
          <Route
            path="/reset-password"
            element={isAuthenticated ? <Navigate to="/home" /> : <RestarPassword/>}
          />
          <Route
            path="/home"
            element={isAuthenticated ? <Home/> : <Navigate to="/login" />}
          />
          <Route
            path="/post/:id"
            element={isAuthenticated ? <Navigate to="/home" /> : <Post/>}
          />
          <Route
            path="/admin-home"
            element={isAuthenticated ? <AdminHome/> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
