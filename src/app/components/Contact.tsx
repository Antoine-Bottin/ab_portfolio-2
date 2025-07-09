
import { Mail, MapPin, Phone, Github, Linkedin, } from 'lucide-react';

const Contact = () => {




  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'a.bottin.dev@gmail.com',
      color: 'green'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+33 6 47 50 23 17',
      color: 'cyan'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Dieppe, Normandie, FR',
      color: 'purple'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/Antoine-Bottin',
      color: 'text-gray-400 hover:text-white'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/antoine-bottin/',
      color: 'text-gray-400 hover:text-blue-400'
    },

  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'text-green-400 bg-green-400/10 border-green-400',
      cyan: 'text-cyan-400 bg-cyan-400/10 border-cyan-400',
      purple: 'text-purple-400 bg-purple-400/10 border-purple-400'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Information */}
          <div className="space-y-8 text-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Let's Connect</h3>
              <p className="text-gray-300 text-lg">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300"
                >
                  <div className={`p-3 rounded-lg border ${getColorClasses(info.color)}`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-medium">Follow me on social media</h4>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 ${link.color}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;