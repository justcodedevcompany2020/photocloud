const initialState = {
    status:false,
    loading:false,
    user:[],
    token:'',
    error:''
}

export const loginReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'start_login':
            temp.loading = true
            break
        case 'success_login':
            temp.user = action.data.user_data
            temp.loading = false
            temp.token = action.data.token
            localStorage.setItem('token',action.data.token);
            temp.status = true
            break
        case 'error_login':
            temp.loading = false
            temp.status = false
            temp.error = 'Неправильный логин или пароль'
            break
        case 'clear_login_error':
            temp.error = ''
            break
        default:
            break;
    }
    return temp;
}