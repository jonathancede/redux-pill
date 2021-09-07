import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/search" render={() => <Search />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
