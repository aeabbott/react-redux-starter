import {combineReducers} from 'redux';
import postInfo from './postReducer';

const rootReducer = combineReducers({
    postInfo
});

export default rootReducer;