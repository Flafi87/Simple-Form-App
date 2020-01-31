import { combineReducers } from 'redux';
import { UPDATE_SYNC_ERRORS } from '../actions/types';



const errorReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_SYNC_ERRORS:
            return {
                ...state,
                type: action.payload
            };
        default:
            return state;
    }
}

export default combineReducers({
    errors: errorReducer,
});