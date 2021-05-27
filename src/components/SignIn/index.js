import React from 'react'
import { connect } from 'react-redux'
import { Form, FormContainer, FormText, FormInput, FormButton, FormSpan, FormImg, FormLink } from './SignInElements'
import { login } from '../../reducer/AccountReducer'
import NavBarAdmin from '../NavBarAdmin/navbarAdmin'
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    onSubmit = e => {
        e.preventDefault();
        let { userName, password } = this.state;
        console.log(userName + " " + password)
        this.props.login(userName, password);
    }
    render() {
        let { userName, password } = this.state;
        let { isLoginPending, isLoginSuccess, loginError } = this.props;
        return (
            <>
                <Form onSubmit={this.onSubmit}>
                    <FormContainer>
                        <FormText>Username</FormText>
                        <FormInput name="userName" type="text" placeholder="Enter Username" required onChange={this.handleChange} />
                        <div>{userName}</div>
                        <FormText>Password</FormText>
                        <FormInput name="password" type="password" placeholder="Enter Password" required onChange={this.handleChange} />
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
                    {isLoginPending == true ? <div>Please wait</div> : <div>False</div>}
                    {isLoginSuccess == true ? <div>Welcome back!</div> : <div>Not success</div>}
                    {loginError == null ? <div>No message</div> : <div>{loginError.message}</div>}
                </Form>
                <NavBarAdmin />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.accounts.isLoginPending,
        isLoginSuccess: state.accounts.isLoginSuccess,
        loginError: state.accounts.loginError
    }
}
const mapDispatchToProps = dispatch => {
    return {
        login: (userName, password) => dispatch(login(userName, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
