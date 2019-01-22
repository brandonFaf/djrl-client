import React from "react";
import "./App.css";
import RequestList from "./Components/RequestList";
import Search from "./Components/Search/Search";
import { ViewContext } from "./Contexts/ViewStore";
import LogInPage from "./Components/LogInPage";
import RequestStore from "./Contexts/RequestsStore";
const App = () => {
  return (
    <div className="app">
      <ViewContext.Consumer>
        {({ showSearch, toggleSearch, loggedIn, setLoggedIn, logOut }) =>
          loggedIn ? (
            <RequestStore>
              {showSearch ? (
                <Search />
              ) : (
                <RequestList toggleSearch={toggleSearch} logOut={logOut} />
              )}
            </RequestStore>
          ) : (
            <LogInPage setLoggedIn={setLoggedIn} />
          )
        }
      </ViewContext.Consumer>
    </div>
  );
};

export default App;
