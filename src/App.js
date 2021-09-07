import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/search" render={() => <Search />} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
