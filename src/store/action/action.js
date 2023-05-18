import axios from "axios";
import { error_get_user, error_login, error_register, error_verefy_email } from "./errorAction";
import {
  start_get_user,
  start_login,
  start_register,
  start_resend_verify_mail,
  start_verefy_email,
} from "./startAction";
import {
  success_get_user,
  success_login,
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
      })
      .catch((error) => {
        dispatch(error_get_user())
      });
  };
};
