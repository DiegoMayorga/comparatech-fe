import Card from "../../molecules/card/Card";
import Image from "../../atoms/image/Image";
import Button from "../../atoms/button/Button";
import "../../styles/pages/posts/post.css";
import CardPost from "../../components/card-post/CardPost";
import { validateRoleFromToken } from "../../utilities/jwt-utilities.js";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [similar, setSimilar] = useState([]);

  validateRoleFromToken("CLIENTE");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pResponse = await fetch(
          "http://ec2-54-158-4-132.compute-1.amazonaws.com:8080/umb/v1/product/find-by-id",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({
              productoId: id,
            }),
          }
        );

        if (!pResponse.ok) {
          alert("Hubo  un error al recuperar los datos");
          return;
        }

        const productData = await pResponse.json();
        setPost(productData.producto);

        const sResponse = await fetch(
          "http://ec2-54-158-4-132.compute-1.amazonaws.com:8080/umb/v1/product/find-by-name",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({
              productName: productData.producto.nombre
                .split(" ")
                .slice(0, 3)
                .join(" "),
              skip: 0,
              limit: 6,
            }),
          }
        );

        if (!sResponse.ok) {
          alert("Hubo  un error al recuperar los datos");
          return;
        }

        const similarData = await sResponse.json();
        setSimilar(similarData.productos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to only run once on mount

  return (
    <>
      <div className="center">
        <br />
        <div className="or">
          <h1 className="postTitle">{post.nombre}</h1>
        </div>
        <br />
        <div className="line" />
      </div>
      <div className="post">
        <Card>
          <Image src={post.imagenUrl} alt={post.nombre} width={"100%"} />
        </Card>
        <Card padding={"30px"}>
          <br />
          <p className="postDesc">{post.precio}</p>
          <br />
          <p className="category">Categoría: {post.categoria}</p>
          <p className="platform">Plataforma: {post.plataforma}</p>
          <p className="brand">Marca: {post.marca}</p>
          <a href={post.url} target="_blank" rel="noreferrer noopener">
            <Button
              margin={"20px 0 0 0"}
              text={"Ir a la tienda"}
              width={"100%"}
            />
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
        {similar.map((post) => (
          <CardPost key={post._id} post={post} />
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
