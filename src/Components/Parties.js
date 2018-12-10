import React, { Component } from "react";
import db from "../data/db";

class Parties extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    db.collection("Parties")
      .get()
      .then(snapshot => {
        const parties = snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          };
        });
        this.setState({
          parties
        });
      });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.parties &&
            this.state.parties.map(party => {
              return (
                <li
                  key={party.id}
                  onClick={() => this.props.setParty(party.id)}
                  id={party.id}
                >
                  {party.Name}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Parties;
