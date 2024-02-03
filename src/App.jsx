import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Hero from './components/Hero/Hero'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import './App.scss'
import Begin from './components/Begin/Begin';

function App() {
  return (
    <div className='App'>
        <div className="background-container">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="" />
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
          </div>
        <Router>
          <Routes>
                <Route path='/signup' element={<Signup />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/' element={<Begin />} />
                <Route path='/hero' element={<Hero />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App