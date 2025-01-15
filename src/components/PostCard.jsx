import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router";
import { FaRegEye } from "react-icons/fa";

const PostCard = ({ post, handleCounter }) => {
  const { id, title, content, image, category, publishedAt } = post;
  //   console.log(post);
  return (
    <div onClick={handleCounter} className="post-card">
      <img className="card-image" src={image} alt="" />
      <span className="viewer">
        <FaRegEye />
        10
      </span>
      <div className="card-content">
        <div className="date-title">
          <div className="date">
            <p>
              <FaRegCalendarAlt />
            </p>
            <p>{publishedAt}</p>
          </div>
          <p className="category">{category}</p>
        </div>
        <p className="post-title">{title}</p>
        <p>
          {content.slice(0, 180)} ....
          <Link className="read-more" to={`/blog/${id}`}>
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PostCard;
