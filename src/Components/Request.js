import React from "react";
import { FaChevronUp, FaPlusCircle } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
export default props => {
  const {
    request: { id, title, artist, upvotes, alreadyUpvoted, image },
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
      {!alreadyUpvoted && upvote && (
        <div>
          <div className="upvote" onClick={() => upvote(id, upvotes)}>
            <div className="upvote-icon">
              <FaChevronUp />
            </div>
            {upvotes}
          </div>
        </div>
      )}
      {addSong && (
        <button className="add-button" onClick={addSong}>
          <MdAddCircleOutline />
        </button>
      )}
    </div>
  );
};
