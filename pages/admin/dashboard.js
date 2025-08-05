// pages/admin/dashboard.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      login.email === 'eldhose@innovate.uk' &&
      login.password === 'Eldhose@34'
    ) {
      setAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const fetchSubmissions = async () => {
    const res = await fetch('/api/get-submissions');
    const data = await res.json();
    setSubmissions(data);
  };

  const handleDelete = async (index) => {
    const res = await fetch('/api/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ index }),
    });

    const result = await res.json();
    if (res.ok) {
      alert('Deleted successfully!');
      fetchSubmissions();
    } else {
      alert(result.message || 'Delete failed');
    }
  };

  useEffect(() => {
    if (authenticated) {
      fetchSubmissions();
    }
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
            Admin Login
          </h2>
          <input
            type="email"
            placeholder="Email"
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
            className="mb-4 w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            className="mb-4 w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Submitted Ideas
      </h2>

      {submissions.length === 0 ? (
        <p className="text-center text-gray-600">No submissions yet.</p>
      ) : (
        <div className="grid gap-4">
          {submissions.map((submission, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded shadow flex justify-between items-start"
            >
              <div>
                <p><strong>Name:</strong> {submission.name}</p>
                <p><strong>Email:</strong> {submission.email}</p>
                <p><strong>Idea:</strong> {submission.idea}</p>
                <p><strong>Stage:</strong> {submission.stage}</p>
                <p><strong>Sector:</strong> {submission.sector}</p>
                <p><strong>Type:</strong> {submission.techNonTech}</p>
                <p><strong>Visa:</strong> {submission.visaStatus}</p>
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
