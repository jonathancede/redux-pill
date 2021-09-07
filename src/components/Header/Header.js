import React from "react";

import "./Header-style.css";

function Header() {
  return (
    <header>
      <div id="logo">
        <img src="./icons/icon-logo.png" alt="logo" />
        <div id="text-logo">
          <div>Housing</div>
          <div>Marketing</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
