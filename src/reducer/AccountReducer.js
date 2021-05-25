import {Promise} from 'es6-promise'
import {LOGIN_PENDING,LOGIN_SUCCES,LOGIN_ERROR,LOGIN_ADMIN,setLoginPending,setLoginSuccess,setLoginError,setIsAdmin} from '../actions/LoginAction'
const initAcountStates={
    isLoginPending:false,
    isLoginSuccess: false,
    loginError:null,
    isAdmin:false,
    userName:'',
    password:'',
    fullName:'',
    account:{}
}
const _accounts=[
    {
        key:1,
        id:'1',
        userName:"admin",
        password:"123",
        numberPhone:"1234567890",
        fullName:"Admin",
        role:"A",
    },
    {
        key:2,
        id:'2',
        userName:"customer",
        password:"123",
        numberPhone:"1234567890",
        fullName:"Customer",
        role:"C",
    }]
export const login=(userName,password)=>{
    return dispatch=>{
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(false,userName,password));
        dispatch(setLoginError(null));

        sendLoginRequest(userName, password)
        .then(success=>{
            dispatch(setLoginPending(false));
            dispatch(setLoginSuccess(true,userName,password));
        })
        .catch(err=>{
            dispatch(setLoginPending(false));
            dispatch(setLoginError(err));
        })
    }
}
const sendLoginRequest=(userName, password)=>{
    return new Promise((resolve, reject)=>{
        let check= _accounts.some(account=>account.userName===userName && account.password===password)
        if(check){
            return resolve(true)
        }
        else{
            return reject(new Error('Invalid user name or password'))
        }
    })
}
const AccountReducer=(state=initAcountStates, action)=>{
    switch(action.type){
        case LOGIN_PENDING:
            return{
                ...state,
                isLoginPending:action.isLoginPending
            }
        case LOGIN_SUCCES:
            var userName,password,account;
            if(action.isLoginSuccess==true) {
                userName = action.userName;
                password = action.password;
                account= _accounts.find(account=>account.userName===userName && account.password===password);
                console.log(account.fullName);
                return{
                    ...state,
                    isLoginSuccess: action.isLoginSuccess,
                    fullName: account.fullName
                }
            };
            return{
                ...state,
                isLoginSuccess: action.isLoginSuccess,
            }
        case LOGIN_ERROR:
            return{
                ...state,
                loginError:action.loginError
            }
        case LOGIN_ADMIN:
            return{
                ...state,
                isAdmin: action.isAdmin
            }
        default:
            return{
                ...state
            }
    }
}
export default AccountReducer