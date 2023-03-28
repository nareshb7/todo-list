import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState(false)
    const [loginUser, setUser]= useState({
        email : '',
        password: ''
    })
    const handleChange =(e)=> {
        setUser({...loginUser, [e.target.name]: e.target.value})
    }
    const handleSubmit=(e)=> {
        e.preventDefault()
        console.log(loginUser, 'login')
        navigate(`/home/${JSON.stringify(loginUser)}`)
        
    }
    if (login) {
        console.log(login, 'login')
        
    }
  return (
    <div>
        <h2>LogIn Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' placeholder='Email Id' name='email' value={loginUser.email} onChange={handleChange}/>
            </div>
            <div>
                <input type='password' placeholder='password' name='password' value={loginUser.password} onChange={handleChange} />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
        <div>
            
        </div>
    </div>
  )
}

export default Login