import Card from "../components/Card";
import ProductFilter from "../components/ProductFilter";
import Search from "../components/Search";
import { validateRoleFromToken } from '../utilities/validate-role.js';

import { posts } from "../data";

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
          <Card key={post.id} post={post} />
        ))}
      </div>
      <div className="center">
        <div className="or">Ofertas del día</div>
        <div className="line" />
      </div>
    </div>
  );
};

export default Home;
