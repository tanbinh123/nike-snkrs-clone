import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/product/'>
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
