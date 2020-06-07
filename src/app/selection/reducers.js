import types from './types'

const initialState = {
  model: '',
  engine: '',
  gearbox: '',
  color: ''
}

const selectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MODEL:
      return {
        ...state, model: action.item
      }
    case types.ADD_ENGINE:
      return {
        ...state, engine: action.item
      }
    case types.ADD_GEARBOX:
      return {
        ...state, gearbox: action.item
      }
    case types.ADD_COLOR:
      return {
        ...state, color: action.item
      }
    default:
      return state
  }
}

export default selectionReducer
