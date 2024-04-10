import PropTypes from "prop-types";
import "../../styles/atoms/input/input.css";

const Input = ({
  type,
  value,
  name,
  placeholder,
  onChange,
  padding,
  margin,
  required,
}) => {
  const inputStyle = {
    padding: padding || "15px 20px",
    margin: margin || "20px",
  };
  return (
    <input
      className="input"
      style={inputStyle}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default Input;
