import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form, FormContainer, FormText, FormInput, FormButton, FormSpan, FormImg, FormLink } from './SignInElements'
import { setLoginSuccess } from '../../actions/LoginAction'
import NavBarAdmin from '../NavBarAdmin/navbarAdmin'
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';
const SignIn = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(async()=>{
        const result= await axios(`https://pizza-toryo.herokuapp.com/api/user`)
        setUsers(result.data.data)
    })
    const history= useHistory();
    const handleLogin = (e) => {
        var user = { username: username, password: password };
        props.setLoginSucces(users, user);
        console.log(props.account.isLoginSuccess);
        if(props.account.isLoginSuccess===true){
            history.replace('/');
            localStorage.setItem("accessToken",props.account.isLoginSuccess)
            localStorage.setItem("user_id",props.account.user.id)
            createNotification('success')
            alert("Login success!")
        }
        else {
            createNotification('error')
            alert("Incorect username or password!")
            localStorage.setItem("accessToken",false)
            localStorage.setItem("user_id",props.account.user.id)
            e.preventDefault();

        }
    }
    const createNotification = (type) => {
        return () => {
          switch (type) {
            case 'info':
              NotificationManager.info('Info message');
              break;
            case 'success':
              NotificationManager.success('Success message', 'Title here');
              break;
            case 'warning':
              NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
              break;
            case 'error':
              NotificationManager.error('Error message', 'Click me!', 5000, () => {
                alert('callback');
              });
              break;
          }
        };
      };
    return (
        <>
        <NotificationContainer/>
            <Form onSubmit={e=>handleLogin(e)}>
                <FormContainer>
                    <FormText>Username</FormText>
                    <FormInput name="username" type="text" placeholder="Enter username" required onChange={e => setUsername(e.target.value)} />
                    <div>{username}</div>
                    <FormText>Password</FormText>
                    <FormInput name="password" type="password" placeholder="Enter password" required onChange={e => setPassword(e.target.value)} />
                    <div>{password}</div>
                    <FormButton type="submit">
                        <FormText className="btn-txt-login">Sign in</FormText>
                    </FormButton>
                    <FormButton >
                        <FormLink to="/signup" className="sign-up-btn-link">
                            <FormText className="btn-txt-regis">
                                Sign up
                                </FormText>
                        </FormLink>
                    </FormButton>
                </FormContainer>
                {props.account.isLoginPending == true ? <div>Please wait</div> : <div>False</div>}
                {props.account.isLoginSuccess == true ? <div>Welcome back!</div> : <div>Not success</div>}
                {props.account.loginError == null ? <div>No message</div> : <div>{props.loginError}</div>}
            </Form>
            <NavBarAdmin />
            
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        account: state.accounts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setLoginSucces: (users, user) => dispatch(setLoginSuccess(users, user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
