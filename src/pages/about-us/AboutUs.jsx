import "../../styles/pages/about-us/about-us.css"
import {validateExpirationToken, validateRoleFromToken} from "../../utilities/jwt-utilities";

const AboutUs = () => {

    validateRoleFromToken("CLIENTE");
    validateExpirationToken();

    return (
        <>
            <br/>
            <div className="center">
                <div className="or">Acerca de nosotros</div>
                <div className="line"/>
            </div>
            <div className="aboutus-content">
                <div className="about-us">
                    Somos un grupo de estudiantes de ingeniería de software quienes
                    ofrecemos una aplicación cuyo objetivo es el desarrollo de una
                    aplicación web con inteligencia artificial que permite realizar la
                    comparación de productos tecnológicos utilizando plataformas
                    e-commerce.
                </div>
            </div>
        </>
    );
};

export default AboutUs;
