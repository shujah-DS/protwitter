import { WINDOW_RESIZE } from './constants';
import { getScreenName, getWindowWidth, getWindowHeight } from '../utils';

const initialState = {
  width: window.outerWidth,
  screen: getScreenName(window.innderWidth)
};

function common(state = initialState, { type }) {
  switch (type) {
    case WINDOW_RESIZE:
      return {
        ...state,
        device: {
          screen: getScreenName(getWindowWidth()),
          width: getWindowWidth(),
          height: getWindowHeight()
        }
      };

    default:
      return state;
  }
}

export default common;
