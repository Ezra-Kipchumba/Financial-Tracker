import React from "react"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Balance from "./Balance";
import NavBar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Signup from "./Signup"
import Footer from "./Footer";



function App() {


  return (
    <div>
    <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/balance" component={Balance} />
            <Route path="/about" component={About} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
        <Footer />
        </Router>
      </div>
    
  );
}

export default App;
