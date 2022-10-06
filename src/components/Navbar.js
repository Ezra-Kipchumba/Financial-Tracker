import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "9px",
    paddingRight: "34px",
    margin: "20px 66px 6px",
    background: "blue",
    textDecoration: "none",
    fontSize:"24px",
    color: "white",
    borderRadius: "6px",
  };
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/balance"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Balance
      </NavLink>
      <NavLink
        to="/expense"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Expense
      </NavLink>
      <NavLink
        to="/transactionList"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        TransactionList
      </NavLink>
    </div>
  );
}

export default NavBar;