import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ShopPage from './pages/ShopPage'
import ContactPage from './pages/ContactPage'
import HPLandingPage from './Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/hp-printer" element={<HPLandingPage />} />
        <Route path="/wireless-printers" element={<Navigate to="/hp-printer" replace />} />
        <Route path="/printers" element={<ShopPage />} />
        <Route path="/laser-printers" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
