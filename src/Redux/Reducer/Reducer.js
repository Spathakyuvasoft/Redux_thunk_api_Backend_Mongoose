import {
  fetchUsers,
  fetchUsersRequest,
  fetchUsesrSucess,
  fetchUsersFailure,
} from "../Action/Action";

const state = {
  list: [],
  srNo: 0,
  loading: "",
  editUserId: "",
  failure: "",
  updatedUserCredentials: {},
};

const Reducer = (initialState = state, action) => {
  switch (action.type) {
    case "FETCH_SUCEED":
      return {
        ...state,
        list: action.payload,
      };
    case "FETCH_REQUESTED":
      return {
        ...state,
        loading: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        failure: action.payload,
      };
    case "EDIT_USER":

      return {
        ...state,
        updatedUserCredentials: { ...action.payload },
      };
    default:
      return state;
  }
};

export default Reducer;
