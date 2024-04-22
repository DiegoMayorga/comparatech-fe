import { Link } from "react-router-dom";
import "../../styles/components/footer/footer.css";
import { useState } from "react";

const Footer = () => {
  const [isAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") || false
  );

  return (
    <div className="footer">
      <Link className="link footer-link" to="/about-us">
        Sobre nosotros
      </Link>
      {isAuthenticated ? (
        <>
          <p>| </p>
          <Link className="link footer-link" to="/complaint-box">
            Buzón de quejas
          </Link>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Footer;
