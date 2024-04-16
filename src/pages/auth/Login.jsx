import { useState } from "react";
import Google from "../../assest/google.png";
import Button from "../../atoms/button/Button";
import "../../styles/pages/auth/login.css";

const Login = () => {
  const google = () => {
    //window.open("http://localhost:5000/auth/google", "_self");
    alert("Esta funcionalidad no está habilitada");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://ec2-54-158-4-132.compute-1.amazonaws.com:8080/umb/v1/auth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            correoElectronico: email,
            contrasena: password,
          }),
        }
      );

      const data = await response.json();

      if (data.message === "BAD_CREDENTIALS") {
        alert("Credenciales incorrectas.");
        return;
      }

      if (!response.ok) {
        alert("Error al iniciar sesión.");
        return;
      }

      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      if (data.rol === "CLIENTE") {
        window.location.href = "/home";
      } else if (data.rol === "ADMIN") {
        window.location.href = "/admin-web-scraper";
      } else {
        alert("Rol desconocido: " + data.rol);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión.");
    }
  };

  return (
    <div className="login">
      <h1 className="title">Inicia sesión</h1>
      <div className="wrapper">
        <div className="right">
          <form className="login-form" onSubmit={handleLogin}>
            <label className="label">Correo electrónico</label>
            <input
              type="email"
              value={email}
              name="email"
              placeholder="Correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="label">Contraseña</label>
            <input
              type="password"
              value={password}
              name="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button text="Iniciar sesión" width={"244px"} />
          </form>
          <a href="http://localhost:3000/signup">
            <Button text="Registrarse" margin={"10px 0 0 0"} width={"244px"} />
          </a>
          <p>o</p>
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Ingresa con Google
          </div>
          <a className="forgot-pw" href="http://localhost:3000/forgot-password">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
