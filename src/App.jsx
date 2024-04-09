import Navbar from "./components/Navbar";
import "./styles/app.css"
import "./assest/check.png";
import Home from "./pages/home/Home";
import Post from "./pages/posts/Post";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SignUp from "./pages/auth/Signup";
import Cellphones from "./pages/sections/Cellphones";
import Others from "./pages/sections/Others";
import Computers from "./pages/sections/Computers";
import Footer from "./components/Footer";
import AboutUs from "./pages/about-us/AboutUs";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <SignUp />}
          />
          <Route
            path="/forgot-password"
            element={user ? <Navigate to="/" /> : <ForgotPassword />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
          <Route
            path="/cellphones"
            element={user ? <Cellphones /> : <Navigate to="/login" />}
          />
          <Route
            path="/computers"
            element={user ? <Computers /> : <Navigate to="/login" />}
          />
          <Route
            path="/others"
            element={user ? <Others /> : <Navigate to="/login" />}
          />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
