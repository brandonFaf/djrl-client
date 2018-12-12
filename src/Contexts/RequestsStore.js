import React, { Component, createContext } from "react";
import db from "../data/db";
export const RequestsContext = createContext();

class RequestStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    };
  }
  componentDidMount() {
    db.collection("Parties")
      .doc("hAlXTRnQLhPphs5OUsQ6")
      .collection("Requests")
      .onSnapshot(snapshot => {
        const changes = snapshot.docChanges();
        const requests = changes.map(this.runReducer);
        console.log(requests);
        console.log(this.state);
        this.setState({
          requests: [...this.state.requests, ...requests.filter(x => x)]
        });
      });
  }
  runReducer = change => {
    console.log(change.type);
    switch (change.type) {
      case "added":
        return { ...change.doc.data(), id: change.doc.id };
      case "modified": {
        this.state.requests.splice(
          this.state.requests.findIndex(x => x.id === change.doc.id)
        );
        return { ...change.doc.data(), id: change.doc.id };
      }
      case "removed":
        this.state.requests.splice(
          this.state.requests.findIndex(x => x.id === change.doc.id)
        );
        break;
      default:
        return null;
    }
  };
  render() {
    return (
      <RequestsContext.Provider value={this.state.requests}>
        {this.props.children}
      </RequestsContext.Provider>
    );
  }
}

export default RequestStore;
