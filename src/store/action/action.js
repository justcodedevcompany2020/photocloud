import axios from "axios"
import { error_register } from "./errorAction"
import { start_register } from "./startAction"
import { success_register } from "./successAction"

const url ='https://photocloud.justcode.am/api/'
export const register_action = (data) =>{
    return (dispatch) =>{
        dispatch(start_register())
        axios.post(`${url}register`,data).then((r)=>{
            console.log(r)
            dispatch(success_register(r.data))
        })
        .catch((error)=>{
            dispatch(error_register())
        })
    }
}