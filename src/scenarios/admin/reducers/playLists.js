const initialState = ["123","456","789","777"];

export default function playLists (state = initialState, action){
  if (action.type === 'ADD_TRACK') {
    const {playLists} = action;
    return [...state, playLists];
  }
  return state;
}