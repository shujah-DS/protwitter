import { call, put, throttle, take } from 'redux-saga/effects';
import { message } from 'antd';

import { GET_EC2TYPES, DELETE_EC2TYPES } from './constants';
import { actions } from './actions';
import Ec2TypeService from '../../services/ec2Types';

function* getEc2Types({ payload }) {
  try {
    const data = yield call(Ec2TypeService.getEc2Types, payload);
    yield put(actions.getEc2Types.success(data));
  } catch (error) {
    yield put(actions.getEc2Types.failure(error));
  }
}
export function* watchGetEc2Types() {
  yield throttle(2000, GET_EC2TYPES.REQUEST, getEc2Types);
}

export function* watchDeleteEc2Types() {
  while (true) {
    try {
      const { payload } = yield take(DELETE_EC2TYPES.REQUEST);
      const data = yield call(Ec2TypeService.deleteEc2Types, payload);
      yield put(actions.deleteEc2Types.success(data));
    } catch (error) {
      message.error(error.message);
      yield put(actions.deleteEc2Types.failure(error));
    }
  }
}
