export const success_register = (data) =>{
    return {
        type:'success_register',
        data
    }
}
export const success_verefy_email = (data) =>{
    return {
        type:'success_verefy_email',
        data
    }
}
export const success_login = (data) =>{
    return {
        type:'success_login',
        data,
    }
}
export const success_get_user = (data)=>{
    return {
        type:'success_get_user',
        data
    }
}
export const success_logout = (data) =>{
    return {
        type:'success_logout',
        data
    }
}