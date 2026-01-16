import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-8">About Me</h1>
          
          <div className="bg-white rounded-xl shadow-lg p-10 space-y-8">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed">
                I'm a Computer Science student at <span className="font-semibold text-blue-600">BYU</span> passionate about building web applications 
                that solve real problems. With experience in <span className="font-semibold">React</span>, <span className="font-semibold">Node.js</span>, and <span className="font-semibold">MongoDB</span>, I love 
                creating full-stack solutions that combine elegant design with robust functionality.
              </p>
            </div>
            
            <div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Fluent in <span className="font-semibold">English</span>, <span className="font-semibold">Portuguese</span>, and <span className="font-semibold">Spanish</span> with a background in ESL teaching. 
                I enjoy combining technical expertise with educational content creation, and I'm 
                always interested in projects that bridge technology and learning.
              </p>
            </div>
            
            <div className="border-t-2 border-gray-200 pt-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Technical Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'React',
                  'Next.js',
                  'Node.js',
                  'Express',
                  'MongoDB',
                  'TypeScript',
                  'JavaScript',
                  'Tailwind CSS',
                  'Git/GitHub'
                ].map(skill => (
                  <div 
                    key={skill}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-800 px-5 py-3 rounded-lg text-sm font-semibold border border-blue-200 hover:border-blue-400 transition"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t-2 border-gray-200 pt-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Let's Connect</h2>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-semibold"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  LinkedIn
                </a>
                <a 
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}