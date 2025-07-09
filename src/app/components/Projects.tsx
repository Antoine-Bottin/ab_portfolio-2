'use client'

import React, { useState } from 'react';
import { ExternalLink, Github,  } from 'lucide-react';

const Projects = () => {
  const projectCard = [
    {
      pictureSrc: '/assets/icons/stemz-logo.svg',
      videoSrc: '/assets/videos/Stemz.mp4',
      title: 'Stemz Web',
      url: 'https://stemz.mwm.io/',
      company: 'mwm',
      description: 'Next generation of music source separation.',
      technologies: ['React', 'TypeScript', 'NextJs','Sass']
    },
    {
      pictureSrc: '/assets/icons/color-pop.png',
      videoSrc: '/assets/videos/ColorPop.mp4',
      title: 'Color Pop',
      url: 'https://colorpop.ai/',
      company: 'mwm',
      description: 'AI-powered coloring app for the entire family.',
      technologies: ['React', 'TypeScript', 'NextJs','Sass']
    },
    {
      pictureSrc: '/assets/icons/mwm-rounded.webp',
      videoSrc: '/assets/videos/Website.mp4',
      title: 'MwM Website',
      url: 'https://mwm.ai/',
      company: 'mwm',
      description: 'Corporate website showcasing AI solutions and company services.',
      technologies: ['React', 'TypeScript', 'NextJs','Sass']
    },
    {
      pictureSrc: '/assets/icons/yousing-logo.svg',
      videoSrc: '/assets/videos/YouSing.mov',
      title: 'Yousing',
      url: 'https://www.yousing.ai/',
      company: 'mwm',
      description: 'AI-powered singing and voice training application with real-time feedback.',
      technologies: ['React', 'TypeScript', 'NextJs','Sass']
    },
    {
      pictureSrc: '/assets/icons/ls-monogram.svg',
      videoSrc: '/assets/videos/Leatherspa.mp4',
      title: 'Leatherspa',
      url: 'https://www.leatherspa.com/',
      company: 'leatherspa',
      description: 'Premium leather care and restoration service platform.',
      technologies: ['React','Vanilla Extract Style']
    },
    {
      pictureSrc: '/assets/pictures/photo_cv.jpg',
      videoSrc: '/assets/videos/Xperience.mp4',
      title: 'Xperience',
      url: 'https://xperience.abottin.dev',
      company: 'personnal',
      description: 'IA pimped input answering your question about my experience.',
      technologies: ['T3 Stack','Typescript','OpenAi fine tuned model', 'Tailwind']
    },
    {
      pictureSrc: '/assets/icons/github-mark-white.png',
      videoSrc: '/assets/videos/github.mp4',
      title: 'Github',
      url: 'https://github.com/Antoine-Bottin',
      company: 'personnal',
      description: 'My github public repos.',
      technologies: ['Versionning', 'Git']
    },
  ];

  const badges = [
    {
      label: 'All Projects',
      value: 'all',
    },
    {
      label: 'MWM',
      value: 'mwm',
    },
    {
      label: 'Leatherspa',
      value: 'leatherspa',
    },
    {
      label: 'Personal Projects',
      value: 'personnal',
    },
  ];

  const [activeTab, setActiveTab] = useState('all');
  // const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjectCard = activeTab === 'all' 
    ? projectCard 
    : projectCard.filter((project) => project.company === activeTab);

  const getCompanyColor = (company: string) => {
    const colors = {
      mwm: 'from-blue-400 to-cyan-400',
      leatherspa: 'from-amber-400 to-orange-400',
      personnal: 'from-green-400 to-emerald-400',
    };
    return colors[company as keyof typeof colors] || 'from-gray-400 to-gray-500';
  };

  const getBadgeColor = (value: string, isActive: boolean) => {
    if (value === 'all') {
      return isActive 
        ? 'bg-gradient-to-r from-green-400 to-cyan-400 text-gray-900' 
        : 'bg-gray-700 text-gray-300 hover:bg-gray-600';
    }
    
    const colors = {
      mwm: isActive 
        ? 'bg-gradient-to-r from-blue-400 to-cyan-400 text-gray-900' 
        : 'bg-gray-700 text-gray-300 hover:bg-blue-400/20 hover:text-blue-400',
      leatherspa: isActive 
        ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900' 
        : 'bg-gray-700 text-gray-300 hover:bg-amber-400/20 hover:text-amber-400',
      personnal: isActive 
        ? 'bg-gradient-to-r from-green-400 to-emerald-400 text-gray-900' 
        : 'bg-gray-700 text-gray-300 hover:bg-green-400/20 hover:text-green-400',
    };
    return colors[value as keyof typeof colors] || 'bg-gray-700 text-gray-300';
  };

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A showcase of my recent work across different companies and personal projects.
          </p>

          {/* Filter Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {badges.map((badge) => (
              <button
                key={badge.value}
                onClick={() => setActiveTab(badge.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${getBadgeColor(badge.value, activeTab === badge.value)}`}
              >
                {badge.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjectCard.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/50"
            >
              <div className="relative overflow-hidden h-48">
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <video
                    src={project.videoSrc}
                    width={400}
                    height={200}
                    controls={true}
                    className="w-full h-full object-cover transition-transform duration-300"
                   
                  />
                </div>
                {/* Company Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 bg-gradient-to-r ${getCompanyColor(project.company)} text-gray-900 text-xs font-medium rounded-full`}>
                    {project.company.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-3">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs hover:bg-gray-600 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center align-middle items-center pt-4 border-t border-gray-700">
                  <button 
                    className={`px-4 py-2 bg-gradient-to-r ${getCompanyColor(project.company)} text-gray-900 text-sm font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjectCard.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;