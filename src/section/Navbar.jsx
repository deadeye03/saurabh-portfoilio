import { useState } from "react"

import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    return (
        <header className='fixed left-0 right-0 z-50 bg-black/90' >
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center py-5 mx-auto c-space'>
                    <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                        Saurabh
                    </a>

                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white transition-colors 
                focus:outline-none sm:hidden flex"
                        aria-label="Toggle Menu"
                    >
                        <img src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'} alt="hamburger" className="h-6 w-6" />
                    </button>
                    <nav className="sm:flex gap-8 hidden" >
                        <NavItems/>
                     </nav>
                </div>
                <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                  <nav>
                    <NavItems onClick={toggleMenu} />
                  </nav>
                </div>

            </div>
        </header>
    )
}

export default Navbar
