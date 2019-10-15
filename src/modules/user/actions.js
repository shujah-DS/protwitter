import { GET_USERS, DELETE_USER } from './constants';
import { createAsyncActionCreators } from '../common/actions';

export const actions = createAsyncActionCreators(GET_USERS, DELETE_USER);
