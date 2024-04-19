import CardPost from "../../components/card-post/CardPost";
import {
  extractEmailFromToken,
  validateTokenWithRole,
} from "../../utilities/jwt-utilities";
import { useEffect, useState } from "react";

const CustomerHistory = () => {
  const [history, setHistory] = useState([]);

  validateTokenWithRole("CLIENTE");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hResponse = await fetch(
          "http://ec2-54-158-4-132.compute-1.amazonaws.com:8080/umb/v1/user/search-history",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        if (hResponse.status === 403) {
          window.location.href = "/login";
        } else if (!hResponse.ok) {
          alert("Hubo un error al recuperar los datos");
          return;
        }

        const historyData = await hResponse.json();
        setHistory(historyData.productos);
      } catch (error) {
        alert("Hubo un error al recuperar los datos");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="homepage">
      <div className="center">
        <div className="or">Mi historial</div>
        <div className="line" />
      </div>
      <div className="home">
        {history.map((post) => (
          <CardPost key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default CustomerHistory;
