import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
  postError: '',
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_ERROR':
      return {
        ...state,
        postError: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
  errors: errorReducer,
});
