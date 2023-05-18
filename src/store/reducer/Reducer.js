import { combineReducers } from 'redux'
import { changeDataReducer } from './changeDataReducer'
import { forgotPassword } from './forgotPasswordReducer'
import { loginReducer } from './LoginReducer'
import { registerRegister } from './RegisterReducer'
export default combineReducers({
    reg:registerRegister,
    login:loginReducer,
    forgotPassword:forgotPassword,
    changeData:changeDataReducer
})