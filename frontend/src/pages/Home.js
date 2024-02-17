import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import useAppHook from '../context/useAppHook'
import { useState } from 'react'
import { useLogin } from '../context/useLogin'

const Home = () => {

  const context = useAppHook()
  console.log(context)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const {login, error, isLoading} = useLogin()

  const submitHandlerLogin = async(e) =>{
    e.preventDefault()

    console.log(email, password)

    await login(email, password)

  }
  

  return (
    <div className=''>
      <p className='text-center fs-5 p-3 mt-5'>"Embark on the joyous adventure of travel, discovering new horizons, while conscientiously tracking expenses to ensure a budget-friendly and memorable journey."</p>
      <div className='home_bg p-5'>
        <form className='text-white container mt-auto'>
          <div className="mb-3 aaalabel">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input  type="email" onChange={e=>setEmail(e.target.value)} className="form-control abc" id="exampleInputEmail1" aria-describedby="emailHelp" />
            {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
          </div>
          <div className="mb-3 aaalabel">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input type="password" onChange={e=>setPassword(e.target.value)} className="form-control abc" id="exampleInputPassword1" />
          </div>
          {/* <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <div className='text-center'>
            <button disabled={isLoading} onClick={submitHandlerLogin} type="submit" className="btn btn-dark btn-lg">
              Login
            </button>
          </div>

          <div>
            {error && <div className='text-danger text-center'>{error}</div>}
          </div>

        </form>

        <div className='d-flex flex-column align-items-center my-auto text-bg-light p-3 rounded'>
          <h5 className='text-center'>Register here if you do not have an account with us</h5>
          <Link to="/register"><button className='btn btn-primary btn-primary'>Register</button></Link>
          
        </div>



        <Footer />
      </div>

    </div>
  )
}

export default Home