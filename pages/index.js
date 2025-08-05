import Head from 'next/head';
import Navbar from '@/components/Navbar';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (router.query.submitted === 'true') {
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
        router.replace('/', undefined, { shallow: true });
      }, 5000);
    }
  }, [router.query]);

  return (
    <>
      <Head>
        <title>Innovate | Home</title>
        <meta name="description" content="Innovate platform for idea submission and support" />
      </Head>

      <Navbar />

      <main className="pt-24">
        {/* ✅ Success Message */}
        {showThankYou && (
          <div className="bg-green-100 text-green-800 text-center py-4 px-6 rounded mb-6 mx-auto max-w-3xl shadow-md">
            🎉 Thank you for submitting your idea! We'll be in touch soon.
          </div>
        )}

        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
          <ScrollFadeIn>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Innovate</h1>
            <p className="text-lg max-w-2xl">
              Empowering visionary minds. Share your startup idea and get support from our team.
            </p>
          </ScrollFadeIn>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 bg-white text-center">
          <ScrollFadeIn>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">What We Do</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Innovate is a platform where tech and non-tech founders can submit their startup ideas and receive expert guidance, mentorship, and access to funding opportunities.
            </p>
          </ScrollFadeIn>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50 text-center">
          <ScrollFadeIn>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">Got an Idea?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              We’re here to help you take it to the next level. Submit your idea and let’s build the future together.
            </p>
            <a
              href="/idea-submission"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition"
            >
              Submit Your Idea
            </a>
          </ScrollFadeIn>
        </section>

        <Footer />
      </main>
    </>
  );
}
