# NextStep CV

## Overview
NextStep CV is a modern, user-friendly web application designed to help users create professional resumes effortlessly. Built with a React frontend and Flask backend, it offers a seamless experience for resume generation, including user authentication, dynamic form inputs, and automatic Word document creation.

## Features
- **User Authentication**: Secure login and signup functionality with password hashing
- **Interactive Resume Builder**: Step-by-step form to input personal details, work experience, education, skills, and more
- **Professional Templates**: Clean, modern resume templates optimized for readability
- **Word Document Generation**: Automatic generation of downloadable .docx files
- **Dark Mode Support**: Toggle between light and dark themes for user preference
- **Responsive Design**: Fully responsive interface that works on desktop and mobile devices
- **Real-time Preview**: Live updates as you fill out the form
- **File Upload Support**: Upload and manage additional documents if needed

## Tech Stack

### Frontend
- **React 18**: Modern JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript for better code quality
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Animation library for smooth transitions
- **React Router DOM**: Declarative routing for React
- **Axios**: HTTP client for API requests
- **React Hook Form**: Performant forms with easy validation

### Backend
- **Python**: Programming language for backend logic
- **Flask**: Lightweight WSGI web application framework
- **PostgreSQL**: Robust relational database for user data
- **python-docx**: Library for creating and updating Microsoft Word files
- **bcrypt**: Password hashing for security
- **flask-cors**: Cross-Origin Resource Sharing support

## Prerequisites
Before running this application, ensure you have the following installed:
- Node.js (version 16 or higher)
- Python (version 3.8 or higher)
- PostgreSQL (version 12 or higher)

## Installation

### Frontend Setup
1. Clone the repository or navigate to the project directory
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Set up the PostgreSQL database:
   - Create a database named `resumeDB`
   - Update database credentials in `main.py` if necessary (default: user='postgres', password='112255')
5. Run the backend server:
   ```bash
   python main.py
   ```
   The backend will be available at `http://localhost:3001`

## Usage
1. Ensure both frontend and backend servers are running
2. Open your browser and navigate to `http://localhost:5173`
3. Register a new account or log in with existing credentials
4. Fill out the resume form with your personal information, work experience, education, skills, etc.
5. Preview your resume in real-time
6. Click "Generate Resume" to create and download your professional resume as a Word document

## API Endpoints
The backend provides the following REST API endpoints:

- `GET /` - Health check endpoint
- `POST /login` - User authentication
  - Request body: `{ "username": "string", "password": "string" }`
  - Response: Success message or error
- `POST /signup` - User registration
  - Request body: `{ "username": "string", "email": "string", "password": "string" }`
  - Response: Success message or error
- `POST /generate` - Resume generation
  - Request body: JSON object with resume data
  - Response: Word document file download

## Project Structure
```
resume-gen/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── ResumeForm.tsx
│   │   ├── LoginSignupPage.tsx
│   │   └── ...
│   ├── App.tsx
│   └── main.tsx
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── runtime.txt
│   └── ...
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## Contributing
We welcome contributions to NextStep CV! To contribute:

1. Fork the repository
2. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

Please ensure your code follows the existing style and includes appropriate tests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Support
If you encounter any issues or have questions, please open an issue on the GitHub repository.

## Future Enhancements
- Multiple resume templates
- PDF export option
- Resume scoring and suggestions
- LinkedIn integration
- Cloud storage for resumes
