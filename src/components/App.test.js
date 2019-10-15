import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import App from './App';
// import configureStore from '../store';

const mockStore = configureMockStore();

/* global it, describe, expect, beforeEach */
describe('Testing app', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    store = mockStore();
    wrapper = shallow(<App />);
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App store={store} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('App must contain a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
