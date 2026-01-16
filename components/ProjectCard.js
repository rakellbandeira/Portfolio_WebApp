export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105">
      <div className="relative overflow-hidden bg-gray-200 h-48">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300" 
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags?.map(tag => (
            <span 
              key={tag} 
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group/link"
        >
          View Code 
          <span className="ml-2 group-hover/link:translate-x-1 transition">→</span>
        </a>
      </div>
    </div>
  );
}