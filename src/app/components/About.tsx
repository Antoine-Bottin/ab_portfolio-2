import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time',
      color: 'green'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Creative Design',
      description: 'Crafting beautiful, intuitive user experiences that users love',
      color: 'cyan'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Building fast, optimized applications that deliver results',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'text-green-400 group-hover:shadow-green-400/25',
      cyan: 'text-cyan-400 group-hover:shadow-cyan-400/25',
      purple: 'text-purple-400 group-hover:shadow-purple-400/25'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with 4+ years of experience creating digital solutions that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                Passionate about web development, I have deepened
                my Frontend Javascript / Typescript skills with the
                 ReactJS and NextJS frameworks for three years. I
                love taking on new challenges, and discovering new languages
                does not scare me at all. I enjoy manipulating data and work on
                my backend skills in my spare time.{' '}
                Reconverted for four years, I have found in this
                ever-evolving field something to satisfy my appetite for
                creativity.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['React','React,Native', 'TypeScript', 'NextJs', 'Sass', 'Tailwind', 'T3 Stack'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 ${getColorClasses(highlight.color)} transition-all duration-300`}>
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                    <p className="text-gray-300">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;