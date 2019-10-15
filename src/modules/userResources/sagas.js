import { call, put, throttle, take } from 'redux-saga/effects';
import { message } from 'antd';

import { GET_USER_RESOURCES, DELETE_USER_RESOURCE } from './constants';
import { actions } from './actions';
import UserResourcesService from '../../services/userResources';

function* getUserResources({ payload }) {
  try {
    const data = yield call(UserResourcesService.getUserResources, payload);
    yield put(actions.getUserResources.success(data));
  } catch (error) {
    yield put(actions.getUserResources.failure(error));
  }
}
export function* watchGetUserResources() {
  yield throttle(2000, GET_USER_RESOURCES.REQUEST, getUserResources);
}

export function* watchDeleteUserResources() {
  while (true) {
    try {
      const { payload } = yield take(DELETE_USER_RESOURCE.REQUEST);
      const data = yield call(ResourcesService.deleteResource, payload);
      yield put(actions.deleteResource.success(data));
    } catch (error) {
      message.error(error.message);
      yield put(actions.deleteResource.failure(error));
    }
  }
}
