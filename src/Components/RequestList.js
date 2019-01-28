import React, { Component } from "react";
import { RequestsContext } from "../Contexts/RequestsStore";
import Request from "./Request";
import MagGlass from "./SVG/MagGlass";
class RequestList extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="search-bar" onClick={this.props.toggleSearch}>
          <span className="placeholder" role="img" aria-label="Request">
            <MagGlass /> Request
          </span>
        </div>
        <p className="request-title">In Voting</p>
        <RequestsContext.Consumer>
          {({ requests, upvote }) =>
            requests.length > 0 ? (
              <div className="requests">
                {requests &&
                  requests
                    .sort((a, b) => b.upvotes - a.upvotes)
                    .filter(x => !x.played)
                    .map(request => {
                      return (
                        <Request
                          key={request.id}
                          request={request}
                          upvote={upvote}
                        />
                      );
                    })}
              </div>
            ) : (
              <div className="empty">MAKE THE FIRST SONG REQUEST</div>
            )
          }
        </RequestsContext.Consumer>
        <button onClick={this.props.logOut}>Leave Party</button>
      </>
    );
  }
}

export default RequestList;
