import React from 'react';
import { Metadata } from 'next';
import { PERSONAL_INFO, PROFESSIONAL_SUMMARY, SKILLS, WORK_EXPERIENCE, Education, PROJECTS } from '../../data/resume'

export const metadata: Metadata = {
  title: `Resume - ${PERSONAL_INFO.name}`,
  description: 'Professional resume of a Full Stack Developer with expertise in React, Node.js, and modern web technologies.',
  keywords: 'resume, full stack developer, react, nodejs, typescript, web development',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto glass-panel rounded-[2rem] overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 px-8 py-12 text-white border-b border-white/10">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">{PERSONAL_INFO.name}</h1>
            <p className="text-xl opacity-90 mb-4">{PERSONAL_INFO.title}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {PERSONAL_INFO.phone}
              </span>
            </div>
          </div>
        </div>

        <div className="px-8 py-8">
          {/* Summary Section */}
          <section className="mb-8 section-divider">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/15 pb-2">
              Objectif
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {PROFESSIONAL_SUMMARY}
            </p>
          </section>

          {/* Skills Section */}
          <section className="mb-8 section-divider">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/15 pb-2">
              Compétences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-200 mb-2">Hard Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.frontend.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white/10 text-blue-100 rounded-full text-sm border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-2">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.backend.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white/10 text-emerald-100 rounded-full text-sm border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-8 section-divider">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/15 pb-2">
              Expériences professionnelles
            </h2>
            
            <div className="space-y-6">
              {WORK_EXPERIENCE.map((job, index) => (
                <div key={index} className="border-l-4 border-blue-400 pl-6">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                    <span className="text-gray-300 font-medium">{job.period}</span>
                  </div>
                  <p className="text-blue-200 font-medium mb-3">{job.company}</p>
                  <ul className="text-gray-300 space-y-1 list-disc list-inside">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-8 section-divider">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/15 pb-2">
              Education
            </h2>
            
            <div className="space-y-6">
              {Education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-400 pl-6">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <span className="text-gray-300 font-medium">{edu.period}</span>
                  </div>
                  <p className="text-blue-200 font-medium mb-3">{edu.institution}</p>
                  <ul className="text-gray-300 space-y-1 list-disc list-inside">
                    {edu.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-8 section-divider section-band">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/15 pb-2">
              Projets Personnels
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((project, index) => (
                <div key={index} className="glass-surface rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-300 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white/10 text-gray-200 rounded text-xs border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="text-blue-300 hover:text-blue-200 text-sm font-medium">
                    View Project →
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="bg-black/20 px-8 py-6 text-center border-t border-white/10">
          <p className="text-gray-300">
            <a 
              href="/HARVEY KERETH MOULOUNDOU.pdf" 
              download="HARVEY KERETH MOULOUNDOU.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/15 transition-colors font-medium border border-white/10"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger le CV (PDF)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
