import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          facilis architecto sed labore. Facere perferendis ratione cupiditate
          necessitatibus eveniet vero voluptatem quam dicta deserunt! Fugiat,
          sit? Excepturi corporis consectetur distinctio!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ab
          nobis? Vel illum a libero rerum fugiat error quisquam veritatis?
        </p>
      </div>
    </div>
  );
};
