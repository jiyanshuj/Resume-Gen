import React, { useState } from 'react';
import { FaRightToBracket, FaUserPlus } from 'react-icons/fa6';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginSignupPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', { username, password });
      setMessage(response.data.message);
      localStorage.setItem('username', username); // Save username
      setUsername('');
      setPassword('');
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error(error);
      setMessage('Login failed');
    }
  };
  

  const handleSignup = async () => {
    try {
      const response = await axios.post('https://resume-gen-backend.onrender.com/signup', { username, email, password });
      setMessage(response.data.message);
      localStorage.setItem('username', username); // Save username
      setUsername('');
      setEmail('');
      setPassword('');
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error(error);
      setMessage('Signup failed');
    }
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");
        @import url("https://use.fontawesome.com/releases/v6.5.1/css/all.css");

        * {
          font-family: "Poppins", sans-serif;
        }

        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #25252b;
        }

        @property --a {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        .box {
          position: relative;
          width: 400px;
          height: 200px;
          background: repeating-conic-gradient(
            from var(--a),
            #ff2770 0%,
            #ff2770 5%,
            transparent 5%,
            transparent 40%,
            #ff2770 50%
          );
          filter: drop-shadow(0 15px 50px #000);
          border-radius: 20px;
          animation: rotating 4s linear infinite;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.5s;
        }

        @keyframes rotating {
          0% { --a: 0deg; }
          100% { --a: 360deg; }
        }

        .box::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: repeating-conic-gradient(
            from var(--a),
            #45f3ff 0%,
            #45f3ff 5%,
            transparent 5%,
            transparent 40%,
            #45f3ff 50%
          );
          filter: drop-shadow(0 15px 50px #000);
          border-radius: 20px;
          animation: rotating 4s linear infinite;
          animation-delay: -1s;
        }

        .box::after {
          content: "";
          position: absolute;
          inset: 4px;
          background: #2d2d39;
          border-radius: 15px;
          border: 8px solid #25252b;
        }

        .box:hover {
          width: 450px;
          height: 500px;
        }

        .box:hover .login {
          inset: 40px;
        }

        .box:hover .loginBx {
          transform: translateY(0px);
        }

        .login {
          position: absolute;
          inset: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          border-radius: 10px;
          background: #00000033;
          color: #fff;
          z-index: 1000;
          box-shadow: inset 0 10px 20px #00000080;
          border-bottom: 2px solid #ffffff80;
          transition: 0.5s;
          overflow: hidden;
        }

        .loginBx {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 20px;
          width: 70%;
          transform: translateY(126px);
          transition: 0.5s;
        }

        h2 {
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.2em;
        }

        h2 i, h2 svg {
          color: #ff2770;
          text-shadow: 0 0 5px #ff2770, 0 0 20px #ff2770;
        }

        input {
          width: 100%;
          padding: 10px 20px;
          outline: none;
          border: none;
          font-size: 1em;
          color: #fff;
          background: #0000001a;
          border: 2px solid #fff;
          border-radius: 30px;
        }

        input::placeholder {
          color: #999;
        }

        input[type="submit"] {
          background: #45f3ff;
          border: none;
          font-weight: 500;
          color: #111;
          cursor: pointer;
          transition: 0.5s;
        }

        input[type="submit"]:hover {
          box-shadow: 0 0 10px #45f3ff, 0 0 60px #45f3ff;
        }

        .group {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .group a {
          color: #fff;
          text-decoration: none;
          cursor: pointer;
        }

        .group a:nth-child(2) {
          color: #ff2770;
          font-weight: 600;
        }
      `}</style>

      <div className="login-container">
        <div className="box">
          <div className="login">
            <form className="loginBx" onSubmit={handleSubmit}>
              {isLogin ? (
                <>
                  <h2><FaRightToBracket /> Login</h2>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <input type="submit" value="Sign in" />
                  <div className="group">
                    <a href="#">Forgot Password</a>
                    <a onClick={() => setIsLogin(false)}>Sign up</a>
                  </div>
                </>
              ) : (
                <>
                  <h2><FaUserPlus /> Sign Up</h2>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <input type="submit" value="Create Account" />
                  <div className="group">
                    <a href="#">Already have an account?</a>
                    <a onClick={() => setIsLogin(true)}>Login</a>
                  </div>
                </>
              )}
              {message && <p style={{ marginTop: '10px', color: '#45f3ff' }}>{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignupPage;
