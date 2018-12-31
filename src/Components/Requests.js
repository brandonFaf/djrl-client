import React, { Component } from "react";
import { RequestsContext } from "../Contexts/RequestsStore";
class Requests extends Component {
  state = {};

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            onFocus={() => this.props.toggleSearch()}
            ref={this.songRef}
          />
        </div>
        <RequestsContext.Consumer>
          {({ requests, upvote }) => (
            <ul>
              {requests &&
                requests
                  .sort((a, b) => b.upvotes - a.upvotes)
                  .map(
                    ({
                      id,
                      title,
                      artist,
                      upvotes,
                      played,
                      alreadyUpvoted
                    }) => {
                      return (
                        <li key={id}>
                          <strong>
                            {title} - {artist}
                          </strong>
                          <ul>
                            <li>
                              {upvotes}
                              {!alreadyUpvoted && (
                                <button
                                  style={{ marginLeft: 10 }}
                                  onClick={() => upvote(id, ++upvotes)}
                                >
                                  {" "}
                                  ↑{" "}
                                </button>
                              )}
                            </li>
                          </ul>
                        </li>
                      );
                    }
                  )}
            </ul>
          )}
        </RequestsContext.Consumer>
      </div>
    );
  }
}

export default Requests;
