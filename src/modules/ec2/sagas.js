import { delay } from 'redux-saga';
import { call, take, put, throttle } from 'redux-saga/effects';

import {
  GET_INSTANCES,
  START_INSTANCE,
  STOP_INSTANCE,
  TERMINATE_INSTANCE,
  GET_ZONES
} from './constants';
import { actions } from './actions';
import Ec2Service from '../../services/ec2';

function* getInstances({ payload }) {
  try {
    const data = yield call(Ec2Service.getInstances, payload);
    yield put(actions.getInstances.success(data));
  } catch (error) {
    yield put(actions.getInstances.failure(error));
  }
}
export function* watchInstances() {
  yield throttle(2000, GET_INSTANCES.REQUEST, getInstances);
}

export function* watchStartInstance() {
  while (true) {
    // TODO: Change it back to orignal after api integration
    // const { payload } = yield take(START_INSTANCE.REQUEST);
    yield take(START_INSTANCE.REQUEST);
    try {
      // const data = yield call(Ec2Service.startInstance, payload);
      const data = yield call(delay, 300, {
        message: 'Instance created successfully'
      });
      yield put(actions.startInstance.success(data));
    } catch (error) {
      yield put(actions.startInstance.failure(error));
    }
  }
}

export function* watchStopInstance() {
  while (true) {
    const { payload } = yield take(STOP_INSTANCE.REQUEST);
    try {
      const data = yield call(Ec2Service.stopInstance, payload);
      yield put(actions.stopInstance.success(data));
    } catch (error) {
      yield put(actions.stopInstance.failure(error));
    }
  }
}

export function* watchTerminateInstance() {
  while (true) {
    const { payload } = yield take(TERMINATE_INSTANCE.REQUEST);
    try {
      // const data = yield call(Ec2Service.terminateInstance, payload);
      yield put(actions.terminateInstances.success(payload));
    } catch (error) {
      yield put(actions.terminateInstances.failure(error));
    }
  }
}

export function* watchGetZones() {
  while (true) {
    const { payload } = yield take(GET_ZONES.REQUEST);
    try {
      const data = yield call(Ec2Service.getZones, payload);
      yield put(actions.getZones.success(data));
    } catch (error) {
      yield put(actions.getZones.failure(error));
    }
  }
}
