import React from 'react';
import {Link} from 'react-router'

export default class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="wrap">
        <div id="regbar">
          <div id="navthing">
            <h2>
              {/*<Link to='/login'>Login</Link> | <Link to='/signup'>Registration</Link>*/}
            </h2>
              {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}