import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between py-5 px-8">
      {/* logo */}
      <div className="text-2xl">
        <a href="/" className="">✂️</a>
      </div>

      {/* desctop menu items */}
      <ul className="hidden md:flex gap-10 text-lg">
          <a href="/" className="">Головна</a>
          <a href="/prices" className="">Ціни</a>
          <a href="/gallery" className="">Галерея</a>
          <a href="/contacts" className="">Контакти</a>
      </ul>

      {/* mobile menu button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      {/* mobile menu items */}
      {open &&
        <div className="absolute left-0 right-0 top-full flex flex-col px-6 py-5 gap-4 tracking-wide md:hidden bg-gray-300 z-10">
          <a href="/" className="">Головна</a>
          <a href="/prices" className="">Ціни</a>
          <a href="/gallery" className="">Галерея</a>
          <a href="/contacts" className="">Контакти</a>
        </div>
      }
    </nav>
  )
}

export default NavBar
