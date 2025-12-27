import { useState, } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './hooks/scrollToTop';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contacts from './pages/Contacts'

function App() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50">
        <NavBar open={open} setOpen={setOpen} closeMenu={closeMenu} />
      </header>

      <main className="bg-rose-50 text-gray-800 text-lg">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home closeMenu={closeMenu} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </>
  )
}

export default App
