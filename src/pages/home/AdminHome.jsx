import { validateRoleFromToken } from "../../utilities/jwt-utilities.js";

const AdminHome = () => {
  validateRoleFromToken("ADMIN");

  return (
    <div className="homepage">
      <h1>Admin page</h1>
    </div>
  );
};

export default AdminHome;
