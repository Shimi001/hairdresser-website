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
        <div className="text-center text-4xl text-white/30 h-15 lg:h-20 w-full bg-linear-to-b from-violet-400 to-fuchsia-400">↓</div>
        <Services />
        <div className="h-15 lg:h-20 w-full bg-linear-to-b from-rose-400 to-blue-400"></div>
        <Profile />
        <div className="h-15 lg:h-20 w-full bg-linear-to-b from-cyan-400 to-green-300"></div>
        <Gallery />
        <div className="h-15 lg:h-20 w-full bg-linear-to-b from-teal-400 to-rose-400"></div>
        <Contacts />
      </main>
    </>
  )
}

export default App
