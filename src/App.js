import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LayoutAdmin } from './components/templates';
import { Home } from './containers';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      	<Switch>
	  <Route exact path="/">
	    <LayoutAdmin>
	      <Home />
	    </LayoutAdmin>
	  </Route>
      	</Switch>
      </Router>
    </div>
  );
}

export default App;
