import { validateRoleFromToken } from '../utilities/validate-role.js';

const AdminHome = () => {

  validateRoleFromToken("ADMIN")

  return (
    <div className="homepage">
      <h1>Admin page</h1>
    </div>
  );
};

export default AdminHome;
