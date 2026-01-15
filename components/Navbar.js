'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          R.
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-blue-500 transition">
            Projects
          </Link>
          <Link href="/about" className="hover:text-blue-500 transition">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}