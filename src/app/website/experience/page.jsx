'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { Caption } from '@/components/Text';
import ProjectCard from '@/components/ProjectCard';

// Custom styles for wider experience cards
const experienceCardStyles = `
  .experience-page .project-card {
    width: auto !important;
  }
  
  .experience-page .project-card-inner {
    width: auto !important;
  }
  
  .experience-page .project-card-header {
    display: none !important;
  }
  
  .experience-page .project-card-media {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
  }
  
  .experience-page .single-media-container {
    width: 300px !important;
    max-width: 300px !important;
  }
  
  .experience-page .single-media-container .thumbnail-image {
    width: 300px !important;
    max-width: 300px !important;
    height: auto !important;
  }
  
  .experience-page .project-card-description .paragraph {
    font-size: 1rem !important;
    line-height: 1.7 !important;
    max-width: none !important;
  }
  
  .company-caption {
    text-align: center;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    font-weight: 500;
  }
  
  .experience-logo {
    width: 100%;
    max-width: 525px;
    height: auto;
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 0.5rem;
    object-fit: contain;
  }
  
  @media (max-width: 768px) {
    .experience-logo {
      max-width: 280px;
    }
  }
  
  @media (max-width: 480px) {
    .experience-logo {
      max-width: 250px;
    }
  }
`;

