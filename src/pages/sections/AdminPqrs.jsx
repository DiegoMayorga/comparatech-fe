import AdminMenu from "../../components/admin-menu/AdminMenu";
import {validateRoleFromToken, validateExpirationToken} from "../../utilities/jwt-utilities.js";
import {useEffect, useState} from "react";
import CardPqrs from "../../components/card-pqrs/CardPqrs";

const AdminPqrs = () => {

    validateRoleFromToken("ADMIN");
    validateExpirationToken();

    const [pqrs, setPqrs] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const pqrsResponse = await fetch(
                    "http://ec2-54-158-4-132.compute-1.amazonaws.com:8080/umb/v1/pqrs/find-all",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + localStorage.getItem("token"),
                        },
                    }
                );

                if (!pqrsResponse.ok) {
                    alert("Hubo  un error al recuperar los datos");
                    return;
                }

                const pqrsData = await pqrsResponse.json();
                setPqrs(pqrsData.pqrs);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <AdminMenu />
            <div className="center">
                <div className="or">PQRS</div>
                <div className="line" />
            </div>

            <div className="home admin-pqrs-container">
                {pqrs.map((item) => (
                    <CardPqrs key={item.id} pqrs={item} />
                ))}
            </div>
        </>
    );
}

export default AdminPqrs;