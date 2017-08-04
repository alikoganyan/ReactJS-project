import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import PropTypes from 'prop-types';

import  {Provider} from 'react-redux';
import  {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from  'redux-thunk';
import reducer from './scenarios/admin/reducers';


import {syncHistoryWithStore } from 'react-router-redux';

import '!style!css!bootstrap/dist/css/bootstrap.min.css';

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
import './css/main.css';
import './css/admin/morris.css';
import './css/admin/sb-admin.css';

import  Login  from './components/Login/Login.jsx';
import  Account from './components/Account/Account.jsx';
import  App  from './components/App/App.jsx';
import  Header  from './components/Header/Header.jsx';
import  Footer  from './components/Footer/Footer.jsx';
import  AdminHome  from './scenarios/admin/Home.jsx';
import  Users  from './scenarios/admin/components/Users/Users.jsx';
import  UserEdit  from './scenarios/admin/components/UserEdit/UserEdit.jsx';
import  Invite  from './scenarios/admin/components/Invite/Invite.jsx';
import  TextInput  from './scenarios/admin/components/TestRedux/TextInput.jsx';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// import { HashRouter } from 'react-router-dom'
// import { Route, IndexRoute } from 'react-router'
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>

        <Route path={'/'} component={ Header }>
          <IndexRoute component={ Login }/>
          <Route path={'/login'} component={ Login }/>
        </Route>

        <Route path={'admin'} components={ AdminHome }>
          <IndexRoute component={ Account }/>
          <Route path={'account'} component={ Account }/>
          <Route path={'users'} component={ Users }/>
          <Route path={'user-edit/:userId'} component={ UserEdit }/>
          <Route path={'user-invite'} component={ Invite }/>
          <Route path={'test-redux'} component={ TextInput }/>
        </Route>

      </Router>
    </Provider>,
    document.getElementById('mount-point'),
);

