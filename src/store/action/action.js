import axios from "axios";
import { error_change_email, error_change_username_and_name, error_check_email_code, error_create_folder, error_create_new_password, error_forgot_password, error_forgot_password_code, error_get_all_folder, error_get_folfer_by_slug, error_get_user, error_login, error_logout, error_register, error_update_password, error_verefy_email } from "./errorAction";
import {
  start_change_email,
  start_change_username_and_name,
  start_check_email_code,
  start_create_folder,
  start_create_new_password,
  start_forgot_password,
  start_forgot_password_code,
  start_get_all_folder,
  start_get_folfer_by_slug,
  start_get_user,
  start_login,
  start_logout,
  start_register,
  start_resend_verify_mail,
  start_update_password,
  start_verefy_email,
} from "./startAction";
import {
  success_change_username_and_name,
  success_chnage_email,
  success_create_folder,
  success_create_new_password,
  success_forgot_password,
  success_forgot_password_code,
  success_get_all_folder,
  success_get_folfer_by_slug,
  success_get_user,
  success_login,
  success_logout,
  success_register,
  success_send_email_code,
  success_update_password,
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
        localStorage.removeItem('token')
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
        dispatch(error_forgot_password())
      }
    })
    .catch((error)=>{
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


export const create_new_password = (data) =>{
  console.log(data)
  return (dispatch) =>{
    dispatch(start_create_new_password())
    axios.post(`${url}add_new_password_from_forgot_password`,data).then((r)=>{
      if(r.data.status){
        dispatch(success_create_new_password(r.data))
      }
      else {
        dispatch(error_create_new_password())
      }
    })
    .catch((error)=>{
      dispatch(error_create_new_password())
    })
  }
}
export const change_username_and_name = (data) =>{
  const token  = localStorage.getItem('token')
  return (dispatch) =>{
      dispatch(start_change_username_and_name())
    axios.post(`${url}update_username_and_name`,data,{
      headers: { Authorization: `Bearer ${token}` },
    }).then((r)=>{
      if(r.data.status){
          dispatch(get_user(token))
          dispatch(success_change_username_and_name(r.data))
      }
      else {
        dispatch(error_change_username_and_name())
      }
    })
    .catch((error)=>{
      console.log(error)
      dispatch(error_change_username_and_name())
    })
  }
}

export const update_user_password = (data) =>{
  const token  = localStorage.getItem('token')
  return (dispatch) =>{
    dispatch(start_update_password())
    axios.post(`${url}update_password`,data,{
      headers: { Authorization: `Bearer ${token}` },
    }).then((r)=>{
      if(r.data.status){
        dispatch(success_update_password(r.data))
      }
      else {
        dispatch(error_update_password())
      }
    })
    .catch((error)=>{
      dispatch(error_update_password())
    })
  }
}
export const open_popup_change_password = () =>{
  return {
    type:'open_popup_change_password'
  }
}

export const change_email = (email) =>{
  const token  = localStorage.getItem('token')

  return (dispatch) =>{
    dispatch(start_change_email())
    axios.post(`${url}add_new_email_from_my_cabinet`,email,{
      headers: { Authorization: `Bearer ${token}` },
    }).then((r)=>{
      if(r.data.status){
        dispatch(success_chnage_email(r.data))
      }
      else {
        dispatch(error_change_email())
      }
    })
    .catch((error)=>{
      dispatch(error_change_email())
    })
  }
}

export const change_code =(code) =>{
  const token  = localStorage.getItem('token')
  return (dispatch) =>{
    dispatch(start_check_email_code())
    axios.post(`${url}validation_new_email_code_from_my_cabinet`,code,{
      headers: { Authorization: `Bearer ${token}` },
    }).then((r)=>{
      if(r.data.status){
        dispatch(success_send_email_code(r.data))
      }
      else {
        dispatch(error_check_email_code())
      }
    }).catch((error)=>{
      dispatch(error_check_email_code())
    })
  }
}

export const clear_change_code_error =() =>{
  return {
    type:'clear_change_code_error'
  }
}

export const create_folder = (data) =>{
  const token  = localStorage.getItem('token')
  return (dispatch) =>{
    dispatch(start_create_folder())
    axios.post(`${url}create_folder`,data,{
      headers: { Authorization: `Bearer ${token}` },

    }).then((r)=>{
      console.log(r.data.status)
        if(r.data.status){
          dispatch(success_create_folder(r.data))
        }
        else {
          dispatch(error_create_folder())
        }
    }).catch((error)=>{
      dispatch(error_create_folder())
    })
  }
}

export const get_all_folder = () =>{
  const token  = localStorage.getItem('token')
  return (dispatch) =>{
    dispatch(start_get_all_folder())
    axios.get(`${url}get_my_all_folders`,{
      headers: { Authorization: `Bearer ${token}` },
    }).then((r)=>{
      if(r.data.status){
        dispatch(success_get_all_folder(r.data))
      }
      else {
        dispatch(error_get_all_folder())
      }
      console.log(r)
    })
    .catch((error)=>{
      dispatch(error_get_all_folder())
      console.log(error)
    })
  }
}

export const get_folder_by_slug = (slug)=>{
    return (dispatch) =>{
      dispatch(start_get_folfer_by_slug())
      axios.get(`${url}get_folder_by_slug/${slug}`).then((r)=>{
        console.log(r)
        dispatch(success_get_folfer_by_slug(r.data))
      })
      .catch((error)=>{
        dispatch(error_get_folfer_by_slug())
        console.log(error)
      })
    }
}
