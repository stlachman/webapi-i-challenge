import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL
} from "../actions";

const initialState = {
  users: [],
  fetchingUsers: false,
  deletingUser: false,
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
    case DELETE_USER_START:
      return {
        ...state,
        deletingUser: true,
        error: false
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        deletingUser: false
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        deletingUser: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
