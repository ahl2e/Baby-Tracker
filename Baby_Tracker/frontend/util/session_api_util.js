export const signup = (user)=> {
  return $.ajax({
    method: "POST",
    url: 'api/users',
    data: {user}
  });
};

export const login = (user) => {
  return fetch('api/users', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    data: {user},
    body: JSON.stringify(user), // body data type must match "Content-Type" header
  });
};

export const logout = () => {
  return fetch('api/session',{method: "DELETE"});
};
// export const login = user => {
//   return $.ajax({
//     method: 'POST',
//     url: '/api/session',
//     data: {user}
//   });
// };

// export const logout = () => {
//   return $.ajax({
//     method: "DELETE",
//     url: 'api/session',
//   });
// };
