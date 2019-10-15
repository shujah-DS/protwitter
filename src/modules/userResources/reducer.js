import { GET_USER_RESOURCES, DELETE_USER_RESOURCE } from './constants';

const initialState = {
  userResources: [],
  [GET_USER_RESOURCES]: {},
  [DELETE_USER_RESOURCE]: {}
};

function resourceReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_USER_RESOURCES.REQUEST:
      return { ...state, [GET_USER_RESOURCES]: { loading: true, error: false } };

    case GET_USER_RESOURCES.SUCCESS:
      return {
        ...state,
        [GET_USER_RESOURCES]: { loading: false, error: false },
        userResources: payload.resources
      };

    case GET_USER_RESOURCES.FAILURE:
      return {
        ...state,
        [GET_USER_RESOURCES]: { loading: false, error: payload.message }
      };

    case DELETE_USER_RESOURCE.REQUEST:
      return {
        ...state,
        [DELETE_USER_RESOURCE]: { loading: true, error: false }
      };

    case DELETE_USER_RESOURCE.SUCCESS:
      return {
        ...state,
        [DELETE_USER_RESOURCE]: { loading: false, error: false }
      };

    case DELETE_USER_RESOURCE.FAILURE:
      return {
        ...state,
        [DELETE_USER_RESOURCE]: { loading: false, error: payload.message }
      };

    default:
      return state;
  }
}

export default resourceReducer;
