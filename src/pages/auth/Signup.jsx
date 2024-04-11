import { useState } from "react";
import Button from "../../atoms/button/Button";
import "../../styles/pages/auth/signup.css"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    console.log("This is signup button.");
    e.preventDefault();
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, confirmPassword }),
      });

      if (response.ok) {
        //Aquí redirigir cuando ya logremos tener el usuario y contraseña
        window.location.href = "/home"; // Es con el <Link> pero hay que hacerlo desde la vista que es.
        alert("Usuario creado exitosamente.");
      } else {
        // El inicio de sesión falló, muestra un mensaje de error al usuario
        alert("Registro fallido.");
      }
    } catch (error) {
      console.error("Error al crear usuario:", error);
      alert(
        "Hubo un problema al iniciar sesión. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <div className="signup">
      <h1 className="title">Crea una cuenta</h1>
      <div className="wrapper">
        <form className="signup-form" onSubmit={handleSignup}>
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
          <label className="label">Confirmar contraseña</label>
          <input
            type="password"
            value={confirmPassword}
            name="confirm-password"
            placeholder="Repite tu contraseña"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button
            className="button login-sign-up"
            text="Registrarse"
            margin={"10px 0"}
            height={"50px"}
            width={"244px"}
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