export default function ExperiencePage() {
  return (
    <div
      className="experience-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#1E1E2F',
        color: 'white',
      }}
    >
      {/* Inject custom styles */}
      <style jsx>{experienceCardStyles}</style>
      <Navbar />
      <main
        className="experience-main"
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem 2rem 2rem',
          paddingTop: '4rem',
        }}
      >
        {/* Experience Header */}
        <h1
          className="experience-header"
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '1rem',
            marginTop: '2rem',
          }}
        >
          Experience
        </h1>

        <div
          className="experience-container"
          style={{
            width: '100%',
            maxWidth: '1400px',
            padding: '1rem',
            borderRadius: '1rem',
          }}
        >
          {/* Experience Cards - Sequential order from top to bottom with Timeline */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0',
              width: '100%',
              position: 'relative'
            }}
          >
            {/* Timeline Line - runs through the entire section */}
            <div 
              style={{
                position: 'absolute',
                left: '50%',
                top: '0',
                bottom: '0',
                width: '3px',
                background: 'linear-gradient(to bottom, #00BCD4, #4FC3F7, #81D4FA, #B39DDB)',
                transform: 'translateX(-50%)',
                zIndex: 1
              }}
            />
            
            {/* Company 1: Extendicare */}
            <div style={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5rem' }}>
              {/* Timeline Dot */}
              <div 
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#00BCD4',
                  borderRadius: '50%',
                  zIndex: 3,
                  border: '4px solid #1E1E2F',
                  boxShadow: '0 0 15px rgba(0, 188, 212, 0.6)',
                  marginBottom: '1.5rem'
                }}
              />
              
              <div style={{ width: '100%', maxWidth: '700px', backgroundColor: '#2a2a40', borderRadius: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', padding: '1.5rem' }}>
                {/* Logo and Caption */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <img 
                    src="/experience/extendicare/image.png" 
                    alt="Extendicare Logo" 
                    className="experience-logo"
                  />
                  <Caption className="company-caption">Extendicare</Caption>
                </div>
                
                {/* Description */}
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ margin: 0, fontSize: '1rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.7, textAlign: 'left', wordWrap: 'break-word' }}>
                    Risk Analyst Intern - Designed and implemented compliance data extraction pipelines using LlamaIndex APIs, developing custom schemas informed by regulatory research and raw PDF reports. Validated extracted compliance data using the Pydantic library and evaluated performance metrics to iteratively refine schemas. Planning next-stage analysis leveraging open-source LLMs for sentiment analysis and BERTopic clustering across 160+ long-term care homes.
                  </p>
                </div>
                
                {/* Technologies */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {['Python', 'LlamaIndex', 'Pydantic', 'LLMs', 'BERTopic', 'Data Extraction', 'Healthcare Compliance'].map((tech, index) => (
                    <span key={index} style={{ padding: '0.25rem 0.65rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '1rem', fontSize: '0.75rem', color: 'white' }}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Link */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <button onClick={() => window.open('https://extendicare.com/', '_blank')} style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'underline' }}>
                    Visit Company Website
                  </button>
                </div>
              </div>
            </div>
            
            {/* Company 2: Sound of Molecules */}
            <div style={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5rem' }}>
              {/* Timeline Dot */}
              <div 
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#4FC3F7',
                  borderRadius: '50%',
                  zIndex: 3,
                  border: '4px solid #1E1E2F',
                  boxShadow: '0 0 15px rgba(79, 195, 247, 0.6)',
                  marginBottom: '1.5rem'
                }}
              />
              
              <div style={{ width: '100%', maxWidth: '700px', backgroundColor: '#2a2a40', borderRadius: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', padding: '1.5rem' }}>
                {/* Logo and Caption */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <img 
                    src="/experience/sound_of_molecules/image.png" 
                    alt="Sound of Molecules Logo" 
                    className="experience-logo"
                  />
                  <Caption className="company-caption">Sound of Molecules</Caption>
                </div>
                
                {/* Description */}
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ margin: 0, fontSize: '1rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.7, textAlign: 'left', wordWrap: 'break-word' }}>
                    Machine Learning Intern - Assisting with ML architecture research and training on sonified molecular datasets to accelerate drug discovery through innovative multimodal representations. Extracted and consolidated molecular data from ZINC, ChEMBL, UniProt, and Protein Database APIs, processing hundreds of thousands of entries into CSV datasets and deploying them to AWS storage. Designed and deployed a PostgreSQL database to organize and query molecular datasets for downstream ML workflows.
                  </p>
                </div>
                
                {/* Technologies */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {['Python', 'Machine Learning', 'AWS', 'PostgreSQL', 'API Integration', 'Drug Discovery', 'Data Processing'].map((tech, index) => (
                    <span key={index} style={{ padding: '0.25rem 0.65rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '1rem', fontSize: '0.75rem', color: 'white' }}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Link */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <button onClick={() => window.open('https://www.soundofmolecules.com/', '_blank')} style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'underline' }}>
                    Visit Company Website
                  </button>
                </div>
              </div>
            </div>
            
            {/* Company 3: Wurkn HR */}
            <div style={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5rem' }}>
              {/* Timeline Dot */}
              <div 
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#81D4FA',
                  borderRadius: '50%',
                  zIndex: 3,
                  border: '4px solid #1E1E2F',
                  boxShadow: '0 0 15px rgba(129, 212, 250, 0.6)',
                  marginBottom: '1.5rem'
                }}
              />
              <div style={{ width: '100%', maxWidth: '700px', backgroundColor: '#2a2a40', borderRadius: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', padding: '1.5rem' }}>
                {/* Logo and Caption */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <img 
                    src="/experience/wurkn_hr/image.png" 
                    alt="Wurkn HR Logo" 
                    className="experience-logo"
                  />
                  <Caption className="company-caption">Wurkn HR</Caption>
                </div>
                
                {/* Description */}
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ margin: 0, fontSize: '1rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.7, textAlign: 'left', wordWrap: 'break-word' }}>
                    Software Engineering Intern - Built a reusable React + CSS component library and developed MVP dashboards hosted locally with Vite, accelerating frontend development for startup investor demos. Integrated Microsoft Teams (Azure Bot) and Slack (Slack API app) with Supabase edge functions (TypeScript + SQL) for secure data ingestion. Designed and implemented iterative LLM-based sentiment analysis pipelines using OpenRouter API, with results automatically visualized in dashboards.
                  </p>
                </div>
                
                {/* Technologies */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {['React', 'TypeScript', 'Vite', 'Supabase', 'Azure Bot', 'Slack API', 'LLM Integration'].map((tech, index) => (
                    <span key={index} style={{ padding: '0.25rem 0.65rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '1rem', fontSize: '0.75rem', color: 'white' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Company 4: Hemispheres Solutions */}
            <div style={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Timeline Dot */}
              <div 
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#B39DDB',
                  borderRadius: '50%',
                  zIndex: 3,
                  border: '4px solid #1E1E2F',
                  boxShadow: '0 0 15px rgba(179, 157, 219, 0.6)',
                  marginBottom: '1.5rem'
                }}
              />
              <div style={{ width: '100%', maxWidth: '700px', backgroundColor: '#2a2a40', borderRadius: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', padding: '1.5rem' }}>
                {/* Logo and Caption */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <img 
                    src="/experience/hemispheres_solutions/image.png" 
                    alt="Hemispheres Solutions Logo" 
                    className="experience-logo"
                  />
                  <Caption className="company-caption">Hemispheres Solutions</Caption>
                </div>
                
                {/* Description */}
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ margin: 0, fontSize: '1rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.7, textAlign: 'left', wordWrap: 'break-word' }}>
                    Frontend Developer - Commissioned to develop a responsive client portal web application for consulting firm's business operations. Built modern React-based user interface with Next.js, implementing dynamic data visualization components and user management features. Delivered production-ready application with optimized performance and responsive design across all devices.
                  </p>
                </div>
                
                {/* Technologies */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {['React', 'Next.js', 'JavaScript', 'CSS', 'Responsive Design', 'Data Visualization', 'Frontend Development'].map((tech, index) => (
                    <span key={index} style={{ padding: '0.25rem 0.65rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '1rem', fontSize: '0.75rem', color: 'white' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
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