// /pages/about.js
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import ScrollFadeIn from '@/components/ScrollFadeIn'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Innovate</title>
        <meta name="description" content="Learn more about Innovate" />
      </Head>

      <Navbar />

      <main className="pt-24">
        {/* Header Section */}
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
          <ScrollFadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>
            <p className="text-lg max-w-2xl">
              Innovate is a platform built for dreamers, thinkers, and changemakers. We empower people to turn ideas into action.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn>
              <img
                src="https://images.unsplash.com/photo-1602526216034-2152df7c7e7c"
                alt="Our mission"
                className="rounded-xl shadow"
              />
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  We believe innovation should be accessible to everyone. Our mission is to provide a space where individuals can collaborate, grow, and bring their ideas to life with proper guidance, tools, and a vibrant community.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn delay={0.1}>
              <div>
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  To become the leading innovation hub that supports creators and problem-solvers around the world. We envision a future where ideas flourish and drive real-world change.
                </p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.3}>
              <img
                src="https://images.unsplash.com/photo-1523958203904-cdcb402031fd"
                alt="Our vision"
                className="rounded-xl shadow"
              />
            </ScrollFadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-orange-500 text-white text-center">
          <ScrollFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to join the movement?</h2>
            <p className="text-lg mb-6">We’re always looking for passionate people to collaborate with.</p>
            <a
              href="/contact"
              className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-orange-100 transition"
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
