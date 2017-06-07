import React from 'react';
import css from './Account.css';

export default class Account extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className="row">
        <div className="col-lg-12">
          <h1 className="page-header">
            Dashboard <small>Statistics Overview</small>
          </h1>
          <ol className="breadcrumb">
            <li className="active">
              <i className="fa fa-dashboard"></i> Dashboard
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

// module.exports = AccountComponent;