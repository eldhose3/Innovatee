// /pages/services.js
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import ScrollFadeIn from '@/components/ScrollFadeIn'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Innovate</title>
        <meta name="description" content="Explore the services Innovate offers" />
      </Head>

      <Navbar />

      <main className="pt-24">
        {/* Header Section */}
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
          <ScrollFadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg max-w-2xl">
              Explore how Innovate helps bring your ideas to life with mentorship, tools, and community.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6 bg-white text-center">
          <ScrollFadeIn>
            <h2 className="text-3xl font-bold text-blue-800 mb-12">What We Provide</h2>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <ScrollFadeIn delay={0.1}>
              <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">1:1 Mentorship</h3>
                <p className="text-gray-600">Get personal guidance from experienced industry mentors.</p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.2}>
              <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Startup Resources</h3>
                <p className="text-gray-600">We offer access to frameworks, templates, and technical toolkits.</p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.3}>
              <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Pitch Training</h3>
                <p className="text-gray-600">Learn how to pitch your ideas clearly and confidently to investors.</p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.4}>
              <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Community Access</h3>
                <p className="text-gray-600">Connect with other founders, thinkers, and early-stage builders.</p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.5}>
              <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Events & Workshops</h3>
                <p className="text-gray-600">Attend live events to improve your skillset and network with peers.</p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.6}>
              <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Early-Stage Funding</h3>
                <p className="text-gray-600">Get help finding funding opportunities to kickstart your project.</p>
              </div>
            </ScrollFadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-700 text-white text-center">
          <ScrollFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a custom support plan?</h2>
            <p className="text-lg mb-6">We tailor our services to match your stage and idea. Just reach out!</p>
            <a
              href="/contact"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition"
            >
              Contact Us
            </a>
          </ScrollFadeIn>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-10 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Innovate. All rights reserved.</p>
            <div className="space-x-4">
              <a href="mailto:info@innovate.com" className="hover:underline">info@innovate.com</a>
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">LinkedIn</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
