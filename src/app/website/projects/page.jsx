'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { Caption } from '@/components/Text';
import ProjectCard from '@/components/ProjectCard';
import SwipeBox from '@/components/SwipeBox';
import './projects.css';

export default function ProjectsPage() {
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
        className="projects-main"
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem 2rem 2rem',
          paddingTop: '4rem',
        }}
      >
        {/* Featured Projects Header */}
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
          Featured Projects
        </h1>

        <div
          className="projects-container"
          style={{
            width: '100%',
            padding: '1rem',
            borderRadius: '1rem',
          }}
        >
          {/* Projects Grid */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '1rem'
            }}
          >
            <ProjectCard
              title="Tourismate GIS"
              mediaFolder="/projects/tourismateGIS"
              description="Interactive GIS map with OSM upload, smart search, pathfinding, weather via LibCurl, and a Gemini-powered tourist chatbot."
              technologies={['c++', 'Data Structures and Algorithms', 'App Development', 'API', 'UI/UX']}
              projectLink="https://github.com/gilbertotumangday1/tourisMateGIS"
              linkText="View on GitHub"
              TextLink="https://github.com/gilbertotumangday1/tourisMateGIS"
              scale={3}
            />
            
            <ProjectCard
              title="signReader"
              mediaFolder="/projects/signReader"
              description="Classifier neural network built from scratch and trained on Kaggle ASL dataset to read and classify hand gestures into American Sign Language"
              technologies={['Python', 'PyTorch', 'OpenCV', 'AI/ML']}
              projectLink="https://github.com/gilbertotumangday1/signReader"
              TextLink="https://github.com/gilbertotumangday1/signReader"
              linkText="View on GitHub"
              scale={2}
            />
            
            <ProjectCard
              title="Stardew FPGA"
              mediaFolder="/projects/stardewFPGA"
              description="Stardew Valley style fishing game on an FPGA board. Programmed in C and ran on an FPGA board with input from PS2 keyboard."
              technologies={['c', 'FPGA', 'NIOS V Processor', 'Graphics Rendering']}
              projectLink="https://github.com/gilbertotumangday1/De1-SoC-fishing"
              linkText="View on GitHub"
              TextLink="https://github.com/gilbertotumangday1/De1-SoC-fishing"
              scale={2.5}
            />
            
            <ProjectCard
              title="Beast Hunter"
              mediaFolder="/projects/beastHunter"
              description="Multi level platformer game programmed in Java using JFrame and AWT for graphics. Won the St Michael's College School Senior Computer Science competition evaluated by industry professionals."
              technologies={['Java', 'JFrame', 'AWT', 'Game Design']}
              projectLink="https://github.com/gilbertotumangday1/beast-hunter"
              linkText="View on GitHub"
              TextLink="https://github.com/gilbertotumangday1/beast-hunter"
              scale={3}
            />

            <ProjectCard
              title="gilbertotumangday.dev"
              mediaFolder="/projects/thispage"
              description="This website was designed using Figma and built using React with Next.js and CSS with reusable atoms. To see the component library go to gilbertotumangday.dev/library!"
              technologies={['React', 'Next.js', 'CSS', 'Figma']}
              projectLink="https://github.com/gilbertotumangday1/reactComponentPlayground"
              linkText="View on GitHub"
              TextLink="https://github.com/gilbertotumangday1/reactComponentPlayground"
              scale={3}
            />
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
