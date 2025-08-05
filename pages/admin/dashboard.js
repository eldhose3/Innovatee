// /pages/admin/dashboard.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [ideas, setIdeas] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('adminLoggedIn');
    if (isAuthenticated === 'true') {
      setLoggedIn(true);
      fetchIdeas();
    }
  }, []);

  const fetchIdeas = async () => {
    const res = await fetch('/api/ideas');
    const data = await res.json();
    setIdeas(data.reverse());
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      password === 'Eldhose@34' &&
      document.getElementById('email').value === 'eldhose@innovate.uk'
    ) {
      sessionStorage.setItem('adminLoggedIn', 'true');
      setLoggedIn(true);
      fetchIdeas();
    } else {
      alert('Incorrect login');
    }
  };

  const handleDelete = async (index) => {
    const confirmed = confirm('Are you sure you want to delete this idea?');
    if (!confirmed) return;

    const res = await fetch('/api/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ index }),
    });

    if (res.ok) {
      fetchIdeas();
    } else {
      alert('Failed to delete idea');
    }
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
          <input
            id="email"
            type="email"
            placeholder="Email"
            required
            className="w-full p-2 border border-gray-300 rounded mb-3"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-3"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📋 Submitted Ideas</h1>
      <div className="grid gap-4 max-w-4xl mx-auto">
        {ideas.map((idea, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <p><strong>Full Name:</strong> {idea.fullName}</p>
            <p><strong>Email:</strong> {idea.email}</p>
            <p><strong>Idea:</strong> {idea.idea}</p>
            <p><strong>Stage:</strong> {idea.stage}</p>
            <p><strong>Sector:</strong> {idea.sector}</p>
            <p><strong>Tech/Non-Tech:</strong> {idea.techType}</p>
            <p><strong>Visa Status:</strong> {idea.visaStatus}</p>
            <button
              onClick={() => handleDelete(index)}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
            >
              Delete
            </button>
          </div>
        ))}
        {ideas.length === 0 && (
          <p className="text-center text-gray-600">No ideas submitted yet.</p>
        )}
      </div>
    </div>
  );
}
