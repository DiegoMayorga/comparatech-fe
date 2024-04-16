import React from "react";
import "../../styles/components/profile-modal/profile-modal.css";

const ProfileModal = ({ user, onClose }) => {
  const handleCloseModal = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleCloseModal}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Información del usuario</h2>
        <p>Nombre: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default ProfileModal;
