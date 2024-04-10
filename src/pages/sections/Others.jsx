import ProductFilter from "../../components/product-filter/ProductFilter";
import Search from "../../components/search/Search";
import { posts } from "../../data";
import FilterBy from "../../components/filter-by/FilterBy";
import CardPost from "../../components/card-post/CardPost";

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
            <CardPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Others;
