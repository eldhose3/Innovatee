export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="bg-gradient-to-br from-blue-600 via-blue-500 to-orange-400 min-h-screen text-white flex flex-col justify-center items-center text-center px-4 py-16">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-md">Welcome to Inovate</h1>
        <p className="text-xl mb-6 max-w-2xl">Empowering innovators to bring ideas to life through expert guidance and technical support.</p>
        <a
          href="/submit"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Submit Your Idea
        </a>
      </main>

      {/* How it works */}
      <section className="bg-white text-gray-800 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            ["Submit", "Share your idea and current progress."],
            ["Match", "We connect you with cofounders or mentors."],
            ["Launch", "Turn your idea into a real-world MVP."],
          ].map(([title, desc], i) => (
            <div key={i} className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Got an Idea?</h2>
        <p className="mb-6 text-lg">We're here to help you shape and launch it.</p>
        <a
          href="/submit"
          className="bg-white text-orange-600 font-bold px-6 py-3 rounded-lg shadow hover:bg-orange-100 transition"
        >
          Start Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 text-sm">
        <p>© 2025 Inovate. All rights reserved.</p>
      </footer>
    </>
  );
}
