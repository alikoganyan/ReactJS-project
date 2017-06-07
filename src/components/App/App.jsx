import React  from 'react'
import {Link} from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li>
            <Link to='/account'>Account</Link>
          </li>
          <li>
            <Link to='/admin'>Admin</Link>
          </li>
          {/*<li>
            <Link to='/account'>account</Link>
          </li>*/}
        </ul>
        {/* добавили вывод потомков */}
        {this.props.children}
      </div>
    )
  }
}
module.exports = App;