import { Link } from "react-router-dom";

const ProductFilter = () => {
  return (
    <div className="product-filter">
      <Link className="cellphone-filter" to="/cellphones">
        Celulares
      </Link>
      <Link className="cellphone-filter" to="/computers">
        Computadores
      </Link>
      <Link className="cellphone-filter" to="/others">
        Otros
      </Link>
    </div>
  );
};

export default ProductFilter;
