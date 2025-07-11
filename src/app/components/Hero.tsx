'use client'

import React from 'react';
import { ChevronDown, Github, Linkedin,RotateCcw } from 'lucide-react';
import Image from 'next/image';
import useExperienceCounter from '../hooks/useDeveloperPeriod';

const Hero = () => {
  const timeElapsed = useExperienceCounter();

    const profilePictures = [
    "/assets/pictures/photo_cv.jpg",
    "/assets/pictures/photo_cv2.jpg",

  ];
  
  const [currentPictureIndex, setCurrentPictureIndex] = React.useState(0);
  const [isRotating, setIsRotating] = React.useState(false);
  
  const switchPicture = () => {
    setIsRotating(true);
    setTimeout(() => {
      setCurrentPictureIndex((prev) => (prev + 1) % profilePictures.length);
      setIsRotating(false);
    }, 150);
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
         {/* Profile Picture */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-green-400 to-cyan-400 p-1 bg-gradient-to-r">
                <div className={`w-full h-full rounded-full overflow-hidden bg-gray-800 transition-transform duration-300 ${isRotating ? 'scale-95 rotate-12' : 'scale-100 rotate-0'}`}>
                  <Image
                    src={profilePictures[currentPictureIndex]}
                    alt="Alex Developer Profile"
                    width={160}
                    height={160}
                    className={`w-full h-full object-cover transition-all duration-300 ${isRotating ? 'blur-sm' : 'blur-0'}`}
                  />
                </div>
              </div>
              
              {/* Picture Switch Button */}
              <button
                onClick={switchPicture}
                className="absolute -top-2 -left-2 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 flex items-center justify-center hover:scale-110 transition-all duration-300 group-hover:opacity-100 opacity-70 hover:shadow-lg hover:shadow-purple-400/50 hover:cursor-pointer"
                title="Switch profile picture"
              >
                <RotateCcw className={`w-4 h-4 text-white transition-transform duration-300 ${isRotating ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              
              {/* Tooltip */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-700 shadow-lg">
                Don't like this picture? Click to switch!
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Antoine Bottin
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
             Frontend Developer <strong>first</strong> & Fullstack Developer Enthusiast
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              I craft beautiful, functional digital experiences that solve real problems and delight users.
            </p>
            
            <div className="mt-8 p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 max-w-4xl mx-auto">
              <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider">Developer for</p>
              <p className="text-green-400 font-mono text-lg md:text-xl leading-relaxed">
                {timeElapsed || 'Calculating experience...'}
              </p>
            </div>
                       <div className="mt-8 flex justify-center">
              <a
                href="https://xperience.abottin.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/25 hover:scale-105 max-w-full"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 group-hover:opacity-40 animate-pulse"></div>
                
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full animate-bounce shadow-lg z-10">
                  NEW
                </div>
                
                <div className="relative flex items-center flex-shrink-0">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-1 sm:mr-2"></div>
                  <span className="text-xs font-medium text-purple-300 uppercase tracking-wider hidden sm:inline">Latest</span>
                  <span className="text-xs font-medium text-purple-300 uppercase tracking-wider sm:hidden">New</span>
                </div>
                
                <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                  <span className="text-white font-semibold text-sm sm:text-base truncate">AI Resume Assistant</span>
                  <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0 hidden sm:block"></div>
                  <span className="text-gray-300 text-xs sm:text-sm hidden sm:inline">Just Launched</span>
                </div>
                
                <div className="ml-1 sm:ml-2 transform group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
              </a>
            </div>
             {/* Coming Soon Badge */}
              <div className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full hover:border-orange-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/25 hover:scale-105 max-w-full cursor-default">
                {/* Animated pulse ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 group-hover:opacity-40 animate-pulse"></div>
                
                {/* COMING SOON badge indicator */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full animate-pulse shadow-lg z-10">
                  SOON
                </div>
                
                {/* Status indicator */}
                <div className="relative flex items-center flex-shrink-0">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse mr-1 sm:mr-2"></div>
                  <span className="text-xs font-medium text-orange-300 uppercase tracking-wider">Coming Soon</span>
                </div>
                
                {/* Project info */}
                <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                  <span className="text-white font-semibold text-sm sm:text-base truncate">React Native Mobile App</span>
                  <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0 hidden sm:block"></div>
                  <span className="text-gray-300 text-xs sm:text-sm hidden sm:inline">In Development</span>
                </div>
                
                {/* Clock icon instead of arrow */}
                <div className="ml-1 sm:ml-2 flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12,6 12,12 16,14"></polyline>
                  </svg>
                </div>
              </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Antoine-Bottin"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 group hover:shadow-lg hover:shadow-green-400/25"
              rel="noopener noreferrer"
              target='_blank'
              
            >
              <Github size={24} className="text-gray-300 group-hover:text-green-400 transition-colors duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/antoine-bottin/"
              rel="noopener noreferrer"
              target='_blank'
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-400/25"
            >
              <Linkedin size={24} className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-200" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-green-400 to-cyan-400 text-gray-900 font-semibold rounded-full hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-gray-700 text-gray-300 font-semibold rounded-full hover:border-green-400 hover:text-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-green-400 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;