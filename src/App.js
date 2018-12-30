import React from "react";
import "./App.css";
import Requests from "./Components/Requests";
import Search from "./Components/Search/Search";
import { ViewContext } from "./Contexts/ViewStore";
const App = () => {
  return (
    <div>
      <ViewContext.Consumer>
        {({ showSearch, toggleSearch }) =>
          showSearch ? <Search /> : <Requests toggleSearch={toggleSearch} />
        }
      </ViewContext.Consumer>
    </div>
  );
};

export default App;
