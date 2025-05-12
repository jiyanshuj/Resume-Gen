import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { Upload, FileText, AlertCircle } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

export default function FileUpload({ onFileSelect }: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const fileType = file.name.split('.').pop()?.toLowerCase();
      if (fileType === 'pdf' || fileType === 'docx') {
        onFileSelect(file);

        // Trigger download to store file locally
        const url = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = url;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxFiles: 1,
  });

  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 rounded-xl"
      >
        <h2 className="text-2xl font-bold mb-4">Import Your Resume</h2>
        <p className="text-gray-300 mb-8">
          Upload your existing resume in PDF or DOCX format for instant analysis and easy form filling.
        </p>

        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
            isDragActive
              ? 'border-blue-500 bg-blue-500/10'
              : isDragReject
              ? 'border-red-500 bg-red-500/10'
              : 'border-gray-700 hover:border-gray-600'
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-4">
            {isDragReject ? (
              <>
                <AlertCircle className="w-12 h-12 text-red-500" />
                <p className="text-red-500">Only PDF and DOCX files are accepted</p>
              </>
            ) : isDragActive ? (
              <>
                <Upload className="w-12 h-12 text-blue-500" />
                <p className="text-blue-500">Drop your resume here</p>
              </>
            ) : (
              <>
                <FileText className="w-12 h-12 text-gray-400" />
                <div>
                  <p className="text-lg mb-2">Drag and drop your resume here</p>
                  <p className="text-gray-400">or click to browse files</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">Supported formats: PDF, DOCX</p>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
