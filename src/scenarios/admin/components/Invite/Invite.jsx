import React from 'react'
import {Link} from 'react-router'
import * as loginModule from "../../../../actions/login-module.js"
import './Invite.css'

class Invite extends React.Component{
  constructor(props){



    super(props);
    this.state = {
      email : '',
      role : 0
    };
    this.onRoleChang = this.onRoleChang.bind(this);
  }
  onRoleChang(value){
    const {user} = this.state;
         this.setState({
      role : value
    });
  }
  render(){
    return(
      <div className="container-fluid">
        <div className="container">
        <h1 className="page-header">
          Invite
        </h1>
          <div className="site-signup">
            <div className="row">
              <div className="col-lg-5">
                <form id="form-signup" action="/site/signup" method="post" role="form">
                  <div className="form-group">
                    <label className="control-label" htmlFor="inviteform-email">Email</label>
                    <input className="form-control" id="inviteform-email" />
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="inviteform-role">Role</label>
                    <select className="form-control" value="" id="inviteform-role"
                            onChange={e => this.onRoleChange(e.target.value)}>
                      <option value={1}>Client</option>
                      <option value={5}>Manager</option>
                      <option value={10}>Admin</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary" name="signup-button">Signup</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Invite;

