export const LOGIN_PENDING="LOGIN_PENDING"
export const LOGIN_SUCCES="LOGIN_SUCCES"
export const LOGIN_ERROR="LOGIN_ERROR"
export const LOGIN_ADMIN="LOGIN_ADMIN"

export const setLoginPending=(isLoginPending)=>{
    return{
        type: LOGIN_PENDING,
        isLoginPending
    }
}
export const setLoginSuccess=(isLoginSuccess,userName,password)=>{
    return{
        type: LOGIN_SUCCES,
        isLoginSuccess,
        userName,
        password,
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