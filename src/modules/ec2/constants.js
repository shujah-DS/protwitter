import { createRequestTypes } from '../common/actions';

export const GET_INSTANCES = createRequestTypes('GET_INSTANCES');
export const START_INSTANCE = createRequestTypes('START_INSTANCE');
export const STOP_INSTANCE = createRequestTypes('STOP_INSTANCE');
export const TERMINATE_INSTANCE = createRequestTypes('TERMINATE_INSTANCE');
export const GET_ZONES = createRequestTypes('GET_ZONES');
