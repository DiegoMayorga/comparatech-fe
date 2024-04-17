import { Link } from "react-router-dom";
import Button from "../../atoms/button/Button";
import Card from "../../molecules/card/Card";
import Image from "../../atoms/image/Image";
import "../../styles/components/card-post/card-post.css";

const CardPost = ({ post }) => {
  const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });
    return formatter.format(amount);
  };

  return (
    <>
      <Card className="card-responsive" margin={"0"}>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="title">{post.nombre}</span>
          <Image
            src={post.imagenUrl}
            alt=""
            width={"100%"}
            margin={"20px 0"}
            minWidth={"150px"}
            objectFit={"cover"}
          />
          <p className="desc">{formatCurrency(post.precio)}</p>
          <Button className="cardButton" text="Ver producto" />
        </Link>
      </Card>
    </>
  );
};

export default CardPost;
