import React from 'react'
import {Link} from 'react-router'
import * as loginModule from "../../../../actions/login-module.js"
import './Users.css'


function UsersList(props) {
  const users = props.users;
  const listItems = users.map((user) =>
    <tr key={user.id} className="active">
      <td>{ user.id } </td>
      <td>{ user.username }</td>
      <td>{ user.email }</td>
      <td>{ user.role } </td>
      <td><Link to={"/admin/user-edit/" + user.id }>{"Edit"}</Link></td>
    </tr>
  );
  return (
    <thead>{listItems}</thead>

  );
}

class Users extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      users : []
    };
  }

  componentWillMount(){
    this.getUsers();
  }

  getUsers(){
    const self = this;
    loginModule.getUsers()
      .then(function (response) {
        response.json().then(function(data){
          self.setState({users : data});
          console.log(data);
        })
      })
  }



  render(){
    const { users } =  this.state;
    console.log(this.state);
    return(
    <div className="row">
      <div className="col-lg-12">
        <h1 className="page-header">
          Users
        </h1>
        <ol className="breadcrumb">
          <li className="active">
            <a href="/admin/user-invite" className="user_invite"><i className="fa fa-user"></i> Invite</a>
          </li>
        </ol>
        <div className="row">
          <div className="col-lg-6">
            <div className="table-responsive">
              <table className="table table-bordered table-hover table-striped">
                <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Edit</th>
                </tr>
                </thead>
                { users
                  &&
                  <UsersList users={ this.state.users} />
                }
              </table>
            </div>
          </div>
          <div className="col-lg-6">
          </div>
        </div>
      </div>
    </div>
    );
  }
}

module.exports = Users;
