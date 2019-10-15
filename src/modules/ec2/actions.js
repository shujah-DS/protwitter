import {
  GET_INSTANCES,
  START_INSTANCE,
  STOP_INSTANCE,
  TERMINATE_INSTANCE,
  GET_ZONES
} from './constants';
import { createAsyncActionCreators } from '../common/actions';

export const actions = createAsyncActionCreators(
  GET_INSTANCES,
  START_INSTANCE,
  STOP_INSTANCE,
  TERMINATE_INSTANCE,
  GET_ZONES
);
