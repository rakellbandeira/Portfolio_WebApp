export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.map(tag => (
            <span 
              key={tag} 
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline font-semibold"
        >
          View Code →
        </a>
      </div>
    </div>
  );
}