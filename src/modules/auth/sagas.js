import { delay } from 'redux-saga';
import { take, put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';

// import Amplify, { Auth } from 'aws-amplify';
import { LOGIN, LOGOUT, USER_STATUS } from './constants';
import { actions } from './actions';
import { actions as commonActions } from '../common/actions';

export function* watchLogin() {
  while (true) {
    try {
      yield take(LOGIN.REQUEST);
      // const data = yield call(Auth.login, payload);
      const data = yield call(delay, 500, {
        user: {
          userName: 'Bob'
        }
      });
      yield put(actions.login.success(data));
      /* global localStorage */
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('isLoggedIn', true);
      yield put(push('/'));
    } catch (error) {
      yield put(actions.login.failure(error));
    }
  }
}

export function* watchLogout() {
  while (true) {
    try {
      yield take(LOGOUT.REQUEST);
      yield call(delay, 300);
      yield put(commonActions.resetAll());
      yield put(actions.logout.success());
      localStorage.setItem('user', '');
      localStorage.setItem('isLoggedIn', false);

      yield put(push('/'));
    } catch (error) {
      yield put(actions.logout.failure(error));
    }
  }
}

export function* watchUserStatus() {
  while (true) {
    try {
      yield take(USER_STATUS.REQUEST);
      yield call(delay, 300);
      yield put(commonActions.resetAll());
      yield put(actions.getUserStatus.success());

      yield put(push('/'));
    } catch (error) {
      yield put(actions.getUserStatus.failure(error));
    }
  }
}
