import { useLocation } from "react-router";
import { posts } from "../../data";

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const post = posts.find((p) => p.id.toString() === path);

  console.log(location);
  return (
    <>
      <div className="center">
        <br />
        <div className="or"><h1 className="postTitle">{post.title}</h1></div>
        <br />
        <div className="line" />
      </div>
      <div className="post">
        <img src={post.img} alt="" className="postImg" />
        <p className="postDesc">{post.desc}</p>
        <p className="postLongDesc">{post.longDesc}</p>
      </div>
    </>
  );
};

export default Post;
