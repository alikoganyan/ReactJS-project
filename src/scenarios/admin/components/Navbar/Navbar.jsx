import React from 'react'
import {Link} from 'react-router'
import { browserHistory } from 'react-router'

import * as loginModule from "../../../../actions/login-module.js"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  logout(){
    loginModule.logout()
      .then(function(response){
        response.json().then(function(data){
          if(data.action === true){
            browserHistory.push('/login');
          }
          console.log(data);
        });
      });
  }
  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <ul className="nav navbar-right top-nav">
        <li className="dropdown">
          <Link href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-envelope"></i> <b className="caret"></b></Link>
          <ul className="dropdown-menu message-dropdown">
            <li className="message-preview">
              <Link href="#">
                <div className="media">
                                    <span className="pull-left">
                                        <img className="media-object" src="http://placehold.it/50x50" alt="" />
                                    </span>
                  <div className="media-body">
                    {user && <h5 className="media-heading"><strong>{ user.email  + " ("+ user.username+") " }</strong>
                      </h5>}

                    <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                    <p>Lorem ipsum dolor sit amet, consectetur...</p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="message-preview">
              <Link href="#">
                <div className="media">
                                    <span className="pull-left">
                                        <img className="media-object" src="http://placehold.it/50x50" alt=""/>
                                    </span>
                  <div className="media-body">
                    <h5 className="media-heading"><strong>John Smith</strong>
                    </h5>
                    <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                    <p>Lorem ipsum dolor sit amet, consectetur...</p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="message-preview">
              <Link href="#">
                <div className="media">
                                    <span className="pull-left">
                                        <img className="media-object" src="http://placehold.it/50x50" alt=""/>
                                    </span>
                  <div className="media-body">
                    <h5 className="media-heading"><strong>John Smith</strong>
                    </h5>
                    <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                    <p>Lorem ipsum dolor sit amet, consectetur...</p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="message-footer">
              <Link href="#">Read All New Messages</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bell"></i> <b className="caret"></b></Link>
          <ul className="dropdown-menu alert-dropdown">
            <li>
              <Link href="#">Alert Name <span className="label label-default">Alert Badge</span></Link>
            </li>
            <li>
              <Link href="#">Alert Name <span className="label label-primary">Alert Badge</span></Link>
            </li>
            <li>
              <Link href="#">Alert Name <span className="label label-success">Alert Badge</span></Link>
            </li>
            <li>
              <Link href="#">Alert Name <span className="label label-info">Alert Badge</span></Link>
            </li>
            <li>
              <Link href="#">Alert Name <span className="label label-warning">Alert Badge</span></Link>
            </li>
            <li>
              <Link href="#">Alert Name <span className="label label-danger">Alert Badge</span></Link>
            </li>
            <li className="divider"></li>
            <li>
              <Link href="#">View All</Link>
            </li>
          </ul>
        </li>
        {user &&
        <li className="dropdown">
          <Link href="#" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-user"></i>
            { user.email  + " ("+ user.username+") " }
            <b className="caret"></b>
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link href="#"><i className="fa fa-fw fa-user"></i> Profile</Link>
            </li>
            <li>
              <Link href="#"><i className="fa fa-fw fa-envelope"></i> Inbox</Link>
            </li>
            <li>
              <Link href="#"><i className="fa fa-fw fa-gear"></i> Settings</Link>
            </li>
            <li className="divider"></li>
            <li>
              <Link href="javascript:void(0)" onClick={ this.logout.bind(this) } ><i className="fa fa-fw fa-power-off"></i> Log Out</Link>
            </li>
          </ul>
        </li>}

      </ul>
    );
  }
}

module.exports = Navbar;