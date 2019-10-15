import { GET_EC2TYPES, DELETE_EC2TYPES } from './constants';
import { createAsyncActionCreators } from '../common/actions';

export const actions = createAsyncActionCreators(GET_EC2TYPES, DELETE_EC2TYPES);
