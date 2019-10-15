import { GET_REGIONS, DELETE_REGION } from './constants';
import { createAsyncActionCreators } from '../common/actions';

export const actions = createAsyncActionCreators(GET_REGIONS, DELETE_REGION);
