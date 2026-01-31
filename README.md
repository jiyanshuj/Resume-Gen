# 📄 NextStep CV - Resume Generator

A modern, full-stack resume generation platform that leverages AI and smart form handling to create professional, ATS-optimized resumes in seconds. Built with React, TypeScript, Python Flask, and modern web technologies.

---

## 🎯 Project Overview

**NextStep CV** is an intelligent resume generation platform designed to help users create professional, polished resumes without the complexity of manual formatting. The application intelligently captures user data through an intuitive form, processes it with backend AI services, and generates a beautifully formatted Word document ready for job applications.

### Key Highlights
✨ **Smart Resume Builder** - Intuitive multi-step form interface
🤖 **AI-Powered Optimization** - Gemini API integration for resume evaluation
📄 **Professional Templates** - Modern, clean, ATS-optimized document designs
🔐 **User Authentication** - Secure login and signup with bcrypt encryption
💾 **PDF/Word Export** - Download resumes in multiple formats
🎨 **Modern UI** - Dark mode support, responsive design with Tailwind CSS
⚡ **Real-time Updates** - Instant form validation and preview

---

## 🏗️ Project Architecture

### Full-Stack Structure
```
Resume Gen/
├── Frontend (React + TypeScript + Vite)
│   ├── src/
│   │   ├── App.tsx              # Main application component
│   │   ├── main.tsx             # Entry point
│   │   ├── index.css            # Global styles
│   │   └── components/
│   │       ├── Hero.tsx         # Landing page hero section
│   │       ├── Features.tsx      # Features showcase
│   │       ├── About.tsx         # About section
│   │       ├── Contact.tsx       # Contact information
│   │       ├── LoginSignupPage.tsx # Authentication
│   │       ├── FileUpload.tsx    # File upload handler
│   │       ├── ResumeForm.tsx    # Main resume builder form
│   │       └── style.css
│   ├── package.json             # Frontend dependencies
│   ├── vite.config.ts           # Vite configuration
│   ├── tailwind.config.js        # Tailwind CSS setup
│   ├── tsconfig.json            # TypeScript configuration
│   └── eslint.config.js          # ESLint rules
│
├── Backend (Python + Flask)
│   ├── main.py                  # Flask server & resume generation
│   ├── summary.py               # Resume summary optimization
│   ├── gemini_eval.py           # Google Gemini API integration
│   ├── word.py                  # Word document processing
│   ├── requirements.txt          # Python dependencies
│   └── runtime.txt              # Python version specification
│
└── Configuration Files
    ├── README.md                # This file
    ├── TECHNICAL_SPECIFICATIONS.md
    └── postcss.config.js        # PostCSS configuration
```

---

## 🎨 Application Screenshots & Features

> **📸 Note:** To display all images in the README, please capture screenshots of your application and save them to the `images/` folder. See [IMAGES_GUIDE.md](./IMAGES_GUIDE.md) for detailed instructions on what screenshots to capture and how to save them.

### 1. Landing Page - Hero Section
The application welcomes users with a modern, animated hero section featuring:
- Dynamic gradient background
- Call-to-action buttons
- Smooth scroll navigation
- Dark/Light mode toggle

![Resume Gen Home](./images/01-hero-section.png)

### 2. Resume Creation Form - Complete Overview
The heart of the application is a comprehensive, multi-section resume builder:

**Basic Information Section:**
- Full Name
- Email Address
- LinkedIn Profile URL
- GitHub Profile URL
- Professional Summary (textarea with character count)

![Create Resume Form - Part 1](./images/02-resume-form-basic-info.png)

### 3. Resume Form - Projects Section
Users can add unlimited projects with:
- Project Title
- Project Description
- Technologies Used
- Project Link/URL
- Dynamic add/remove functionality

![Projects Section](./images/03-projects-section.png)

### 4. Resume Form - Education Section
Comprehensive education tracking:
- Degree Type (B.Tech, M.Tech, 12th, etc.)
- Institution Name
- Duration (Start and End Year)
- Add/Remove education entries

