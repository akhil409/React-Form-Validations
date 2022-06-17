import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Validations.css'


const Validations = () => {
    const [data,setData]=useState({username:'',email:'',password:'',confirmpassword:''})
    const {username,email,password,confirmpassword}=data
    const isEnabled=username.length>=1 && password.length>=1 && email.length>=1 && confirmpassword.length >=1
    
    const changeHandler = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    
    const submitHandler =(e)=>{
        e.preventDefault()
      
        if(password === confirmpassword){
            console.log(data);
        } else{
            alert("Passwords are not matching!")
        }
    }

  return (
    <div className='container'>
        <form autoComplete='off' className='submitForm' onSubmit={submitHandler}>
            <h1 className='mt-2'>Login Form</h1>
            <label htmlFor="">Username</label>
            <input type="text" onChange={changeHandler} name="username" value={username} className='form-control' placeholder='Username'/> <br/>
             {username.length <=5 && username.length === 1 ? <p style={{"color":"red"}}>Username should have minimum 6 characters</p> :null}

            <label htmlFor="">E-Mail</label>
            <input type="email" onChange={changeHandler} name="email" value={email} className='form-control' placeholder='Email'/> <br/>

            <label htmlFor="">Password</label>
            <input type="password" onChange={changeHandler} name="password" value={password} className='form-control' placeholder='Password'/> <br/>
            {password.length <=5 && password.length === 1  ? <p style={{"color":"red"}}>Password should have minimum 9 characters</p> : null }
            

            <label htmlFor="">Password Confirm</label>
            <input type="password" onChange={changeHandler} name="confirmpassword" value={confirmpassword} className='form-control' placeholder='Confirm Password'/> <br/>
            {password !== confirmpassword ? <p style={{"color":"red"}}>Passwords are not matching</p> : null }

            <input type="submit" disabled={!isEnabled} className='form-control btn btn-success'/>
        </form>
    </div>
  )
}

export default Validations