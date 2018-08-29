import { combineReducers } from 'redux';

// you can keep this reducer in another file and import it from there
// I have kept it here for simplifying
// I would recommend you to break the reducers and actions as well
const appReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TEXT_CHANGE':
      return {
        text: action.text
      }
    default:
      return state
  }
}

export default combineReducers({
  appReducer
});