**Sample Data:**
- B.Tech from SVIT (2022-26)
- 12th from Swami Vivekanand Model School (2022)

![Education Section](./images/04-education-section.png)

### 5. Resume Form - Work Experience Section
Track professional experience:
- Company Name
- Job Title
- Duration
- Job Description/Responsibilities
- Multiple experience entries support

**Sample Experience:**
- **Company:** Hired Easy
- **Position:** Software Engineer Intern
- **Duration:** Jan 2026 - Present
- **Description:** Developing a machine learning-powered web application for disease prediction

![Work Experience & Certifications Section](./images/05-work-experience-certifications.png)

### 6. Resume Form - Skills Section
Two-tier skill system:

**Technical Skills:**
- Python
- React
- And more...

**Soft Skills:**
- Communication Skills
- Leadership
- Problem Solving

![Skills Section](./images/06-skills-section.png)

### 7. Resume Form - Certifications & Projects
Additional sections for:
- Certification Title
- Issuing Organization
- Date Obtained
- Project Showcase

**Sample Certification:**
- Microsoft Learn Certified (2024)

*Note: This is shown in the same screenshot as section 5 above - scroll down to see certifications*

### 8. Generated Resume Output Example

**Actual Generated Resume (Jiyanushu Jain):**

![Generated Resume Output](./images/resume.png)

---

#### **JIYANUSHU JAIN**
jainjiyanushu@gmail.com | https://www.linkedin.com/in/jiyanushu-jain/ | https://github.com/jiyansuj

##### **PROFESSIONAL SUMMARY**
Hi, I'm Jiyanushu Jain, a Computer Science student focused on building intelligent, scalable software systems. I specialize in full-stack development, AI/ML integration, and cloud-based architecture, with hands-on experience delivering production-grade applications used at scale. I bring a problem-first mindset, strong fundamentals in data structures, system design, and cloud-ready development, and a constant drive to engineer solutions that are robust, performant, and maintainable. My work spans AI-driven face recognition (CNN), automated content generation (Gemini API), smart career guidance systems, and RESTful API development—serving 50+ users with features like real-time chat, attendance tracking, and ATS-optimized resume generation.

##### **PROJECTS**
- **Project Title:** PaperVista
  - **Description:** A smart AI-powered question paper generator designed for college examinations. PaperVista generates MST-1, MST-2, and End-Semester question papers in a proper university-style format
  - **Technologies Used:** React, FastAPI, Python
  - **Project URL:** https://paper-vista-five.vercel.app/

##### **WORK EXPERIENCE**
- **Company Name:** Hired Easy
  - **Job Title:** Software Engineer Intern
  - **Duration:** Jan 2026 - Present
  - **Job Description:** Developing a machine learning-powered web application designed to predict diseases like Diabetes, Heart Disease, and Parkinson's

##### **EDUCATION**
- **Degree:** B.Tech
  - **Institution Name:** SVIT
  - **Duration:** 2022-26

- **Degree:** 12th
  - **Institution Name:** Swami Vivekanand Model School
  - **Duration:** 2022

##### **TECHNICAL SKILLS**
- Python
- React

##### **SOFT SKILLS**
- Communication skills

##### **CERTIFICATIONS**
- **Certification Title:** Microsoft Learn Certified
  - **Issuer:** Microsoft
  - **Date:** 2024

---

### 9. Login & Authentication
Secure user authentication system with:
- Email/Password based signup
- Bcrypt password hashing
- Session management
- User profile tracking

![Login Page](./images/09-login-signup-page.png)

### 10. Features Showcase Page
Highlights application capabilities:
- Resume customization
- Multiple template options
- Real-time preview
- One-click download
- ATS optimization

![Features Page](./images/10-features-page.png)

### 11. About Us & Contact
Information about the platform and contact details for support and feedback.

![About Page](./images/11-about-page.png)

![Contact Page](./images/12-contact-page.png)

