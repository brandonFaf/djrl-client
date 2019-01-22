import React from "react";

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
      <p>{upvotes}</p>
      {!alreadyUpvoted && (
        <button onClick={() => upvote(id, upvotes)}>^</button>
      )}
    </div>
  );
};
