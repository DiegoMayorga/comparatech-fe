import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
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
              <img src={user.photos[0].value} alt="" className="avatar" />
            </li>
            <li className="listItem">{user.displayName}</li>
            <li className="listItem" onClick={logout}>
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
