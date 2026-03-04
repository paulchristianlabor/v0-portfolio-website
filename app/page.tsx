'use client';

import React from "react"
import Navigation from '@/components/Navigation'

export default function Home() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-8 border-b border-border relative overflow-hidden">
        {/* Blended background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background to-blue-500/20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="flex flex-col gap-12">
              <div className="space-y-6 max-w-2xl">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-widest font-semibold text-accent">Welcome to my portfolio</p>
                  <h1 className="text-7xl md:text-8xl font-bold leading-tight text-balance">
                    Paul Christian<br /><span className="text-accent">Labor</span>
                  </h1>
                </div>
                <p className="text-xl text-secondary leading-relaxed text-pretty">
                  Crafting elegant, performant digital experiences. I design and build web applications that solve real problems with thoughtful interfaces and solid engineering.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                  className="px-8 py-4 bg-accent text-accent-foreground rounded font-medium hover:opacity-85 transition-opacity duration-200 cursor-pointer w-fit"
                >
                  Get in Touch
                </a>
              </div>

              {/* Scroll Indicator */}
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className="hover:text-accent transition-colors cursor-pointer group"
              >
                <svg
                  className="w-5 h-5 text-secondary group-hover:text-accent transition-all duration-300 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{
                    animation: 'slideDown 2s ease-in-out infinite'
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>

            {/* Character Image */}
            <div className="flex justify-center items-center">
              <img
                src="/character-hero.jpg"
                alt="Paul Christian Labor"
                className="w-full max-w-sm rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 border-t border-border bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-1 h-12 bg-accent rounded-full"></div>
            <h2 className="text-5xl md:text-6xl font-bold text-balance">About</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-6">
              <p className="text-lg text-secondary leading-relaxed">
                I'm a web developer with a passion for creating beautiful, functional interfaces. With several years of experience in full-stack development, I specialize in building modern web applications using React, TypeScript, and Next.js.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                My approach combines clean code, attention to detail, and user-centered design principles to create digital experiences that are both delightful and performant.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="p-6 bg-card/50 rounded border border-border/50 backdrop-blur-sm">
                <h3 className="text-sm uppercase tracking-widest font-semibold mb-6 text-accent">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'UI Design', 'Web Performance'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-primary/10 text-foreground rounded border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-200 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-8 border-t border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-1 h-12 bg-accent rounded-full"></div>
            <h2 className="text-5xl md:text-6xl font-bold text-balance">Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {[
              {
                title: 'Project One',
                description: 'A modern web application built with React and Node.js, featuring real-time data synchronization and intuitive user interface.',
                tags: ['React', 'Node.js', 'PostgreSQL'],
                url: 'https://example.com/project-one',
              },
              {
                title: 'Project Two',
                description: 'Full-stack e-commerce platform with payment integration, inventory management, and comprehensive admin dashboard.',
                tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
                url: 'https://example.com/project-two',
              },
              {
                title: 'Project Three',
                description: 'Mobile-first design system and component library for a growing startup, ensuring consistency across products.',
                tags: ['TypeScript', 'Storybook', 'Design System'],
                url: 'https://example.com/project-three',
              },
              {
                title: 'Project Four',
                description: 'Data visualization dashboard helping teams analyze complex metrics with interactive charts and real-time updates.',
                tags: ['React', 'D3.js', 'WebSockets'],
                url: 'https://example.com/project-four',
              },
            ].map((project, i) => (
              <a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 bg-card rounded border-2 border-border hover:border-accent transition-all duration-200 group overflow-hidden relative block"
              >
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-accent transition-all duration-300"></div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors duration-200 relative z-10">{project.title}</h3>
                <p className="text-secondary mb-6 leading-relaxed text-sm relative z-10">{project.description}</p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-accent/10 text-secondary rounded text-xs uppercase tracking-wide border border-accent/30 group-hover:border-accent group-hover:text-accent transition-all duration-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 border-t border-b border-border bg-gradient-to-b from-background via-card/20 to-background">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-1 h-8 bg-accent rounded-full"></div>
            <p className="text-sm uppercase tracking-widest font-semibold text-accent">Let's connect</p>
            <div className="w-1 h-8 bg-accent rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-balance">Get In Touch</h2>
          <div className="flex flex-col gap-10 max-w-2xl items-center">
            <p className="text-lg text-secondary leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or just chat about web development.
            </p>
            <a
              href="mailto:paul@example.com"
              className="px-10 py-4 bg-accent text-accent-foreground rounded font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-200 transform hover:scale-105"
            >
              Send me an Email
            </a>
            <div className="flex gap-10 pt-6 flex-wrap justify-center">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-all duration-200 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-all duration-200 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-all duration-200 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.17-6.75-5.91 6.75h-3.308l7.732-8.835L.424 2.25h6.7l4.68 6.182 5.64-6.182zM17.002 18.807h1.646L6.154 3.75H4.425l12.577 15.057z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-all duration-200 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-all duration-200 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
              <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-all duration-200 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-all duration-200 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.68v12.7a2.85 2.85 0 11-5.92-2.81 2.86 2.86 0 011.41 2.41V9.4a6.11 6.11 0 00-6.11 6.11v.24A6.12 6.12 0 009.88 22c.53 0 1.05-.04 1.56-.12.84.07 1.6.08 2.4 0 5.82-.34 10.16-5.2 10.16-11.05 0-.45-.03-.9-.09-1.34.51.08 1.01.12 1.52.12 5.83 0 10.55-4.72 10.55-10.55 0-4.58-3.63-8.35-8.2-8.58z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-8">
        <div className="max-w-7xl mx-auto text-center text-secondary text-sm">
          <p>&copy; 2026 Paul Christian Labor. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}