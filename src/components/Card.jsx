import { Link } from "react-router-dom";
import Button from "../atoms/Button";

const Card = ({ post }) => {
  return (
    <div className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <span className="title">{post.title}</span>
        <img src={post.img} alt="" className="img" />
        <p className="desc">{post.desc}</p>
        <Button className="cardButton" text="Ver producto" />
      </Link>
    </div>
  );
};

export default Card;
