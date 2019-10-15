import { LOGIN, LOGOUT, USER_STATUS } from './constants';
import { action } from '../common/actions';

export const actions = {
  login: {
    request: data => action(LOGIN.REQUEST, { payload: data }),
    success: data => action(LOGIN.SUCCESS, { payload: data }),
    failure: error => action(LOGIN.FAILURE, { payload: error }),
  },
  logout: {
    request: () => action(LOGOUT.REQUEST),
    success: data => action(LOGOUT.SUCCESS, { payload: data }),
    failure: error => action(LOGOUT.FAILURE, { payload: error }),
  },
  getUserStatus: {
    request: () => action(USER_STATUS.REQUEST),
    success: data => action(USER_STATUS.SUCCESS, { payload: data }),
    failure: error => action(USER_STATUS.FAILURE, { payload: error }),
  },
};
