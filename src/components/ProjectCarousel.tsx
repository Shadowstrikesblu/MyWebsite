'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
}

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, projects.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setAutoPlay(false);
  };

  if (projects.length === 0) return null;

  const currentProject = projects[currentIndex];

  return (
    <div className="relative w-full h-[500px] bg-gray-900 rounded-lg overflow-hidden group">
      {/* Slide */}
      <div className="relative w-full h-full">
        <Image
          src={currentProject.image}
          alt={currentProject.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <span className="inline-block w-fit bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-4">
          {currentProject.category}
        </span>
        <h3 className="text-3xl font-bold mb-2">{currentProject.title}</h3>
        <p className="text-gray-200 mb-4 max-w-2xl">{currentProject.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {currentProject.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="bg-blue-500/80 px-3 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={`/Dashboard/projects/${currentProject.slug}`}
          className="inline-block w-fit px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
        >
          Voir plus
        </Link>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-blue-600 w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
