import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isMenuToggle = target.closest('#menuToggle');
      const isMenu = target.closest('#menu');
      
      if (!isMenuToggle && !isMenu && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-[1000] transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center h-[100px] px-5">
        <div className="name">
          <h1 
            className={`text-[30px] font-[Leckerli_One] transition-colors duration-300 ${
              isScrolled ? 'text-[#695aa6]' : 'text-white'
            }`}
            style={{ fontFamily: "'Leckerli One', sans-serif" }}
          >
            Stella
          </h1>
        </div>

        {/* Menu Toggle Button */}
        <button
          id="menuToggle"
          className="md:hidden flex flex-col cursor-pointer z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span 
            className={`w-[25px] h-[3px] my-1 transition-colors duration-300 ${
              isScrolled ? 'bg-[#695aa6]' : 'bg-white'
            }`}
          />
          <span 
            className={`w-[25px] h-[3px] my-1 transition-colors duration-300 ${
              isScrolled ? 'bg-[#695aa6]' : 'bg-white'
            }`}
          />
          <span 
            className={`w-[25px] h-[3px] my-1 transition-colors duration-300 ${
              isScrolled ? 'bg-[#695aa6]' : 'bg-white'
            }`}
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex text-[15px]">
            {navItems.map((item) => (
              <li 
                key={item.name}
                className="mx-5"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                <a
                  href={item.href}
                  className={`no-underline transition-colors duration-300 ${
                    isScrolled ? 'text-[#695aa6]' : 'text-white'
                  } hover:opacity-80`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          id="menu"
          className={`md:hidden absolute top-[70px] right-5 bg-white border border-[#695aa6] rounded-lg p-2.5 shadow-lg transition-all duration-300 ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <ul className="flex flex-col p-0 m-0">
            {navItems.map((item) => (
              <li 
                key={item.name}
                className="my-2.5"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                <a
                  href={item.href}
                  className="no-underline text-[#695aa6] hover:opacity-80"
                  onClick={handleNavClick}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}