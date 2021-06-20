import {Promise} from 'es6-promise'
import {LOGIN_PENDING,LOGIN_SUCCES,LOGIN_ERROR,LOGIN_ADMIN,LOG_OUT} from '../actions/LoginAction'
const initAcountStates={
    isLoginPending:false,
    isLoginSuccess: false,
    loginError:null,
    isAdmin:false,
    userName:'',
    password:'',
    name:'',
    user:{},
}
// export const login=(username,password)=>{
//     return dispatch=>{
//         dispatch(setLoginPending(false));
//         dispatch(setLoginSuccess(false,username,password));
//         dispatch(setLoginError(null));

//         sendLoginRequest(username, password)
//         .then(success=>{
//             dispatch(setLoginPending(false));
//             dispatch(setLoginSuccess(true,username,password));
//         })
//         .catch(err=>{
//             dispatch(setLoginPending(false));
//             dispatch(setLoginError(err));
//         })
//     }
// }
// const sendLoginRequest=(userName, password)=>{
//     return new Promise((resolve, reject)=>{
//         let check= _accounts.some(account=>account.userName===userName && account.password===password)
//         if(check){
//             return resolve(true)
//         }
//         else{
//             return reject(new Error('Invalid user name or password'))
//         }
//     })
// }
const AccountReducer=(state=initAcountStates, action)=>{
    switch(action.type){
        case LOGIN_PENDING:
            return{
                ...state,
                isLoginPending:action.isLoginPending
            }
        case LOGIN_SUCCES:
            console.log("LOGIN_SUCCES")
            let user,users,account={},isAdmin=false;
            user = action.user;
            users = action.users;
            console.log(action.user);
            console.log(action.users);

            account=users.find(account=>account.username===user.username && account.password===user.password);
            state.user=account;
            console.log("id:"+state.user.id)
            if(typeof account!=='undefined'){
                if(account.role==="admin") {
                    isAdmin=true
                    console.log(account.role);
                }
                state.isLoginSuccess=true;
                console.log("reducer "+state.isLoginSuccess);
                return{
                    ...state,
                    name: account.username,
                    isAdmin: isAdmin
                }
            }
            return{
                ...state
            }
        case LOG_OUT:
            console.log("LOG_OUT")
            localStorage.setItem("user_id",null);
            localStorage.setItem("accessToken",false);
            localStorage.setItem("total-cart-amount",0);         
            return{
                isLoginPending: false,
                isLoginSuccess: false,
                isAdmin: false,
                userName:'',
                password:'',
                name:'',
                user:{},
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