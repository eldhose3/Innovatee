export default function ServicesPage() {
  const services = [
    {
      title: "Idea to MVP",
      description: "We help you turn your raw idea into a working Minimum Viable Product.",
      icon: "💡",
    },
    {
      title: "Readiness Assessment",
      description: "We evaluate your startup’s readiness to launch, pitch, or scale.",
      icon: "✅",
    },
    {
      title: "Tech Cofounding / CTO",
      description: "Need a tech lead? We match you with technical cofounders or CTOs.",
      icon: "🤝",
    },
    {
      title: "Pitch Deck / Business Plan",
      description: "Investor-ready pitch decks and strategic business plans.",
      icon: "📊",
    },
    {
      title: "Mentorship & Matching",
      description: "One-on-one guidance and strategic partner introductions.",
      icon: "🧠",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-orange-100 px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">Our Services</h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
