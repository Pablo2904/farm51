import { combineReducers } from 'redux'

import partsReducer from './parts'
import selectionReducer from './selection'

const rootReducer = combineReducers({
  parts: partsReducer,
  selection: selectionReducer
})

export default rootReducer
