import PropTypes from "prop-types";
import "../../styles/atoms/button/button.css";

const Button = ({ color, backgroundColor, border, text, onClick, margin, padding, width, alignSelf, href }) => {
  const buttonStyle = {
    color: color || "white",
    backgroundColor: backgroundColor || "#020080ab",
    border: border || "none",
    margin: margin || "0",
    width: width || "150px",
    alignSelf: alignSelf || "none",
    padding: padding || "15px 25px",
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
  padding: PropTypes.string,
  width: PropTypes.string,
  alignSelf: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
