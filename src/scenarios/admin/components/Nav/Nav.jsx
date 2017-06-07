import React  from 'react'
import NavbarHeader from '../NavbarHeader/NavbarHeader.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import LeftMenu from '../LeftMenu/LeftMenu.jsx'

class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state  = parent.state;

    //console.log(this.props);
  }
  render(){
    const { user  }  = this.props;
    console.log(user);
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <NavbarHeader />
        <Navbar user = { user }/>
        <LeftMenu/>
      </nav>
    );
  }
}
module.exports = Nav;