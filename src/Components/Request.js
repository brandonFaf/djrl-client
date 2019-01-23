import React from "react";
import { FaChevronUp } from "react-icons/fa";
export default props => {
  const {
    request: { id, title, artist, upvotes, alreadyUpvoted },
    upvote
  } = props;
  return (
    <div className="request">
      <img alt="1" src="./1.jpg" />
      <p>
        {title} - {artist}
      </p>

      {!alreadyUpvoted && (
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
