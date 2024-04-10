import { Link } from "react-router-dom";
import Button from "../../atoms/button/Button";
import Card from "../../molecules/card/Card";

const CardPost = ({ post }) => {
  return (
    <Card margin={"0"}>
      <Link className="link" to={`/post/${post.id}`}>
        <span className="title">{post.title}</span>
        <img src={post.img} alt="" className="img" />
        <p className="desc">{post.desc}</p>
        <Button className="cardButton" text="Ver producto" />
      </Link>
    </Card>
  );
};

export default CardPost;
