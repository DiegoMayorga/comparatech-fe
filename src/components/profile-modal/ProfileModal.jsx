import { useEffect, useState } from "react";
import "../../styles/components/profile-modal/profile-modal.css";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import { Link } from "react-router-dom";
import {
  extractEmailFromToken,
  validateTokenWithRole,
} from "../../utilities/jwt-utilities";

const ProfileModal = ({ onClose }) => {
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [cUser, setCUser] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState(false);

  const token = localStorage.getItem("token");
  const email = extractEmailFromToken(token);

  validateTokenWithRole("CLIENTE");

  const handleCloseModal = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  const handleToggleChangePassword = () => {
    setIsChangePasswordOpen(!isChangePasswordOpen);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    }

    try {
      const uResponse = await fetch(
        `http://ec2-54-158-4-132.compute-1.amazonaws.com:8080/umb/v1/user/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            correoElectronico: email,
            contrasena: oldPassword,
            confirmContrasena: confirmPassword,
            token: token,
            pqrsId: 4,
          }),
        }
      );

      if (uResponse.status === 403) {
        window.location.href = "/login";
      } else if (!uResponse.ok) {
        alert("Hubo un error al Cambiar la contraseña");
        return;
      }

      setTimeout(() => {
        setPasswordChangeSuccess(true);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }, 1000);
    } catch (error) {
      alert("Hubo  un error al Cambiar la contraseña");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const uResponse = await fetch(
          `http://ec2-54-158-4-132.compute-1.amazonaws.com:8080/umb/v1/user/find-by-email?correoElectronico=${email}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        if (uResponse.status === 403) {
          window.location.href = "/login";
        } else if (!uResponse.ok) {
          alert("Hubo un error al recuperar los datos");
          return;
        }

        const userData = await uResponse.json();
        setCUser(userData.user);
      } catch (error) {
        alert("Hubo  un error al recuperar los datos");
      }
    };

    fetchData();
  }, [email]);

  return (
    <div className="modal" onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Información del usuario</h2>
        <p>Nombre: {cUser.nombreCompleto}</p>
        <p>Email: {cUser.correoElectronico}</p>
        <Link className="modal-link" to="/my-history" onClick={onClose}>
          <p>Mi historial</p>
        </Link>
        <Link className="modal-link" to="/my-requests" onClick={onClose}>
          <p>Mis solicitudes</p>
        </Link>
        <div className="accordion">
          <Button
            width={"90%"}
            onClick={handleToggleChangePassword}
            margin={"20px"}
            text={isChangePasswordOpen ? "Cerrar" : "Cambiar contraseña"}
          />
          {isChangePasswordOpen && (
            <div className="password-form">
              <form onSubmit={handleChangePassword}>
                <Input
                  type="password"
                  width={"80%"}
                  margin={"10px 20px"}
                  placeholder="Contraseña actual"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
                <Input
                  type="password"
                  width={"80%"}
                  margin={"10px 20px"}
                  placeholder="Nueva contraseña"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <Input
                  type="password"
                  width={"80%"}
                  margin={"10px 20px"}
                  placeholder="Confirmar nueva contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {passwordMismatch && (
                  <p className="error-message">Las contraseñas no coinciden.</p>
                )}
                {passwordChangeSuccess && (
                  <p className="success-message">
                    ¡La contraseña se cambió con éxito!
                  </p>
                )}
                <Button
                  onClick={handleChangePassword}
                  text="Cambiar contraseña"
                  backgroundColor={"green"}
                  margin={"20px"}
                  width={"90%"}
                />
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
