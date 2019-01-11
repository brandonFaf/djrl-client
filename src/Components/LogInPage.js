import React, { Component } from "react";
import db from "../data/db";
class LogInPage extends Component {
  constructor(props) {
    super(props);
    this.partyName = React.createRef();
    this.state = { showNoParty: false };
  }
  storeParty = e => {
    e.preventDefault();
    const { value: partyName } = this.partyName.current;
    if (!partyName.trim()) {
      this.setState({ showNoParty: true });
    } else {
      db.collection("Parties")
        .doc(partyName)
        .get()
        .then(doc => {
          if (doc.exists) {
            localStorage.setItem("partyName", partyName);
            this.props.setLoggedIn();
          } else {
            this.setState({ showNoParty: true });
          }
        });
    }
  };
  render() {
    return (
      <div>
        Please enter the code for your party:
        <form onSubmit={this.storeParty}>
          <input type="text" ref={this.partyName} />
          {this.state.showNoParty && (
            <span>
              Party does not exist. Please check the name and try again
            </span>
          )}
        </form>
      </div>
    );
  }
}

export default LogInPage;
