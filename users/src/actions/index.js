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
