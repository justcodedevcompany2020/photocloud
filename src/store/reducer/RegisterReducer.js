const initialState = {
    status:false,
    loading:false,
}

export const registerRegister = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'start_register':
            temp.loading = true
            break
        case 'success_register':
            temp.status = true
            temp.loading = false
            break;
        case 'error_register':
            temp.status = false
            temp.loading = false
            break
        default:
            break;
    }
    return temp;
}