const initialState = {
    status:false,
    loading:false,
    error:''
}

export const createFolderReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'start_create_folder':
            temp.loading = false
            temp.error = ''
            temp.status = false
            break
        case 'error_create_folder':
            temp.status = false
            temp.error = 'Необходимо ввести имя в поле.'
            temp.loading = false
            break
        case 'success_create_folder':
            temp.loading = false
            temp.status = true
            break
        default:
            break;
    }
    return temp;
}