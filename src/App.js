import React, { Component } from "react";
import "./App.css";
import Parties from "./Components/Parties";
import Requests from "./Components/Requests";
class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.setParty = this.setParty.bind(this);
  }

  setParty(partyId) {
    this.setState({
      partyId
    });
  }
  render() {
    return (
      <div>
        <Parties setParty={this.setParty} />
        {this.state.partyId && <Requests partyId={this.state.partyId} />}
      </div>
    );
  }
}

export default App;
