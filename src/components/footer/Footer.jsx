import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link className="link" to="/aboutus">
        Sobre nosotros
      </Link>
    </div>
  );
};

export default Footer;
