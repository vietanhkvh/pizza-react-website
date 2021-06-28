import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.css'

const Profile = (props) => {
    let user = props.account.user;
    let rePassword = "";

    const [account, setAccount] = useState({//gui di
        password: user.password,
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
    });
    const [isInEdit, setInEdit] = useState(false)
    const [isInChangePassword, setInChangePass]=useState(false)

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const addressRef = useRef(null)
    const phoneRef = useRef(null)
    const passwordRef = useRef(null)
    const rePasswordRef = useRef(null)

    const handleChange = (e) => {
        const newAccount = { ...account };
        newAccount[e.target.id] = e.target.value;
        setAccount(newAccount);
        console.log(newAccount);
    }
    const handleChangeRePass=(e)=>{
        rePassword= e.target.value
    }
    const changeEditMode = () => {
        setInEdit(!isInEdit)
    }
    const changeEditPassword=(check)=>{
        setInChangePass(check)
    }
    const postReqUpdate= async()=>{
        let result = await fetch(`https://pizza-toryo.herokuapp.com/api/user/` + user.id
                + `?username=` + user.username + `&password=` + account.password + `&name=` + account.name + `&email=`
                + account.email + `&address=` + account.address + `&phone=` + account.phone
                + `&role=` + user.role
                , {
                    method: 'PUT',
                    body: JSON.stringify(null),
                    headers: {
                        "Content-Type": 'application/json',
                        "Accept": '*/*'
                    }
                }
            )
            result = await result.json;
            console.warn("result", result.statusText);
            if(result!==null){
                alert("Change success!")
            }
    }
    const history= useHistory();
    const handleSave = () => {
        if (isInChangePassword) {
            if(account.password===rePassword){
                postReqUpdate()
                setInEdit(!isInEdit)
                history.push('')
            }
            else{
                alert("re password is not the same password")
                rePasswordRef.current.focus()
            }
        }
        else{
            postReqUpdate()
            setInEdit(!isInEdit)
        }
           
    }
    const handleCancel = () => {
        nameRef.current.value = user.name
        emailRef.current.value = user.email
        phoneRef.current.value = user.phone
        addressRef.current.value = user.address
        passwordRef.current.value = user.password
        if(isInChangePassword){
            rePasswordRef.current.value = rePassword
        }
        changeEditMode()
        changeEditPassword(false)
    }

    return (
        isInEdit ?
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <table className="table">
                            <tr>
                                <td>
                                    <p>Name*</p>
                                    <input type="text" id="name" className="form-control" placeholder="Your name" ref={nameRef} defaultValue={account.name} onChange={e => handleChange(e)} />
                                    <br />
                                    <p>Email</p>
                                    <input type="email" id="email" className="form-control" placeholder="Email" ref={emailRef} defaultValue={account.email} onChange={e => handleChange(e)} />
                                    <br />
                                    <p>Phone*</p>
                                    <input type="text" id="phone" className="form-control" placeholder="Phone" ref={phoneRef} defaultValue={account.phone} onChange={e => handleChange(e)} />
                                </td>
                                <td>
                                    <p>Address*</p>
                                    <input type="text" id="address" className="form-control" placeholder="Address" ref={addressRef} defaultValue={account.address} onChange={e => handleChange(e)} />
                                    <br />
                                    
                                    
                                        <p>Password</p>
                                        <input type="text" id="password" className="form-control" placeholder="password" ref={passwordRef} defaultValue={account.password} onChange={e =>handleChange(e)} onKeyDown={()=>changeEditPassword(true)}/>
                                        <br />{console.log("check p:"+isInChangePassword)}
                                        {
                                            isInChangePassword?
                                            <>
                                            <p>Re-password</p>
                                            <input type="text" id="note" className="form-control" placeholder="re-password" ref={rePasswordRef} defaultValue={rePassword} onChange={(e)=>handleChangeRePass(e)} />
                                            </>
                                            :
                                            null
                                        }   
                                </td>
                            </tr>
                        </table>
                        <button className="button"
                            style={{
                                backgroundColor: "#e31837",
                                color: "white",
                                width: "30%",
                                height: "3.5em",
                                padding: "15px",
                                margin: "10 2",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "1em",
                                float: 'right'
                            }}
                            onClick={handleSave}
                        > Save
                </button>
                        <button className="button"
                            style={{
                                backgroundColor: "#e31837",
                                color: "white",
                                width: "30%",
                                height: "3.5em",
                                padding: "15px",
                                margin: "10 2",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "1em",
                                float: 'right'
                            }}
                            onClick={handleCancel}
                        >Cancel</button>
                    </table>
                </div>
            </div > :
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <table className="table">
                            <tr>
                                <td>
                                    <p>Name*</p>
                                    <input type="text" id="name" className="form-control" placeholder="Your name" defaultValue={user.name} readOnly />
                                    <br />
                                    <p>Email</p>
                                    <input type="email" id="email" className="form-control" placeholder="Email" defaultValue={user.email} readOnly />
                                    <br />
                                    <p>Phone*</p>
                                    <input type="text" id="phone" className="form-control" placeholder="Phone" defaultValue={user.phone} readOnly />
                                </td>
                                <td>
                                    <p>Address*</p>
                                    <input type="text" id="address" className="form-control" placeholder="Address" defaultValue={user.address} readOnly />
                                    <br />
                                    <p>Password</p>
                                    <input type="text" id="password" className="form-control" placeholder="Password" defaultValue={user.password} readOnly />
                                    <br />
                                </td>
                            </tr>
                        </table>

                        <button className="button"
                            onClick={changeEditMode}
                            style={{
                                backgroundColor: "#e31837",
                                color: "white",
                                width: "30%",
                                height: "3.5em",
                                padding: "15px",
                                margin: "10 2",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "1em",
                                float: 'right'
                            }}
                        >Edit</button>

                    </table>
                </div>
            </div >
    )
}
const mapStateToProps = state => {
    return {
        cart: state.carts,
        account: state.accounts
    }
}
export default connect(mapStateToProps)(Profile)
