import { GET_AMIS, DELETE_AMI } from './constants';
import { createAsyncActionCreators } from '../common/actions';

export const actions = createAsyncActionCreators(GET_AMIS, DELETE_AMI);
