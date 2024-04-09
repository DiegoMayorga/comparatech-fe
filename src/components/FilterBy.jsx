import Button from "../atoms/Button";

const FilterBy = () => {
  return (
    <form className="filter-by">
      <p>Filtrar por:</p>
      <br />
      <p>
        <b>RAM</b>
      </p>
      <br />
      <div className="form-check">
        <input type="radio" />
        <label>4</label>
      </div>
      <div className="form-check">
        <input type="radio" />
        <label>6</label>
      </div>
      <div className="form-check">
        <input type="radio" />
        <label>8</label>
      </div>
      <div className="form-check">
        <input type="radio" />
        <label>12</label>
      </div>
      <div className="form-check">
        <input type="radio" />
        <label>16</label>
      </div>
      <br />
      <p>
        <b>Disco</b>
      </p>
      <br />
      <div className="form-check">
        <input type="radio" />
        <label>64</label>
      </div>
      <div className="form-check">
        <input type="radio" checked />
        <label>128</label>
      </div>
      <div className="form-check">
        <input type="radio" />
        <label>256</label>
      </div>
      <div className="form-check">
        <input type="radio" />
        <label>512</label>
      </div>
      <br />
      <Button text="Filtrar" width={"150px"}/>
    </form>
  );
};

export default FilterBy;
