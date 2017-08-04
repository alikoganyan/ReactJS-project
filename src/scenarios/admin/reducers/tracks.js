const initialState = [];

export default function tracks (state = initialState, action){
  if (action.type === 'ADD_TRACK') {
    const {tracks} = action;
    return [...state, tracks];
  }
  if (action.type === 'fetch_tracks_success') {
    const {tracks} = action;
    console.log(tracks);
    state.push(...tracks);
    console.log(state);
    return [...state];
  }
  return state;
}