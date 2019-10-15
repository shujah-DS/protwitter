import {
  LOGIN,
  LOGOUT,
  USER_STATUS,
} from './constants';

/* global localStorage */
const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  user: localStorage.getItem('user'),
  [LOGIN]: {},
  [LOGOUT]: {},
  [USER_STATUS]: {}
};

function auth(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN.REQUEST:
      return { ...state, [LOGIN]: { loading: true, error: false }, isLoggedIn: false };

    case LOGIN.SUCCESS:
      return {
        ...state,
        [LOGIN]: { loading: false, error: false },
        user: payload.user,
        isLoggedIn: true,
      };

    case LOGIN.FAILURE:
      return {
        ...state,
        [LOGIN]: { loading: false, error: payload.message },
        isLoggedIn: false,
      };

    case LOGOUT.REQUEST:
      return { ...state, [LOGOUT]: { loading: true, error: false } };

    case LOGOUT.SUCCESS:
      return {
        ...state,
        [LOGOUT]: { loading: false, error: false },
        user: null,
        isLoggedIn: false,
      };

    case LOGOUT.FAILURE:
      return { ...state, [LOGOUT]: { loading: false, error: payload.error } };

    case USER_STATUS.REQUEST:
      return { ...state, [USER_STATUS]: { loading: true, error: false } };

    case USER_STATUS.SUCCESS:
      return {
        ...state,
        [USER_STATUS]: { loading: false, error: false },
        user: null,
        isLoggedIn: false,
      };

    case USER_STATUS.FAILURE:
      return { ...state, [USER_STATUS]: { loading: false, error: payload.error } };

    default:
      return state;
  }
}

export default auth;
