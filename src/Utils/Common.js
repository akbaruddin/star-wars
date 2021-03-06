// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
}

// set the token and user from the session storage
export const setUserSession = (token, user) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('user', user);
}

// generate token
export const randToken = _ => Math.random().toString(36).substr(2);
export const generateToken = _ => randToken() + randToken();

// user Details
export const getUser = () => {
  const userStr = sessionStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  else return null;
}