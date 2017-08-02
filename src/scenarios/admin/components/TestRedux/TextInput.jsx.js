import React from 'react';
import {connect} from 'react-redux';
import PostList from '../../../../components/PostsList/PostList.jsx';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddText = this.handleAddText.bind(this);
  }

  handleAddText() {
    console.log("ADD_TRACK", this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
    console.log(this.props.testStore);
  }

  render() {
    const { testStore } = this.props;
    return (
        <div>
          Test-Redux
          <input type="text" name="text" ref={(input)=>{this.trackInput = input}}/>
          <input type="button" name="add" value={'ADD'}
                 onClick={this.handleAddText}/>
          <PostList postList={testStore}/>
        </div>
    );
  }
}
export default connect(
    state => ({
      testStore: state,
    }),
    dispatch => ({
      onAddTrack: (text_val)=>{
        dispatch({type: 'ADD_TRACK', payload: text_val})
      }
    }),
)(TextInput);