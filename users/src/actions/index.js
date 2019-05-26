import axios from "axios";

export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

export const fetchUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_START });

  return axios
    .get(`http://localhost:5000/api/users`)
    .then(res => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USERS_FAIL, payload: err });
    });
};

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export const deleteUser = id => dispatch => {
  dispatch({ type: DELETE_USER_START });

  return axios
    .delete(`http://localhost:5000/api/users/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_USER_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: DELETE_USER_FAIL, payload: err });
    });
};

export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAIL = "ADD_USER_FAIL";

export const addUser = user => dispatch => {
  dispatch({ type: ADD_USER_START });

  return axios
    .post(`http://localhost:5000/api/users/`, user)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
