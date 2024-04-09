import ProductFilter from "../../components/ProductFilter";
import Search from "../../components/Search";
import Card from "../../components/Card";
import { posts } from "../../data";

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
        <div className="filter-by">
          <p>Filtrar por:</p>
          <br />
          <p>
            <b>RAM</b>
          </p>
          <br />
          <div className="form-check">
            <input type="radio" />
            <label>4</label>
          </div>
          <div className="form-check">
            <input type="radio" />
            <label>6</label>
          </div>
          <div className="form-check">
            <input type="radio" />
            <label>8</label>
          </div>
          <div className="form-check">
            <input type="radio" />
            <label>12</label>
          </div>
          <div className="form-check">
            <input type="radio" />
            <label>16</label>
          </div>
          <br />
          <p>
            <b>Disco</b>
          </p>
          <br />
          <div className="form-check">
            <input type="radio" />
            <label>64</label>
          </div>
          <div className="form-check">
            <input type="radio" checked/>
            <label>128</label>
          </div>
          <div className="form-check">
            <input type="radio" />
            <label>256</label>
          </div>
          <div className="form-check">
            <input type="radio" />
            <label>512</label>
          </div>
        </div>
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