---

## 🛠️ Technology Stack

### **Frontend**
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.2.0 | UI Framework |
| TypeScript | 5.2.2 | Type Safety |
| Vite | 5.0.0 | Build Tool & Dev Server |
| Tailwind CSS | 3.4.1 | Utility-First Styling |
| Framer Motion | 11.0.3 | Animations |
| React Router DOM | 6.22.1 | Client-side Routing |
| React Hook Form | 7.50.0 | Form State Management |
| Axios | 1.9.0 | HTTP Client |
| Lucide React | 0.330.0 | Icon Library |

**Styling & UX:**
- PostCSS & Autoprefixer for advanced CSS
- Tailwind CSS for responsive design
- Dark mode support with localStorage
- Smooth animations with Framer Motion
- Icon libraries: React Icons, React Feather, FontAwesome

### **Backend**
| Technology | Version | Purpose |
|-----------|---------|---------|
| Flask | 2.3.2 | Web Framework |
| Python | 3.9+ | Programming Language |
| Flask-CORS | 4.0.1 | Cross-Origin Support |
| psycopg2 | 2.9.9 | PostgreSQL Driver |
| bcrypt | 4.1.2 | Password Hashing |
| python-docx | 1.1.0 | Word Document Generation |
| Gunicorn | 22.0.0 | Production Server |

**API Integrations:**
- Google Gemini API for AI-powered resume evaluation
- PostgreSQL for data persistence
- RESTful API design

### **Development & DevOps**
- ESLint for code quality
- TypeScript for type checking
- Vite for fast HMR development
- Gunicorn for production deployment
- Git for version control

---

## 🚀 Installation & Setup

### **Prerequisites**
- Node.js (v16 or higher)
- Python (v3.9 or higher)
- npm or yarn
- Git

### **Frontend Setup**

```bash
# Navigate to project root
cd "d:\Projects\Resume Gen"

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

### **Backend Setup**

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# Run Flask server
python main.py

# Or with Gunicorn (production)
gunicorn -w 4 -b 0.0.0.0:5000 main:app
```

### **Environment Variables**
Create a `.env` file in the backend directory:

```env
FLASK_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/resume_gen
GEMINI_API_KEY=your_gemini_api_key_here
SECRET_KEY=your_secret_key_here
```

---

## 📊 Project Analysis

### **Codebase Metrics**
- **Total Components:** 7 React components
- **Backend Modules:** 4 Python modules
- **Lines of Code:** ~1000+ (Frontend), ~500+ (Backend)
- **Dependencies:** 20+ (Frontend), 6 (Backend)

### **Key Functionalities**
1. **Form Handling:** React Hook Form for efficient state management
2. **API Communication:** Axios with async/await for clean code
3. **Document Generation:** python-docx for programmatic Word creation
4. **Authentication:** bcrypt encryption for password security
5. **Real-time Feedback:** Form validation and error messages

### **Performance Optimizations**
- Code splitting with Vite
- Lazy loading of components
- Optimized re-renders with React hooks
- Efficient database queries
- Caching strategies for static assets

### **Scalability Considerations**
- Modular architecture for easy feature addition
- RESTful API design for extensibility
- Database indexing for performance
- Containerization-ready (Docker support possible)
- Load balancing with Gunicorn

---

## 📁 File Structure Explanation

### **Frontend Components**

| Component | Purpose |
|-----------|---------|
| `App.tsx` | Main application router and layout |
| `Hero.tsx` | Landing page welcome section |
| `Features.tsx` | Feature highlights |
| `About.tsx` | Company/project information |
| `Contact.tsx` | Contact information |
| `LoginSignupPage.tsx` | User authentication |
| `ResumeForm.tsx` | Main resume builder form |
| `FileUpload.tsx` | File upload handler |

### **Backend Modules**

| Module | Purpose |
|--------|---------|
| `main.py` | Flask app, routes, resume generation |
| `summary.py` | Resume summary optimization |
| `gemini_eval.py` | Google Gemini API integration |
| `word.py` | Word document utilities |

