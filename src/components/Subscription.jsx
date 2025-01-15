import React from "react";

const Subscription = () => {
  return (
    <div className="subscription-section">
      <p className="follow">Follow the latest trends</p>
      <p className="newsletter">With our daily newsletter</p>
      <input
        className="email-field"
        type="email"
        name=""
        placeholder="you@example.com"
      />
      <button className="submit-button">Submit</button>
    </div>
  );
};

export default Subscription;
