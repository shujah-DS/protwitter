import { GET_AMIS, DELETE_AMI } from './constants';

const initialState = {
  amis: [],
  [GET_AMIS]: {},
  [DELETE_AMI]: {}
};

function amiReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_AMIS.REQUEST:
      return { ...state, [GET_AMIS]: { loading: true, error: false } };

    case GET_AMIS.SUCCESS:
      return {
        ...state,
        [GET_AMIS]: { loading: false, error: false },
        amis: payload.amis
      };

    case GET_AMIS.FAILURE:
      return {
        ...state,
        [GET_AMIS]: { loading: false, error: payload.message }
      };

    case DELETE_AMI.REQUEST:
      return {
        ...state,
        [DELETE_AMI]: { loading: true, error: false }
      };

    case DELETE_AMI.SUCCESS:
      return {
        ...state,
        [DELETE_AMI]: { loading: false, error: false }
      };

    case DELETE_AMI.FAILURE:
      return {
        ...state,
        [DELETE_AMI]: { loading: false, error: payload.message }
      };

    default:
      return state;
  }
}

export default amiReducer;
