import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <h1 className="display-4">Employee Directory</h1>
      <p className="lead">Enter the name of the desired employee in the search box.</p>
    </header>
  );
}

export default Header;