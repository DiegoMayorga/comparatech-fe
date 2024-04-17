import Button from "../../atoms/button/Button";
import Card from "../../molecules/card/Card";
import { useState } from "react";
import "../../styles/components/filter-by/filter-by.css";
import Input from "../../atoms/input/Input";

const FilterBy = ({ section }) => {
  const [selectedRAM, setSelectedRAM] = useState(null);
  const [selectedDisco, setSelectedDisco] = useState(null);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  // Función para manejar cambios en el filtro de RAM
  const handleRadioChangeRAM = (value) => {
    setSelectedRAM(value);
    setSelectedDisco(null); // Desactiva el filtro de disco
    setMin(""); // Desactiva el filtro de precio
    setMax(""); // Desactiva el filtro de precio
  };

  // Función para manejar cambios en el filtro de disco
  const handleRadioChangeDisco = (value) => {
    setSelectedDisco(value);
    setSelectedRAM(null); // Desactiva el filtro de RAM
    setMin(""); // Desactiva el filtro de precio
    setMax(""); // Desactiva el filtro de precio
  };

  // Función para manejar cambios en el rango de precios
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    if (name === "min") {
      setMin(value);
    } else if (name === "max") {
      setMax(value);
    }
    setSelectedRAM(null);
    setSelectedDisco(null);
  };

  // Función para manejar la acción de filtrar
  const handleFilter = async () => {
    if (selectedRAM !== null) {
      // Realizar la búsqueda filtrando por RAM
      console.log(`Buscando por RAM: ${selectedRAM} en ${section}`);
      await sleep(30000);
      return;
    }
    if (selectedDisco !== null) {
      // Realizar la búsqueda filtrando por disco
      console.log(`Buscando por Disco: ${selectedDisco} en ${section}`);
      await sleep(30000);
      return;
    }
    if (min !== "" || max !== "") {
      // Realizar la búsqueda filtrando por precio
      console.log(
        `Buscando por Precio: Min: ${min}, Max: ${max} en ${section}`
      );
      await sleep(30000);
      return;
    }
    // No se ha seleccionado ningún filtro
    console.log("No se ha seleccionado ningún filtro.");
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <div className="filter-by">
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
          <p>
            <b>DISCO</b>
          </p>
          <br />
          <div className="form-check">
            <input
              type="radio"
              name="disco"
              value="64"
              checked={selectedDisco === "64"}
              onChange={() => handleRadioChangeDisco("64")}
            />
            <label>64</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="disco"
              value="128"
              checked={selectedDisco === "128"}
              onChange={() => handleRadioChangeDisco("128")}
            />
            <label>128</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="disco"
              value="256"
              checked={selectedDisco === "256"}
              onChange={() => handleRadioChangeDisco("256")}
            />
            <label>256</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="disco"
              value="512"
              checked={selectedDisco === "512"}
              onChange={() => handleRadioChangeDisco("512")}
            />
            <label>512</label>
          </div>
          <br />
          <p>
            <b>Precio</b>
          </p>
          <br />
          <p className="label">Mínimo</p>
          <Input
            width={"50%"}
            type="text"
            value={min}
            name="min"
            margin={"10px 0"}
            placeholder="0"
            onChange={handlePriceChange}
            />
          <p className="label">Máximo</p>
          <Input
            width={"50%"}
            type="text"
            value={max}
            name="max"
            margin={"10px 0"}
            placeholder="99999"
            onChange={handlePriceChange}
          />
          <br />
          <br />
          <Button text="Filtrar" width={"100%"} onClick={handleFilter} />
        </form>
      </Card>
    </div>
  );
};

export default FilterBy;
