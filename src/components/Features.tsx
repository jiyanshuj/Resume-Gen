import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileCheck, Sparkles, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: 'ATS-Optimized',
    description: 'Templates designed to pass Applicant Tracking Systems with ease.'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'AI-Powered',
    description: 'Smart suggestions and auto-formatting for professional resumes.'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Tailored Content',
    description: 'Customized for your industry and career level.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Instant Analysis',
    description: 'Real-time feedback and improvement suggestions.'
  }
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Everything you need to create a winning resume
          </motion.p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 dark:group-hover:border-blue-400/20 rounded-2xl transition-all duration-300"></div>

              {/* Icon container with animation */}
              <div className="relative w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                <div className="text-blue-500 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Content with hover effects */}
              <h3 className="relative text-xl font-semibold mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="relative text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Decorative elements that appear on hover */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-500/5 rounded-full translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;