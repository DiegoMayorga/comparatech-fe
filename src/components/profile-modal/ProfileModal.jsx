import { useState } from "react";
import "../../styles/components/profile-modal/profile-modal.css";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";

const ProfileModal = ({ user, onClose }) => {
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState(false);

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

    setTimeout(() => {
      setPasswordChangeSuccess(true);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }, 1000);
  };

  return (
    <div className="modal" onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Información del usuario</h2>
        <p>Nombre: {user.name}</p>
        <p>Email: {user.email}</p>
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
