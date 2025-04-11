import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo - Izquierda */}
          <div className="w-1/3 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Manitas El Pana" className="h-45 w-auto" />
            </Link>
          </div>

          {/* Nav Links - Centro */}
          <nav className="hidden md:flex w-1/3 justify-center gap-15 text-xl font-medium">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : "text-black hover:text-yellow-300 transition"}>Inicio</NavLink>
            <NavLink to="/servicios" className={({ isActive }) => isActive ? "text-yellow-400" : "text-black hover:text-yellow-300 transition"}>Servicios</NavLink>
            <NavLink to="/presupuesto" className={({ isActive }) => isActive ? "text-yellow-400" : "text-black hover:text-yellow-300 transition"}>Precios</NavLink>
            <NavLink to="/contacto" className={({ isActive }) => isActive ? "text-yellow-400" : "text-black hover:text-yellow-300 transition"}>Contacto</NavLink>
          </nav>

          {/* Mobile toggle - Derecha */}
          <div className="w-1/3 flex justify-end md:hidden">
            <button onClick={toggleMenu} className="text-black">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur px-4 pb-4 text-black">
          <nav className="flex flex-col gap-4 mt-4 text-sm font-medium">
            <NavLink to="/" onClick={toggleMenu} className="hover:text-yellow-400">Inicio</NavLink>
            <NavLink to="/servicios" onClick={toggleMenu} className="hover:text-yellow-400">Servicios</NavLink>
            <NavLink to="/presupuesto" onClick={toggleMenu} className="hover:text-yellow-400">Precios</NavLink>
            <NavLink to="/contacto" onClick={toggleMenu} className="hover:text-yellow-400">Contacto</NavLink>
            <a
              href="https://wa.me/34685425615"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-full font-semibold text-center shadow transition-transform transform hover:scale-105"
            >
              ¡Pide tu servicio!
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
