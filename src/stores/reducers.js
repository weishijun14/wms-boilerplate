import initialState from "./index";

function login(state = initialState, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        login: true
      };
    case "logout":
      return {
        ...state,
        login: false
      };
    default:
      return state;
  }
}

export default login;
