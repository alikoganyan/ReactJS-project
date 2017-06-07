import React from 'react'
import {Link} from 'react-router'

class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav side-nav">
          <li className="active">
            <Link href="index.html"><i className="fa fa-fw fa-dashboard"></i> Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/users"><i className="fa fa-user fa-fw"></i> {"Users"} </Link>
          </li>
          <li>
            <Link href="tables.html"><i className="fa fa-fw fa-table"></i> Tables</Link>
          </li>
          <li>
            <Link href="forms.html"><i className="fa fa-fw fa-edit"></i> Forms</Link>
          </li>
          <li>
            <Link href="bootstrap-elements.html"><i className="fa fa-fw fa-desktop"></i> Bootstrap Elements</Link>
          </li>
          <li>
            <Link href="bootstrap-grid.html"><i className="fa fa-fw fa-wrench"></i> Bootstrap Grid</Link>
          </li>
          <li>
            <Link href="javascript:void(0)" data-toggle="collapse" data-target="#demo"><i className="fa fa-fw fa-arrows-v"></i> Dropdown <i className="fa fa-fw fa-caret-down"></i></Link>
            <ul id="demo" className="collapse">
              <li>
                <Link href="#">Dropdown Item</Link>
              </li>
              <li>
                <Link href="#">Dropdown Item</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="blank-page.html"><i className="fa fa-fw fa-file"></i> Blank Page</Link>
          </li>
          <li>
            <Link href="index-rtl.html"><i className="fa fa-fw fa-dashboard"></i> RTL Dashboard</Link>
          </li>
        </ul>
      </div>
    );
  }
}

module.exports = LeftMenu;
