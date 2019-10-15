import { call, put, throttle, take } from 'redux-saga/effects';
import { message } from 'antd';

import { GET_USERS, DELETE_USER } from './constants';
import { actions } from './actions';
import UsersService from '../../services/user';

function* getUsers({ payload }) {
  try {
    const data = yield call(UsersService.getUsers, payload);
    yield put(actions.getUsers.success(data));
  } catch (error) {
    yield put(actions.getUsers.failure(error));
  }
}
export function* watchGetUsers() {
  yield throttle(2000, GET_USERS.REQUEST, getUsers);
}

export function* watchDeleteUser() {
  while (true) {
    try {
      const { payload } = yield take(DELETE_USER.REQUEST);
      const data = yield call(UsersService.deleteUser, payload);
      yield put(actions.deleteUser.success(data));
    } catch (error) {
      message.error(error.message);
      yield put(actions.deleteUser.failure(error));
    }
  }
}
