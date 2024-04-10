import CardPost from "../../components/card-post/CardPost";
import ProductFilter from "../../components/product-filter/ProductFilter";
import Search from "../../components/search/Search";
import { validateRoleFromToken } from "../../utilities/jwt-utilities.js";

import { posts } from "../../data.js";

const Home = () => {

  validateRoleFromToken("CLIENTE");

  return (
    <div className="homepage">
      <Search />
      <ProductFilter />
      <div className="center">
        <div className="or">Ofertas del día</div>
        <div className="line" />
      </div>
      <div className="home">
        {posts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
      <div className="center">
        <div className="or">Historial</div>
        <div className="line" />
      </div>
      <div className="home">
        {posts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
