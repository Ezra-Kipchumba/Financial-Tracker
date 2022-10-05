import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/balance">Balance</NavLink>
      <NavLink to="/transactionForm">TransactionForm</NavLink>
      <NavLink to="/transactionList">TransactionList</NavLink>
      <NavLink to="/Expense">Expense</NavLink>
    </div>
  );
}

export default NavBar;