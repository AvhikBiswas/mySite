'use client'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Calendar,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Server,
  Layers,
  Terminal,
  GitBranch,
  Box,
  Cloud,
  Workflow
} from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['hero', 'about', 'experience', 'tech', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const techStack = [
    { name: 'Next.js', icon: Layers },
    { name: 'React', icon: Code2 },
    { name: 'TypeScript', icon: Terminal },
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: Code2 },
    { name: 'MongoDB', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Docker', icon: Box },
    { name: 'AWS', icon: Cloud },
    { name: 'Git', icon: GitBranch },
    { name: 'Linux', icon: Terminal },
    { name: 'GraphQL', icon: Workflow }
  ];

  return (
    <>
      <Head>
        <title>Avhik Biswas - Software Engineer</title>
        <style jsx>{`
                    .rounded-button {
                        border-radius: 8px;
                    }
                    input[type="number"]::-webkit-outer-spin-button,
                    input[type="number"]::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }
                    input[type="number"] {
                        -moz-appearance: textfield;
                    }
                    body {
                        font-family: 'Inter', sans-serif;
                        min-height: 1024px;
                        background-color: #000000;
                    }
                    .monochrome-pattern {
                        background-image: 
                            linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.01) 25%),
                            linear-gradient(-45deg, transparent 25%, rgba(255,255,255,0.01) 25%),
                            linear-gradient(45deg, rgba(255,255,255,0.01) 75%, transparent 75%),
                            linear-gradient(-45deg, rgba(255,255,255,0.01) 75%, transparent 75%);
                        background-size: 20px 20px;
                        background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
                    }
                `}</style>
      </Head>

      <div className="min-h-screen bg-black text-white font-sans">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold cursor-pointer hover:text-gray-300 transition-colors" onClick={() => scrollToSection('hero')}>
                AB
              </div>
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {['About', 'Experience', 'Tech', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm hover:text-white transition-colors cursor-pointer ${activeSection === item.toLowerCase() ? 'text-white' : 'text-gray-500'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              {/* Mobile Menu Button */}
              <button
                className="md:hidden cursor-pointer hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
                <div className="flex flex-col space-y-4 pt-4">
                  {['About', 'Experience', 'Tech', 'Contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-left text-gray-500 hover:text-white transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Progress Indicator */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{
              width: `${Math.min((scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%`
            }}
          ></div>
        </div>

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950"></div>
          <div className="absolute inset-0 monochrome-pattern opacity-10"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                    AVHIK BISWAS
                  </h1>
                  <div className="text-xl md:text-2xl text-gray-400 font-light">
                    Software Engineer @HomeAbroad
                  </div>
                </div>

                <div className="space-y-4 relative">
                  <div className="text-lg md:text-xl text-gray-300 font-light border-l-2 border-gray-700 pl-4">
                    <span className="block mb-2">"Building, Breaking, Finding Meaning"</span>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <Terminal size={16} />
                      <span>- AI, while debugging its own existence</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <button
                    onClick={() => window.open('https://cal.com/avhikbiswas', '_blank')}
                    className="rounded-button whitespace-nowrap bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center gap-2"
                  >
                    <Calendar size={20} />
                    Schedule a Call
                  </button>

                  <div className="flex gap-4">
                    <a href="https://linkedin.com/in/avhikbiswas" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-white hover:bg-white/5 transition-all cursor-pointer group">
                      <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                    <a href="https://github.com/avhikbiswas" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-white hover:bg-white/5 transition-all cursor-pointer group">
                      <Github size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="hidden md:block relative">
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-white/3 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-white/3 to-transparent rounded-full blur-3xl"></div>
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-800 transform rotate-3 hover:rotate-0 transition-transform duration-500 bg-gradient-to-br from-gray-900 to-black">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-8xl text-gray-700">
                      <Code2 size={120} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="text-sm text-gray-500">Scroll to explore</div>
            <ChevronDown size={24} className="text-gray-500 animate-bounce" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-gray-950/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-black border border-gray-800">
                  <div className="w-full h-full flex items-center justify-center">
                    <img src="/avhik.png"  alt="Avhik Biswas"  width={700} />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-gray-700 rounded-lg"></div>
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">About Me</h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    I am a passionate software engineer with a deep love for creating meaningful digital experiences.
                    My journey in technology began with curiosity and has evolved into a commitment to building
                    solutions that make a difference.
                  </p>
                  <p>
                    Currently working at HomeAbroad, I specialize in full-stack development with a focus on modern
                    web technologies. I believe in the power of clean code, thoughtful design, and continuous learning.
                  </p>
                  <p>
                    When I am not coding, you will find me exploring new technologies, contributing to open-source
                    projects, or sharing knowledge with the developer community. I am always excited to connect
                    with fellow engineers and discuss the latest trends in software development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Experience</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gray-800"></div>
              {/* Timeline Items */}
              <div className="space-y-16">
                {/* Experience 1 */}
                <div className="relative flex items-center">
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black z-10"></div>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                    <div className="bg-gray-950/50 border border-gray-800 p-6 rounded-lg hover:border-gray-600 hover:bg-gray-950/80 transition-all cursor-pointer">
                      <div className="text-sm text-gray-500 mb-2">2023 - Present</div>
                      <h3 className="text-xl font-bold mb-2 text-white">Software Engineer</h3>
                      <div className="text-gray-400 mb-4">HomeAbroad</div>
                      <p className="text-gray-400 mb-4">
                        Leading development of scalable web applications using Next.js and modern technologies.
                        Driving technical decisions and implementing best practices.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">Next.js</span>
                        <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">TypeScript</span>
                        <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">Node.js</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Experience 2 */}
                <div className="relative flex items-center">
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black z-10"></div>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:ml-auto md:pl-8">
                    <div className="bg-gray-950/50 border border-gray-800 p-6 rounded-lg hover:border-gray-600 hover:bg-gray-950/80 transition-all cursor-pointer">
                      <div className="text-sm text-gray-500 mb-2">2022 - 2023</div>
                      <h3 className="text-xl font-bold mb-2 text-white">Software Engineering Intern</h3>
                      <div className="text-gray-400 mb-4">HomeAbroad</div>
                      <p className="text-gray-400 mb-4">
                        Contributed to core product development, learned industry best practices,
                        and collaborated with senior developers on key features.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">React</span>
                        <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">JavaScript</span>
                        <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">MongoDB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section id="tech" className="py-20 px-6 bg-gray-950/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {techStack.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center p-6 bg-gray-950/30 border border-gray-800 rounded-lg hover:bg-gray-950/60 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                  >
                    <IconComponent size={40} className="mb-4 text-gray-500 group-hover:text-white transition-colors" />
                    <span className="text-sm text-gray-500 group-hover:text-white transition-colors font-medium">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section id="articles" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article 1 */}
              <div className="bg-gray-950/30 border border-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 hover:border-gray-600 transition-all duration-300">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <Layers size={60} className="text-gray-600" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">August 5, 2025</div>
                  <h3 className="text-xl font-bold mb-3 text-white">Building Scalable Applications with Next.js</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    Exploring best practices and architectural patterns for building large-scale applications using Next.js and React.
                  </p>
                  <a href="#" className="text-white hover:text-gray-300 inline-flex items-center gap-2 transition-colors">
                    Read More <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              {/* Article 2 */}
              <div className="bg-gray-950/30 border border-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 hover:border-gray-600 transition-all duration-300">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <Terminal size={60} className="text-gray-600" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">July 28, 2025</div>
                  <h3 className="text-xl font-bold mb-3 text-white">Breaking Down Complex Problems</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    A systematic approach to solving complex technical challenges in software development through decomposition and analysis.
                  </p>
                  <a href="#" className="text-white hover:text-gray-300 inline-flex items-center gap-2 transition-colors">
                    Read More <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              {/* Article 3 */}
              <div className="bg-gray-950/30 border border-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 hover:border-gray-600 transition-all duration-300">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <Code2 size={60} className="text-gray-600" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">July 15, 2025</div>
                  <h3 className="text-xl font-bold mb-3 text-white">Finding Meaning in Code</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    Reflecting on the philosophical aspects of software development and how it shapes our understanding of technology.
                  </p>
                  <a href="#" className="text-white hover:text-gray-300 inline-flex items-center gap-2 transition-colors">
                    Read More <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gray-950/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Let's Connect</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              I am always interested in discussing new opportunities, collaborating on projects,
              or just having a conversation about technology and software engineering.
            </p>
            {/* Cal.com Integration */}
            <div className="mb-12">
              <button
                onClick={() => window.open('https://cal.com/avhikbiswas', '_blank')}
                className="rounded-button whitespace-nowrap bg-white text-black px-12 py-6 text-xl font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 cursor-pointer inline-flex items-center gap-3"
              >
                <Calendar size={24} />
                Schedule a Call
              </button>
            </div>
            {/* Social Links */}
            <div className="flex justify-center space-x-8">
              <a href="https://linkedin.com/in/avhikbiswas" className="text-gray-400 hover:text-white transition-colors p-3 hover:bg-white/5 rounded-full">
                <Linkedin size={32} />
              </a>
              <a href="https://github.com/avhikbiswas" className="text-gray-400 hover:text-white transition-colors p-3 hover:bg-white/5 rounded-full">
                <Github size={32} />
              </a>
              <a href="mailto:avhik@example.com" className="text-gray-400 hover:text-white transition-colors p-3 hover:bg-white/5 rounded-full">
                <Mail size={32} />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-500 mb-4 md:mb-0">
                © 2024 Avhik Biswas. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="https://linkedin.com/in/avhikbiswas" className="text-gray-500 hover:text-white transition-colors cursor-pointer">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/avhikbiswas" className="text-gray-500 hover:text-white transition-colors cursor-pointer">
                  <Github size={20} />
                </a>
                <a href="mailto:avhik@example.com" className="text-gray-500 hover:text-white transition-colors cursor-pointer">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        {scrollY > 500 && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 cursor-pointer z-40 flex items-center justify-center"
          >
            <ChevronUp size={20} />
          </button>
        )}
      </div>
    </>
  );
}