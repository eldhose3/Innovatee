export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-orange-100 via-white to-blue-100 px-6 py-16 flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-4">
          Have questions, feedback, or want to collaborate? We’d love to hear from you.
        </p>

        <div className="text-left mt-8 space-y-4 text-gray-700">
          <p><strong>Email:</strong> <a href="mailto:hello@inovate.com" className="text-blue-600 hover:underline">hello@innovate.com</a></p>
          <p><strong>Twitter:</strong> <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">@innovate</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">linkedin.com/company/innovate</a></p>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          We aim to respond within 24 hours.
        </p>
      </div>
    </main>
  );
}
