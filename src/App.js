import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/atoms';
import ROUTES from './routes';
import { useStateValue } from './store/StateProvider';
import './App.css';

function App() {
	const [{ user }] = useStateValue();
  return (
    <div className="App">
      <Router>
      	<Switch>
					{
						ROUTES.map(({ isProtected, ...rest }) => {
							return isProtected 
								? <ProtectedRoute {...rest} auth={user.isAuthenticated} /> 
								: <Route {...rest} />
						})
					}
      	</Switch>
      </Router>
    </div>
  );
}

export default App;
