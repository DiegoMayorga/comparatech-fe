import { Link } from "react-router-dom";
import "../../styles/components/footer/footer.css"

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
