const initialState = {
    status:false,
    loading:false,
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
        default:
            break;
    }
    return temp;
}