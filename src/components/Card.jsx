import { Link } from "react-router-dom";
import Slider from "react-slick";

const Card = ({ post }) => {
  return (
    <div className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <span className="title">{post.title}</span>
        <img src={post.img} alt="" className="img" />
        <p className="desc">{post.desc}</p>
        <button className="cardButton">Ver producto</button>
      </Link>
    </div>
  );
};

export default Card;
