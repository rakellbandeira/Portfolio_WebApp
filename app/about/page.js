import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <div className="bg-white rounded-lg shadow p-8 space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm a Computer Science student at BYU passionate about building web applications 
              that solve real problems. With experience in React, Node.js, and MongoDB, I love 
              creating full-stack solutions that combine elegant design with robust functionality.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Fluent in English, Portuguese, and Spanish with a background in ESL teaching. 
              I enjoy combining technical expertise with educational content creation, and I'm 
              always interested in projects that bridge technology and learning.
            </p>
            
            <div className="mt-8 pt-8 border-t">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Express'].map(skill => (
                  <span 
                    key={skill} 
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t">
              <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/yourname" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 font-semibold"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/yourname" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 font-semibold"
                >
                  LinkedIn
                </a>
                <a 
                  href="mailto:your.email@gmail.com"
                  className="text-blue-500 hover:text-blue-600 font-semibold"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}