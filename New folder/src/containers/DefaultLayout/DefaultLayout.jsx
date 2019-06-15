import React, { Component } from 'react';
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';

import navigation from '../../nav';
// routes config
import routes from '../../routes';
import bgImage from "../../assets/img/background-img.jpg"


class DefaultLayout extends Component {
    constructor(props) {
        super(props);
      }


  render() {
      let tmpRoutes = routes;
    return (
        <Switch>
              {tmpRoutes.map((route, idx) => {
                return  <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                    <route.component {...props}/>
                )} /> })}
              <Redirect from="/" to="/home" />
            </Switch>
    );
  }
}

export default DefaultLayout;