import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes/routes'
import { GobalStyle } from './globalSttyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import NavBar from './components/NavBar'

function App() {
  const showContentMenu = (routes) => {
    var result = null;

    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }

    return result;
  }
  return (
    <Router>
      <GobalStyle />
      <NavBar/>
      <Switch>
        {showContentMenu(routes)}
      </Switch>
    </Router>
  );
}

export default App;
