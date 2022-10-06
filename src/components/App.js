import React from "react"
// import { Route, BrowserRouter as Router } from "react-router-dom";
// import NavBar from "./Navbar";
// import Home from "./Home";
import Balance from "./Balance";
// import Expense from "./Expense";

function App() {


  return (
    <div className="container">
      <Balance />
      {/* <NavBar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/" component={Balance} />
        <Route path="/" component={Expense} />
      </Router> */}
    </div>
  );
}

export default App;
