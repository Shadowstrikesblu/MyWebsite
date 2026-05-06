'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
  topics: string[];
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Shadowstrikesblu/repos?sort=stars&per_page=6');
        if (!response.ok) throw new Error('Failed to fetch repos');
        
        const data = await response.json();
        const formattedRepos: GitHubRepo[] = data
          .filter((repo: any) => !repo.fork)
          .map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || 'No description',
            url: repo.html_url,
            stars: repo.stargazers_count,
            language: repo.language || 'Unknown',
            topics: repo.topics || []
          }));
        
        setRepos(formattedRepos);
      } catch (err) {
        setError('Impossible de charger les projets GitHub');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section className="py-12 px-4 sm:px-6 lg:px-8 section-band">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block animate-spin">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 px-4 sm:px-6 lg:px-8 section-band">
        <div className="max-w-6xl mx-auto text-center text-red-600">
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 section-band">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">
            Mes Projets GitHub
          </h2>
          <p className="text-gray-300">Découvrez mes derniers projets publics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <a
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full p-6 glass-card rounded-[1.5rem] hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-start justify-between mb-3">
                  <svg className="w-8 h-8 text-gray-400 group-hover:text-blue-200 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {repo.stars > 0 && (
                    <span className="flex items-center gap-1 text-sm text-yellow-500">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {repo.stars}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors">
                  {repo.name}
                </h3>

                <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.language && (
                    <span className="inline-block px-2 py-1 text-xs rounded bg-white/10 text-blue-100 border border-white/10">
                      {repo.language}
                    </span>
                  )}
                  {repo.topics.slice(0, 2).map((topic) => (
                    <span key={topic} className="inline-block px-2 py-1 text-xs rounded bg-white/10 text-gray-200 border border-white/10">
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-blue-200 group-hover:text-white font-medium text-sm">
                  Voir sur GitHub
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://github.com/Shadowstrikesblu"
            target="_blank"
            className="inline-block px-8 py-3 bg-white/10 hover:bg-white/15 text-white font-medium rounded-lg transition-colors border border-white/10"
          >
            Voir tous mes projets sur GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
