const initialState = {
    status:false,
    loading:false,
    error:''
}

export const forgotPassword = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'start_forgot_password':
            temp.loading = true
            temp.status = false
            break
        case 'success_forgot_password':
            temp.status = true
            temp.loading = false
            break
        case 'error_forgot_password':
            temp.loading = false
            temp.error = 'Неверный Эл. почта'
            break
        case 'clear_forgot_password_error':
            temp.error = ''
            break
        default:
            break;
    }
    return temp;
}