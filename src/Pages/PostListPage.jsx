import { useEffect } from "react";
import { useState } from "react";
import PostCard from "../components/Postcard";
import { FiSearch } from "react-icons/fi";

const PostListPage = ({ handleCounter }) => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.org/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const filteredPost = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log(filteredPost);

  return (
    <div className="post-container">
      <div className="heading">
        <p className="heading-title">Placeholder Posts</p>
        <div className="search-bar">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-field"
            type="search"
            name=""
            placeholder="Search..."
          />
          <FiSearch className="search-icon" />
        </div>
      </div>
      <div className="card-container">
        {filteredPost.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            handleCounter={handleCounter}
          ></PostCard>
        ))}
      </div>
    </div>
  );
};

export default PostListPage;
