const initialState = {
    status:false,
    loading:false,
    data:[],
    photo:[],
    delate_loading:false,
    succes_delate:false,
}

export const addPhotoReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'start_add_photo':
            temp.loading = true
            temp.status = false
            temp.data = []
            break
        case 'error_add_photo':
            temp.loading = false
            temp.status = false
            temp.data = []
            break
        case 'success_add_photo':
            temp.loading = false
            temp.status = true
            temp.data = action.data
            break
        case 'success_get_photo':
            temp.photo.push(action.data.photo_url)
            break
        case 'start_delate_photo':
            temp.delate_loading = true
            temp.succes_delate = false
            break
        case 'success_delate_photo':
            temp.delate_loading = false
            temp.succes_delate = true
            break
        case 'error_delate_photo':
            temp.succes_delate = false
            temp.delate_loading = false
            break
        default:
            break;
    }
    return temp;
}