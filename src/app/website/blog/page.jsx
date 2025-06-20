'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Caption } from '@/components/Text';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function BlogPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner text="Loading Blog..." />;
  }

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
          <h1
            className="projects-header"
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: '1rem',
              marginTop: '2rem',
            }}
          >
            No Posts Yet...
          </h1>
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