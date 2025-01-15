import React from "react";
import image from "../assets/reviewer.jpg";

const ReviewSection = ({ review }) => {
  const { body, rating, name, title } = review;

  return (
    <div className="review-card">
      <span>{"⭐".repeat(rating)}</span>
      <p className="review-title">{title}</p>
      <p>{body}</p>
      <div className="reviewer">
        <img className="person" src={image} alt="" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ReviewSection;
