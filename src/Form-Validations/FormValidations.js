import React, { useEffect, useState } from 'react'
import Validation from '../Form-Validations/Validation.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './FormValidations'


const Validations = () => {
  const InitialValues = { username:"", email:"", password:"",passwordconfirm:"" }
  const [formData,setFormData]=useState(InitialValues)
  const [formError,setFormError]=useState({})
  const [isSubmit,setIsSubmit]=useState(false)

 const handleData=(e)=>{
   const {name,value} = e.target;
   setFormData({...formData, [name]:value}) 
 };

 const handleSubmit =(e)=>{
     e.preventDefault();
     setFormError(validate(formData))
     setIsSubmit(true)
 };

 useEffect(()=>{
  console.log(formError)
  if(Object.keys(formError).length === 0 && isSubmit) {
   console.log(formData)
  }
},[formError]);

 const validate =(values)=>{
  const errors={};
  const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if(!values.username){
    errors.username="Username is Required";
  }
  if(!values.email){
    errors.email="E-Mail is Required";
  } else if(!regex.test(values.email)){
    errors.email="This is not a valid Email format!";
  }
  if(!values.password){
    errors.password="Password is Required";
  } else if(values.password.length < 4){
    errors.password="Password must be more than 4 characters";
  }  else if(values.password.length > 10){
    errors.password="Password cannot exceed more than 10 characters";
  }
  if(values.password!==values.passwordconfirm){
    errors.passwordconfirm="Password is not matching"
  }
    return errors;
 }

  return (
    <div className='container'>
    {Object.keys(formError).length === 0 && isSubmit ? (
      <div className='msg-success'>Signed in successfully</div> 
      ) : (
       <pre>{JSON.stringify(formData,undefined,2)}</pre>
     )}

     
     <form onSubmit={handleSubmit}>
       <h1>Login Form</h1>
       <div className='hr-line'> <hr /> </div>
       <div className='formStyle'>
           <div className='filed'>
               <label htmlFor="username">UserName</label> 
               <input type="text" 
                      name="username" 
                      value={formData.username} 
                      onChange={handleData} 
                      placeholder='UserName'
                      className="form-control"/>
           </div>
            <p >{formError.username}</p>
           <div className='filed'>
               <label htmlFor="email">E-Mail</label>
               <input type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleData} 
                      placeholder="E-Mail"
                      className="form-control"
                      />
           </div>
           <p >{formError.email}</p>
           <div className='filed'>
               <label htmlFor="password">Password</label>
               <input type="password" 
                      name="password" 
                      value={formData.password}  
                      onChange={handleData} 
                      placeholder="Password"
                      className="form-control"
                      />
           </div>
           <p >{formError.password}</p>
           <div className='filed'>
               <label htmlFor="passwordconfirm">Password Confirm</label>
               <input type="password" 
                      name="passwordconfirm" 
                      value={formData.passwordconfirm}  
                      onChange={handleData} 
                      placeholder="Password Confirm"
                      className="form-control"
                      />
           </div>
           <p >{formError.passwordconfirm}</p>

           <button type="submit" className="form-control btn btn-primary">Submit</button>
       </div>
     </form>
</div>
  )
}

export default Validations