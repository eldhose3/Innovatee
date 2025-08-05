import { useState } from 'react';

export default function SubmitIdea() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    idea: '',
    stage: '',
    sector: '',
    techOrNonTech: '',
    visaStatus: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setMessage('✅ Submitted successfully!');
      setFormData({
        fullName: '',
        email: '',
        idea: '',
        stage: '',
        sector: '',
        techOrNonTech: '',
        visaStatus: '',
      });
    } else {
      setMessage('❌ Submission failed.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Submit Your Idea</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { name: 'fullName', label: 'Full Name' },
          { name: 'email', label: 'Email', type: 'email' },
          { name: 'idea', label: 'Idea' },
          { name: 'stage', label: 'Stage of Development' },
          { name: 'sector', label: 'Sector' },
          { name: 'techOrNonTech', label: 'Tech or Non-Tech' },
          { name: 'visaStatus', label: 'Visa Status' },
        ].map(({ name, label, type = 'text' }) => (
          <div key={name}>
            <label className="block mb-1 font-medium">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
        ))}
        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
          Submit
        </button>
        {message && <p className="mt-2 text-green-700">{message}</p>}
      </form>
    </div>
  );
}
