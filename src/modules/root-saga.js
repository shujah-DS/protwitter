import { fork, all } from 'redux-saga/effects';

import { watchLogin, watchLogout } from './auth/sagas';
import {
  watchInstances,
  watchStartInstance,
  watchStopInstance,
  watchTerminateInstance,
  watchGetZones
} from './ec2/sagas';
import { watchGetUsers, watchDeleteUser } from './user/sagas';
import { watchGetRegions, watchDeleteRegion } from './regions/sagas';
import { watchGetVpcs, watchDeleteVpc } from './vpcs/sagas';
import { watchGetAmis, watchDeleteAmi } from './amis/sagas';
import { watchGetEc2Types, watchDeleteEc2Types } from './ec2Types/sagas';
import { watchGetResources, watchDeleteResources } from './resources/sagas';

export default function* rootSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchInstances),
    fork(watchStartInstance),
    fork(watchStopInstance),
    fork(watchTerminateInstance),
    fork(watchGetZones),
    fork(watchGetUsers),
    fork(watchDeleteUser),
    fork(watchGetRegions),
    fork(watchDeleteRegion),
    fork(watchGetVpcs),
    fork(watchDeleteVpc),
    fork(watchGetAmis),
    fork(watchDeleteAmi),
    fork(watchGetEc2Types),
    fork(watchDeleteEc2Types),
    fork(watchGetResources),
    fork(watchDeleteResources)
  ]);
}
