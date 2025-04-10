import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../src/Components/Login'
import Register from '../src/Components/Register'
import Home from '../src/Components/Home'
import About from '../src/Components/About'
import Events from '../src/Components/Events'
import RegisterForm from '../src/Components/RegisterForm'
import ExploreChef from'../src/Components/ExploreChef'
import ChefDetailin from '../src/Components/ChefDetailin'
import ChefDetailit from '../src/Components/ChefDetailit'
import ChefDetailger from '../src/Components/ChefDetailger'
import Join from '../src/Components/Join'
import Connect from '../src/Components/Connect'
import Store from '../src/Components/Store'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/registerform" element={<RegisterForm/>} />
        <Route path="/explorechef" element={<ExploreChef/>} />
        <Route path="/chefdetailin" element={<ChefDetailin />} />
        <Route path="/chefdetailit" element={<ChefDetailit />} />
        <Route path="/chefdetailger" element={<ChefDetailger />} />
        <Route path="/store" element={<Store />} />
        <Route path="/join" element={<Join />} />
        <Route path="/connect" element={<Connect />} />
    
      
      </Routes>
    </Router>
  )
}

export default App
