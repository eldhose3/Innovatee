export default function FounderAboutPage() {
  const partners = ["Google", "Microsoft", "AWS", "OpenAI"];

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 px-6 py-20 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About Innovate</h1>
        <p className="text-lg mb-10">
          Innovate empowers early-stage founders with the tools, mentorship, and
          technical support they need to go from idea to MVP.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center mb-12">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded shadow px-4 py-2"
            >
              {partner}
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          <div className="bg-white border border-orange-200 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">💡 Our Mission</h3>
            <p>
              We help innovators launch with confidence by removing the friction
              from early-stage product building.
            </p>
          </div>
          <div className="bg-white border border-blue-200 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">🚀 What We Offer</h3>
            <p>
              Access to product experts, MVP teams, pitch support, cofounder
              matching, and more — all in one place.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/submit"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Your Idea
          </a>
        </div>
      </div>
    </main>
  );
}
