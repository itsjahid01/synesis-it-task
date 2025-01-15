import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router";
import Loader from "../components/Loader";
import Subscription from "../components/Subscription";
import ReviewSection from "../components/ReviewSection";

const PostDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const { title, content, thumbnail, category, publishedAt } = blog;

  const [reviews, setReviews] = useState([
    {
      name: "Sophia Green",
      title: "Insightful and Engaging Content",
      body: "The blog posts are well-researched and written in a way that keeps me hooked. The author presents unique perspectives, which makes it stand out from other blogs.",
      rating: 5,
    },
    {
      name: "Liam Carter",
      title: "Great for Beginners",
      body: "I love how the blog covers topics for beginners in a simple and easy-to-understand way. It has helped me improve my skills significantly.",
      rating: 4,
    },
    {
      name: "Olivia Martinez",
      title: "Needs More Frequent Updates",
      body: "The content is good, but the blog isn't updated as frequently as I would like. Regular updates would make it even better.",
      rating: 3,
    },
  ]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.org/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data));
  }, [id]);

  if (!blog) {
    return <Loader></Loader>;
  }

  return (
    <>
      <div className="post-details">
        <div className="post-image">
          <img className="card-image" src={thumbnail} alt="" />
        </div>
        <div className="post-content">
          <p className="post-title">{title}</p>
          <div className="date-title">
            <div className="date">
              <p>
                <FaRegCalendarAlt />
              </p>
              <p>{publishedAt}</p>
            </div>
            <p className="post-category">{category}</p>
          </div>
          <p className="details">{content}</p>
        </div>
      </div>

      {/* review section */}
      <h3 className="review-heading">Latest reviews</h3>
      <div className="review-section">
        {reviews.map((review, index) => (
          <ReviewSection key={index} review={review}></ReviewSection>
        ))}
      </div>
      <Subscription></Subscription>
    </>
  );
};

export default PostDetailPage;
