import { useState, } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Profile from './components/sections/Profile'
import Gallery from './components/sections/Gallery'
import Contacts from './components/sections/Contacts'

function App() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50">
        <NavBar open={open} setOpen={setOpen} closeMenu={closeMenu} />
      </header>

      <main className="text-white text-lg">
        <Hero />
        <Services />
        <Profile />
        <Gallery />
        <Contacts />
      </main>
    </>
  )
}

export default App
