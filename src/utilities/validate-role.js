import { jwtDecode } from "jwt-decode";

export function validateRoleFromToken(role) {
    const token = localStorage.getItem("token");

    const userRole = jwtDecode(token).ROLE
    return role === userRole;
}