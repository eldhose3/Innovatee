// /pages/idea-submission.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function IdeaSubmission() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    idea: '',
    stage: '',
    sector: '',
    techOrNonTech: '',
    visaStatus: '',
    pitchDeck: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    const response = await fetch('/api/submit', {
      method: 'POST',
      body: data
    });

    if (response.ok) {
      router.push('/?submitted=true');
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Submit Your Idea | Innovate</title>
      </Head>
      <Navbar />
      <main className="pt-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Submit Your Idea</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} className="p-3 border rounded" />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="p-3 border rounded" />
          <textarea name="idea" placeholder="Your Idea" required onChange={handleChange} className="p-3 border rounded h-32" />
          <input type="text" name="stage" placeholder="Stage of Development" required onChange={handleChange} className="p-3 border rounded" />
          <input type="text" name="sector" placeholder="Sector" required onChange={handleChange} className="p-3 border rounded" />
          <select name="techOrNonTech" required onChange={handleChange} className="p-3 border rounded">
            <option value="">Is it Tech or Non-Tech?</option>
            <option value="Tech">Tech</option>
            <option value="Non-Tech">Non-Tech</option>
          </select>
          <input type="text" name="visaStatus" placeholder="Visa Status" required onChange={handleChange} className="p-3 border rounded" />
          <div>
            <label className="block mb-2">Upload Pitch Deck (optional)</label>
            <input type="file" name="pitchDeck" onChange={handleChange} className="p-3 border rounded w-full" />
          </div>
          <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition">
            Submit Idea
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
