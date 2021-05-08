import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Product from "./components/Product";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route exact path="/product/:id" component={Product} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
