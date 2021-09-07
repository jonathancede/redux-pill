import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Home-style.css";

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    history.push("/search");
  }

  return (
    <main>
      <div id="main-left">
        <p id="page-description-title">Simple and direct.</p>
        <p id="page-description-body">
          Just type the name of the city you are looking for and we will do the
          job for you. What are you waiting for to find the home you deserve?
        </p>
      </div>
      <div id="main-right">
        <form onSubmit={handleSubmit}>
          <img src="./icons/icon-search.png" alt="icon" />
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={handleChange}
          />
        </form>
      </div>
    </main>
  );
}

export default Home;
