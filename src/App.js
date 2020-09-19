import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Routes } from './components'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
