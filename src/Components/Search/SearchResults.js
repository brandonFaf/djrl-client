import React, { Component } from "react";
import { addRequest } from "../../data/requestsApi";

class SearchResults extends Component {
  submitSong = (name, artist) => {
    addRequest(name, artist).then(docRef => {
      const userUpvotes =
        JSON.parse(localStorage.getItem(new Date().toDateString())) || [];
      userUpvotes.push(docRef.id);
      localStorage.setItem(
        new Date().toDateString(),
        JSON.stringify(userUpvotes)
      );
    });
  };
  render() {
    console.log(this.props.results);
    return (
      <ul>
        {this.props.results.map(({ name, artist, image }, i) => (
          <li key={i}>
            <img alt={name} src={image[0]["#text"]} />
            {name} - {artist}{" "}
            <button onClick={() => this.submitSong(name, artist)}>
              ⊕ *add*
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default SearchResults;
