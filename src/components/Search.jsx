const handleSearch = () =>{"    "}

const Search = () => {
  return (
    <>
      <form className="search" onSubmit={handleSearch}>
        <input className="search-input"
          type="text"
          placeholder="Buscar producto tecnológico..."
        />
      </form>
    </>
  );
};

export default Search;
