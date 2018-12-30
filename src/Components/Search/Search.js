import React, { Component } from "react";
import SearchBar from "../SearchBar";
import SearchResults from "./SearchResults";
import { RequestsContext } from "../../Contexts/RequestsStore";
import { ViewContext } from "../../Contexts/ViewStore";
class Search extends Component {
  state = {
    results: []
  };
  setSearchResults = results => {
    this.setState({ results });
  };
  render() {
    return (
      <>
        <RequestsContext.Consumer>
          {({ requests }) => (
            <SearchBar
              requests={requests}
              setSearchResults={this.setSearchResults}
            />
          )}
        </RequestsContext.Consumer>
        <ViewContext.Consumer>
          {({ toggleSearch }) => (
            <SearchResults
              toggleSearch={toggleSearch}
              results={this.state.results}
            />
          )}
        </ViewContext.Consumer>
      </>
    );
  }
}

export default Search;
