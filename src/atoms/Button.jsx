import PropTypes from "prop-types";
import "./button.css";

const Button = ({ color, backgroundColor, border, text, onClick, margin, width }) => {
  const buttonStyle = {
    color: color || "white",
    backgroundColor: backgroundColor || "#020080ab",
    border: border || "none",
    margin: margin || "0",
    width: width || "150px",
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
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
