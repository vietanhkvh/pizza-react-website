import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes/routes'
import { GobalStyle } from './globalSttyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import 'antd/dist/antd.css';
import NavBar from './components/NavBar'

function App(props) {
  const showContentMenu = (routes) => {
    var result = null;
    // localStorage.setItem("user_id",null);
    routes[6].path="/user/id="+props.account.user.id;
    localStorage.setItem("accessToken",false);
    localStorage.setItem("total-cart-amount",0);
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
    else {
      console.log("null");
    }

    return result;
  }
  return (
    <Router>
      <GobalStyle />
      <NavBar/>
      <Switch>
        {showContentMenu(routes)}
        {routes.map(route=>{
          console.log(route.path)
        })}
      </Switch>
    </Router>
  );
}
const mapStateToProps=state=>{
  return{
    account: state.accounts
  }
}
export default connect(mapStateToProps) (App);
