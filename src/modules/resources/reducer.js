import { GET_RESOURCES, DELETE_RESOURCE } from './constants';

const initialState = {
  resources: [],
  [GET_RESOURCES]: {},
  [DELETE_RESOURCE]: {}
};

function resourceReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_RESOURCES.REQUEST:
      return { ...state, [GET_RESOURCES]: { loading: true, error: false } };

    case GET_RESOURCES.SUCCESS:
      return {
        ...state,
        [GET_RESOURCES]: { loading: false, error: false },
        resources: payload.resources
      };

    case GET_RESOURCES.FAILURE:
      return {
        ...state,
        [GET_RESOURCES]: { loading: false, error: payload.message }
      };

    case DELETE_RESOURCE.REQUEST:
      return {
        ...state,
        [DELETE_RESOURCE]: { loading: true, error: false }
      };

    case DELETE_RESOURCE.SUCCESS:
      return {
        ...state,
        [DELETE_RESOURCE]: { loading: false, error: false }
      };

    case DELETE_RESOURCE.FAILURE:
      return {
        ...state,
        [DELETE_RESOURCE]: { loading: false, error: payload.message }
      };

    default:
      return state;
  }
}

export default resourceReducer;
