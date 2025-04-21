import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Upload, X, FileText, AlertCircle, Loader2 } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  const [showImportModal, setShowImportModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    await handleFile(file);
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await handleFile(file);
    }
  };

  const handleFile = async (file: File) => {
    setError('');
    const fileType = file.name.split('.').pop()?.toLowerCase();
    
    if (!['pdf', 'docx'].includes(fileType || '')) {
      setError('Please upload a PDF or DOCX file');
      return;
    }

    setIsLoading(true);
    try {
      // Here you would typically process the file
      // For now, we'll simulate processing with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Navigate to form after successful processing
      setShowImportModal(false);
      navigate('/create');
    } catch (err) {
      setError('Error processing file. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Create Your Perfect
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"> Resume</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-12"
          >
            Build ATS-friendly resumes that land interviews. Powered by AI and designed for success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => navigate('/create')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 group"
            >
              Create Resume
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => setShowImportModal(true)}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-full font-semibold hover:border-blue-500 dark:hover:border-blue-400 transition-colors flex items-center justify-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Import Resume
            </button>
          </motion.div>
        </div>
      </div>

      {/* Import Modal */}
      <AnimatePresence>
        {showImportModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-lg w-full"
            >
              <div className="p-6 flex justify-between items-start border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h2 className="text-2xl font-bold">Import Resume</h2>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">Upload your existing resume</p>
                </div>
                <button
                  onClick={() => setShowImportModal(false)}
                  className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-8 transition-colors ${
                    isDragging
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/10'
                      : 'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
                  }`}
                >
                  <input
                    type="file"
                    accept=".pdf,.docx"
                    onChange={handleFileInput}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="flex flex-col items-center cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
                        <p className="mt-4 text-lg font-medium">Processing your resume...</p>
                      </>
                    ) : (
                      <>
                        <FileText className="w-12 h-12 text-gray-400" />
                        <p className="mt-4 text-lg font-medium">
                          Drag and drop your resume here
                        </p>
                        <p className="mt-2 text-gray-500">or click to browse files</p>
                        <p className="mt-4 text-sm text-gray-400">
                          Supported formats: PDF, DOCX
                        </p>
                      </>
                    )}
                  </label>
                </div>

                {error && (
                  <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/10 rounded-lg flex items-center gap-2 text-red-600 dark:text-red-400">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p>{error}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;