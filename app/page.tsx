'use client';

import React from "react"
import Link from 'next/link'

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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-lg font-semibold tracking-wide hover:text-accent transition-colors duration-200 cursor-pointer"
          >
            PCL
          </a>
          <div className="flex gap-12 items-center">
            <a
              href="/#about"
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="text-sm uppercase tracking-widest text-secondary hover:text-accent relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              About
            </a>
            <a
              href="/#work"
              onClick={(e) => handleSmoothScroll(e, 'work')}
              className="text-sm uppercase tracking-widest text-secondary hover:text-accent relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              Work
            </a>
            <a
              href="/#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="text-sm uppercase tracking-widest text-secondary hover:text-accent relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

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
                  <h1 className="text-7xl md:text-7xl font-bold leading-tight text-balance">
                    Paul Christian Labor
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
                className="w-full max-w-sm rounded-full"
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
                title: 'Personal Portfolio',
                description: 'Responsive personal portfolio built using HTML, CSS, and JavaScript, showcasing core web fundamentals, clean UI design, structured layout, and interactive elements to present my skills and projects professionally.',
                tags: ['HTML', 'CSS', 'JavaScript'],
                url: '#',
              },
              {
                title: 'Coffee Shop Website',
                description: 'FulModern coffee shop website developed with HTML, CSS, and JavaScript, featuring organized sections, menu displays, responsive design, and interactive components tailored for a small business setup.',
                tags: ['HTML', 'CSS', 'JavaScript'],
                url: '#',
              },
              {
                title: 'AI Personal Portfolio',
                description: 'Personal portfolio created using Vercel v0 AI with Next.js, React, Tailwind CSS, TypeScript, Radix UI, and shadcn, demonstrating component-based architecture and modern development practices.',
                tags: ['Next.js', 'React', 'Tailwind', 'TypeScript', 'Radix UI', 'Shadcn'],
                url: '#',
              },
              {
                title: 'Project Four',
                description: 'Still in Progress',
                tags: ['Still in Progress'],
                url: '#',
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
              href="#"
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
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-8">
        <div className="max-w-7xl mx-auto text-center text-secondary text-sm">
          <p>&copy; 2024 Paul Christian Labor. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
