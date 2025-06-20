'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { Caption } from '@/components/Text';

export default function BlogPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#1E1E2F',
        color: 'white',
      }}
    >
      <Navbar />
      <main
        style={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4.5rem 2rem 2rem',
        }}
      >
        <div
          style={{
            maxWidth: '960px',
            width: '100%',
            padding: '2rem',
            borderRadius: '1rem',
          }}
        >
          {/* Empty content section - add your blog posts here */}
        </div>
      </main>
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
  );
} 