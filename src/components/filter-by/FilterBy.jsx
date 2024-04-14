import Button from "../../atoms/button/Button";
import Card from "../../molecules/card/Card";

const FilterBy = () => {
  return (
    <Card margin={"50px 0 0 100px"} width={"30%"} padding={"30px"}>
      <form>
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
          <input type="radio"/>
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
        <Button text="Filtrar" width={"100%"} />
      </form>
    </Card>
  );
};

export default FilterBy;
