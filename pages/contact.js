// /pages/contact.js
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import ScrollFadeIn from '@/components/ScrollFadeIn'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Innovate</title>
        <meta name="description" content="Contact the Innovate team" />
      </Head>

      <Navbar />

      <main className="pt-24">
        {/* Header */}
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
          <ScrollFadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Let’s Talk</h1>
            <p className="text-lg max-w-2xl">
              Whether you have an idea, a question, or just want to say hi — we’d love to hear from you.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Quote Section */}
        <section className="py-20 px-6 bg-white text-center">
          <ScrollFadeIn>
            <blockquote className="text-2xl italic text-gray-700 max-w-2xl mx-auto border-l-4 border-orange-500 pl-4">
              "The best way to predict the future is to create it." — Peter Drucker
            </blockquote>
          </ScrollFadeIn>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-6 bg-gray-50">
          <ScrollFadeIn>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Tell us what's on your mind..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </ScrollFadeIn>
        </section>

        {/* CTA Section with Dialogue */}
        <section className="py-20 bg-blue-700 text-white text-center">
          <ScrollFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">You’re one idea away from changing everything.</h2>
            <p className="text-lg mb-6">Don't hold back. Let’s build something legendary, together.</p>
            <a
              href="/idea-submission"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition"
            >
              Submit Your Idea
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
