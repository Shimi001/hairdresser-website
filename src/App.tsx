import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Prices from "./pages/Prices"
import Gallery from "./pages/Gallery"
import Contacts from "./pages/Contacts"

function App() {
  return (
    <>
      <header className="bg-gray-300">
        <NavBar />
      </header>

      <main className="px-8 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </>
  )
}

export default App
