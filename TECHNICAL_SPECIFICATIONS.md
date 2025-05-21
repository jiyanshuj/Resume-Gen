# Technical Specifications for Resume Gen Project

## Frontend
- Framework: React 18
- Language: TypeScript
- Build Tool: Vite
- Styling: Tailwind CSS
- Linting: ESLint with TypeScript support
- Key Libraries:
  - react-router-dom (Routing)
  - react-hook-form (Form handling)
  - framer-motion (Animations)
  - react-icons, react-feather, lucide-react, @fortawesome/fontawesome-free (Icons)
  - axios (HTTP client)
  - clsx (Conditional classNames)
  - react-dropzone (File uploads)
  - react-intersection-observer (Scroll detection)
  - react-scroll (Smooth scrolling)

## Backend
- Language: Python
- Framework: Flask 2.3.2
- CORS Support: flask-cors
- Database Driver: psycopg2-binary (PostgreSQL)
- Security: bcrypt (Password hashing)
- Document Generation: python-docx (Word document manipulation)

## Development Tools and Configurations
- TypeScript for type safety
- ESLint for code quality and linting
- PostCSS and Autoprefixer for CSS processing
- Tailwind CSS configuration for utility-first styling
- Vite for fast development server and build

## Other
- Project uses a monorepo style with separate backend and frontend codebases
- Backend dependencies managed via requirements.txt
- Frontend dependencies managed via package.json

This document summarizes the main technical stack and tools used in the Resume Gen project.
