import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSignup } from '../context/useSignup'

const Register = () => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  // const [error, setError] = useState('')

  const {signup, error, isLoading} = useSignup()


  const submitHandler = async (e) => {
    e.preventDefault()

    // const user = { email, password, name }

    console.log('it is working')

    // const response = await fetch("/api/user",{
    //   method: "POST", 
    //   body: JSON.stringify(user),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })

    // const json = await response.json()

    // if(!response.ok){
      
    //   console.log(json.error)
    //   setError(json.error)
    // }

    // if(response.ok){
    //   setName('')
    //   setEmail('')
    //   setPassword('')
    //   console.log('new user added', json)
    // }

    await signup(email, password,name)


  }

  return (
    <div className='register-bg'>
      <div className="wrapper">
        <h2>Registration</h2>
        <form>
          <div className="input-box">
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" />
          </div>
          <div className="input-box">
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" />
          </div>
          <div className="input-box">
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Create password" />
          </div>
          {/* <div className="input-box">
            <input type="password" placeholder="Confirm password" required />
          </div> */}
          <div className="policy">
            <input type="checkbox" />
            <h3>I accept all terms & conditions</h3>
          </div>
          <div className="input-box button">
            {/* <Link to="/registersuccess"><input type="Submit" value="Register Now" /></Link> */}
            <Link to='/registersuccess'><button  onClick={submitHandler} className='btn btn-primary btn-lg'>Register Now</button></Link>
          </div>
          {error && <div>{error}</div>}
          <div className="text">
            <h3>
              Already have an account? <Link to='/'>Login Now</Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register