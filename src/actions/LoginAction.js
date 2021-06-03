export const LOGIN_PENDING="LOGIN_PENDING"
export const LOGIN_SUCCES="LOGIN_SUCCES"
export const LOGIN_ERROR="LOGIN_ERROR"
export const LOGIN_ADMIN="LOGIN_ADMIN"
export const LOG_OUT="LOG_OUT"


export const setLoginPending=(isLoginPending)=>{
    return{
        type: LOGIN_PENDING,
        isLoginPending
    }
}
export const setLoginSuccess=(users,user)=>{
    return{
        type: LOGIN_SUCCES,
        users,
        user
    }
}
export const setLoginError=(loginError)=>{
    return{
        type: LOGIN_ERROR,
        loginError
    }
}
export const setIsAdmin=isAdmin=>{
    return{
        type: LOGIN_ADMIN,
        isAdmin
    }
}
export const setLogout=(isLogout)=>{
    return{
        type: LOG_OUT,
        isLogout
    }
}