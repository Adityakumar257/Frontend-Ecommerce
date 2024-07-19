import React, { useState } from 'react'
import './LoginSign.css'
export const LoginSign = () => {
  const [state,setState] = useState("Login")
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
const login = async()=>{
  console.log("Login Function Executed",formData);
  let responseData;
  await fetch('http://localhost:4000/login',{
    method:'POST',
    headers:{
      Accept:'application/from-data',
      'Content-Type':'application/json',
    },
    body:JSON.stringify(formData)
  }).then((response)=>response.json()).then((data)=>responseData=data)
  if(responseData.success){
    localStorage.setItem('auth-token',responseData.token);
    window.location.replace("/");
  }
  else{
    alert(responseData.errors)
  }

}

const signup = async()=>{
  console.log("Signup Function Executed",formData);
  let responseData;
  await fetch('http://localhost:4000/signup',{
    method:'POST',
    headers:{
      Accept:'application/from-data',
      'Content-Type':'application/json',
    },
    body:JSON.stringify(formData)
  }).then((response)=>response.json()).then((data)=>responseData=data)
  if(responseData.success){
    localStorage.setItem('auth-token',responseData.token);
    window.location.replace("/");
  }
  else{
    alert(responseData.errors)
  }
}

  
  return (
    <div className='LoginSign'>
    <div className='LoginSign-container'>
    <h1>{state}</h1>
    <div className='loginSign-fields'>
     {state==="Sign Up"?<input type='text' name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name'/>:<></>}
    <input type='Email'name='email' value={formData.email} onChange ={changeHandler} placeholder='Enter Your Email'/>
    <input name='password' value={formData.password} onChange={changeHandler} type='Password' placeholder='Password '/>
    </div>
    <button onClick={()=>{state==="Login"?login():signup()}} >Continue</button>
    {state==="Sign Up"
    ? <p className='loginsignup-login'> Already have an account <span onClick={()=>{setState("Login Here")}}>Login here</span></p>
  :<p className='loginsignup-login'> Create an Account <span onClick={()=>{setState("Sign Up")}}>SignUp here</span></p>}
    </div>
    </div>
  )
}
