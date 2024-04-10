import { jwtDecode } from "jwt-decode";

export function validateRoleFromToken(role) {
  const token = localStorage.getItem("token");

  const userRole = jwtDecode(token).ROLE;

  if (!(role === userRole)) {
    if (role === "CLIENTE") {
      window.location.href = "/admin-home";
    } else if (role === "ADMIN") {
      window.location.href = "/home";
    }
  }
}
