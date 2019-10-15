import { GET_VPCS, DELETE_VPC } from './constants';
import { createAsyncActionCreators } from '../common/actions';

export const actions = createAsyncActionCreators(GET_VPCS, DELETE_VPC);
