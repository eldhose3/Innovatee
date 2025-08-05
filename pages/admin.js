import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === 'eldhose@innovate.uk' && password === 'Eldhose@34') {
      router.push('/admin/dashboard'); // change to your dashboard page
    } else {
      setError('Invalid login credentials');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition duration-300"
        >
          Access Dashboard
        </button>
      </div>
    </div>
  );
}
