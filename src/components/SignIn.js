import React ,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { getData } from './index'

const SignIn = () => {

    const dispatch= useDispatch()
    
    const [userDetails, setUserDetails]=  useState( {
        fName:'',
        email:'',
        mobile: "",
        password: '',
        conPsd :''
    })
    const details =useSelector((state)=> state.users )
    let val = false
    let validation =[]


    const handleChange =(e)=> {
        const emailPattern = /^[a-z][A-z0-9]+@[a-z0-9]+(?:[.][a-z]{2,10})+$/
        const mblPattern =/^[0-9]{10}$/
        if (e.target.name==='email'){
            if (e.target.value.match(emailPattern)){
                console.log('email matched', e.target.value)
            }
        }
        if (e.target.name === 'mobile') {
            if (e.target.value.match(mblPattern)) {
                console.log('mobile matched', e.target.value)
            }
        }
        setUserDetails({...userDetails, [e.target.name]: e.target.value})
    }
    
    const { fName, email, mobile, password, conPsd} = userDetails
    const handleSubmit =(e)=> {
        e.preventDefault()
       console.log(details, 'store')
    }

  return (
    <div>
        <h2>SignIn Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
               <div> <label>Name</label></div>
                <input type='text' placeholder='Enter your Name' name='fName' value={fName}   onChange={handleChange}/>
            </div>
            <div>
               <div> <label>Email</label></div>
                <input type='text' placeholder='Enter Mail Id' name='email' value={email} onChange={handleChange} />
            </div>
            <div>
               <div> <label>Mobile</label></div>
                <input type='Number' placeholder='Enter Mobile Number' name='mobile'  value={mobile} onChange={handleChange}/>
            </div>
            <div>
                <div><label> Password</label></div>
                <input type='text' placeholder='Password'  name='password' value={password} onChange={handleChange}/>
            </div>
            <div>
                <div><label>Confirm Password</label></div>
                <input type='text' placeholder='Confirm Password'  name='conPsd' value={conPsd} onChange={handleChange}/>
            </div>
            <div>
                <button type='submit' onClick={()=> dispatch(getData(userDetails))} disabled={val}> SIgn In</button>
            </div>
        </form>
        <div>
            <h1> ok</h1>
        </div>
    </div>
  )
}

export default SignIn