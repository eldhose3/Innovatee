'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Allowed admin credentials
    const validCredentials = [
      { email: 'admin@innovate.uk', password: 'innovate123' },
      { email: 'eldhose@innovate.uk', password: 'Eldhose@34' }
    ];

    const isValid = validCredentials.some(
      (cred) => cred.email === email && cred.password === password
    );

    if (isValid) {
      localStorage.setItem('admin-auth', 'true');
      router.push('/admin');
    } else {
      alert('Invalid login ID or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@innovate.uk"
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}
