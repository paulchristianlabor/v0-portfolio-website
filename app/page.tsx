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
      <section className="pt-40 pb-32 px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-12 items-start">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-widest font-semibold text-accent">Hello! My name is</p>
                <h1 className="text-7xl md:text-8xl font-bold leading-tight text-balance">
                  Paul Christian<br /><span className="text-accent">Labor</span>
                </h1>
              </div>
              <p className="text-xl text-secondary max-w-2xl leading-relaxed text-pretty">
                Crafting elegant, performant digital experiences. I design and build web applications that solve real problems with thoughtful interfaces and solid engineering.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="px-8 py-4 bg-accent text-accent-foreground rounded font-medium hover:opacity-85 transition-opacity duration-200 w-fit cursor-pointer"
              >
                Get in Touch
              </a>
            </div>

            {/* Scroll Indicator */}
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="mt-20 hover:text-accent transition-colors cursor-pointer group"
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
                title: 'Personal Website',
                description: 'A personal portfolio website designed to present my IT background, web projects, and ongoing growth in web development.',
                tags: ['HTML', 'CSS', 'JavaScript'],
                url: 'https://example.com/project-one',
              },
              {
                title: 'Coffee Shop Website',
                description: 'A mock coffee shop website built to practice responsive design, layout structuring, and front-end fundamentals.',
                tags: ['HTML', 'CSS', 'JavaScript'],
                url: 'https://example.com/project-two',
              },
              {
                title: 'Portfolio Website designed by v0',
                description: 'A personal portfolio website built and deployed using v0, focusing on performance, responsiveness, and clean structure.',
                tags: ['TypeScript', 'ReactJS', 'NextJS'],
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest text-secondary hover:text-accent hover:border-b-2 hover:border-accent pb-1 transition-all duration-200">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest text-secondary hover:text-accent hover:border-b-2 hover:border-accent pb-1 transition-all duration-200">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-8">
        <div className="max-w-7xl mx-auto text-center text-secondary text-sm">
          <p>Design with &#x2665; by Paul Christian Labor.</p>
        </div>
      </footer>
    </main>
  )
}
