import { combineReducers } from 'redux'
import { loginReducer } from './LoginReducer'
import { registerRegister } from './RegisterReducer'
export default combineReducers({
    reg:registerRegister,
    login:loginReducer
})