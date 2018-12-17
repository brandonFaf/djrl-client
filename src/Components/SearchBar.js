import React, { Component } from "react";
import { addRequest } from "../data/requestsApi";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.songRef = React.createRef();
  }
  submitSong = () => {
    addRequest(this.songRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.songRef} />
        <button type="button" onClick={this.submitSong}>
          Add
        </button>
      </div>
    );
  }
}

export default SearchBar;
