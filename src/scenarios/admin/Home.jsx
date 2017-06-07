
import ReactDOM from 'react-dom'
import React from 'react'
import Account from '../../components/Account/Account.jsx'
import { browserHistory } from 'react-router'
import * as loginModule from "../../actions/login-module.js"
import Nav from "../../scenarios/admin/components/Nav/Nav.jsx"
import styles from "./Home.css";

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentWillMount(){
    this.isAuthAdmin();
  }

  isAuthAdmin(){
    const self = this;
    loginModule.isAuthAdmin()
      .then(function(response){
      if(response.status !== 200 ){
        //browserHistory.push('/login');
      }
      return response.json().then(function(data) {
        if(data.isAuthAdmin === false || data.isAuthAdmin === 'false'){
          browserHistory.push('/login');
        }
        return data;
      })
    }).then(function(data){
      self.setState({user:data});
    }).catch(function(error){
      console.error(error);
      //browserHistory.push('/login');
    });
  }

  render(){
    console.log(this.state);
    return(
      <div id="wrapper" >
        <Nav user = {this.state.user}/>
        <div id="page-wrapper" >
          <div className="container-fluid">
            {this.props.children}
          </div>
        </div>
      </div>
  );
  }
}

module.exports = Home;


