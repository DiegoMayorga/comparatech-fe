import "../../styles/components/search/search.css";
import { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchProducts, setSearchProducts] = useState("");

  const handleInputChange = (event) => {
    setSearchProducts(event.target.value);
  };

  const handleSearch = () => {
    if (searchProducts.trim() !== "") {
      onSearch(searchProducts);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <form className="search" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          placeholder="Buscar producto tecnológico..."
          value={searchProducts}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch} className="search-button">
          <i className="fas fa-search search-icon"></i> Buscar
        </button>
      </form>
    </>
  );
};

export default Search;

/*
      <button onClick={handleSearch} className="search-button">
        <i className="fas fa-search search-icon"></i>}
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
 */
