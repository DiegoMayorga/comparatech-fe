import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  /* const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  }; */

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