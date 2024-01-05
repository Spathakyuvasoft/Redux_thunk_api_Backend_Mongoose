import { useSelector, useDispatch } from "react-redux";
import BASE_URL from "../Base_Url/url";
import axios from "axios";

export const fetchUsersRequest = (loading) => {
  return {
    type: "FETCH_REQUESTED",
    payload: loading,
  };
};

export const fetchUsersSucess = (userData) => {
  return {
    type: "FETCH_SUCEED",
    payload: userData,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: "FETCH_FAILED",
    payload: error,
  };
};

export const addUserToTable = (userCredentials) => {
  return {
    type: "ADD_USER",
    payload: userCredentials,
  };
};

export const editUserTable = (userCredentials) => {
  return {
    type: "EDIT_USER",
    payload: userCredentials,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest("loading"));
    try {
      const response = await axios.get(`${BASE_URL}/getAllUsers`);

      dispatch(fetchUsersSucess(response.data.data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};

export const updateUser = (userCredentials) => {
  const { userId, userUpdatedRow } = userCredentials;

  return async (dispatch) => {
    dispatch(fetchUsersRequest("loading"));
    try {
      const response = await axios.put(
        `${BASE_URL}/editUser/${userId}`,
        userUpdatedRow
      );
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};

export const postUser = (userCredentials) => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest("loading"));
    try {
      const response = await axios.post(`${BASE_URL}/addUser`, userCredentials);
      console.log(response);
      // dispatch(addUserToTable(userCredentials));
      dispatch(fetchUsers());
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};

export const deleteUser = (Id) => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest("loading"));
    try {
      const response = await axios.delete(`${BASE_URL}/deleteUser/${Id}`);
      dispatch(fetchUsers());
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};

export const fetchUser = (userId) => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest("loading"));
    try {
      const response = await axios.get(`${BASE_URL}/getUser/${userId}`);

      dispatch(editUserTable(response.data.data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};
