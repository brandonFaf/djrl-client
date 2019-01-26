import React from "react";
import { FaChevronUp, FaPlusCircle } from "react-icons/fa";
export default props => {
  const {
    request: { id, title, artist, upvotes, alreadyUpvoted, image, played },
    upvote,
    addSong
  } = props;
  return (
    <div className="request">
      <img alt={title} src={image} />
      <div className="request-info">
        <h4>{title}</h4>
        <p>{artist}</p>
      </div>
      {addSong ? (
        <button className="add-button" onClick={addSong}>
          <FaPlusCircle />
        </button>
      ) : (
        <div className="upvote">
          {!alreadyUpvoted && !played && upvote && (
            <div onClick={() => upvote(id, upvotes)}>
              <div className="upvote-icon">
                <FaChevronUp />
              </div>
            </div>
          )}
          {upvotes}
        </div>
      )}
    </div>
  );
};
