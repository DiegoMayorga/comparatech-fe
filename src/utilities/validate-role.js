export function validateRole(role){
    const userRole = localStorage.getItem("userRole");
    return role === userRole;
}