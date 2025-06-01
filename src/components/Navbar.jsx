import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  // Determine if we're on the home page
  const isHomePage = location.pathname === '/'
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])
  
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])
  
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Products', path: '/products' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Contact', path: '/contact' },
  ]
  
  const shouldUseWhiteText = isHomePage && !scrolled
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className={`font-display text-2xl font-bold ${
              shouldUseWhiteText ? 'text-white' : 'text-natura-green'
            }`}>
              Natura
            </span>
          </Link>

          {/* Top contact bar */}
          {/* <div className="hidden lg:flex items-center space-x-6 absolute top-0 right-0 bg-natura-green text-white px-6 py-1 rounded-bl-lg">
            <a href="tel:+919876543210" className="flex items-center space-x-2 text-sm">
              <FaPhone className="text-xs" />
              <span>+91 92846 28559</span>
            </a>
            <a href="mailto:info@naturadairy.com" className="flex items-center space-x-2 text-sm">
              <FaEnvelope className="text-xs" />
              <span>info@naturadairy.com</span>
            </a>
          </div> */}
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors ${
                  shouldUseWhiteText ? 'text-white' : 'text-gray-800'
                } hover:text-natura-green`}
              >
                {link.title}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-natura-green bottom-[-4px]"
                  />
                )}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? 
              <FaTimes className={shouldUseWhiteText ? 'text-white' : 'text-gray-800'} /> : 
              <FaBars className={shouldUseWhiteText ? 'text-white' : 'text-gray-800'} />
            }
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-gray-800 py-2 ${
                      location.pathname === link.path ? 'text-natura-green font-medium' : ''
                    }`}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
              
              {/* Mobile contact info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a href="tel:+919876543210" className="flex items-center space-x-2 text-gray-600 mb-3">
                  <FaPhone className="text-natura-green" />
                  <span>+91 92846 28559</span>
                </a>
                <a href="mailto:info@naturadairy.com" className="flex items-center space-x-2 text-gray-600">
                  <FaEnvelope className="text-natura-green" />
                  <span>info@naturadairy.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar