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
    if (value.length === 0) {
      this.props.setSearchResults([]);
    }
    if (value.length > 2) {
      fetch(
        `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${
          this.songRef.current.value
        }&api_key=6a8466ca87081dca658c01c4452eb5a4&format=json`
      )
        .then(resp => resp.json())
        .then(data => {
          const results = data.results.trackmatches.track.map(x => {
            const req = this.props.requests.find(
              r => r.title === x.name && r.artist === x.artist
            );
            if (req) {
              x.requested = req.id;
              x.upvotes = req.upvotes;
              x.alreadyUpvoted = req.alreadyUpvoted;
              x.played = req.played;
            }
            x.image = x.image[0]["#text"];
            return x;
          });
          this.props.setSearchResults(results);
        });
    }
  };
  render() {
    return (
      <ViewContext.Consumer>
        {({ toggleSearch }) => {
          return (
            <div className="search-bar">
              <span role="img" aria-label="Request">
                🔍
              </span>
              <input
                className="search-bar-input"
                type="text"
                onChange={this.search}
                ref={this.songRef}
                placeholder="Request"
              />
              <button type="button" onClick={toggleSearch}>
                X
              </button>
            </div>
          );
        }}
      </ViewContext.Consumer>
    );
  }
}

export default SearchBar;
