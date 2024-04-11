import { useState } from "react";
import { extractEmailFromToken } from "../../utilities/jwt-utilities.js";
import Check from "../../assest/check.png";
import Input from "../../atoms/input/Input.jsx";
import "../../styles/pages/auth/restart-password.css";
import Button from "../../atoms/button/Button.jsx";

const RestartPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [noCoincidence, setNoCoincidence] = useState(false);
  const [passwordChange, setPasswordChange] = useState(false);

  const handleRestarPassword = async (e) => {
    e.preventDefault();

    const queryString = window.location.search;

    const params = new URLSearchParams(queryString);

    const token = params.get("token");

    const pqrsId = params.get("pqrsId");

    if (password !== confirmPassword) {
      setNoCoincidence(true);
    } else {
      setNoCoincidence(false);
    }

    const email = extractEmailFromToken(token);

    fetch(
      "http://ec2-54-158-4-132.compute-1.amazonaws.com:8080/umb/v1/user/reset-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correoElectronico: email,
          contrasena: password,
          confirmContrasena: confirmPassword,
          token: token,
          pqrsId: pqrsId,
        }),
      }
    ).then((response) => {
      if (response.ok) {
        setPasswordChange(true);
      }
    });
  };

  return (
    <div>
      {!passwordChange ? (
        <div className="restart-password">
          <h1 className="title">Reiniciar contraseña</h1>
          <div className="restart-password-wrapper">
            <div className="right">
              <form
                className="restart-password-form"
                onSubmit={handleRestarPassword}
              >
                <Input
                  type="password"
                  value={password}
                  name="password"
                  placeholder="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                  margin={"20px 0"}
                  required
                />
                <Input
                  type="password"
                  value={confirmPassword}
                  name="confirmPassword"
                  placeholder="Confirmar contraseña"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  margin={"0 0 20px 0"}
                  required
                />
                {!noCoincidence ? (
                  <p></p>
                ) : (
                  <p className="no-coincidence-error-text">
                    Las contraseñas no coinciden.
                  </p>
                )}
                <Button
                  className="button submit-restart-password"
                  text="Reiniciar contraseña"
                  width={"100%"}
                  margin={"0 0 20px 0"}
                />
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="restart-password">
          <img src={Check} alt="" className="mail-send-check-img" />
          <h1 className="title">Contraseña actualizada</h1>
          <p className="restart-password-text">
            La contraseña fue actualizada con exito.
          </p>
        </div>
      )}
    </div>
  );
};

export default RestartPassword;