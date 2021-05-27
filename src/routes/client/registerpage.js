import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
const RegisterPage = () => {
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [repassword,setRePassword]=useState("");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [phone,setPhone]=useState("");
    const [role,setRole]=useState("customer");
    const history= useHistory();
    async function signUp(){
        let item={userName,password,name,email,address,phone,role};
        console.log(item);
        let result= await fetch("https://pizza-toryo.herokuapp.com/api/user",{
            method: 'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            } 
        })
        result= await result.json();
        console.warn("result",result);
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/")
    }
    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Register</h1>
            <input type="text" className="form-control" placeholder="Login name" value={userName} required
            onChange={e=>setUserName(e.target.value)}/>
            <br/>
            <input type="password" className="form-control" placeholder="Password" value={password} required
            onChange={e=>setPassword(e.target.value)}/>
            <br/>
            <input type="password" className="form-control" placeholder="Re-password" value={repassword} required
            onChange={e=>setRePassword(e.target.value)}/>
            <br/>
            <input type="text" className="form-control" placeholder="Your name" value={name} required
            onChange={e=>setName(e.target.value)}/>
            <br/>
            <input type="email" className="form-control" placeholder="Email" value={email} required
            onChange={e=>setEmail(e.target.value)}/>
            <br/>
            <input type="text" className="form-control" placeholder="Address" value={address} required
            onChange={e=>setAddress(e.target.value)}/>
            <br/>
            <input type="text" className="form-control" placeholder="Phone" value={phone} required
            onChange={e=>setPhone(e.target.value)}/>
            <br/>
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
            onClick={signUp}>Submit</button>
        </div>
    )
}

export default RegisterPage
