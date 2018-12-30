import React, { Component } from "react";
import { addRequest } from "../../data/requestsApi";
import { RequestsContext } from "../../Contexts/RequestsStore";

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
      this.props.toggleSearch();
    });
  };
  render() {
    console.log(this.props.results);
    return (
      <ul>
        <RequestsContext.Consumer>
          {({ upvote }) =>
            this.props.results
              .filter(x => x.requested)
              .map(
                ({ name, artist, image, id, upvotes, alreadyUpvoted }, i) => (
                  <li key={i}>
                    <img alt={name} src={image[0]["#text"]} />
                    {name} - {artist} {upvotes}
                    {!alreadyUpvoted && (
                      <button
                        style={{ marginLeft: 10 }}
                        onClick={() => upvote(id, ++upvotes)}
                      >
                        {" "}
                        ↑{" "}
                      </button>
                    )}{" "}
                  </li>
                )
              )
          }
        </RequestsContext.Consumer>

        <hr />
        {this.props.results
          .filter(x => !x.requested)
          .map(({ name, artist, image }, i) => (
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
