import React, { useState } from 'react';
import { Plus, Trash2, Save } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  techStack: string;
  link?: string;
}

interface Experience {
  companyName: string;
  jobTitle: string;
  duration: string;
  description: string;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
}

const ResumeForm = () => {
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [email, setEmail] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [github, setGithub] = useState('');
  const [projects, setProjects] = useState<Project[]>([{ title: '', description: '', techStack: '', link: '' }]);
  const [experiences, setExperiences] = useState<Experience[]>([{ companyName: '', jobTitle: '', duration: '', description: '' }]);
  const [certifications, setCertifications] = useState<Certification[]>([{ title: '', issuer: '', date: '' }]);
  const [technicalSkills, setTechnicalSkills] = useState<string[]>(['']);
  const [softSkills, setSoftSkills] = useState<string[]>(['']);
  const [education, setEducation] = useState([{ degree: '', institution: '', duration: '' }]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      "Full Name": name,
      "Email": email,
      "LinkedIn": linkedIn,
      "GitHub": github,
      "Professional Summary": summary,
      "Projects": projects,
      "Experiences": experiences,
      "Certifications": certifications,
      "Education": education,
      "TechnicalSkills": technicalSkills,
      "SoftSkills": softSkills,
      "Activities": ""
    };

    try {
      const response = await fetch('https://resume-gen-backend.onrender.com/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Failed to generate resume');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.docx';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to generate and download resume.');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Create Your Resume
          </h2>

          {/* Basic Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="email@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">LinkedIn</label>
              <input
                type="url"
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="https://linkedin.com/in/username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">GitHub</label>
              <input
                type="url"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="https://github.com/username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Professional Summary</label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                rows={4}
                placeholder="Brief overview of your professional background and career goals"
                required
              />
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Projects</h3>
            {projects.map((project, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium">Project #{index + 1}</h4>
                  {projects.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setProjects(projects.filter((_, i) => i !== index))}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => {
                    const newProjects = [...projects];
                    newProjects[index].title = e.target.value;
                    setProjects(newProjects);
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Project Title"
                  required
                />
                <textarea
                  value={project.description}
                  onChange={(e) => {
                    const newProjects = [...projects];
                    newProjects[index].description = e.target.value;
                    setProjects(newProjects);
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  rows={3}
                  placeholder="Project Description"
                  required
                />
                <input
                  type="text"
                  value={project.techStack}
                  onChange={(e) => {
                    const newProjects = [...projects];
                    newProjects[index].techStack = e.target.value;
                    setProjects(newProjects);
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Technologies Used (e.g., React, Node.js, MongoDB)"
                  required
                />
                <input
                  type="url"
                  value={project.link}
                  onChange={(e) => {
                    const newProjects = [...projects];
                    newProjects[index].link = e.target.value;
                    setProjects(newProjects);
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Project URL (optional)"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => setProjects([...projects, { title: '', description: '', techStack: '', link: '' }])}
              className="w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:border-gray-400 dark:hover:border-gray-500 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" /> Add Project
            </button>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Work Experience</h3>
            {experiences.map((experience, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium">Experience #{index + 1}</h4>
                  {experiences.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setExperiences(experiences.filter((_, i) => i !== index))}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  value={experience.companyName}
                  onChange={(e) => {
                    const newExperiences = [...experiences];
                    newExperiences[index].companyName = e.target.value;
                    setExperiences(newExperiences);
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Company Name"
                />
                <input
                  type="text"
                  value={experience.jobTitle}
                  onChange={(e) => {
                    const newExperiences = [...experiences];
                    newExperiences[index].jobTitle = e.target.value;
                    setExperiences(newExperiences);
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Job Title"
                />
                <input
                  type="text"
                  value={experience.duration}
                  onChange={(e) => {
                    const newExperiences = [...experiences];
                    newExperiences[index].duration = e.target.value;
                    setExperiences(newExperiences);
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Duration (e.g., Jan 2020 - Present)"
                />
                <textarea
                  value={experience.description}
                  onChange={(e) => {
                    const newExperiences = [...experiences];
                    newExperiences[index].description = e.target.value;
                    setExperiences(newExperiences);
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  rows={3}
                  placeholder="Job Responsibilities"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => setExperiences([...experiences, { companyName: '', jobTitle: '', duration: '', description: '' }])}
              className="w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:border-gray-400 dark:hover:border-gray-500 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" /> Add Experience
            </button>
          </div>

          {/* Certifications Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Certifications</h3>
            {certifications.map((certification, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium">Certification #{index + 1}</h4>
                  {certifications.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setCertifications(certifications.filter((_, i) => i !== index))}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  value={certification.title}
                  onChange={(e) => {
                    const newCertifications = [...certifications];
                    newCertifications[index].title = e.target.value;
                    setCertifications(newCertifications);
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Certification Title"
                />
                <input
                  type="text"
                  value={certification.issuer}
                  onChange={(e) => {
                    const newCertifications = [...certifications];
                    newCertifications[index].issuer = e.target.value;
                    setCertifications(newCertifications);
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Issuer"
                />
                <input
                  type="text"
                  value={certification.date}
                  onChange={(e) => {
                    const newCertifications = [...certifications];
                    newCertifications[index].date = e.target.value;
                    setCertifications(newCertifications);
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Date"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => setCertifications([...certifications, { title: '', issuer: '', date: '' }])}
              className="w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:border-gray-400 dark:hover:border-gray-500 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" /> Add Certification
            </button>
          </div>

          {/* Education Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium">Education #{index + 1}</h4>
                  {education.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setEducation(education.filter((_, i) => i !== index))}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => {
                    const newEducation = [...education];
                    newEducation[index].degree = e.target.value;
                    setEducation(newEducation);
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Degree (e.g., Bachelor of Science in Computer Science)"
                  required
                />
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => {
                    const newEducation = [...education];
                    newEducation[index].institution = e.target.value;
                    setEducation(newEducation);
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Institution Name"
                  required
                />
                <input
                  type="text"
                  value={edu.duration}
                  onChange={(e) => {
                    const newEducation = [...education];
                    newEducation[index].duration = e.target.value;
                    setEducation(newEducation);
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Duration (e.g., 2016 - 2020)"
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => setEducation([...education, { degree: '', institution: '', duration: '' }])}
              className="w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:border-gray-400 dark:hover:border-gray-500 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" /> Add Education
            </button>
          </div>

          {/* Skills Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg space-y-4">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => {
                    const newSkills = [...technicalSkills];
                    newSkills[index] = e.target.value;
                    setTechnicalSkills(newSkills);
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Skill"
                />
                {technicalSkills.length > 1 && (
                  <button
                    type="button"
                    onClick={() => setTechnicalSkills(technicalSkills.filter((_, i) => i !== index))}
                    className="text-red-500 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => setTechnicalSkills([...technicalSkills, ''])}
              className="w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:border-gray-400 dark:hover:border-gray-500 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" /> Add Skill
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Soft Skills</h3>
            {softSkills.map((skill, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg space-y-4">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => {
                    const newSkills = [...softSkills];
                    newSkills[index] = e.target.value;
                    setSoftSkills(newSkills);
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Skill"
                />
                {softSkills.length > 1 && (
                  <button
                    type="button"
                    onClick={() => setSoftSkills(softSkills.filter((_, i) => i !== index))}
                    className="text-red-500 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => setSoftSkills([...softSkills, ''])}
              className="w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:border-gray-400 dark:hover:border-gray-500 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" /> Add Skill
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors"
          >
            <Save className="w-5 h-5 inline-block mr-2" /> Save Resume
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ResumeForm;
