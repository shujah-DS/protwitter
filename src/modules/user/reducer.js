import { GET_USERS, DELETE_USER } from './constants';

const initialState = {
  users: [],
  [GET_USERS]: {},
  [DELETE_USER]: {}
};

function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_USERS.REQUEST:
      return { ...state, [GET_USERS]: { loading: true, error: false } };

    case GET_USERS.SUCCESS:
      return {
        ...state,
        [GET_USERS]: { loading: false, error: false },
        users: payload.users
      };

    case GET_USERS.FAILURE:
      return {
        ...state,
        [GET_USERS]: { loading: false, error: payload.message }
      };

    case DELETE_USER.REQUEST:
      return {
        ...state,
        [DELETE_USER]: { loading: true, error: false }
      };

    case DELETE_USER.SUCCESS:
      return {
        ...state,
        [DELETE_USER]: { loading: false, error: false }
      };

    case DELETE_USER.FAILURE:
      return {
        ...state,
        [DELETE_USER]: { loading: false, error: payload.message }
      };

    default:
      return state;
  }
}

export default userReducer;
