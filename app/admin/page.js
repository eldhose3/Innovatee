'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [submissions, setSubmissions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [auth, setAuth] = useState(false);
  const router = useRouter();

  // Check login
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('admin-auth') === 'true';
    if (!isAuthenticated) {
      router.push('/admin-login');
    } else {
      setAuth(true);
    }
  }, []);

  // Fetch submissions
  useEffect(() => {
    if (auth) {
      fetch('/api/get-submissions')
        .then(res => res.json())
        .then(data => setSubmissions(data))
        .catch(err => console.error('Error loading data:', err));
    }
  }, [auth]);

  // Handle delete
  const handleDelete = async (indexToDelete) => {
    const confirmDelete = confirm("Are you sure you want to delete this submission?");
    if (!confirmDelete) return;

    const res = await fetch('/api/delete-submission', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ index: indexToDelete }),
    });

    if (res.ok) {
      const updatedList = submissions.filter((_, i) => i !== indexToDelete);
      setSubmissions(updatedList);
    } else {
      alert("Failed to delete submission");
    }
  };

  if (!auth) return null;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => {
            localStorage.removeItem('admin-auth');
            router.push('/admin-login');
          }}
          className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <input
        type="text"
        placeholder="Search name, email, or idea..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 text-black w-full"
      />

      <div className="overflow-auto">
        <table className="w-full border border-gray-700 text-left">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Idea</th>
              <th className="p-3 border">Stage</th>
              <th className="p-3 border">Sector</th>
              <th className="p-3 border">Tech Type</th>
              <th className="p-3 border">Visa Status</th>
              <th className="p-3 border">Submitted At</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {submissions
              .filter((item) =>
                item.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.idea?.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((item, index) => (
                <tr key={index} className="border-t border-gray-700">
                  <td className="p-3 border">{item.fullName}</td>
                  <td className="p-3 border">{item.email}</td>
                  <td className="p-3 border">{item.idea}</td>
                  <td className="p-3 border">{item.stage}</td>
                  <td className="p-3 border">{item.sector}</td>
                  <td className="p-3 border">{item.techType}</td>
                  <td className="p-3 border">{item.visaStatus}</td>
                  <td className="p-3 border">
                    {new Date(item.submittedAt).toLocaleString()}
                  </td>
                  <td className="p-3 border text-center">
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
