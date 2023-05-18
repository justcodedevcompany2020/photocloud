const initialState = {
    status:false,
    loading:false,
    changePasswordLoading:false,
    changePasswordstatus:false,
    error:''
}

export const changeDataReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'start_change_username_and_name':
            temp.loading = true
            temp.status = false
            break
        case 'success_change_username_and_name':
            temp.loading = false
            temp.status = true
            break
        case 'error_change_username_and_name':
            temp.loading = false
            temp.status = false
            break
        case 'start_update_password':
            temp.changePasswordLoading = true
            temp.changePasswordstatus = false
            temp.error = ''
            break
        case 'success_update_password':
            temp.changePasswordLoading = false
            temp.changePasswordstatus = true
            temp.error  = ''
            break
        case 'error_update_password':
            temp.changePasswordLoading = false
            temp.changePasswordstatus = false
            temp.error = 'неверный старый пароль'
            break
        case 'open_popup_change_password':
            temp.changePasswordLoading = false
            temp.changePasswordstatus = false
            temp.error = ''
            break
        default:
            break;
    }
    return temp;
}