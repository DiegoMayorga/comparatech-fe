import "../../styles/components/search/search.css";
import {useState} from "react";

const Search = () => {

    const [search, setSearch] = useState("")

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

/* import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        <i className="fas fa-search search-icon"></i>}
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
 */
