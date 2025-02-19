import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function Register() {
  const { addUser } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [grade, setGrade] = useState('');
  const [role, setRole] = useState('student'); // Default role is student
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State for displaying messages

  // ====> To Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser(username, email, password, grade, role);
      setMessage('Student registered successfully!');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <form className="bg-[#15BAE7] p-8 rounded-lg shadow-lg max-w-md w-full" onSubmit={handleSubmit}>
        <p className="text-white text-3xl font-semibold mb-4 text-center">Sign Up</p>
        <p className="text-white text-sm mb-6 text-center">Hi! Welcome to TechElevate.Your home of Tech excellence.</p>
        {message && <p className="text-white text-center mb-4">{message}</p>}

        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2" htmlFor="password">Password</label>
          <input
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2" htmlFor="role">Role</label>
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 rounded-lg bg-blue-700 text-white text-lg font-semibold hover:bg-[#15BAE7] focus:outline-none"
        >
          Sign Up
        </button>

        <p className="text-white text-sm text-center mt-4">
          Already have an account? <Link to="/login" className="text-blue-200 hover:text-blue-100">Log In</Link>
        </p>
      </form>
    </div>
  );
}