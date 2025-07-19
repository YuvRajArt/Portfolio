import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

export default function Project1Page() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header */}
      <header className="bg-transparent px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-2xl font-bold text-black hover:text-gray-600 transition-colors font-space-grotesk"
          >
            Yuv
          </Link>
          <div className="flex items-center space-x-8 font-inter">
            <Link href="/work" className="text-black hover:text-gray-600 transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-black hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Project Content */}
      <main className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Back to Work */}
          <Link
            href="/work"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8 font-inter"
          >
            ← Back to Work
          </Link>

          {/* Project Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-space-grotesk">TangentGC</h1>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 font-inter">
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Client</h3>
              <p className="text-gray-700">Brand Studio Inc.</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Year</h3>
              <p className="text-gray-700">2024</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Services</h3>
              <p className="text-gray-700">Motion Graphics, Animation</p>
            </div>
          </div>

          {/* Project Image (replace with embedded video) */}
          <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden mb-12">
            <iframe
              src="https://player.vimeo.com/video/1102747582?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
              title="TangentGC Main animation"
            ></iframe>
          </div>

          {/* Project Description */}
          <div className="prose prose-lg max-w-none font-inter">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This project showcases our expertise in motion graphics and brand storytelling. We worked closely with
              Brand Studio Inc. to create a compelling visual narrative that captures their brand essence and
              communicates their message effectively.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The challenge was to create a cohesive visual system that could work across multiple platforms while
              maintaining the brand's core identity. Our solution involved developing a flexible animation framework
              that could adapt to different contexts and requirements.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The final result exceeded expectations, delivering a powerful visual experience that resonated with the
              target audience and achieved the client's business objectives.
            </p>
          </div>

          {/* Second embedded video below text */}
          <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden mb-12 mt-8">
            <iframe
              src="https://player.vimeo.com/video/1102748531?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
              title="TangentGC 2"
            ></iframe>
          </div>

          {/* Next Project */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/projects/project-2"
              className="inline-flex items-center text-black hover:text-gray-600 transition-colors font-inter"
            >
              Next Project: ZeroCO 
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
