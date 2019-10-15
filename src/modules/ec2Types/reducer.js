import { GET_EC2TYPES, DELETE_EC2TYPES } from './constants';

const initialState = {
  ec2Types: [],
  [GET_EC2TYPES]: {},
  [DELETE_EC2TYPES]: {}
};

function amiReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_EC2TYPES.REQUEST:
      return { ...state, [GET_EC2TYPES]: { loading: true, error: false } };

    case GET_EC2TYPES.SUCCESS:
      return {
        ...state,
        [GET_EC2TYPES]: { loading: false, error: false },
        ec2Types: payload.ec2Types
      };

    case GET_EC2TYPES.FAILURE:
      return {
        ...state,
        [GET_EC2TYPES]: { loading: false, error: payload.message }
      };

    case DELETE_EC2TYPES.REQUEST:
      return {
        ...state,
        [DELETE_EC2TYPES]: { loading: true, error: false }
      };

    case DELETE_EC2TYPES.SUCCESS:
      return {
        ...state,
        [DELETE_EC2TYPES]: { loading: false, error: false }
      };

    case DELETE_EC2TYPES.FAILURE:
      return {
        ...state,
        [DELETE_EC2TYPES]: { loading: false, error: payload.message }
      };

    default:
      return state;
  }
}

export default amiReducer;
