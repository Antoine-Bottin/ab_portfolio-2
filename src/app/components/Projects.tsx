import React from 'react';
import { ExternalLink, Github, Zap, Star, Users } from 'lucide-react';
import Image from 'next/image'


const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern UI, secure payments, and real-time inventory management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      features: ['Real-time inventory', 'Secure payments', 'Admin dashboard', 'Mobile responsive'],
      github: '#',
      demo: '#',
      color: 'green'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time metrics and automated reporting.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'GraphQL', 'MongoDB', 'Redis'],
      features: ['Real-time analytics', 'Automated reports', 'Multi-platform', 'Team collaboration'],
      github: '#',
      demo: '#',
      color: 'cyan'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates, team workspaces, and productivity insights.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Express.js', 'Socket.io'],
      features: ['Real-time sync', 'Team workspaces', 'Productivity tracking', 'Cross-platform'],
      github: '#',
      demo: '#',
      color: 'purple'
    },
    {
      title: 'AI-Powered CRM',
      description: 'Customer relationship management system with AI-driven insights and automated workflows.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Docker'],
      features: ['AI insights', 'Automated workflows', 'Lead scoring', 'Custom reports'],
      github: '#',
      demo: '#',
      color: 'pink'
    },
    {
      title: 'Fitness Tracking Platform',
      description: 'Comprehensive fitness platform with workout tracking, nutrition planning, and progress analytics.',
      image: 'https://images.pexels.com/photos/416029/pexels-photo-416029.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'AWS'],
      features: ['Workout tracking', 'Nutrition planning', 'Progress analytics', 'Social features'],
      github: '#',
      demo: '#',
      color: 'orange'
    },
    {
      title: 'Real Estate Platform',
      description: 'Modern real estate platform with virtual tours, advanced search, and property management tools.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Google Maps API'],
      features: ['Virtual tours', 'Advanced search', 'Property management', 'Market analytics'],
      github: '#',
      demo: '#',
      color: 'blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'text-green-400 hover:text-green-300',
      cyan: 'text-cyan-400 hover:text-cyan-300',
      purple: 'text-purple-400 hover:text-purple-300',
      pink: 'text-pink-400 hover:text-pink-300',
      orange: 'text-orange-400 hover:text-orange-300',
      blue: 'text-blue-400 hover:text-blue-300'
    };
    return colors[color as keyof typeof colors];
  };

  const getGradientClasses = (color: string) => {
    const gradients = {
      green: 'from-green-400 to-cyan-400',
      cyan: 'from-cyan-400 to-blue-400',
      purple: 'from-purple-400 to-pink-400',
      pink: 'from-pink-400 to-red-400',
      orange: 'from-orange-400 to-yellow-400',
      blue: 'from-blue-400 to-indigo-400'
    };
    return gradients[color as keyof typeof gradients];
  };

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I've mastered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/50 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="p-2 bg-gray-900/80 rounded-full">
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="p-2 bg-gray-900/80 rounded-full">
                    <Users className="w-4 h-4 text-blue-400" />
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

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Key Features:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-1">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getGradientClasses(project.color)}`}></div>
                        <span className="text-xs text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className={`flex items-center space-x-1 transition-colors duration-200 ${getColorClasses(project.color)}`}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className={`flex items-center space-x-1 transition-colors duration-200 ${getColorClasses(project.color)}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                  <button className={`px-4 py-2 bg-gradient-to-r ${getGradientClasses(project.color)} text-gray-900 text-sm font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;