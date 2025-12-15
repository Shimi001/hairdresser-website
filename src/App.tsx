import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Prices from './pages/Prices'
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
        <Routes>
          <Route path="/" element={<Home closeMenu={closeMenu} />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </>
  )
}

export default App
