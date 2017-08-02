import React from 'react';
import { browserHistory } from 'react-router';
import './UserEdit.css'
import * as loginModule from "../../../../actions/login-module.js"
import {Link} from 'react-router'


class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
    this.updateRole = this.updateRole.bind(this);
  }
  componentWillMount(){
    this.getUserById();
  }

  getUserById() {
    const self = this;
    loginModule.getUserById(this.props.params.userId)
      .then(function (response) {
        response.json()
          .then(function(data){
            self.setState({user:data});
          });
      });
  }

  onRoleChange(value){
    const {user} = this.state;
    user.role = value;
    this.setState({
      user : user
    });
  }
  updateRole(){
    console.log(this.state.user);

    loginModule
      .updateUserRole(this.state.user);
     /* .then(function(response){
      });*/
  }

  render() {
    const { user } = this.state;
    let role = user.role;
    return (
      <div className="row">
        <div className="col-md-12">
          <Link to="/admin/users">Back</Link>
        </div>
        <div className="col-md-6">
          <div className="container">
            <table className="table">
              <tbody>
              <tr>
                <td>Username:</td>
                <td>{user.username}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td><label>Role:</label></td>
                <td>
                  <div className="form-group">

                    <select className="form-control" value={ user.role }
                            onChange={e => this.onRoleChange(e.target.value)}
                      /*onChange={(event)=>{
                       console.log(user.role);
                       this.state.user.role = event.target.value}}*/>
                      <option value={1}>Client</option>
                      <option value={5}>Manager</option>
                      <option value={10}>Admin</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td></td><td><button className="btn btn-success owl-user-save" onClick={ this.updateRole}>SAVE</button></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    );
  }
}

export default UserEdit;