import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We're dedicated to helping you land your dream job with powerful resume tools
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To empower job seekers with cutting-edge tools and AI-powered insights that make
                creating professional resumes effortless and effective.
              </p>
              <ul className="space-y-3">
                {['ATS-Optimized Templates', 'AI-Powered Analysis', 'Industry-Specific Content', 'Expert Support'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4">Why Trust Us?</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Proven Success',
                    description: '90% of users report more interview invitations'
                  },
                  {
                    title: 'AI Technology',
                    description: 'Advanced algorithms for optimal content suggestions'
                  },
                  {
                    title: 'Expert Support',
                    description: '24/7 assistance from resume professionals'
                  }
                ].map((item, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;