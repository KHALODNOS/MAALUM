import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/common/ScrollToTop'
import HomePage from './pages/HomePage'
import EmeraudeProductPage from './pages/EmeraudeProductPage'
import FrappeEmraude from './pages/FrappeEmraude'
import AboutPage from './pages/AboutPage'

/* ─── APP ROOT ─── */
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/emeraude" element={<EmeraudeProductPage />} />
        <Route path="/frappe-emeraude" element={<FrappeEmraude />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App


