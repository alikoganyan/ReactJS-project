import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tracks from './tracks';
import filterTracks from './filterTracks';
import playLists from './playLists';

export default combineReducers({
  routing: routerReducer,
  tracks,
  playLists,
  filterTracks
})