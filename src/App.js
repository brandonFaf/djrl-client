import React from "react";
import "./App.css";
import Requests from "./Components/Requests";
import SearchBar from "./Components/SearchBar";
const App = () => {
  return (
    <div>
      <SearchBar />
      <Requests />
    </div>
  );
};

export default App;
