import {combineReducers} from 'redux';
import nameReducer from './nameReducer';

const rootReducer = combineReducers({
    post: nameReducer,
});

export default rootReducer;