### **Configuration Files**

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite build configuration |
| `tailwind.config.js` | Tailwind CSS customization |
| `tsconfig.json` | TypeScript compiler options |
| `eslint.config.js` | Code quality rules |
| `postcss.config.js` | PostCSS processing |
| `package.json` | Frontend dependencies & scripts |
| `requirements.txt` | Python dependencies |

---

## 🔄 How It Works

### **User Journey**

1. **Visit Application**
   - User lands on NextStep CV homepage
   - Greeted with hero section and feature overview
   - Option to login or create new account

2. **Create Account**
   - Email and password signup
   - Password encrypted with bcrypt
   - User profile created in database

3. **Fill Resume Information**
   - Navigate to "Create Resume" page
   - Fill multi-step form with:
     - Basic information (name, email, links)
     - Professional summary
     - Education history
     - Work experience
     - Projects
     - Skills (technical & soft)
     - Certifications
   - Real-time validation provides feedback

4. **Generate Resume**
   - Click "Save Resume" button
   - Backend processes data
   - AI optimization via Gemini API
   - Word document generated with modern template
   - File automatically downloaded

5. **Download & Use**
   - User receives `.docx` file
   - Can edit in Microsoft Word if needed
   - ATS-optimized for job applications
   - Ready to submit to employers

---

## 🧪 Testing & Quality

### **Frontend Testing**
- ESLint configuration for code quality
- TypeScript for type safety
- Vite dev server with HMR for fast iteration
- Chrome DevTools for debugging

### **Backend Testing**
- Flask development server with debug mode
- Python type hints for code clarity
- Database validation for data integrity

### **Manual Testing Checklist**
- [ ] Form validation works correctly
- [ ] File uploads process successfully
- [ ] Resume generates without errors
- [ ] Dark/Light mode switching works
- [ ] Responsive design on mobile/tablet/desktop
- [ ] API endpoints return correct data
- [ ] Database operations successful
- [ ] Authentication flow secure

---

## 🐛 Troubleshooting

### **Common Issues**

**Frontend won't start**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Backend connection errors**
```bash
# Check Flask server is running
python main.py

# Check database connection
# Verify DATABASE_URL in .env
```

**Resume generation fails**
- Check Gemini API key is valid
- Verify all required form fields are filled
- Check backend logs for specific error

**CORS errors**
- Ensure flask-cors is installed
- Check backend URL in frontend axios calls

---

## 🚢 Deployment

### **Frontend Deployment (Vercel/Netlify)**
```bash
# Build optimized production bundle
npm run build

# Deploy dist folder to Vercel/Netlify
vercel deploy
```

### **Backend Deployment (Render/Heroku)**
```bash
# Ensure Procfile exists with:
# web: gunicorn -w 4 -b 0.0.0.0:$PORT main:app

# Push to Render/Heroku
git push heroku main
```

---

## 📈 Future Enhancements

- [ ] Multiple resume template designs
- [ ] Real-time resume preview
- [ ] Cover letter generator
- [ ] Resume scoring system
- [ ] Social media profile integration
- [ ] Video introduction feature
- [ ] Collaborative resume editing
- [ ] Export to PDF format
- [ ] Mobile app (React Native)
- [ ] Job matching algorithm

---

## 📝 License

This project is licensed under the **MIT License** - see LICENSE file for details.

---

## 👥 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Support & Contact

For questions, suggestions, or bug reports:
- **Email:** support@nextstep-cv.com
- **GitHub Issues:** [Create an issue](https://github.com/yourusername/resume-gen/issues)
- **LinkedIn:** [Connect with us](https://linkedin.com)

---

## ⭐ Acknowledgments

- React and TypeScript communities
- Tailwind CSS for beautiful styling
- Flask for robust backend
- Google Gemini API for AI capabilities
- All open-source contributors

---

**Made with ❤️ by the NextStep CV Team**

*Last Updated: January 2026*
