"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SubmitPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    idea: "",
    stage: "",
    sector: "",
    techType: "",
    visaStatus: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/thank-you");
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Network error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-tr from-orange-100 via-white to-blue-100 flex items-center justify-center px-4 py-20">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Submit Your Idea</h1>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border border-blue-200 rounded-lg px-4 py-3"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border border-blue-200 rounded-lg px-4 py-3"
            required
          />
          <textarea
            name="idea"
            placeholder="Your Idea"
            onChange={handleChange}
            className="w-full border border-blue-200 rounded-lg px-4 py-3"
            required
          />
          <input
            type="text"
            name="stage"
            placeholder="Startup Stage (optional)"
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-3"
          />
          <input
            type="text"
            name="sector"
            placeholder="Sector (optional)"
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-3"
          />
          <input
            type="text"
            name="techType"
            placeholder="Tech Type (optional)"
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-3"
          />
          <input
            type="text"
            name="visaStatus"
            placeholder="Visa Status (optional)"
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-3"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold w-full py-3 rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </main>
  );
}
