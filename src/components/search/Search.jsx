import "../../styles/components/search/search.css";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    window.location.href = `/search?search=${search}`;
  };

  return (
    <>
      <form className="search" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          placeholder="Buscar producto tecnológico..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </>
  );
};

export default Search;
