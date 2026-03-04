'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={scrollToTop}
          className="text-lg font-semibold tracking-wide hover:text-accent transition-colors duration-200 cursor-pointer"
        >
          PCL
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12 items-center">
          <a
            href="/#about"
            onClick={(e) => handleSmoothScroll(e, 'about')}
            className="text-sm uppercase tracking-widest text-secondary hover:text-accent relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
          >
            About
          </a>
          <a
            href="/#work"
            onClick={(e) => handleSmoothScroll(e, 'work')}
            className="text-sm uppercase tracking-widest text-secondary hover:text-accent relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
          >
            Work
          </a>
          <a
            href="/#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="text-sm uppercase tracking-widest text-secondary hover:text-accent relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-accent transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-accent transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-accent transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col gap-6">
            <a
              href="/#about"
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="text-sm uppercase tracking-widest text-secondary hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              About
            </a>
            <a
              href="/#work"
              onClick={(e) => handleSmoothScroll(e, 'work')}
              className="text-sm uppercase tracking-widest text-secondary hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              Work
            </a>
            <a
              href="/#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="text-sm uppercase tracking-widest text-secondary hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}