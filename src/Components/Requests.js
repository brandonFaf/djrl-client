import React, { Component } from "react";
import { RequestsContext } from "../Contexts/RequestsStore";
class Requests extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <RequestsContext.Consumer>
        {requests => (
          <ul>
            {requests.map(({ id, title, artist, upvotes, played }) => {
              return (
                <li key={id}>
                  <strong>
                    {title} - {artist}
                  </strong>
                  <ul>
                    <li>{upvotes}</li>
                    <li>{played}</li>
                  </ul>
                </li>
              );
            })}
          </ul>
        )}
      </RequestsContext.Consumer>
    );
  }
}

export default Requests;
