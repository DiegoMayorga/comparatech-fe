import {Link} from "react-router-dom";
import "../../styles/components/footer/footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <Link className="link" to="/about-us">
                Sobre nosotros
            </Link>
            <p> | </p>
            <Link className="link" to="/complaint-box">
                Buzón de quejas
            </Link>
        </div>
    );
};

export default Footer;
