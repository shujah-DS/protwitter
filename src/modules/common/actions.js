import _ from 'lodash';
import {
  REQUEST,
  SUCCESS,
  FAILURE,
  WINDOW_RESIZE,
  SET_ERROR,
  SET_LOADING,
  SET_PROGRESS,
  SET_MODAL_VISIBLE,
  SET_MESSAGE,
  RESET_ALL
} from './constants';

export const createRequestTypes = base => {
  const CONST = _.reduce(
    [REQUEST, SUCCESS, FAILURE],
    (acc, type) => {
      acc[type] = `${base}_${type}`;
      return acc;
    },
    {}
  );
  CONST.toString = () => base;
  return CONST;
};

export function action(type, payload = {}) {
  return { type, ...payload };
}

export const createAsyncActionCreators = (...names) =>
  names.reduce((prev, name) => {
    prev[_.camelCase(name)] = {
      request: data => action(name.REQUEST, { payload: data }),
      success: data => action(name.SUCCESS, { payload: data }),
      failure: error => action(name.FAILURE, { payload: error })
    };
    return prev;
  }, {});

export const actions = {
  resize: size => action(WINDOW_RESIZE, { payload: size }),
  setModalVisibility: (reducer, code, status) =>
    action(SET_MODAL_VISIBLE, { payload: { reducer, code, status } }),
  setMessage: (reducer, code, message) =>
    action(SET_MESSAGE, { payload: { reducer, code, message } }),
  setError: (reducer, code, error) =>
    action(SET_ERROR, { payload: { reducer, code, error } }),
  setLoading: (reducer, code, status) =>
    action(SET_LOADING, { payload: { reducer, code, status } }),
  setProgress: (reducer, code, progress) =>
    action(SET_PROGRESS, { payload: { reducer, code, progress } }),
  resetAll: () => action(RESET_ALL)
};
