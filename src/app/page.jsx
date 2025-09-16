'use client';

import React from 'react';
import ClientOnly from '@/components/ClientOnly';
import { Heading, Caption } from '@/components/Text';
import IconButton from '@/components/IconButton';
import ClickableText from '@/components/ClickableText';
import TechMarquee from '@/components/TechMarquee';
import { Linkedin, Github, Instagram } from 'lucide-react';
import './WebsitePage.css'; // ⬅️ Import your styles here

export default function WebsitePage() {
  return (
    <ClientOnly>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#1E1E2F',
          color: 'white',
        }}
      >
        <main
          style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1rem',
            textAlign: 'center',
          }}
        >
          {/* Header */}
          <Heading>
            Gilberto Tumangday
          </Heading>

          <Caption>
            University of Toronto Electrical & Computer Engineering Student
          </Caption>

          {/* Enlarged Social Icons */}
          <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
            <IconButton
              icon={<Github size={48} />}
              ariaLabel="Github"
              onClick={() => window.open('https://github.com/gilbertotumangday1', '_blank')}
            />
            <IconButton
              icon={<Linkedin size={48} />}
              ariaLabel="LinkedIn"
              onClick={() => window.open('https://www.linkedin.com/in/gilbertotumangday/', '_blank')}
            />
            <IconButton
              icon={<Instagram size={48} />}
              ariaLabel="Instagram"
              onClick={() => window.open('https://www.instagram.com/gilberto.tumangday/', '_blank')}
            />
          </div>

          {/* Clickable Links */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              alignItems: 'center',
              fontSize: '1.25rem',
              fontWeight: '500',
              marginTop: '2rem',
            }}
          >
            <ClickableText href="/website/about">About</ClickableText>
            <ClickableText href="/website/experience">Experience</ClickableText>
            <ClickableText href="/website/projects">Projects</ClickableText>
            <ClickableText href="/website/gallery">Gallery</ClickableText>
            <ClickableText href="/website/blog">Blog</ClickableText>
            <ClickableText href="/resume.pdf" target="_blank">Resume</ClickableText>
          </div>

          {/* Tech Marquee with fade effect and responsive width */}
          <div className="tech-marquee-wrapper">
            <TechMarquee />
          </div>
        </main>

        {/* Footer */}
        <footer
          style={{
            textAlign: 'center',
            padding: '0.75rem',
            backgroundColor: '#1E1E2F',
            fontSize: '0.75rem',
          }}
        >
          <Caption>© 2025 · Gilberto Tumangday</Caption>
        </footer>
      </div>
    </ClientOnly>
  );
}
