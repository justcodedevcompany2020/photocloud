const initialState = {
    status:false,
    loading:false,
    error:'',
    statusCode:false,
    loadingCode:false,
    errorCode:''
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
            temp.error = ''
            break
        case 'error_forgot_password':
            temp.loading = false
            temp.error = 'Неверный Эл. почта'
            break
        case 'clear_forgot_password_error':
            temp.error = ''
            break
        case 'start_forgot_password_code':
            temp.loadingCode = true
            temp.statusCode = false
            break
        case 'success_forgot_password_code':
            temp.loadingCode = false
            temp.statusCode = true
            temp.errorCode = ''
            break
        case 'error_forgot_password_code':
            temp.errorCode = 'Неверный код'
            temp.statusCode = false
            temp.loadingCode = false
            break
        case 'clear_forgot_password_code':
            temp.errorCode = ''
            temp.statusCode = false
            temp.loadingCode = false          
        default:
            break;
    }
    return temp;
}