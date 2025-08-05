// /pages/thank-you.js
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import ScrollFadeIn from '@/components/ScrollFadeIn'
import Link from 'next/link'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You | Innovate</title>
        <meta name="description" content="Thank you for submitting your idea!" />
      </Head>

      <Navbar />

      <main className="pt-24">
        {/* Thank You Hero */}
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
          <ScrollFadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>
            <p className="text-lg max-w-2xl">
              Your idea has been received. Someone from the Innovate team will be in touch soon.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Inspirational Quote */}
        <section className="py-20 px-6 bg-white text-center">
          <ScrollFadeIn>
            <blockquote className="text-2xl italic text-gray-700 max-w-2xl mx-auto border-l-4 border-orange-500 pl-4">
              “You miss 100% of the shots you don’t take.” — Wayne Gretzky
            </blockquote>
          </ScrollFadeIn>
        </section>

        {/* CTA to go back */}
        <section className="py-20 bg-gray-50 text-center">
          <ScrollFadeIn>
            <p className="text-lg mb-6 text-gray-800">
              Ready to explore more? Head back to the homepage or check out our community.
            </p>
            <Link href="/">
              <span className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition">
                Back to Home
              </span>
            </Link>
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
