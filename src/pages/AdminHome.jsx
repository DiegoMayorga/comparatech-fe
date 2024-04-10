import { validateRole } from '../utilities/validate-role.js';

const AdminHome = () => {

  if(!validateRole("ADMIN")){
    window.location.href = "/home";
  }

  return (
    <div className="homepage">
      <h1>Admin page</h1>
    </div>
  );
};

export default AdminHome;
