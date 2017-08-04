
export const getTracks = ()=> dispatch => {
  setTimeout(()=>{
    const mockApiData = [];
    for(let i = 0; i<10 ; i++){
      mockApiData.push({
        id : Math.ceil(Math.random()*1000000000),
        name : "Enter "+ Math.ceil(Math.random()*1000000000)
      })
    }
    dispatch({type: 'fetch_tracks_success', tracks: mockApiData});
  },2000)
};