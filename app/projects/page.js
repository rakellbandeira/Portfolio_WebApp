'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12">My Projects</h1>
          
          {loading ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : projects.length === 0 ? (
            <p className="text-center text-gray-600">No projects found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(project => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}