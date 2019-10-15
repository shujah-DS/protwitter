import { call, put, throttle, take } from 'redux-saga/effects';
import { message } from 'antd';

import { GET_REGIONS, DELETE_REGION } from './constants';
import { actions } from './actions';
import RegionService from '../../services/region';

function* getRegions({ payload }) {
  try {
    const data = yield call(RegionService.getRegions, payload);
    yield put(actions.getRegions.success(data));
  } catch (error) {
    yield put(actions.getRegions.failure(error));
  }
}
export function* watchGetRegions() {
  yield throttle(2000, GET_REGIONS.REQUEST, getRegions);
}

export function* watchDeleteRegion() {
  while (true) {
    try {
      const { payload } = yield take(DELETE_REGION.REQUEST);
      const data = yield call(RegionService.deleteRegion, payload);
      yield put(actions.deleteRegion.success(data));
    } catch (error) {
      message.error(error.message);
      yield put(actions.deleteRegion.failure(error));
    }
  }
}
