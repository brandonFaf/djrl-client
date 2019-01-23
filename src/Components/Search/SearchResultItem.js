import React from "react";
import { FaChevronUp } from "react-icons/fa";
export default props => {
  const {
    result: { name, artist, image, id, upvotes, played, alreadyUpvoted },
    upvote
  } = props;
  return (
    <div className="request">
      <img alt={name} src={image[0]["#text"]} />
      <div className="request-info">
        <h4>{name}</h4>
        <p>{artist}</p>
      </div>
      {!alreadyUpvoted && !played && (
        <div>
          <div className="upvote" onClick={() => upvote(id, upvotes)}>
            <div className="upvote-icon">
              <FaChevronUp />
            </div>
            {upvotes}
          </div>
        </div>
      )}
    </div>
  );
};
