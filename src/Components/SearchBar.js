import React, { Component } from "react";
import { ViewContext } from "../Contexts/ViewStore";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.songRef = React.createRef();
  }
  componentDidMount() {
    this.songRef.current.focus();
  }

  search = () => {
    const { value } = this.songRef.current;
    if (value.length == 0) {
      this.props.setSearchResults([]);
    }
    if (value.length > 2) {
      fetch(
        `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${
          this.songRef.current.value
        }&api_key=6a8466ca87081dca658c01c4452eb5a4&format=json`
      )
        .then(resp => resp.json())
        .then(data =>
          this.props.setSearchResults(data.results.trackmatches.track)
        );
    }
  };
  render() {
    return (
      <ViewContext.Consumer>
        {({ toggleSearch }) => {
          return (
            <div>
              <input type="text" onChange={this.search} ref={this.songRef} />
              <button type="button" onClick={toggleSearch}>
                Close
              </button>
            </div>
          );
        }}
      </ViewContext.Consumer>
    );
  }
}

export default SearchBar;
