import React from "react";
import "./App.css";
import RequestList from "./Components/RequestList";
import Search from "./Components/Search/Search";
import { ViewContext } from "./Contexts/ViewStore";
const App = () => {
  return (
    <div>
      <ViewContext.Consumer>
        {({ showSearch, toggleSearch }) =>
          showSearch ? <Search /> : <RequestList toggleSearch={toggleSearch} />
        }
      </ViewContext.Consumer>
    </div>
  );
};

export default App;
