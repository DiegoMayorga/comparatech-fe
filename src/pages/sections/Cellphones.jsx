import ProductFilter from "../../components/product-filter/ProductFilter";
import Search from "../../components/search/Search";
import FilterBy from "../../components/filter-by/FilterBy";
import CardPost from "../../components/card-post/CardPost";
import "../../styles/pages/sections/sections.css";
import { validateRoleFromToken } from "../../utilities/jwt-utilities.js";
import { useState } from "react";
import { useEffect } from "react";

const Cellphones = () => {
  const [products, setProducts] = useState([]);

  validateRoleFromToken("CLIENTE");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pResponse = await fetch(
          "http://ec2-54-158-4-132.compute-1.amazonaws.com:8080/umb/v1/product/find-by-category?category_name=smartphone&skip=0&limit=20",
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to only run once on mount

  return (
    <>
      <Search />
      <ProductFilter />
      <div className="center">
        <div className="or">Celulares</div>
        <div className="line" />
      </div>
      <div className="cellphones">
        <FilterBy />
        <div className="cellphone-cards">
          {products.map((post) => (
            <CardPost key={post._id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cellphones;
