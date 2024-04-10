import { useState } from "react";
import Check from "../img/check.png";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);

    const handleForgotPassword = async (e) => {
        console.log("this is the forgot password button");

        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/umb/v1/user/forgot-password?correoElectronico=${email}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                console.log("correo enviado");
                setEmailSent(true);
            } else {
                console.log("error al enviar el correo de recuperación")
            }
        } catch (error) {
            console.error("Error al crear usuario:", error);
            alert(
                "Hubo un problema al iniciar sesión. Por favor, inténtalo de nuevo más tarde."
            );
        }
    }

    return (
        <div>
            {!emailSent ?
                <div className="forgot-password">
                    <h1 className="title">¿Tienes problemas para ingresar?</h1>
                    <p className="forgot-password-text">Introduce tu correo electrónico y te enviarmos un enlace para restablecer tu contraseña.</p>
                    <div className="forgot-password-wrapper">
                        <div className="right">
                            <form className="forgot-password-form" onSubmit={handleForgotPassword}>
                                <label className="label">Correo electrónico</label>
                                <input
                                    type="email"
                                    value={email}
                                    name="email"
                                    placeholder="Correo electrónico"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button className="button submit-forgot-password">Enviar correo de restauración</button>
                            </form>
                        </div>
                    </div>
                </div>
                : <div className="forgot-password">
                    <img src={Check} alt="" className="mail-send-check-img" />
                    <h1 className="title">Correo electrónico enviado</h1>
                    <p className="forgot-password-text">Hemos enviado un correo electronico al correo especificado con un enlace 
                        para que restablezca su contraseña.</p> 
                </div>
            }
        </div>
    )
}

export default ForgotPassword;
