import types from './types'

const addModel = item => ({
  type: types.ADD_MODEL, item
})

const addEngine = item => ({
  type: types.ADD_ENGINE, item
})

const addGearbox = item => ({
  type: types.ADD_GEARBOX, item
})

const addColor = item => ({
  type: types.ADD_COLOR, item
})


export default {
  addModel,
  addEngine,
  addGearbox,
  addColor
}