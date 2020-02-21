import picturesReducer from './pictures';
import {combineReducers} from 'redux';

const routeReducer = combineReducers({
  pictureURL: picturesReducer,
});

export default routeReducer;
