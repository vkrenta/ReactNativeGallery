import picturesReducer from './pictures';
import apiDataReducer from './apiDataReducer';
import {combineReducers} from 'redux';

const routeReducer = combineReducers({
  picture: picturesReducer,
  apiData: apiDataReducer,
});

export default routeReducer;
