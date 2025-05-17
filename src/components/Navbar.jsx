import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { y: '-100%', opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      )
    } else if (!menuOpen && menuRef.current) {
      gsap.to(menuRef.current, {
        y: '-100%',
        opacity: 0,
        duration: 0.4,
        ease: 'power3.in',
      })
    }
  }, [menuOpen])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/work', label: 'WORK' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' },
  ]

  const handleNavigation = (path) => {
    navigate(path)
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-black/50' : 'py-6 bg-transparent'
      } backdrop-blur-sm`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => handleNavigation('/')}
          className="text-xl tracking-widest font-light"
        >
          NCKCODE
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavigation(link.path)}
              className={`text-sm tracking-widest font-light hover:opacity-60 transition-opacity ${
                window.location.pathname === link.path
                  ? 'opacity-100'
                  : 'opacity-80'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-[100]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-px bg-white transition-transform ${
              menuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`w-6 h-px bg-white transition-opacity ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-px bg-white transition-transform ${
              menuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation with GSAP animation - HORIZONTAL LAYOUT */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed inset-x-0 top-16 bg-black bg-opacity-80 backdrop-blur-md z-[90]"
        >
          <div className="flex flex-row justify-center items-center py-4 px-2 overflow-x-auto">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`text-sm tracking-widest font-light px-4 py-2 mx-1 whitespace-nowrap rounded-md transition-all duration-200 ${
                  window.location.pathname === link.path
                    ? 'bg-white/20 text-white'
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
