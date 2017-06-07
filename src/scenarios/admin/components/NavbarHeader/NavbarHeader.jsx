import React from 'react'
import {Link} from 'react-router'

class NavbarHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="index.html">SB Admin</a>
      </div>
    );
  }
}

module.exports = NavbarHeader;
