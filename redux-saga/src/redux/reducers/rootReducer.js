import { combineReducers } from 'redux';
import Reducer from './reducer';

const rootReducer = combineReducers({
  home: Reducer,
});
export default rootReducer;