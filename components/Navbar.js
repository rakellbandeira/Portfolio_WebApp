'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          rakell.dev
        </Link>
        
        <div className="hidden md:flex gap-8">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Home
          </Link>
          <Link 
            href="/projects" 
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Projects
          </Link>
          <Link 
            href="/about" 
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            About
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 py-4 px-6 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-blue-600 transition py-2">
            Home
          </Link>
          <Link href="/projects" className="block text-gray-700 hover:text-blue-600 transition py-2">
            Projects
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600 transition py-2">
            About
          </Link>
        </div>
      )}
    </nav>
  );
}