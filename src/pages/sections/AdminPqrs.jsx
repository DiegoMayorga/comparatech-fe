import AdminMenu from "../../components/admin-menu/AdminMenu";
import { validateRoleFromToken } from "../../utilities/jwt-utilities.js";
import { validateExpirationToken } from "../../utilities/jwt-utilities.js";

const AdminPqrs = () => {

    validateRoleFromToken("ADMIN");
    validateExpirationToken();

    return (
        <>
            <AdminMenu />
            <h1>PQRS</h1>
        </>
    );
}

export default AdminPqrs;