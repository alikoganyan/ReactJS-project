import api from './../../api';

function usersRequest(){
  return { type : "USERS_REQUEST"}
}

function usersSuccess(response){
  return {
    type : "USERS_SUCCESS",
    data : response
  }
}

function usersError(error){
  return {
    type : "USERS_SUCCESS",
    data : response
  }
}

export function getUsers(){
  return async dispatch => {
    console.log("sdfsdf");
    //dispatch(usersRequest());
    try{
      const response = await api.Get('/get-users',{
        headers: {
          "Accept" : "application/json; charset=utf-8"
        }
      });
      console.log(response);
      //dispatch(usersSuccess(response));
    }
    catch (error){
      console.log(error);
      //dispatch(usersError(error))
    }
  }
}