import { Link } from "react-router-dom";
import Button from "../../atoms/button/Button";
import Card from "../../molecules/card/Card";
import Image from "../../atoms/image/Image"

const CardPost = ({ post }) => {
  return (
    <Card margin={"0"}>
      <Link className="link" to={`/post/${post.id}`}>
        <span className="title">{post.title}</span>
        <Image src={post.img} alt="" width={"100%"} margin={"20px 0"} minWidth={"150px"} objectFit={"cover"}/>
        <p className="desc">{post.desc}</p>
        <Button className="cardButton" text="Ver producto" />
      </Link>
    </Card>
  );
};

export default CardPost;