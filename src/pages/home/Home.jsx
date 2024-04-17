import CardPost from "../../components/card-post/CardPost";
import ProductFilter from "../../components/product-filter/ProductFilter";
import Search from "../../components/search/Search";
import {
  validateExpirationToken,
  validateRoleFromToken,
} from "../../utilities/jwt-utilities.js";
import "../../styles/pages/home/home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [history, setHistory] = useState([]);

  validateRoleFromToken("CLIENTE");
  validateExpirationToken();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pResponse = await fetch(
          "http://ec2-54-158-4-132.compute-1.amazonaws.com:8080/umb/v1/product/find-most-viewed",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        if (!pResponse.ok) {
          alert("Hubo  un error al recuperar los datos");
          return;
        }

        const productsData = await pResponse.json();
        setProducts(productsData.productos);

        const hResponse = await fetch(
          "http://ec2-54-158-4-132.compute-1.amazonaws.com:8080/umb/v1/user/viewed-products",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        if (!hResponse.ok) {
          alert("Hubo  un error al recuperar los datos");
          return;
        }

        const historyData = await hResponse.json();
        setHistory(historyData.productos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to only run once on mount

  return (
    <div className="homepage">
      <Search />
      <ProductFilter />
      <div className="center">
        <div className="or">Productos más vistos</div>
        <div className="line" />
      </div>

      <div className="home">
        {products.map((post) => (
          <CardPost key={post._id} post={post} />
        ))}
      </div>
      <div className="center">
        <div className="or">Tus últimas visualizaciones</div>
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

export default Home;
