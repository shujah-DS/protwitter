import { GET_RESOURCES, DELETE_RESOURCE } from './constants';
import { createAsyncActionCreators } from '../common/actions';

export const actions = createAsyncActionCreators(GET_RESOURCES, DELETE_RESOURCE);
