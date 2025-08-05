// /components/Navbar.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/">
          <span className={`text-xl font-bold cursor-pointer transition duration-300 ${isScrolled ? 'text-blue-700' : 'text-white'}`}>
            Innovate
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/contact" label="Contact" />
          <NavLink href="/idea-submission" label="Submit Idea" isButton />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Slide-in */}
      {isOpen && (
        <div className="md:hidden bg-white text-blue-700 px-6 py-8 space-y-6 shadow-lg">
          <MobileNavLink href="/" label="Home" close={() => setIsOpen(false)} />
          <MobileNavLink href="/about" label="About" close={() => setIsOpen(false)} />
          <MobileNavLink href="/services" label="Services" close={() => setIsOpen(false)} />
          <MobileNavLink href="/contact" label="Contact" close={() => setIsOpen(false)} />
          <MobileNavLink href="/idea-submission" label="Submit Idea" isButton close={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  )
}

function NavLink({ href, label, isButton = false }) {
  return isButton ? (
    <Link href={href}>
      <span className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold transition cursor-pointer">
        {label}
      </span>
    </Link>
  ) : (
    <Link href={href}>
      <span className="text-sm font-medium text-blue-700 hover:text-orange-500 transition cursor-pointer">
        {label}
      </span>
    </Link>
  )
}

function MobileNavLink({ href, label, isButton = false, close }) {
  return isButton ? (
    <Link href={href}>
      <span onClick={close} className="block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold transition cursor-pointer">
        {label}
      </span>
    </Link>
  ) : (
    <Link href={href}>
      <span onClick={close} className="block text-lg font-medium text-blue-700 hover:text-orange-500 transition cursor-pointer">
        {label}
      </span>
    </Link>
  )
}
