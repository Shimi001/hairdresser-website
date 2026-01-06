import { useScrollClose } from '../../hooks/useScrollClose'
import { Scissors } from 'lucide-react';

const navItems = [
  { id: 'services', label: 'Послуги' },
  { id: 'profile', label: 'Про Мене' },
  { id: 'gallery', label: 'Мої Роботи' },
  { id: 'contacts', label: 'Контакти' },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

function NavBar({ open, setOpen, closeMenu }: { open: boolean; setOpen: (open: boolean) => void; closeMenu: () => void }) {
  useScrollClose({ open, closeMenu });

  return (
    <nav className="absolute w-full flex flex-col bg-white/10 border-b border-white/20 backdrop-blur-lg overflow-hidden transform-gpu 
      md:max-w-[90%] md:top-4 md:left-1/2 md:-translate-x-1/2 md:border md:rounded-full
      lg:max-w-[80%] lg:px-5
      xl:max-w-[70%] xl:px-8
      2xl:max-w-[55%] 2xl:px-10 2xl:top-6"
    >
      <div className="flex items-center justify-between px-11 py-7 w-full">
        {/* logo */}
        <div className="text-3xl">
          <button onClick={() => { document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <Scissors className="text-white rotate-90 cursor-pointer lg:hover:scale-120 lg:duration-200" />
          </button>
        </div>

        {/* mobile menu button */}
        <button
          className="md:hidden text-3xl text-white/60"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* tablet/laptop menu items */}
        <div className="hidden md:flex lg:text-lg text-white gap-9 xl:tracking-widest 2xl:gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer transition duration-200 lg:hover:scale-110"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* mobile menu */}
      <div className={`md:hidden text-white overflow-hidden transition-[max-height] duration-300 ease-in-out
        ${open ? "max-h-80" : "max-h-0"}`}>
        <div className={`w-full flex flex-col px-7 py-9 pb-16 space-y-7 tracking-widest text-xl
          transition-all duration-300 ease-in-out
          ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setOpen(false);
              }}
              className="text-left"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
