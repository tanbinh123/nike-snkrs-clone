import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Menu from "./components/menu";
import Feed from "./components/feed";
import Product from "./components/product-page";
import Footer from "./components/footer";
import Invalid from "./components/invalid";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Redirect exact from="/" to="/launch" />
          <Route
            exact
            path="/launch"
            component={(props) => <Feed {...props} products="feed" />}
          />
          <Route
            exact
            path="/in-stock"
            component={(props) => <Feed {...props} products="in-stock" />}
          />
          <Route
            exact
            path="/upcoming"
            component={(props) => <Feed {...props} products="upcoming" />}
          />
          <Route exact path="/product/:id" component={Product} />
          <Route component={Invalid} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
