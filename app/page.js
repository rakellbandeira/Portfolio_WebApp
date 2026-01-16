import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <section className="max-w-4xl mx-auto px-6 py-32 text-center flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="mb-6">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Hey, I'm Rakell 👋
            </h1>
          </div>
          
          <p className="text-xl text-gray-700 mb-4 max-w-2xl leading-relaxed">
            A Software developer dedicated to web experiences and other solutions.
          </p>
          <p className=" text-gray-700 mb-8 max-w-xl leading-relaxed">(Strength: Turn lost causes into bugs, and then into features. It's called the development cycle.)</p>
          
          <div className="flex gap-4">
            <Link 
              href="/projects" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg"
            >
              View My Projects
            </Link>
            <Link 
              href="/about" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold border-2 border-blue-600 shadow-lg"
            >
              More about me
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}