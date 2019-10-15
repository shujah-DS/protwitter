import { GET_VPCS, DELETE_VPC } from './constants';

const initialState = {
  vpcs: [],
  [GET_VPCS]: {},
  [DELETE_VPC]: {}
};

function vpcReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_VPCS.REQUEST:
      return { ...state, [GET_VPCS]: { loading: true, error: false } };

    case GET_VPCS.SUCCESS:
      return {
        ...state,
        [GET_VPCS]: { loading: false, error: false },
        vpcs: payload.vpcs
      };

    case GET_VPCS.FAILURE:
      return {
        ...state,
        [GET_VPCS]: { loading: false, error: payload.message }
      };

    case DELETE_VPC.REQUEST:
      return {
        ...state,
        [DELETE_VPC]: { loading: true, error: false }
      };

    case DELETE_VPC.SUCCESS:
      return {
        ...state,
        [DELETE_VPC]: { loading: false, error: false }
      };

    case DELETE_VPC.FAILURE:
      return {
        ...state,
        [DELETE_VPC]: { loading: false, error: payload.message }
      };

    default:
      return state;
  }
}

export default vpcReducer;
