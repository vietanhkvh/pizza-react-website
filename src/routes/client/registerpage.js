import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
const RegisterPage = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
        address: "",
        phone: "",
        role: "customer"
    });
    const [repassword, setRepassword] = useState("")
    const handleChange = (e) => {
        const newUser = { ...user };
        newUser[e.target.id] = e.target.value;
        setUser(newUser);
        console.log(newUser)
    }

    const history = useHistory();
    const signUp = async(e) => {
        let userIF= {
            username: user.username,
            password: user.password,
            name: user.name,
            email: user.email,
            address: user.address,
            phone: user.phone,
            role: user.role
        }
        e.preventDefault();
       let result=await fetch(`https://pizza-toryo.herokuapp.com/api/user`, {
           method:'POST',
           body:JSON.stringify(userIF),
           headers:{
               "Content-Type":'application/json',
               "Accept":'*/*'
           }
       })
            // .then()(res => {
            //     console.log(res.data.data);
            // }).catch(err => console.log(err))
        result= await result.json;
        console.warn("result", result);
        localStorage.setItem("user-info", JSON.stringify(result.json));
        history.push('/');

    }
    return (
        <div className="col-sm-6 offset-sm-3">
            <form onSubmit={e => signUp(e)}>
                <h1>Register</h1>
                <input type="text" id="username" className="form-control" placeholder="Login name" value={user.username} required
                    onChange={e => handleChange(e)} />
                <br />
                <input type="password" id="password" className="form-control" placeholder="Password" value={user.password} required
                    onChange={e => handleChange(e)} />
                <br />
                <input type="password" className="form-control" placeholder="Re-password" value={repassword} required
                    onChange={e => setRepassword(e.target.value)} />
                <br />
                <input type="text" id="name" className="form-control" placeholder="Your name" value={user.name} required
                    onChange={e => handleChange(e)} />
                <br />
                <input type="email" id="email" className="form-control" placeholder="Email" value={user.email} required
                    onChange={e => handleChange(e)} />
                <br />
                <input type="text" id="address" className="form-control" placeholder="Address" value={user.address} required
                    onChange={e => handleChange(e)} />
                <br />
                <input type="text" id="phone" className="form-control" placeholder="Phone" value={user.phone} required
                    onChange={e => handleChange(e)} />
                <br />
                <button className="btn btn-primary"
                    style={{
                        backgroundColor: "#e31837",
                        color: "white",
                        width: "100%",
                        padding: "15p",
                        margin: "10 2",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1em",
                    }}
                    type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RegisterPage
