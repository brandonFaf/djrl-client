import React, { Component, createContext } from "react";
export const ViewContext = createContext();

class ViewStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
      toggleSearch: this.toggleSearch
    };
  }
  toggleSearch = () => {
    this.setState({ showSearch: !this.state.showSearch });
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
