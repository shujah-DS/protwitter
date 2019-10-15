import {
  GET_INSTANCES,
  TERMINATE_INSTANCE,
  START_INSTANCE,
  STOP_INSTANCE,
  GET_ZONES
} from './constants';

const initialState = {
  regions: ['us-east-1', 'us-west-2'],
  zones: [],
  instances: [],
  [GET_INSTANCES]: {},
  [START_INSTANCE]: {},
  [STOP_INSTANCE]: {},
  [GET_ZONES]: {},
  [TERMINATE_INSTANCE]: {}
};

function ec2(state = initialState, { type, payload }) {
  switch (type) {
    case GET_INSTANCES.REQUEST:
      return { ...state, [GET_INSTANCES]: { loading: true, error: false } };

    case GET_INSTANCES.SUCCESS:
      return {
        ...state,
        [GET_INSTANCES]: { loading: false, error: false },
        instances: payload.instances
      };

    case GET_INSTANCES.FAILURE:
      return {
        ...state,
        [GET_INSTANCES]: { loading: false, error: payload.message }
      };

    case START_INSTANCE.REQUEST:
      return {
        ...state,
        [START_INSTANCE]: { loading: true, error: false }
      };

    case START_INSTANCE.SUCCESS:
      return {
        ...state,
        [START_INSTANCE]: { loading: false, error: false },
        instances: [...state.instances, payload]
      };

    case START_INSTANCE.FAILURE:
      return {
        ...state,
        [START_INSTANCE]: { loading: false, error: payload.message }
      };
    case TERMINATE_INSTANCE.REQUEST:
      return {
        ...state,
        [TERMINATE_INSTANCE]: { loading: true, error: false }
      };

    case TERMINATE_INSTANCE.SUCCESS:
      return {
        ...state,
        [TERMINATE_INSTANCE]: { loading: false, error: false },
        instances: [
          ...state.instances.filter(ins => ins.InstanceId !== payload)
        ]
      };

    case TERMINATE_INSTANCE.FAILURE:
      return {
        ...state,
        [TERMINATE_INSTANCE]: { loading: false, error: payload.message }
      };

    case GET_ZONES.REQUEST:
      return { ...state, [GET_ZONES]: { loading: true, error: false } };

    case GET_ZONES.SUCCESS:
      return {
        ...state,
        [GET_ZONES]: { loading: false, error: false },
        zones: payload.zones
      };

    case GET_ZONES.FAILURE:
      return {
        ...state,
        [GET_ZONES]: { loading: false, error: payload.message }
      };
    default:
      return state;
  }
}

export default ec2;
