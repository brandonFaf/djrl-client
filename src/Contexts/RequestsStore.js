import React, { Component, createContext } from "react";
import db from "../data/db";
import { handleDataChange } from "../data/requestsApi";
export const RequestsContext = createContext();

class RequestStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    };
  }

  componentDidMount() {
    const partyName = localStorage.getItem("partyName");
    db.collection("Parties")
      .doc(partyName)
      .collection("Requests")
      .onSnapshot(snapshot => {
        const requests = handleDataChange(this.state.requests, snapshot);
        this.setState({
          requests,
          upvote: (id, upvotes) => this.upvote(id, upvotes)
        });
      });
  }
  upvote = (id, upvotes) => {
    upvotes++;
    const partyName = localStorage.getItem("partyName");
    db.collection("Parties")
      .doc(partyName)
      .collection("Requests")
      .doc(id)
      .update({
        upvotes
      })
      .then(() => {
        const userUpvotes =
          JSON.parse(localStorage.getItem(new Date().toDateString())) || [];
        userUpvotes.push(id);
        localStorage.setItem(
          new Date().toDateString(),
          JSON.stringify(userUpvotes)
        );
        let requests = this.state.requests.map(x => {
          if (x.id === id) {
            x.alreadyUpvoted = true;
          }
          return x;
        });
        this.setState({
          requests
        });
      });
  };
  render() {
    return (
      <RequestsContext.Provider value={this.state}>
        {this.props.children}
      </RequestsContext.Provider>
    );
  }
}

export default RequestStore;
