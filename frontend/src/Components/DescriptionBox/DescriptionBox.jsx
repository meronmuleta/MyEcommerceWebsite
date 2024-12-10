import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform where businesses and
          individuals buy and sell goods or services. It features product
          listings with descriptions and prices, a shopping cart for selected
          items, and a secure checkout process for payments. Essential
          components include user accounts, search and navigation tools,
          customer service options, security measures, mobile responsiveness,
          and user reviews.
        </p>
        <p>
          E-commerce websites use advanced technologies like data analytics and
          personalized recommendations to enhance user experience and boost
          sales. They integrate inventory management, CRM systems, and social
          media for efficient operations and wider market reach. Digital
          marketing strategies like SEO and email marketing attract and retain
          customers. Emerging trends such as mobile commerce, voice-assisted
          shopping, and augmented reality are transforming consumer interactions
          with online marketplaces.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
