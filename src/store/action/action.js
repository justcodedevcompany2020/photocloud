import axios from "axios";
import { error_forgot_password, error_forgot_password_code, error_get_user, error_login, error_logout, error_register, error_verefy_email } from "./errorAction";
import {
  start_forgot_password,
  start_forgot_password_code,
  start_get_user,
  start_login,
  start_logout,
  start_register,
  start_resend_verify_mail,
  start_verefy_email,
} from "./startAction";
import {
  success_forgot_password,
  success_forgot_password_code,
  success_get_user,
  success_login,
  success_logout,
  success_register,
  success_verefy_email,
} from "./successAction";

const url = "https://photocloud.justcode.am/api/";
export const register_action = (data) => {
  return (dispatch) => {
    dispatch(start_register());
    axios
      .post(`${url}register`, data)
      .then((r) => {
        if (r.data.status) {
          dispatch(success_register(r.data));
        } else {
          dispatch(error_register());
        }
      })
      .catch((error) => {
        dispatch(error_register());
      });
  };
};
export const verify_email = (code) => {
  return (dispatch) => {
    dispatch(start_verefy_email());
    axios
      .post(`${url}confirmation_register_code`, code)
      .then((r) => {
        if (r.data.status) {
          dispatch(success_verefy_email(r.data));
        } else {
          dispatch(error_verefy_email());
        }
      })
      .catch((error) => {
        dispatch(error_verefy_email());
      });
  };
};

export const resend_verify_mail = (email) => {
  return (dispatch) => {
    dispatch(start_resend_verify_mail());
    axios
      .post(`${url}resend_code_from_register`, email)
      .then((r) => {
        console.log(r);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const login_action = (data) => {
  return (dispatch) => {
    dispatch(start_login());
    axios
      .post(`${url}login`, data)
      .then((r) => {
        if (r.data.status) {
          dispatch(success_verefy_email(r.data));
        } else {
          dispatch(error_login());
        }
      })
      .catch((error) => {
        dispatch(error_login());
      });
  };
};
export const clear_login_error = () => {
  return {
    type: "clear_login_error",
  };
};

export const get_user = (token) => {
  return (dispatch) => {
    dispatch(start_get_user())
    axios
      .get(`${url}get_auth_user_info`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((r) => {
        if(r.data.status){
            dispatch(success_get_user(r.data))
        }
        else {
          dispatch(error_get_user())
        }
      })
      .catch((error) => {
        dispatch(error_get_user())
      });
  };
};

export const logout_action = () =>{
  let token = localStorage.getItem('token')
  return (dispatch) =>{
    axios.get(`${url}logout`,{
      headers: { Authorization: `Bearer ${token}` },
    }).then((r)=>{
      dispatch(start_logout())
      if(r.data.status){
        dispatch(success_logout(r.data))
      }
      else {
        dispatch(error_logout())
      }
    })
    .catch((error)=>{
      dispatch(error_logout())
    })
  }
}

export const forgot_password_api = (email) =>{
  return (dispatch) =>{
    dispatch(start_forgot_password())
    axios.post(`${url}forgot_password_send_code_to_email`,email).then((r)=>{
      if(r.data.status){
        dispatch(success_forgot_password(r.data))
      }
      else {
        console.log('8888')
        dispatch(error_forgot_password())
      }
    })
    .catch((error)=>{
      console.log('77777')
      dispatch(error_forgot_password())
    })
  }
}
export const clear_forgot_password_error = () =>{
  return {
    type:'clear_forgot_password_error'
  }
}
export const forgot_password_code = (data) =>{
  return (dispatch) => {
    dispatch(start_forgot_password_code())
    axios.post(`${url}validation_forgot_password_code`,data).then((r)=>{
      if(r.data.status){
        dispatch(success_forgot_password_code(r.data))
      }
      else {
        dispatch(error_forgot_password_code())
      }
    })
    .catch((error)=>{
      dispatch(error_forgot_password_code())
    })
  }
}
export const clear_forgot_password_code = () =>{
  return {
    type:'clear_forgot_password_code'
  }
}