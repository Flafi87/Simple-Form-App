import React from 'react'
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import App from './App';
const mockStore = configureStore([]);
describe('My Connected React-Redux Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });
    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it('should match snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});