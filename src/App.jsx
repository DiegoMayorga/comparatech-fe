import Navbar from "./components//navbar/Navbar";
import "./styles/app.css";
import "./styles/components/admin-menu.css";
import "./styles/sections/admin-web-scraper.css";
import "./styles/sections/admin-pqrs.css";
import "./styles/pages/auth/restart-password.css";
import "./assest/check.png";
import Home from "./pages/home/Home";
import Post from "./pages/posts/Post";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import RestartPassword from "./pages/auth/RestartPassword";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/auth/Signup";
import Cellphones from "./pages/sections/Cellphones";
import Others from "./pages/sections/Others";
import Computers from "./pages/sections/Computers";
import AdminWebScraper from "./pages/sections/AdminWebScraper";
import AdminPqrs from "./pages/sections/AdminPqrs";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/about-us/AboutUs";

const App = () => {
  const [isAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") || false
  );

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
            element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/signup"
            element={isAuthenticated ? <Navigate to="/home" /> : <SignUp />}
          />
          <Route
            path="/forgot-password"
            element={isAuthenticated ? <Navigate to="/home" /> : <ForgotPassword />}
          />
          <Route
            path="/reset-password"
            element={isAuthenticated ? <Navigate to="/home" /> : <RestartPassword />}
          />
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/post/:id"
            element={isAuthenticated ? <Post /> : <Navigate to="/home" />}
          />
          <Route
            path="/admin-web-scraper"
            element={isAuthenticated ? <AdminWebScraper /> : <Navigate to="/login" />}
          />
          <Route
            path="/admin-pqrs"
            element={isAuthenticated ? <AdminPqrs /> : <Navigate to="/login" />}
          />
          <Route
            path="/cellphones"
            element={
              isAuthenticated ? <Cellphones /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/computers"
            element={isAuthenticated ? <Computers /> : <Navigate to="/login" />}
          />
          <Route
            path="/others"
            element={isAuthenticated ? <Others /> : <Navigate to="/login" />}
          />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
