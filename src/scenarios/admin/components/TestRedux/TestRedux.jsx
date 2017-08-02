import React from 'react';
import {Link} from 'react-router';
import  {Provider} from 'react-redux';
import  {createStore} from 'redux';
import PropTypes from 'prop-types';
import TextInput from './TextInput.jsx';

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

  render() {
    return (
    <Provider store={store}>
      <TextInput/>
    </Provider>);
  }
}
export default TestRedux;