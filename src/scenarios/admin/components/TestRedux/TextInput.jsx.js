import React from 'react';
import {connect} from 'react-redux';
import PostList from '../../../../components/PostsList/PostList.jsx';
import { getTracks } from './../../actions/tracks';
import { getUsers } from './../../actions/users';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddText = this.handleAddText.bind(this);
    this.handleFindTrack = this.handleFindTrack.bind(this);
  }

  componentDidMount(){
    console.log("component did mount getUsers")
    getUsers();
    console.log("getUsers");
  }

  handleAddText() {
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }
  handleFindTrack(){
    this.props.onFindTrack(this.findInput.value);
  }

  render() {
    const { tracks } = this.props;
    //console.log(this.props);
    return (
        <div>
          Test-Redux
          <input type="text" name="text" ref={(input)=>{this.trackInput = input}}/>
          <input type="button" name="add" value={'ADD'}
                 onClick={this.handleAddText}/>
          <input type="text" name="text" ref={(input)=>{this.findInput = input}} onChange={this.handleFindTrack}/>
          {/*<input type="button" name="find" value={"find"} onClick={this.handleFindTrack}/>*/}
          <div>
            <button onClick={this.props.onGetTracks}>Get Tracks</button>
          </div>
          <PostList tracks={tracks}/>
        </div>
    );
  }
}
const mapStateToProps = (state,ownProps)=>{
  return {
    tracks: state.tracks.filter((track)=>{return track.name.includes(state.filterTracks)}),
        playLists: state.playLists,
      filterTracks : state.filterTracks,
      ownProps
  }
};
export default connect(
    mapStateToProps,
    dispatch => ({
      onAddTrack: (name)=>{
         const tracks = {
          id : Date.now().toString(),
          name : name
        };
        dispatch({type: 'ADD_TRACK', tracks})
      },
      onFindTrack : (name)=>{
        dispatch({type: 'FIND_TRACK', tracks : name})
      },
      onGetTracks : ()=>{
        dispatch(getTracks())
      }
    }))(TextInput);