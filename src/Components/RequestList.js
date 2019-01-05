import React, { Component } from "react";
import { RequestsContext } from "../Contexts/RequestsStore";
import Request from "./Request";
class RequestList extends Component {
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
                  .map(request => {
                    return (
                      <Request
                        key={request.id}
                        request={request}
                        upvote={upvote}
                      />
                    );
                  })}
            </ul>
          )}
        </RequestsContext.Consumer>
      </div>
    );
  }
}

export default RequestList;