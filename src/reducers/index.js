import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import {search} from './search.reducer'

const rootReducer = combineReducers({
  authentication,
  alert,
  search
});

export default rootReducer;