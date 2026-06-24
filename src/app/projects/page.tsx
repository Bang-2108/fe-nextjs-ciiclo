'use client';
import React, { useEffect, useState } from 'react';
import { portfolioService } from '@/services/portfolio';
import { Project } from '@/types';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setIsLoading(true);
        const data = await portfolioService.getProjects();
        setProjects(data.data || data || []);
      } catch (err: any) {
        setError('Unable to load projects. Please try again later!');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  const renderProjectCard = (project: Project) => (
    <div
      key={project.id}
      className="bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:border-pink-500/40 transition-all duration-300 flex flex-col h-full group"
    >
      <div className="relative aspect-video w-full bg-white/5 overflow-hidden border-b border-white/10">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 gap-1.5">
            <i className="bi bi-folder-fill text-3xl"></i>
            <span className="text-[11px] font-mono">No Image Provided</span>
          </div>
        )}
        <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/10 uppercase tracking-wide">
          {project.type}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-base font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs text-gray-400 line-clamp-3 mb-4 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {(() => {
              let stackArray: string[] = [];

              if (Array.isArray(project.tech_stack)) {
                stackArray = project.tech_stack;
              } else if (typeof project.tech_stack === 'string') {
                stackArray = (project.tech_stack as string)
                  .split(',')
                  .map(item => item.trim())
                  .filter(Boolean);
              }

              return stackArray.map((tech, index) => (
                <span
                  key={index}
                  className="bg-pink-500/10 text-pink-400 border border-pink-500/10 text-[10px] font-medium px-2.5 py-0.5 rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ));
            })()}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs font-semibold">
            {project.github_url ? (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <i className="bi bi-github text-sm"></i> Code
              </a>
            ) : (
              <span className="text-gray-600 flex items-center gap-1.5 cursor-not-allowed">
                <i className="bi bi-lock-fill text-xs"></i> Private Code
              </span>
            )}

            {project.demo_url ? (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 hover:underline flex items-center gap-1 transition-colors"
              >
                Live Preview <i className="bi bi-arrow-up-right text-[10px]"></i>
              </a>
            ) : (
              <span className="text-gray-600 cursor-not-allowed">
                No Demo
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-8 pt-28">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
            My <span className="text-pink-400">Projects</span>
          </h1>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-pink-500"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-center mb-6 text-sm">
            {error}
          </div>
        )}

        {!isLoading && !error && projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {projects.map(renderProjectCard)}
          </div>
        )}

        {!isLoading && !error && projects.length === 0 && (
          <div className="text-center py-20 text-gray-500 text-sm">
            No projects are currently available for display.
          </div>
        )}
      </div>
    </div>
  );
}