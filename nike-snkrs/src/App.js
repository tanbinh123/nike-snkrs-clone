import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Menu from "./components/Menu";
import Feed from "./components/Feed";
import InStock from "./components/InStock";
import Upcoming from "./components/Upcoming";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Invalid from "./components/Invalid";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Redirect exact from='/' to='/launch' />
          <Route exact path="/launch" component={Feed} />
          <Route exact path="/s/in-stock" component={InStock} />
          <Route exact path="/s/upcoming" component={Upcoming} />
          <Route exact path="/product/:id" component={Product} />
          <Route component={Invalid} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
