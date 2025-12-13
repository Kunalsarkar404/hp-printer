import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/hp-printer" replace />} />
        <Route path="/hp-printer" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
