import React from "react"
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Balance from "./Balance";
import NavBar from "./Navbar";
import Home from "./Home";
import TransactionsList from "./TransactionList";


function App() {


  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/balance" component={Balance} />
            <Route exact path="/" component={TransactionsList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
