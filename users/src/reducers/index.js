import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL
} from "../actions";

const initialState = {
  users: [],
  fetchingUsers: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
      return {
        ...state,
        fetchingUsers: true,
        error: ""
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        fetchingUsers: false,
        users: action.payload
      };
    case FETCH_USERS_FAIL:
      return {
        ...state,
        fetchingUsers: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
