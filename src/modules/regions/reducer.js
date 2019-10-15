import { GET_REGIONS, DELETE_REGION } from './constants';

const initialState = {
  regions: [],
  [GET_REGIONS]: {},
  [DELETE_REGION]: {}
};

function regionReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_REGIONS.REQUEST:
      return { ...state, [GET_REGIONS]: { loading: true, error: false } };

    case GET_REGIONS.SUCCESS:
      return {
        ...state,
        [GET_REGIONS]: { loading: false, error: false },
        regions: payload.data
      };

    case GET_REGIONS.FAILURE:
      return {
        ...state,
        [GET_REGIONS]: { loading: false, error: payload.message }
      };

    case DELETE_REGION.REQUEST:
      return {
        ...state,
        [DELETE_REGION]: { loading: true, error: false }
      };

    case DELETE_REGION.SUCCESS:
      return {
        ...state,
        [DELETE_REGION]: { loading: false, error: false }
      };

    case DELETE_REGION.FAILURE:
      return {
        ...state,
        [DELETE_REGION]: { loading: false, error: payload.message }
      };

    default:
      return state;
  }
}

export default regionReducer;
