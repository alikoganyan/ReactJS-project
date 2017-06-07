import React from 'react';
import { browserHistory } from 'react-router';
import {isAuthAdmin} from "../../actions/login-module.js"

require("./Login.css");

 class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rememberMe : 0
    };
    console.log(this.state);
  }
   componentWillMount(){
     this.isAuthAdmin();
   }

   isAuthAdmin(){
     isAuthAdmin()
       .then(function(response){
         return response.json().then(function(data) {
           console.log(data.isAuthAdmin);
           if(data.isAuthAdmin === true || data.isAuthAdmin === 'true'){
             browserHistory.push('/admin');
           }
           return data;
         })
       }).catch(function(error){
       console.error(error.toString());
       //browserHistory.push('/login');
     });
   }

  handleLogin(){
    let newNote = {
      LoginForm:{
        username : this.state.username,
        password : this.state.password,
        rememberMe : this.state.rememberMe
      }
    };

   /* let myHeaders = new Headers();

    let loginForm  = new FormData();

    loginForm.append("LoginForm[username]" , this.state.username);
    loginForm.append("LoginForm[password]" , this.state.password);
    loginForm.append("LoginForm[rememberMe]" , this.state.rememberMe);

    myHeaders.append("Accept", "application/json; charset=utf-8");
    myHeaders.append("Content-Type", "application/json; charset=utf-8");
    myHeaders.append("Cookie", "advanced-backend=pp277blcrkj7illjftkbj0api7; _identity-backend=0b6b4ff248c90c4b254d4f752dc8a54a55a34b3caabef0a5903fbb56f0646a49a%3A2%3A%7Bi%3A0%3Bs%3A17%3A%22_identity-backend%22%3Bi%3A1%3Bs%3A46%3A%22%5B1%2C%22AT40uCaACmP-BJTZAp6EMSl9C6j-P31z%22%2C2592000%5D%22%3B%7D");
    console.log(myHeaders);*/
    //document.cookie = 'userName=[1,"AT40uCaACmP-BJTZAp6EMSl9C6j-P31z",0]';
    fetch('http://owl.yii.backend.local/api/login', {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      /*headers: {
        "Accept" : "application/json; charset=utf-8",
        "Content-Type" : "application/json; charset=utf-8",
        "Cookie" : "advanced-backend=pp277blcrkj7illjftkbj0api7; _identity-backend=0b6b4ff248c90c4b254d4f752dc8a54a55a34b3caabef0a5903fbb56f0646a49a%3A2%3A%7Bi%3A0%3Bs%3A17%3A%22_identity-backend%22%3Bi%3A1%3Bs%3A46%3A%22%5B1%2C%22AT40uCaACmP-BJTZAp6EMSl9C6j-P31z%22%2C2592000%5D%22%3B%7D"
      },*/
      mode: "cors",
      credentials: 'include',
      body: JSON.stringify(newNote)
    }).then(function(response){
      return response.json().then(function(json) {
        browserHistory.push('/admin');
      });
    });
  }

  render() {
    return (
      <div>
        <div className="login">
          <h1>Login to Web App</h1>
          <form method="post" action="index.html">
            <p><input type="text" name = "username"   onChange={(event)=>{this.state.username = event.target.value} } placeholder="Username or Email" /></p>
            <p><input type="password" name="password" onChange={(event)=>{this.state.password = event.target.value} } placeholder="Password" /></p>
            <p className="remember_me">
              <label>
                <input type="checkbox" name = "rememberMe" id="remember_me" onChange={(event)=>{  this.state.rememberMe = event.target.checked ? 1 : 0} } />
                  {"Remember Me"}
              </label>
            </p>
            <p className="submit">
              <input type="button" value={"login"} name="login" onClick={ this.handleLogin.bind(this) }  />
            </p>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = Login;