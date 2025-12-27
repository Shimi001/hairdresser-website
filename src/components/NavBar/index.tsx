import { Link } from 'react-router-dom';
import { useScrollClose } from '../../hooks/useScrollClose';

function NavBar({ open, setOpen, closeMenu }: { open: boolean; setOpen: (open: boolean) => void; closeMenu: () => void }) {
  useScrollClose({ open, closeMenu });

  return (
    <nav className="absolute w-full flex flex-col bg-white/20 backdrop-blur-sm shadow-lg overflow-hidden transform-gpu">
      <div className="flex items-center justify-between py-7 px-11 w-full">
        {/* logo */}
        <div className="text-3xl">
          <Link to="/" onClick={closeMenu}>✂️</Link>
        </div>

        {/* desktop menu items */}
        <ul className="hidden md:flex gap-10">
          <Link to="/">Головна</Link>
          <Link to="/gallery">Галерея</Link>
          <Link to="/contacts">Контакти</Link>
        </ul>

        {/* mobile menu button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* mobile menu */}
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out
        ${open ? "max-h-80" : "max-h-0"}`}>
        <div className={`w-full flex flex-col px-7 py-9 pb-16 gap-7 tracking-widest text-xl
          transition[opacity] duration-300 ease-in-out 
          ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}>
          <Link to="/" onClick={closeMenu}>Головна</Link>
          <Link to="/gallery" onClick={closeMenu}>Мої роботи</Link>
          <Link to="/contacts" onClick={closeMenu}>Контакти</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
