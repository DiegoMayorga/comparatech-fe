import Button from "../../atoms/button/Button";
import Card from "../../molecules/card/Card";
import { useState } from "react";

const FilterBy = () => {
  const [selectedRAM, setSelectedRAM] = useState(null);
  const [selectedDisco, setSelectedDisco] = useState(null);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const handleRadioChangeRAM = (value) => {
    if (selectedRAM === value) {
      setSelectedRAM(null);
    } else {
      setSelectedRAM(value);
    }
  };
  const handleRadioChangeDisco = (value) => {
    if (selectedDisco === value) {
      setSelectedDisco(null);
    } else {
      setSelectedDisco(value);
    }
  };

  return (
    <Card
      margin={"50px 0 0 100px"}
      width={"90px"}
      padding={"30px"}
      height={"100%"}
    >
      <form>
        <p>Filtrar por:</p>
        <br />
        <p>
          <b>RAM</b>
        </p>
        <br />
        <div className="form-check">
          <input
            type="radio"
            name="ram"
            value="4"
            checked={selectedRAM === "4"}
            onChange={() => handleRadioChangeRAM("4")}
          />
          <label>4</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="ram"
            value="6"
            checked={selectedRAM === "6"}
            onChange={() => handleRadioChangeRAM("6")}
          />
          <label>6</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="ram"
            value="8"
            checked={selectedRAM === "8"}
            onChange={() => handleRadioChangeRAM("8")}
          />
          <label>8</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="ram"
            value="12"
            checked={selectedRAM === "12"}
            onChange={() => handleRadioChangeRAM("12")}
          />
          <label>12</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="ram"
            value="16"
            checked={selectedRAM === "16"}
            onChange={() => handleRadioChangeRAM("16")}
          />
          <label>16</label>
        </div>
        <br />

        <br />
        <p>
          <b>DISCO</b>
        </p>
        <br />
        <div className="form-check">
          <input
            type="radio"
            name="disco"
            value="4"
            checked={selectedRAM === "4"}
            onChange={() => handleRadioChangeDisco("4")}
          />
          <label>4</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="disco"
            value="6"
            checked={selectedRAM === "6"}
            onChange={() => handleRadioChangeDisco("6")}
          />
          <label>6</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="disco"
            value="8"
            checked={selectedRAM === "8"}
            onChange={() => handleRadioChangeDisco("8")}
          />
          <label>8</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="disco"
            value="12"
            checked={selectedRAM === "12"}
            onChange={() => handleRadioChangeDisco("12")}
          />
          <label>12</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="disco"
            value="16"
            checked={selectedRAM === "16"}
            onChange={() => handleRadioChangeDisco("16")}
          />
          <label>16</label>
        </div>
        <br />
        <p>
          <b>Precio</b>
        </p>
        <br />
        <label className="label">Minimo</label>
        <input
          width={"50%"}
          type="text"
          value={min}
          name="min"
          placeholder="0"
          onChange={(e) => setMin(e.target.value)}
        />
        <label className="label">Maximo</label>
        <input
          width={"50%"}
          type="text"
          value={max}
          name="max"
          placeholder="99999"
          onChange={(e) => setMax(e.target.value)}
        />
        <br />
        <br />
        <Button text="Filtrar" width={"100%"} />
      </form>
    </Card>
  );
};

export default FilterBy;
