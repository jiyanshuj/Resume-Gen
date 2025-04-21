import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Github, Twitter, Linkedin } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import FileUpload from './components/FileUpload';
import ResumeForm from './components/ResumeForm';

const Navigation = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-40 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text cursor-pointer"
            onClick={() => navigate('/')}
          >
            NextStep CV
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Home
            </Link>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
            <Link to="/create" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Create Resume
            </Link>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? 
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : 
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              }
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? 
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : 
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link 
                to="/" 
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
              <Link 
                to="/create" 
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Create Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900">
        <Navigation />
        
        <main className="pt-16">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <div id="about">
                  <About />
                </div>
                <div id="contact">
                  <Contact />
                </div>
              </>
            } />
            <Route path="/create" element={<ResumeForm />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-4 md:mb-0">
              NextStep CV
              </Link>

              <div className="flex items-center space-x-6">
                <SocialLink href="https://github.com/jiyanshuj" icon={<Github />} />
                <SocialLink href="https://twitter.com" icon={<Twitter />} />
                <SocialLink href="https://www.linkedin.com/in/jiyanshu-jain/" icon={<Linkedin />} />
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              © 2025 NextStep CV. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
    >
      {icon}
    </a>
  );
};

export default App;