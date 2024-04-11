import PropTypes from "prop-types";
import "../../styles/atoms/image/image.css";

const Image = ({ width, height, margin, padding, src, alt, minWidth, objectFit }) => {
  const imageStyle = {
    width: width || "auto",
    height: height || "auto",
    margin: margin || "auto",
    padding: padding || "auto",
    minWidth: minWidth || "auto",
    objectFit: objectFit || "none",
  };

  return <img className="image" style={imageStyle} src={src} alt={alt}/>;
};

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  minWidth: PropTypes.string,
  objectFit: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default Image;
