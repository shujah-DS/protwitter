import { call, put, throttle, take } from 'redux-saga/effects';
import { message } from 'antd';

import { GET_AMIS, DELETE_AMI } from './constants';
import { actions } from './actions';
import AmiService from '../../services/ami';

function* getAmis({ payload }) {
  try {
    const data = yield call(AmiService.getAmis, payload);
    yield put(actions.getAmis.success(data));
  } catch (error) {
    yield put(actions.getAmis.failure(error));
  }
}
export function* watchGetAmis() {
  yield throttle(2000, GET_AMIS.REQUEST, getAmis);
}

export function* watchDeleteAmi() {
  while (true) {
    try {
      const { payload } = yield take(DELETE_AMI.REQUEST);
      const data = yield call(AmiService.deleteAmi, payload);
      yield put(actions.deleteAmi.success(data));
    } catch (error) {
      message.error(error.message);
      yield put(actions.deleteAmi.failure(error));
    }
  }
}
