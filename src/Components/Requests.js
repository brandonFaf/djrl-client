import React, { Component } from "react";
import db from "../data/db";
class Requests extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    db.collection("Parties")
      .doc(this.props.partyId)
      .collection("Requests")
      .onSnapshot(snapshot => {
        const changes = snapshot.docChanges();
        const requests = changes.map(change => {
          const doc = change.doc.data();
          return { ...doc, id: change.doc.id };
        });
        this.setState({
          requests
        });
      });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.requests &&
            this.state.requests.map(
              ({ id, title, artist, upvotes, played }) => {
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
              }
            )}
        </ul>
      </div>
    );
  }
}

export default Requests;
