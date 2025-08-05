// ✅ File: /pages/submit.js (Frontend only)
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function Submit() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    idea: '',
    stage: '',
    sector: '',
    techType: '',
    visaStatus: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push('/thank-you');
    } else {
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Submit Your Idea | Innovate</title>
      </Head>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Submit Your Idea</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" required className="w-full p-3 border rounded" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required className="w-full p-3 border rounded" onChange={handleChange} />
          <textarea name="idea" placeholder="Your Idea" required className="w-full p-3 border rounded" onChange={handleChange}></textarea>
          <input type="text" name="stage" placeholder="Stage of Development" required className="w-full p-3 border rounded" onChange={handleChange} />
          <input type="text" name="sector" placeholder="Sector" required className="w-full p-3 border rounded" onChange={handleChange} />
          <select name="techType" required className="w-full p-3 border rounded" onChange={handleChange}>
            <option value="">Tech or Non-Tech?</option>
            <option value="Tech">Tech</option>
            <option value="Non-Tech">Non-Tech</option>
          </select>
          <input type="text" name="visaStatus" placeholder="Visa Status" required className="w-full p-3 border rounded" onChange={handleChange} />
          <button type="submit" className="w-full p-3 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition">Submit Idea</button>
        </form>
      </main>
    </>
  );
}
