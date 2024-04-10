import PropTypes from "prop-types";
import "../../styles/atoms/image/image.css";

const Image = ({ width, height, margin, padding, src, alt }) => {
  const imageStyle = {
    width: width || "auto",
    height: height || "auto",
    margin: margin || "auto",
    padding: padding || "auto",
  };

  return <img className="image" style={imageStyle} src={src} alt={alt} />;
};

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default Image;