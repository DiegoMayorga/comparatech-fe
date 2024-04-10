import { useLocation } from "react-router";
import { posts } from "../../data";
import Card from "../../molecules/card/Card";
import Image from "../../atoms/image/Image";
import Button from "../../atoms/button/Button";
import "../../styles/pages/posts/post.css";
import CardPost from "../../components/card-post/CardPost";

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const post = posts.find((p) => p.id.toString() === path);

  console.log(location);
  return (
    <>
      <div className="center">
        <br />
        <div className="or">
          <h1 className="postTitle">{post.title}</h1>
        </div>
        <br />
        <div className="line" />
      </div>
      <div className="post">
        <Card>
          <Image src={post.Provider} alt={post.title} width={"60px"} />
          <Image src={post.img} alt={post.title} width={"420px"} />
        </Card>
        <Card padding={"30px"}>
          <p className="postLongDesc">{post.longDesc}</p>
          <br />
          <p className="postDesc">{post.desc}</p>
          <br />
          <p className="category">Categoría: {post.category}</p>
          <p className="brand">Marca: {post.brand}</p>
          <a
            href="https://www.mercadolibre.com.co/infinix-note-30-pro-dual-sim-256-gb-magic-black-8-gb-ram/p/MCO23605669?pdp_filters=category:MCO1055#searchVariation=MCO23605669&position=1&search_layout=stack&type=product&tracking_id=c3d6bc47-b91d-4f29-bae6-07c5d6842213"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button margin={"20px 0 0 0"} text={"Ir a la tienda"} />
          </a>
        </Card>
      </div>
      <div className="specifications">
        <Card width={"80%"} padding={"30px"}>
          <h2>Especificaciones</h2>
          <div className="wrap">
            <div>
              <div>Línea</div>
              <div>Nota</div>
            </div>
            <div>
              <div>Línea</div>
              <div>Nota</div>
            </div>
            <div>
              <div>Línea</div>
              <div>Nota</div>
            </div>
          </div>
          <div className="wrap">
            <div>
              <div>Línea</div>
              <div>Nota</div>
            </div>
            <div>
              <div>Línea</div>
              <div>Nota</div>
            </div>
            <div>
              <div>Línea</div>
              <div>Nota</div>
            </div>
          </div>
        </Card>
      </div>
      <div className="center">
        <br />
        <div className="or">Similares</div>
        <br />
        <div className="line" />
      </div>
      <div className="post">
        {posts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
      <div className="center">
        <br />
        <div className="or">Comentarios</div>
        <br />
        <div className="line" />
      </div>
      <Card width={"60%"}>
        <p>
          <b>Usuario: Pepito</b>
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          rem incidunt quam provident ab assumenda voluptatum beatae? Quos, nisi
          adipisci. Odit, perspiciatis reiciendis. Maiores adipisci dolores
          consequatur eligendi commodi optio?
        </p>
      </Card>
      <Card width={"60%"}>
        <p>
          <b>Usuario: Pepito</b>
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          rem incidunt quam provident ab assumenda voluptatum beatae? Quos, nisi
          adipisci. Odit, perspiciatis reiciendis. Maiores adipisci dolores
          consequatur eligendi commodi optio?
        </p>
      </Card>
      <Card margin={"0 auto 50px"} width={"60%"}>
        <p>
          <b>Usuario: Pepito</b>
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          rem incidunt quam provident ab assumenda voluptatum beatae? Quos, nisi
          adipisci. Odit, perspiciatis reiciendis. Maiores adipisci dolores
          consequatur eligendi commodi optio?
        </p>
      </Card>
    </>
  );
};

export default Post;
