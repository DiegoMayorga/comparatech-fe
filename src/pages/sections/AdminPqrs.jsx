import AdminMenu from "../../components/admin-menu/AdminMenu";
import { validateRoleFromToken } from "../../utilities/jwt-utilities.js";

const AdminPqrs = () => {

    validateRoleFromToken("ADMIN");

    return (
        <>
            <AdminMenu />
            <h1>PQRS</h1>
        </>
    );
}

export default AdminPqrs;