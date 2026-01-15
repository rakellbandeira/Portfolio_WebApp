import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Hey, I'm Rakell 👋</h1>
          <p className="text-xl text-gray-600 mb-8">
            Full-stack developer building beautiful web experiences with React, Node.js, and MongoDB
          </p>
          <Link 
            href="/projects" 
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition inline-block"
          >
            See My Work
          </Link>
        </section>
      </main>
    </>
  );
}