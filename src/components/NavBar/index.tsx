import { Link } from 'react-router-dom'
import { useScrollClose } from '../../hooks/useScrollClose'
import { Scissors } from 'lucide-react';

function NavBar({ open, setOpen, closeMenu }: { open: boolean; setOpen: (open: boolean) => void; closeMenu: () => void }) {
  useScrollClose({ open, closeMenu });

  return (
    <nav className="absolute w-full flex flex-col bg-white/10 border-b border-white/20 backdrop-blur-lg overflow-hidden transform-gpu">
      <div className="flex items-center justify-between py-7 p-11 w-full">
        {/* logo */}
        <div className="text-3xl">
          <button onClick={() => { document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <Scissors className="text-3xl text-white rotate-90" />
          </button>
        </div>

        {/* desktop menu items */}
        <ul className="hidden md:flex gap-10">
          <Link to="/">Головна</Link>
          <Link to="/gallery">Галерея</Link>
          <Link to="/contacts">Контакти</Link>
        </ul>

        {/* mobile menu button */}
        <button
          className="md:hidden text-3xl text-white/60"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* mobile menu */}
      <div className={`md:hidden text-white overflow-hidden transition-[max-height] duration-300 ease-in-out
        ${open ? "max-h-80" : "max-h-0"}`}>
        <div className={`w-full flex flex-col px-7 py-9 pb-16 space-y-7 tracking-widest text-xl
          transition[opacity] duration-300 ease-in-out italic
          ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}>
          <button onClick={() => { document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="text-left">Послуги</button>
          <button onClick={() => { document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="text-left">Про Мене</button>
          <button onClick={() => { document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="text-left">Мої Роботи</button>
          <button onClick={() => { document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="text-left">Контакти</button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
