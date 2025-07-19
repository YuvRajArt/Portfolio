"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Project2Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const stillImages = [
    "/Zeroco.png",
    "/Zeroco (1).png",
    "/Zeroco (2).png",
    "/Zeroco (3).png",
    "/Zeroco (4).png",
    "/Zeroco (5).png",
    "/Zeroco (7).png",
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
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-space-grotesk">ZeroCO</h1>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 font-inter">
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Client</h3>
              <p className="text-gray-700">Tech Innovations Co.</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Year</h3>
              <p className="text-gray-700">2024</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2 font-space-grotesk">Services</h3>
              <p className="text-gray-700">UI/UX Design, Animation</p>
            </div>
          </div>

          {/* Video Sections */}
          <div className="space-y-12 mb-12">
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1102749162?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
                title="Zeroco_Scen1.mp4"
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1102749087?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
                title="Scene2 Zero"
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1102749120?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
                title="Scene3 Zero"
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1102749148?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
                title="Scene4 Zero"
              ></iframe>
            </div>
          </div>

          {/* Project Description */}
          <div className="prose prose-lg max-w-none font-inter mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Project Two represents our innovative approach to digital interface design and user experience. Working
              with Tech Innovations Co., we developed a comprehensive design system that enhances user engagement and
              simplifies complex interactions.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The project required deep understanding of user behavior and technical constraints. We conducted extensive
              research and testing to ensure the final design met both user needs and business requirements.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The implementation resulted in a 40% increase in user engagement and significantly improved the overall
              user experience across all platforms.
            </p>
          </div>

          {/* Still Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6 font-space-grotesk">Still</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {stillImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Zeroco Still ${index}`}
                  className="w-full rounded-lg object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => setSelectedImage(src)}
                />
              ))}
            </div>
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
          <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between">
            <Link
              href="/projects/project-1"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors font-inter"
            >
              ← Previous: TangentGC
            </Link>
            <Link
              href="/projects/project-3"
              className="inline-flex items-center text-black hover:text-gray-600 transition-colors font-inter"
            >
              Next Project: Portronics →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
