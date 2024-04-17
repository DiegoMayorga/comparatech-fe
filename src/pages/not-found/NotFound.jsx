import {validateExpirationToken, validateRoleFromToken} from "../../utilities/jwt-utilities";

const NotFound = () => {

    validateRoleFromToken("CLIENTE");
    validateExpirationToken();

    return (
        <>
            <div className="not-found-container">
                <h1>404</h1>
                <h2>Resource Not Found</h2>
            </div>
        </>
    );
}

export default NotFound;