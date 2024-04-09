import ProductFilter from "../../components/ProductFilter";
import Search from "../../components/Search";
import Card from "../../components/Card";
import { posts } from "../../data";
import FilterBy from "../../components/FilterBy";

const Others = () => {
  return (
    <>
      <Search />
      <ProductFilter />
      <div className="center">
        <div className="or">Otros</div>
        <div className="line" />
      </div>
      <div className="cellphones">
        <FilterBy />
        <div className="cellphone-cards">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Others;
