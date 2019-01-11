import React, { Component } from "react";
import { RequestsContext } from "../Contexts/RequestsStore";
import Request from "./Request";
class RequestList extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <input type="text" onFocus={this.props.toggleSearch} />
          <button onClick={this.props.logOut}>Leave Party</button>
        </div>
        <RequestsContext.Consumer>
          {({ requests, upvote }) => (
            <ul>
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
            </ul>
          )}
        </RequestsContext.Consumer>
      </div>
    );
  }
}

export default RequestList;
