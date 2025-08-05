// /pages/founder-support.js
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function FounderSupport() {
  return (
    <>
      <Head>
        <title>Founder Support | Innovate</title>
      </Head>

      <Navbar />

      <main className="min-h-screen bg-white text-gray-900 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Founder Support</h1>
          <p className="text-gray-600 mb-10">
            Helping founders turn their ideas into reality through tailored support, resources, and connections.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Block 1 */}
            <div className="border p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-orange-500 mb-2">One-on-One Strategy Sessions</h3>
              <p>Meet with experienced advisors who can help refine your idea, set milestones, and build a clear roadmap.</p>
            </div>

            {/* Block 2 */}
            <div className="border p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-orange-500 mb-2">Workshops & Bootcamps</h3>
              <p>Join hands-on sessions covering product development, validation, pitching, and more.</p>
            </div>

            {/* Block 3 */}
            <div className="border p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-orange-500 mb-2">Pitch Practice & Demo Days</h3>
              <p>Gain confidence and feedback through mock pitches and public showcase events.</p>
            </div>

            {/* Block 4 */}
            <div className="border p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-orange-500 mb-2">Startup Toolkit</h3>
              <p>Access templates, checklists, and curated resources to simplify early-stage startup building.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
