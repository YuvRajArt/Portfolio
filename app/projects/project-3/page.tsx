"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Project3Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageSources = [
    "/Portronics.jpg",
    "/Portronics2.png",
    "/Portronics3.jpg",
  ];

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
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-space-grotesk">Portronics</h1>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 font-inter">
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Client</h3>
              <p className="text-gray-700">Creative Agency Ltd.</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Year</h3>
              <p className="text-gray-700">2024</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Services</h3>
              <p className="text-gray-700">Brand Identity, Motion Design</p>
            </div>
          </div>

          {/* Project Video */}
          <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden mb-12">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/1102750316?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Portronics Animation"
              ></iframe>
            </div>
          </div>

          {/* Project Description */}
          <div className="prose prose-lg max-w-none font-inter">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Project Three showcases our comprehensive approach to brand identity and motion design. Collaborating with
              Creative Agency Ltd., we developed a complete visual identity system that captures their creative spirit
              and professional expertise.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The challenge was to create a brand that would stand out in a competitive market while maintaining
              professionalism and credibility. Our solution balanced creativity with strategic thinking to deliver a
              memorable and effective brand identity.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The new brand identity has helped the client attract high-profile projects and establish themselves as a
              leading creative agency in their market.
            </p>
          </div>

          {/* Portronics Images Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {imageSources.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Portronics Image ${index}`}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </div>

          {/* Lightbox Overlay */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                alt="Enlarged"
                className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
              />
            </div>
          )}

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/projects/project-2"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors font-inter"
            >
              ← Previous: ZeroCO
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
