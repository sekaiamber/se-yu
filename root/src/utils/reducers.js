import { combineReducers } from 'redux'

import colorReducer from './reducers/color'
import logReducer from './reducers/log'


export default combineReducers({
  color: colorReducer,
  log: logReducer
})