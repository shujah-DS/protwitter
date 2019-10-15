import { call, put, throttle, take } from 'redux-saga/effects';
import { message } from 'antd';

import { GET_RESOURCES, DELETE_RESOURCE } from './constants';
import { actions } from './actions';
import ResourcesService from '../../services/resources';

function* getResources({ payload }) {
  try {
    const data = yield call(ResourcesService.getResources, payload);
    yield put(actions.getResources.success(data));
  } catch (error) {
    yield put(actions.getResources.failure(error));
  }
}
export function* watchGetResources() {
  yield throttle(2000, GET_RESOURCES.REQUEST, getResources);
}

export function* watchDeleteResources() {
  while (true) {
    try {
      const { payload } = yield take(DELETE_RESOURCE.REQUEST);
      const data = yield call(ResourcesService.deleteResource, payload);
      yield put(actions.deleteResource.success(data));
    } catch (error) {
      message.error(error.message);
      yield put(actions.deleteResource.failure(error));
    }
  }
}
