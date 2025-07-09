import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import "./admin"

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const location = useLocation();
  const routeError = location.state?.error || '';
  const [error, setError] = useState(''); // gets "Access denied" if redirected

  const navigate = useNavigate();
 
   useEffect(() => {
    // Show the route error only once
    if (location.state?.error) {
      setError(location.state.error);
      // Clear the error in browser history to avoid showing it again on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);


  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

 const handleSubmit = (e) => {
  e.preventDefault();

  if (email === "" || password === "") {
    setError("Please fill all fields");
    return;
  }

  else if (email === 'kainat@gmail.com' && password === 'kainaat') {
  setIsLoggedIn(true);
  localStorage.setItem('loggedIn', 'true');
  localStorage.setItem('user', JSON.stringify({
    email: 'kainat@gmail.com',
    role: 'admin'
  }));
  navigate('/vendor'); 
  return;
}

  else if (email === 'user@gmail.com' && password === 'user123') {
    setIsLoggedIn(true);
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('user', JSON.stringify({
      email: 'user@gmail.com',
      role: 'user'
    }));
    navigate('/home');
    return;
  }

  setError("Invalid email or password");
};



  return (
    
    <div className="login-container">
      <h2>Login Page</h2>
      

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
