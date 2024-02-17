import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import RegisterSuccess from './pages/RegisterSuccess';
import Main from './pages/Main';
import useAppHook from './context/useAppHook';


function App() {

  const {user} = useAppHook()
  console.log(user)

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={!user? <Home /> : <Navigate to='/main' />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={!user? <Register /> : <Navigate to='/registersuccess' />} />
          <Route path="/registersuccess" element={<RegisterSuccess />} />
          <Route path='/main' element={user? <Main /> : <Navigate to='/' />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
