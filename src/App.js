import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ROUTES from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      	<Switch>
					{
						ROUTES.map((props) => (
							<Route {...props} />
						))
					}
      	</Switch>
      </Router>
    </div>
  );
}

export default App;
