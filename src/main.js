
import ReactDOM from 'react-dom'
import React from 'react'

import '!style!css!bootstrap/dist/css/bootstrap.min.css';

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
import './css/main.css';
import './css/admin/morris.css'
import './css/admin/sb-admin.css'

import  Login  from "./components/Login/Login.jsx"
import  Account from "./components/Account/Account.jsx"
import  App  from "./components/App/App.jsx"
import  Header  from "./components/Header/Header.jsx"
import  Footer  from "./components/Footer/Footer.jsx"
import  AdminHome  from "./scenarios/admin/Home.jsx"
import  Users  from "./scenarios/admin/components/Users/Users.jsx"
import  UserEdit  from "./scenarios/admin/components/UserEdit/UserEdit.jsx"
import  Invite  from "./scenarios/admin/components/Invite/Invite.jsx"
import  TestRedux  from "./scenarios/admin/components/TestRedux/TestRedux.jsx"
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import PropTypes from 'prop-types';


 // import { HashRouter } from 'react-router-dom'
// import { Route, IndexRoute } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>

    <Route path={'/'} component={ Header }>
      <IndexRoute component={ Login } />
      <Route path={'/login'} component={ Login } />
    </Route>

    <Route path={'admin'} components={ AdminHome }>
      <IndexRoute component={ Account } />
      <Route path={'account'} component={ Account } />
      <Route path={'users'} component={ Users } />
      <Route path={'user-edit/:userId'} component={ UserEdit } />
      <Route path={'user-invite'} component={ Invite } />
      <Route path={'test-redux'} component={ TestRedux } />
    </Route>

  </Router>,
  document.getElementById('mount-point')
);

