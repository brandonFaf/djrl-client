import React, { Component, createContext } from "react";
export const ViewContext = createContext();

class ViewStore extends Component {
  constructor(props) {
    super(props);
    const loggedIn = !!localStorage.getItem("partyName");

    this.state = {
      toggleSearch: this.toggleSearch,
      setLoggedIn: this.setLoggedIn,
      logOut: this.logOut,
      showSearch: false,
      loggedIn
    };
  }
  logOut = () => {
    localStorage.removeItem("partyName");
    this.setState({ loggedIn: false });
  };
  toggleSearch = () => {
    this.setState({ showSearch: !this.state.showSearch });
  };
  setLoggedIn = () => {
    this.setState({ loggedIn: true });
  };
  render() {
    return (
      <ViewContext.Provider value={this.state}>
        {this.props.children}
      </ViewContext.Provider>
    );
  }
}

export default ViewStore;
