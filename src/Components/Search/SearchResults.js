import React, { Component } from "react";
import { addRequest } from "../../data/requestsApi";
import { RequestsContext } from "../../Contexts/RequestsStore";
import SearchResultItem from "./SearchResultItem";
import Request from "../Request";

class SearchResults extends Component {
  submitSong = (name, artist, image) => {
    addRequest(name, artist, image).then(docRef => {
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
    return (
      <>
        <div>
          <RequestsContext.Consumer>
            {({ upvote }) =>
              this.props.results
                .filter(x => x.requested || x.played)
                .map((result, i) => (
                  <Request
                    key={i}
                    request={{
                      ...result,
                      title: result.name,
                      image: result.image
                    }}
                    upvote={upvote}
                  />
                ))
            }
          </RequestsContext.Consumer>
        </div>
        <hr />
        <div className="requests">
          {this.props.results
            .filter(x => !x.requested && !x.played)
            .map(({ name, artist, image }, i) => (
              <Request
                key={i}
                request={{ title: name, artist, image }}
                addSong={() => this.submitSong(name, artist, image)}
              />
            ))}
        </div>
      </>
    );
  }
}

export default SearchResults;
