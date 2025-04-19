import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from '../modules/dashboard/index'
import LoginPage from '../modules/auth/login'
import SignupPage from '../modules/auth/signup'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/sign-in' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignupPage />} />
        </Routes>
      </Router>
    </div>
  )
}
