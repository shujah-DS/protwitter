import { call, put, throttle, take } from 'redux-saga/effects';
import { message } from 'antd';

import { GET_VPCS, DELETE_VPC } from './constants';
import { actions } from './actions';
import VpcService from '../../services/vpc';

function* getVpcs({ payload }) {
  try {
    const data = yield call(VpcService.getVpcs, payload);
    yield put(actions.getVpcs.success(data));
  } catch (error) {
    yield put(actions.getVpcs.failure(error));
  }
}
export function* watchGetVpcs() {
  yield throttle(2000, GET_VPCS.REQUEST, getVpcs);
}

export function* watchDeleteVpc() {
  while (true) {
    try {
      const { payload } = yield take(DELETE_VPC.REQUEST);
      const data = yield call(VpcService.deleteVpc, payload);
      yield put(actions.deleteVpc.success(data));
    } catch (error) {
      message.error(error.message);
      yield put(actions.deleteVpc.failure(error));
    }
  }
}
