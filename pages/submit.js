// pages/submit.js
import { useState } from 'react';

export default function Submit() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    idea: '',
    stage: '',
    sector: '',
    techType: '',
    visaStatus: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    if (res.ok) {
      setMessage('🎉 Submitted successfully!');
      setForm({
        name: '',
        email: '',
        idea: '',
        stage: '',
        sector: '',
        techType: '',
        visaStatus: ''
      });
    } else {
      setMessage('❌ Submission failed: ' + data.message);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Submit Your Idea</h1>
      <form onSubmit={handleSubmit}>
        {['name', 'email', 'idea', 'stage', 'sector', 'techType', 'visaStatus'].map((field) => (
          <div key={field}>
            <label>{field}</label><br />
            <input
              name={field}
              value={form[field]}
              onChange={handleChange}
              required
              style={{ marginBottom: '1rem', width: '100%' }}
            /><br />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  );
}
