import { combineReducers } from 'redux'
import { registerRegister } from './RegisterReducer'
export default combineReducers({
    reg:registerRegister
})