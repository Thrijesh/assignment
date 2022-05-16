import { combineReducers } from 'redux'
import apiReducer from './apiReducers'

const rootReducer = combineReducers({
    api: apiReducer
})

export default rootReducer
