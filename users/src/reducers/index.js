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
  EDIT_USER_START,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL
} from "../actions";

const initialState = {
  users: [],
  user: "",
  fetchingUsers: false,
  deletingUser: false,
  addingUser: false,
  editingUser: false,
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
    case EDIT_USER_START:
      return {
        ...state,
        editingUser: true,
        error: ""
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        editingUser: false
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        editingUser: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
