'use client';

import React from 'react';
import { Caption, Heading, Paragraph } from '@/components/Text';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <main style={{display: 'flex', flexDirection: "column", minHeight: '100vh', padding: '2rem',paddingTop: '4.5rem',  backgroundColor: '#1E1E2F', color: 'white' }}>
        <Navbar />
        <Paragraph>
            I'm Gilberto Tumangday, an Electrical & Computer Engineering student at the University of Toronto...
        </Paragraph>
        {/* Push footer to bottom if content is short */}
        <div style={{ flexGrow: 1 }} />

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
    </main>
  );
}
