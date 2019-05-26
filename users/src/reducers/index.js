import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL
} from "../actions";

const initialState = {
  users: [],
  user: "",
  fetchingUsers: false,
  fetchingUser: false,
  deletingUser: false,
  addingUser: false,
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
    case ADD_USER_START:
      return {
        ...state,
        addingUser: true,
        error: ""
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        addingUser: false
      };
    case ADD_USER_FAIL:
      return {
        ...state,
        addingUser: false,
        error: action.payload
      };
    case FETCH_USER_START:
      return {
        ...state,
        fetchingUser: true,
        error: ""
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        fetchingUser: false,
        user: action.payload
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        fetchingUser: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
