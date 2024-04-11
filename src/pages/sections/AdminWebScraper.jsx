import AdminMenu from "../../components/admin-menu/AdminMenu";
import { validateRoleFromToken } from "../../utilities/jwt-utilities.js";

const AdminWebScraper = () => {

    validateRoleFromToken("ADMIN");

    return (
        <>
            <AdminMenu />
            <h1>Web Scraper</h1>
        </>
    );
}

export default AdminWebScraper;