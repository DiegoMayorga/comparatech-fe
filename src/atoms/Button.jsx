import PropTypes from "prop-types";
import "./button.css";

const Button = ({ color, backgroundColor, border, text, onClick, margin, width, alignSelf }) => {
  const buttonStyle = {
    color: color || "white",
    backgroundColor: backgroundColor || "#020080ab",
    border: border || "none",
    margin: margin || "0",
    width: width || "150px",
    alignSelf: alignSelf || "none",
  };
  return (
    <button className="custom-button" style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  alignSelf: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
