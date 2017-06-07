export function isAuthAdmin(){
  return fetch('http://owl.yii.backend.local/api/isadmin', {
    method: 'GET',
    headers: {
      "Accept" : "application/json; charset=utf-8"
    },
    mode: "cors",
    credentials: 'include',
    cache: 'default'
  });
}
export function getUser(){
  return fetch('http://owl.yii.backend.local/api/get-user', {
    method: 'GET',
    headers: {
      "Accept" : "application/json; charset=utf-8"
    },
    mode: "cors",
    credentials: 'include',
    cache: 'default'
  });
}
export function logout(){
  return fetch('http://owl.yii.backend.local/api/logout', {
    method: 'POST',
    headers: {
      "Accept" : "application/json; charset=utf-8"
    },
    mode: "cors",
    credentials: 'include',
    cache: 'default'
  });
}
export function getUsers(){
  return fetch ('http://owl.yii.backend.local/api/get-users',{
    method : 'GET',
    headers: {
      "Accept" : "application/json; charset=utf-8"
    },
    mode: "cors",
    credentials: 'include',
    cache: 'default'
  })
}
export function getUserById(id){
  console.log(id);
  return fetch ('http://owl.yii.backend.local/api/get-user-by-id?id=' + id,{
    method : 'GET',
    headers: {
      "Accept" : "application/json; charset=utf-8"
    },
    mode: "cors",
    credentials: 'include',
    cache: 'default'
  })
}

export function updateUserRole(user){
  let formData  = { FormData : user };
  let loginForm  = new FormData();
  let query = '';
  loginForm.append("FormData[id]" , user.id);
  loginForm.append("FormData[username]" , user.emial);
  loginForm.append("FormData[role]" , user.role);
  // console.log(encodeURIComponent(JSON.stringify(formData)));

  for (let key in user) {
    query += encodeURIComponent(key)+"="+encodeURIComponent(user[key])+"&";
  }
  console.log(query);
  return fetch('http://owl.yii.backend.local/api/update-role?XDEBUG_SESSION_START=17268', {
    method: 'POST',
    headers: {
       //"Accept" : "application/json; charset=utf-8",
       // "Content-type" : "application/json; charset=UTF-8",
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    mode: "cors",
    credentials: 'include',
    cache: 'default',
    body: query
  });
}