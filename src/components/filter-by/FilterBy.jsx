import Button from "../../atoms/button/Button";
import Card from "../../molecules/card/Card";
import { useState } from "react";
import "../../styles/components/filter-by/filter-by.css";
import Input from "../../atoms/input/Input";
import { dataOptions } from "../../utilities/filtersBySections";

const FilterBy = ({ onFilteredData, section }) => {
  const [selectedRAM, setSelectedRAM] = useState(null);
  const [selectedDisco, setSelectedDisco] = useState(null);
  const [selectedPantalla, setSelectedPantalla] = useState(null);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  // Función para manejar cambios en el filtro de RAM
  const handleRadioChangeRAM = (value) => {
    setSelectedRAM(value);
    setSelectedPantalla(null);
    setSelectedDisco(null); // Desactiva el filtro de disco
    setMin(""); // Desactiva el filtro de precio
    setMax(""); // Desactiva el filtro de precio
  };

  // Función para manejar cambios en el filtro de disco
  const handleRadioChangeDisco = (value) => {
    setSelectedDisco(value);
    setSelectedPantalla(null);
    setSelectedRAM(null); // Desactiva el filtro de RAM
    setMin(""); // Desactiva el filtro de precio
    setMax(""); // Desactiva el filtro de precio
  };

  const handleRadioChangePantalla = (value) => {
    setSelectedPantalla(value);
    setSelectedDisco(null);
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
    setSelectedPantalla(null);
    setSelectedRAM(null);
    setSelectedDisco(null);
  };

  // Función para manejar la acción de filtrar
  const handleFilter = async () => {
    if (selectedRAM !== null) {
      // Realizar la búsqueda filtrando por RAM
      const filteredData = {
        filterOption: 1,
        filter: {
          selectedRAM: selectedRAM,
        },
      };
      onFilteredData(filteredData);
      return;
    }
    if (selectedDisco !== null) {
      // Realizar la búsqueda filtrando por disco
      const filteredData = {
        filterOption: 2,
        filter: {
          selectedDisco: selectedDisco,
        },
      };
      onFilteredData(filteredData);
      return;
    }
    if (min !== "" || max !== "") {
      // Realizar la búsqueda filtrando por precio
      const filteredData = {
        filterOption: 3,
        filter: {
          min: min,
          max: max,
        },
      };
      onFilteredData(filteredData);
      return;
    }
    if (selectedPantalla === null) {
      // Realizar la búsqueda filtrando por pantalla
      const filteredData = {
        filterOption: 4,
        filter: {
          selectedPantalla: selectedPantalla,
        },
      };
      onFilteredData(filteredData);
      return;
    }
    // No se ha seleccionado ningún filtro
    alert("No se ha seleccionado ningún filtro.");
  };

  return (
    <div className="filter-by">
      <Card
        margin={"50px 0 0 100px"}
        width={"90px"}
        padding={"30px"}
        height={"100%"}
      >
        <p>Filtrar por:</p>
        <br />
        {section === "smartphone" ||
        section === "computer" ||
        section === "tablet" ? (
          <div>
            <p>
              <b>Ram</b>
            </p>
            <br />
            {dataOptions[section][0].options.map((option) => (
              <div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="ram"
                    value={option}
                    checked={selectedRAM === option}
                    onChange={() => handleRadioChangeRAM(option)}
                  />
                  <label>{option}</label>
                </div>
              </div>
            ))}
            <br />
          </div>
        ) : null}
        {section === "smartphone" ||
        section === "computer" ||
        section === "tablet" ? (
          <div>
            <p>
              <b>Disco</b>
            </p>
            <br />
            {dataOptions[section][1].options.map((option) => (
              <div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="disco"
                    value={option}
                    checked={selectedDisco === option}
                    onChange={() => handleRadioChangeDisco(option)}
                  />
                  <label>{option}</label>
                </div>
              </div>
            ))}
            <br />
          </div>
        ) : null}
        {section === "monitor" ? (
          <div>
            <p>
              <b>Tamaño de pantalla</b>
            </p>
            <br />
            {dataOptions[section][0].options.map((option) => (
              <div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="pantalla"
                    value={option}
                    checked={selectedPantalla === option}
                    onChange={() => handleRadioChangePantalla(option)}
                  />
                  <label>{option}</label>
                </div>
              </div>
            ))}
            <br />
          </div>
        ) : null}

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
      </Card>
    </div>
  );
};

export default FilterBy;
