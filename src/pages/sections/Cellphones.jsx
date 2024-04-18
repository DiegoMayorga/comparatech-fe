import ProductFilter from "../../components/product-filter/ProductFilter";
import Search from "../../components/search/Search";
import FilterBy from "../../components/filter-by/FilterBy";
import CardPost from "../../components/card-post/CardPost";
import "../../styles/pages/sections/sections.css";
import { validateTokenWithRole } from "../../utilities/jwt-utilities.js";
import { useState, useEffect } from "react";

const Cellphones = () => {
  let filterOption = 0;
  const [filter, setFilter] = useState({});
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 6;

  validateTokenWithRole("CLIENTE");

  // Función para recibir los datos filtrados del componente de filtro
  const handleFilteredData = (data) => {
    filterOption = data.filterOption;
    setFilter(data.filter);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        var totalProducts = 0;
        const skip = (currentPage - 1) * itemsPerPage;
        if (filterOption === 0) {
          const pResponse = await fetch(
            `http://ec2-54-158-4-132.compute-1.amazonaws.com:8080/umb/v1/product/find-by-category?category_name=smartphone&skip=${skip}&limit=${itemsPerPage}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );

          if (!pResponse.ok) {
            alert("Hubo un error al recuperar los datos");
            return;
          }

          const productsData = await pResponse.json();
          totalProducts = productsData.totalProductos;
          setProducts(productsData.productos);
        }
        if (filterOption === 1) {
          const pResponse = await fetch(
            `http://ec2-54-158-4-132.compute-1.amazonaws.com:8080/umb/v1/product/find-by-ram-memory?ram_memory=${filter.selectedRAM}&category_name=smartphone&skip=${skip}&limit=${itemsPerPage}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );

          if (!pResponse.ok) {
            alert("Hubo un error al recuperar los datos");
            return;
          }

          const productsData = await pResponse.json();
          totalProducts = productsData.totalProductos;
          setProducts(productsData.productos);
        }
        if (filterOption === 2) {
          const pResponse = await fetch(
            `http://ec2-54-158-4-132.compute-1.amazonaws.com:8080/umb/v1/product/find-by-storage-capacity?storage_capacity=${filter.selectedDisco}&category_name=smartphone&skip=${skip}&limit=${itemsPerPage}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );

          if (!pResponse.ok) {
            alert("Hubo un error al recuperar los datos");
            return;
          }

          const productsData = await pResponse.json();
          totalProducts = productsData.totalProductos;
          setProducts(productsData.productos);
        }
        if (filterOption === 3) {
          const pResponse = await fetch(
            `http://ec2-54-158-4-132.compute-1.amazonaws.com:8080/umb/v1/product/find-by-price-range?min_price=${filter.min}&max_price=${filter.max}&category_name=smartphone&skip=${skip}&limit=${itemsPerPage}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );

          if (!pResponse.ok) {
            alert("Hubo un error al recuperar los datos");
            return;
          }

          const productsData = await pResponse.json();
          totalProducts = productsData.totalProductos;
          setProducts(productsData.productos);
        }

        const calculatedTotalPages = Math.ceil(totalProducts / itemsPerPage);
        setTotalPages(Math.max(calculatedTotalPages, 1));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    const totalPagesToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(totalPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + totalPagesToShow - 1);

    if (endPage - startPage < totalPagesToShow - 1) {
      startPage = Math.max(1, endPage - totalPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <>
      <Search />
      <ProductFilter />
      <div className="center">
        <div className="or">Celulares</div>
        <div className="line" />
      </div>
      <div className="devices">
        <FilterBy onFilteredData={handleFilteredData} />
        <div className="devices-cards">
          {products.map((post) => (
            <CardPost key={post._id} post={post} />
          ))}
        </div>
      </div>
      <div className="pagination">
        <button onClick={goToFirstPage} disabled={currentPage === 1}>
          {"<<"}
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {renderPageButtons()}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
        <button onClick={goToLastPage} disabled={currentPage === totalPages}>
          {">>"}
        </button>
      </div>
    </>
  );
};

export default Cellphones;
