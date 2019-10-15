import { GET_USER_RESOURCES, DELETE_USER_RESOURCE } from './constants';
import { createAsyncActionCreators } from '../common/actions';

export const actions = createAsyncActionCreators(GET_USER_RESOURCES, DELETE_USER_RESOURCE);
