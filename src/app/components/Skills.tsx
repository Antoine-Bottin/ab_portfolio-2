import React from 'react';
import { 
  Globe, 
  Server, 
  Smartphone, 
  Wrench, 
  Palette
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-8 h-8" />,
      color: 'green',
      skills: [
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 75 },
        { name: 'JavaScript', level: 80 }
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="w-8 h-8" />,
      color: 'cyan',
      skills: [
        { name: 'Node.js', level: 60 },
        { name: 'T3 Stack', level: 65 },
        { name: 'Express.js', level: 70 },
        { name: 'GraphQL', level: 30 },
        { name: 'REST APIs', level: 90 }
      ]
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'purple',
      skills: [
        { name: 'React Native', level: 80 },
      ]
    },
    {
      title: 'DevOps',
      icon: <Wrench className="w-8 h-8" />,
      color: 'orange',
      skills: [
        { name: 'CI/CD', level: 60 },
      ]
    },
    {
      title: 'Design',
      icon: <Palette className="w-8 h-8" />,
      color: 'blue',
      skills: [
        { name: 'UI/UX Design', level: 75 },
        { name: 'Figma', level: 60 },
        { name: 'Wireframing', level: 80 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'text-green-400 border-green-400 bg-green-400/10',
      cyan: 'text-cyan-400 border-cyan-400 bg-cyan-400/10',
      purple: 'text-purple-400 border-purple-400 bg-purple-400/10',
      pink: 'text-pink-400 border-pink-400 bg-pink-400/10',
      orange: 'text-orange-400 border-orange-400 bg-orange-400/10',
      blue: 'text-blue-400 border-blue-400 bg-blue-400/10'
    };
    return colors[color as keyof typeof colors];
  };

  const getProgressColor = (color: string) => {
    const colors = {
      green: 'bg-green-400',
      cyan: 'bg-cyan-400',
      purple: 'bg-purple-400',
      pink: 'bg-pink-400',
      orange: 'bg-orange-400',
      blue: 'bg-blue-400'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/50"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg border ${getColorClasses(category.color)}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-gray-400 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ${getProgressColor(category.color)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;