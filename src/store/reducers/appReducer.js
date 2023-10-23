import actionTypes from "../actions/actionTypes";
// prevent undefined error
const initState = {
  homeData: [1, 2, 3],
  test: "Hello MF",
};

// assign starting value for state
const appReducer = (state = initState, action) => {
  //use switch case to decide what action should be executed
  switch (action.type) {
    case actionTypes.GET_HOME:
      return state;

    default:
      return state;
  }
};
export default appReducer;
