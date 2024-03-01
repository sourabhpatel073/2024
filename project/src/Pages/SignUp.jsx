import React, { useState } from 'react'

function SignUp() {
    const obj = {
        name:"",
        gmail:"",
        password:"",
        username:""
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(obj)
    }
    function handleChange(e){
        obj[e.target.name] = e.target.value
    
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input placeholder='Name' name='name' onChange={handleChange}/>
        <input placeholder='Gmail' name='gmail' onChange={handleChange}/>
        <input placeholder='Password' type='password' name='password' onChange={handleChange}/>
        <input placeholder='User Name' name='username' onChange={handleChange}/>
        <input type='submit' />

    </form>
      
    </div>
  )
}

export default SignUp
