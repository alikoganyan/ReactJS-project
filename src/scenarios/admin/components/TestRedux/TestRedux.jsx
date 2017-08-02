import React from 'react';
import {Link} from 'react-router';
import  {Provider} from 'react-redux';
import  {createStore} from 'redux';
import PropTypes from 'prop-types';

function playList(state = [], action) {
  if (action.type === 'ADD_TRACK') {
    const {payload} = action;
    return [...state, payload];
  }
  return state;
}
const store = createStore(playList);

console.log(store.getState());

store.subscribe(() => {
  //console.log('Subscribe', store.getState());
});

/*store.dispatch({type: 'ADD_TRACK', payload: 'Smells Like spirit'});
 store.dispatch({type: 'ADD_TRACK', payload: 'SECOND'});*/

class TestRedux extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddText = this.handleAddText.bind(this);
    this.state = {store: []};
  }

  handleAddText() {
    console.log(this.state);
    const text_val = document.getElementById('text_id').value;
    store.dispatch({type: 'ADD_TRACK', payload: text_val});
    this.setState({store: store.getState()});
    document.getElementById('text_id').value = '';
  }

  render() {
    const {store} = this.state;
    return (
        <duv>
          Test-Redux
          <input type="text" name="text" id="text_id"/>
          <input type="button" name="add" value={'ADD'}
                 onClick={this.handleAddText}/>
          <div>
            <ul> {store.map((item, index) => <li key={index}>{item}</li>)}</ul>
          </div>
        </duv>);
  }
}
export default TestRedux;