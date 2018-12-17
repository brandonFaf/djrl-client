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
    this.requestsCollection = db
      .collection("Parties")
      .doc("hAlXTRnQLhPphs5OUsQ6")
      .collection("Requests");
  }

  componentDidMount() {
    db.collection("Parties")
      .doc("hAlXTRnQLhPphs5OUsQ6")
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
    db.collection("Parties")
      .doc("hAlXTRnQLhPphs5OUsQ6")
      .collection("Requests")
      .doc(id)
      .update({
        upvotes
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
