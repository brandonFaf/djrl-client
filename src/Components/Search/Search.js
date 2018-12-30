import React, { Component } from "react";
import SearchBar from "../SearchBar";
import SearchResults from "./SearchResults";

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
        <SearchBar setSearchResults={this.setSearchResults} />
        <SearchResults results={this.state.results} />
      </>
    );
  }
}

export default Search;
