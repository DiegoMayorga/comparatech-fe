import { Link } from "react-router-dom";
import "../../styles/components/navbar/navbar.css"

const Navbar = ({ user }) => {

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    window.location.href = "/login";
  };
  
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link comparatech" to="/">
          Comparatech
        </Link>
      </span>
      <div>
        {user ? (
          <ul className="list">
            <li className="listItem">
              <p>Mi cuenta</p>
            </li>
            <li className="listItem" onClick={handleLogout}>
              Cerrar sesión
            </li>
          </ul>
        ) : (
          ( <>
            <Link className="link link--login" to="login">
              Iniciar sesión
            </Link>
            <Link className="link link--signup" to="signup">
              Registrarse
            </Link>
          </>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;