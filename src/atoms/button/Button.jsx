import PropTypes from "prop-types";
import "../../styles/atoms/button/button.css";

const Button = ({ color, backgroundColor, border, text, onClick, margin, width, alignSelf, href }) => {
  const buttonStyle = {
    color: color || "white",
    backgroundColor: backgroundColor || "#020080ab",
    border: border || "none",
    margin: margin || "0",
    width: width || "150px",
    alignSelf: alignSelf || "none",
  };
  return (
    <button className="custom-button" style={buttonStyle} onClick={onClick} href={href} >
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
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
