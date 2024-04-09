import { useState } from "react";
import Google from "../img/google.png";

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        //Aquí redirigir cuando ya logremos tener el usuario y contraseña
        window.location.href = "/home"; // Es con el <Link> pero hay que hacerlo desde la vista que es.
      } else {
        // El inicio de sesión falló, muestra un mensaje de error al usuario
        alert("Inicio de sesión fallido. Verifica tus credenciales.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert(
        "Hubo un problema al iniciar sesión. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <div className="login">
      <h1 className="title">Inicia sesión</h1>
      <div className="wrapper">
        <div className="right">
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              name="email"
              placeholder="Correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              value={password}
              name="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="button submit">Iniciar sesión</button>
          </form>
          <a href="http://localhost:3000/signup">
            <button className="button login-sign-up">Registrarse</button>
          </a>
          <p>o</p>
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Ingresa con Google
          </div>
          <a href="http://localhost:3000/forgot-password">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
