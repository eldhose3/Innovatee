export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-blue-50 px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">About Innovate</h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Innovate is a platform built to empower early-stage founders and aspiring innovators. Whether you're
          sketching your first idea or ready to pitch your MVP, we're here to support your journey with tools,
          mentorship, and connections.
        </p>

        {/* Grid of "Our Mission" & "What We Offer" */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white border border-orange-200 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-orange-600 mb-3">Our Mission</h2>
            <p className="text-gray-700">
              We aim to democratize innovation by giving everyone the opportunity to turn their ideas into reality,
              regardless of background, technical skills, or resources.
            </p>
          </div>
          <div className="bg-white border border-orange-200 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-orange-600 mb-3">What We Offer</h2>
            <p className="text-gray-700">
              From tech cofounder matching to pitch decks, mentorship, and MVP building – we provide the essential
              services startups need to get off the ground.
            </p>
          </div>
        </div>

        {/* Trusted by Logos */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-600 mb-6">Trusted by innovators worldwide</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img src="/logos/meta.png" alt="Meta" className="h-10 w-auto object-contain" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img src="/logos/google.png" alt="Google" className="h-10 w-auto object-contain" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img src="/logos/aws.png" alt="AWS" className="h-10 w-auto object-contain" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img src="/logos/microsoft.png" alt="Microsoft" className="h-10 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
