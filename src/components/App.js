import React from "react"
import { Route, Switch } from "react-router-dom";
import Balance from "./Balance";
import TransactionForm from "./TransactionForm";
import TransactionsList from "./TransactionList";
import NavBar from "./Navbar";
import Home from "./Home"
import Expense from "./Expense";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/balance" component={Balance} />
        <Route path="/transactionList" component={TransactionsList} />
        <Route path="/transactionForm" component={TransactionForm} />
        <Route path="/expense" component={Expense} />
      </Switch>
    </div>
  );
}

export default App;
