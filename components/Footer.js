// /components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold mb-2">Innovate</h3>
        <p className="mb-4">Empowering innovation through support and collaboration.</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/services" className="hover:underline">Services</a>
        </div>
        <p className="text-sm text-white/70">© {new Date().getFullYear()} Innovate. All rights reserved.</p>
      </div>
    </footer>
  )
}
