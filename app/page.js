export default function Home() {
  return (
    <>
      {/* Hero */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-blue-600 text-white text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Innovate</h2>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Supporting innovators like you to launch ideas into reality.
        </p>
        <a
          href="/submit"
          className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Submit Your Idea
        </a>
      </main>

      {/* CTA */}
      <section className="bg-orange-500 text-white text-center py-10 px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">Got an Idea?</h3>
        <p className="mb-4 text-lg">
          We’ll help you shape it into a real-world MVP.
        </p>
        <a
          href="/submit"
          className="bg-white text-orange-600 px-6 py-3 rounded-md font-semibold hover:bg-orange-100 transition"
        >
          Get Started
        </a>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-gray-100 text-gray-800 py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-semibold mb-2">1. Submit</h4>
            <p>Tell us about your idea and current stage.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-semibold mb-2">2. Match</h4>
            <p>We match you with cofounders, mentors, or resources.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-semibold mb-2">3. Launch</h4>
            <p>Turn your vision into a working MVP with support.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white text-gray-800 py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-10">What Founders Say</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="italic mb-4">
              "Innovate helped me find a CTO and get my MVP launched in 8 weeks!"
            </p>
            <h4 className="font-semibold">– Aisha, HealthTech Founder</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="italic mb-4">
              "Their mentorship program saved me months of wasted effort."
            </p>
            <h4 className="font-semibold">– Leo, EdTech Innovator</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="italic mb-4">
              "From pitch deck to product, Innovate guided me every step."
            </p>
            <h4 className="font-semibold">– Kavya, Fintech Founder</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 text-center">
        <h4 className="text-lg font-semibold mb-2">Innovate</h4>
        <p className="mb-2">Empowering innovators everywhere.</p>
        <div className="space-x-4 text-sm text-gray-400">
          <a href="mailto:hello@innovate.com">hello@innovate.com</a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <p className="text-xs mt-4 text-gray-500">
          © 2025 Innovate. All rights reserved.
        </p>
      </footer>
    </>
  );
}
