import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { useLogout } from '../context/useLogout';
import useAppHook from '../context/useAppHook';

const MyNavbar = () => {

  const { logout } = useLogout()

  const { user } = useAppHook()
  console.log(user)

  const logoutHandler = () => {
    logout()
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/main">
          <img src={logo} style={{ width: '3rem' }} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>




        {user && (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <span className='me-3'>{user.name}</span>
              {/* logout button */}
              <div><button onClick={logoutHandler} className='btn btn-dark'>Log Out</button></div>
            </ul>

          </div>
        )}



        {!user && <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <Link className="nav-link fs-5 p-2" to="/">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 p-2" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>}



      </div>
    </nav>
  );
};

export default MyNavbar;
