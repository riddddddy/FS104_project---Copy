import React from 'react'
import { Link } from 'react-router-dom'

const RegisterSuccess = () => {
  return (
    <div class="p-5 mb-4 mt-5 container bg-body-tertiary rounded-3">
      <div class="container-fluid py-5 text-center">
        <h1 class="display-5 fw-bold mb-4">Successfully Registered</h1>
        {/* <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p> */}
        <Link to='/main'><button class="btn btn-primary btn-lg" type="button">Back to Main Page</button></Link>
      </div>
    </div>
  )
}

export default RegisterSuccess