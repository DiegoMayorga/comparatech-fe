import { Link } from "react-router-dom";

const ProductFilter = () => {
  return (
    <div className="product-filter">
      <ul>
        <li>
          <Link className="cellphone-filter" to="/cellphones">
            Celulares
          </Link>
        </li>
        <li>
          <Link className="cellphone-filter" to="/computers">
            Computadores
          </Link>
        </li>
        <li>
          <Link className="cellphone-filter" to="/others">
            Otros
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductFilter;
