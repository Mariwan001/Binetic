"use client"

import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add handleMenuClick function
  const handleMenuClick = (path: string) => {
    setIsOpen(false); // This will close the menu smoothly
    if (path) router.push(path);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className='fixed top-0 left-0 right-0 z-50'
    >
      <div className='w-full max-w-7xl mx-auto px-2 sm:px-4 pt-2 sm:pt-4 transition-all duration-700'>
        <div 
          className={`
            flex text-white justify-between items-center py-2 sm:py-4 px-2 sm:px-4
            border-x border-neutral-600/25 border-[0.5px] bg-neutral-900/50 
            backdrop-blur-md transition-all duration-1000 ease-in-out
            ${scrolled 
              ? 'mx-0 sm:mx-4 md:mx-8 rounded-lg shadow-[0_0_15px_-3px_rgba(34,197,94,0.1)]' 
              : 'mx-0 rounded-lg'
            }
          `}
        >
          <h1 className='text-base xs:text-lg sm:text-xl md:text-2xl font-semibold select-none'>Binetic</h1>
          
          {/* Advanced Hamburger Menu for Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden w-10 h-10 relative group focus:outline-none'
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <div className="flex flex-col justify-center items-center w-full h-full">
              <span className={` 
                absolute h-[3px] rounded-full
                transform transition-all duration-500 ease-in-out
                bg-gradient-to-r from-white to-green-500
                ${isOpen 
                  ? 'w-8 rotate-45 translate-y-0' 
                  : 'w-8 -translate-y-2.5'
                }
              `}></span>
              
              <span className={`
                absolute h-[3px] rounded-full 
                transform transition-all duration-300 ease-in-out
                bg-gradient-to-r from-white to-green-500
                ${isOpen 
                  ? 'w-0 opacity-0' 
                  : 'w-8'
                }
              `}></span>
              
              <span className={`
                absolute h-[3px] rounded-full
                transform transition-all duration-500 ease-in-out
                bg-gradient-to-r from-white to-green-500
                ${isOpen 
                  ? 'w-8 -rotate-45 translate-y-0' 
                  : 'w-6 translate-y-2.5'
                }
              `}></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className='hidden md:block'>
            <ul className='flex flex-wrap gap-x-4 lg:gap-x-8 gap-y-2 '>
              <li tabIndex={0} className='hover:text-stone-500 hover:transition-all duration-300 cursor-pointer px-2 py-1 rounded-md focus:outline-none focus:bg-neutral-800/50' onClick={() => router.push('/translate')}>Translate</li>
              <li tabIndex={0} className='hover:text-stone-500 hover:transition-all duration-300 cursor-pointer px-2 py-1 rounded-md focus:outline-none focus:bg-neutral-800/50'>Protocol Flow</li>
              <li tabIndex={0} className='hover:text-stone-500 hover:transition-all duration-300 cursor-pointer px-2 py-1 rounded-md focus:outline-none focus:bg-neutral-800/50'>Binary Lens</li>
              <li tabIndex={0} className='hover:text-stone-500 hover:transition-all duration-300 cursor-pointer px-2 py-1 rounded-md focus:outline-none focus:bg-neutral-800/50'>Algorithmic Pulse</li>
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <nav
            id="mobile-nav"
            className={`
              absolute top-full left-0 right-0 
              transition-all duration-500 ease-in-out overflow-hidden
              ${isOpen 
                ? 'max-h-[350px] opacity-100 translate-y-2' 
                : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
              }
              md:hidden
            `}
            aria-hidden={!isOpen}
          >
            {/* Backdrop blur for the dropdown area */}
            <div className={`
              absolute inset-0 backdrop-blur-md bg-neutral-900/40
              transition-all duration-500 ease-in-out
              ${isOpen ? 'opacity-100' : 'opacity-0'}
            `}></div>
            
            <ul className='
              relative z-10
              flex flex-col gap-2 xs:gap-3 sm:gap-4 mx-1 xs:mx-2 
              border border-neutral-600/25
              bg-neutral-900/80
              rounded-lg p-2 xs:p-4 
              shadow-[0_0_15px_-3px_rgba(34,197,94,0.05)]
            '>
              <li 
                onClick={() => handleMenuClick('/translate')}
                tabIndex={isOpen ? 0 : -1}
                className='
                  hover:text-stone-500 transition-all duration-300 cursor-pointer
                  hover:translate-x-2 hover:bg-neutral-800/50
                  px-4 py-2 rounded-md focus:outline-none focus:bg-neutral-800/50
                '
              >
                Translate
              </li>
              <li 
                onClick={() => handleMenuClick('/protocol-flow')}
                tabIndex={isOpen ? 0 : -1}
                className='
                  hover:text-stone-500 transition-all duration-300 cursor-pointer
                  hover:translate-x-2 hover:bg-neutral-800/50
                  px-4 py-2 rounded-md focus:outline-none focus:bg-neutral-800/50
                '
              >
                Protocol Flow
              </li>
              <li 
                onClick={() => handleMenuClick('/binary-lens')}
                tabIndex={isOpen ? 0 : -1}
                className='
                  hover:text-stone-500 transition-all duration-300 cursor-pointer
                  hover:translate-x-2 hover:bg-neutral-800/50
                  px-4 py-2 rounded-md focus:outline-none focus:bg-neutral-800/50
                '
              >
                Binary Lens
              </li>
              <li 
                onClick={() => handleMenuClick('/algorithmic-pulse')}
                tabIndex={isOpen ? 0 : -1}
                className='
                  hover:text-stone-500 transition-all duration-300 cursor-pointer
                  hover:translate-x-2 hover:bg-neutral-800/50
                  px-4 py-2 rounded-md focus:outline-none focus:bg-neutral-800/50
                '
              >
                Algorithmic Pulse
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar