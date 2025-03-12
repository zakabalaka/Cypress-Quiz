import { useState, FormEvent, ChangeEvent } from "react";
import Auth from '../utils/auth';

export const loginUser = async (username: string, password: string): Promise<{ token: string }> => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok || !data.token) {
      throw new Error(data.message || "Invalid credentials");
    }

    localStorage.setItem("token", data.token); // Store the token securely

    return { token: data.token }; // Ensure it returns an object with a token property
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || "Login failed");
    } else {
      throw new Error("Login failed");
    }
  }
};

  const Login = () => {
    const [loginData, setLoginData] = useState({ username: "", password: "" });
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setLoginData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const { token } = await loginUser(loginData.username, loginData.password);
        Auth.login(token);
      } catch (error) {
        console.error("Login failed", error);
      }
    };
  
  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Username</label>
        <input 
          type='text'
          name='username'
          value={loginData.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input 
          type='password'
          name='password'
          value={loginData.password}
          onChange={handleChange}
        />
        <button type='submit'>Submit Form</button>
      </form>
    </div>
  );
};

export default Login;

