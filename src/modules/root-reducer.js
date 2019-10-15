import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reduceReducers from 'reduce-reducers';
import commonReducer from './common/reducer';
import ec2Reducer from './ec2/reducer';
import userReducer from './user/reducer';
import regionReducer from './regions/reducer';
import vpcReducer from './vpcs/reducer';
import authReducer from './auth/reducer';
import amiReducer from './amis/reducer';
import ec2TypeReducer from './ec2Types/reducer';
import resourcesReducer from './resources/reducer';
import {
  SET_ERROR,
  SET_LOADING,
  SET_MODAL_VISIBLE,
  SET_MESSAGE
} from './common/constants';

const combinedReducer = (state, { type, payload }) => {
  if (!(payload && payload.reducer)) {
    return state;
  }
  const prevSubState = { ...state[payload.reducer] };
  switch (type) {
    case SET_MODAL_VISIBLE:
      return {
        ...state,
        [payload.reducer]: {
          ...prevSubState,
          [payload.code]: {
            ...prevSubState[payload.code],
            modalStatus: payload.status
          }
        }
      };
    case SET_MESSAGE:
      return {
        ...state,
        [payload.reducer]: {
          ...prevSubState,
          [payload.code]: {
            ...prevSubState[payload.code],
            message: payload.message
          }
        }
      };

    case SET_ERROR:
      return {
        ...state,
        [payload.reducer]: {
          ...prevSubState,
          [payload.code]: {
            ...prevSubState[payload.code],
            error: payload.error
          }
        }
      };

    case SET_LOADING:
      return {
        ...state,
        [payload.reducer]: {
          ...prevSubState,
          [payload.code]: {
            ...prevSubState[payload.code],
            loading: payload.status
          }
        }
      };

    default:
      return state;
  }
};

const rootReducer = reduceReducers(
  combineReducers({
    router: routerReducer,
    common: commonReducer,
    ec2: ec2Reducer,
    auth: authReducer,
    users: userReducer,
    regions: regionReducer,
    vpcs: vpcReducer,
    amis: amiReducer,
    ec2Types: ec2TypeReducer,
    resources: resourcesReducer
  }),
  combinedReducer
);

export default rootReducer;
