import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProtectedRoute, Loading } from './components/atoms';
import ROUTES from './routes';
import { useStateValue } from './store/StateProvider';
import { setUser } from './store/actions';
import { auth } from './firebase';
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser({ isAuthenticated: true, ...authUser }));
      } else {
        dispatch(setUser({ isAuthenticated: false }));
      }
    });
  }, [dispatch]);

  if (user === null) return <Loading />;

  return (
    <div className="App">
      <Router>
        <Switch>
          {ROUTES.map(({ isProtected, ...rest }) =>
            isProtected ? (
              <ProtectedRoute {...rest} auth={user.isAuthenticated} />
            ) : (
              <Route {...rest} />
            )
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
