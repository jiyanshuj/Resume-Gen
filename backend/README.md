# Backend Overview

This document provides an understanding of the backend functionality of the Resume Generator application. The backend is built using Python and handles user authentication, resume data management, and file processing.

## Features
- User authentication
- Resume data management
- File processing

## Installation
1. Navigate to the `backend` directory.
2. Install the required packages using `pip install -r requirements.txt`.

## Usage
- To run the backend server, execute `python main.py`.

## Code Analysis

### Main Components
1. **Flask Framework**: The application uses Flask to handle HTTP requests and responses.
2. **Database Connection**: Utilizes `psycopg2` to connect to a PostgreSQL database for user data storage.
3. **User Authentication**: Implements login and signup routes with password hashing using `bcrypt`.
4. **Resume Generation**: The `generate_resume` route processes user data and generates a resume in DOCX format using the `docx` library.

### Routes
- **`/login`**: Authenticates users based on username and password.
- **`/signup`**: Registers new users by storing their credentials in the database.
- **`/generate`**: Accepts user data and generates a resume document.

### Error Handling
The application includes error handling for database connections and user authentication, providing appropriate HTTP status codes and messages for different scenarios.

### Security Considerations
- Passwords are hashed before storage to enhance security.
- CORS is enabled to allow cross-origin requests, which is essential for frontend-backend communication.

## Output
![Backend Output](images/image6.png)