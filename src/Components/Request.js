import React from "react";

export default props => {
  const {
    request: { id, title, artist, upvotes, alreadyUpvoted },
    upvote
  } = props;
  return (
    <li>
      <strong>
        {title} - {artist}
      </strong>
      <ul>
        <li>
          {upvotes}
          {!alreadyUpvoted && (
            <button
              style={{ marginLeft: 10 }}
              onClick={() => upvote(id, upvotes)}
            >
              {" "}
              ↑{" "}
            </button>
          )}
        </li>
      </ul>
    </li>
  );
};
