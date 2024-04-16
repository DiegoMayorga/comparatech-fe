import {validateExpirationToken, validateRoleFromToken} from "../../utilities/jwt-utilities";

const NotFound = () => {

    validateRoleFromToken("CLIENTE");
    validateExpirationToken();

    return (
        <h1>Resource Not Found</h1>
    );
}

export default NotFound;