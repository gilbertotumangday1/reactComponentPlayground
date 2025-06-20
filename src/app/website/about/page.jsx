'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { Caption, Paragraph } from '@/components/Text';
import Avatar from "@/components/Avatar";
import ClickableText from '@/components/ClickableText';
import IconButton  from '@/components/IconButton';
import { Mail } from 'lucide-react';
import Thumbnail from '@/components/Thumbnail';

export default function AboutPage() {
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
      {/* Fixed Navbar */}
      <Navbar />

      <div>
          <h1
            className="projects-header"
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: '0rem',
              marginTop: '6rem',
            }}
          >
            About Me
          </h1>
        </div>

      {/* Main centered content */}
      <main
        style={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '',
        }}
      >
        {/* Inner centered box */}
        <div
          style={{
            maxWidth: '960px',
            width: '100%',
            padding: '2rem',
            borderRadius: '1rem',
          }}
        >
          {/* Responsive Grid */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
            }}>
              <Avatar src="/hockeypfp.jpg" alt="Hockey Profile Picture" size="200" />
            </div>

            <div style={{
              flex: 1,
              minWidth: '250px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Paragraph style={{ margin: 0 }}>
                Hi! I'm Gilberto, a ECE 2T7 + PEY Coop Student at UofT. I am 
                interested in Physical Applications of Machine Learning, and have recently started pursuing
                a minor in AI, working with a team of students to train a model to perform Depth Perception
                and Visual Odometry from video. I have experience spanning Web/Game Development, Embedded Systems, 
                and other ECE related fields. For more details, feel free check out my{' '}
                <ClickableText href="/website/projects" target="_blank" style={{ fontSize: 'inherit', lineHeight: 'inherit' }}>
                  projects
                </ClickableText>
                {' '}or send me an email.{' '}
                <span style={{display: 'inline-flex', verticalAlign: 'middle', marginLeft: '0.25rem', marginBottom: '0.2rem'}}>
                  <IconButton
                    icon={<Mail size={25} />} // You can tweak this size for better alignment
                    ariaLabel="Email"
                    onClick={() => window.open('mailto:gilbertotumangday@gmail.com')}
                    noPadding
                  />
                </span>
                {' '}
              </Paragraph>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '1rem',
              gap: '1rem',
            }}
          >
            <div style={{
              flex: 1,
              minWidth: '250px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Paragraph>
                Before UofT, I attended {' '}
                <ClickableText href="https://stmichaelscollegeschool.com/"  target="_blank" style={{ fontSize: 'inherit', lineHeight: 'inherit' }}>
                  St Michael's College School
                </ClickableText>
                {' '}, where I was involved in numerous programs to improve my programming and leadership skills. I was President of the Computer Science Club, Co-founder of the Toastmasters Public Speaking Club, and a member of the Varsity Cross Country Team. I also participated in the Senior Game Development Competition, winning first place at my school after presenting our multi-level platformer game to industry experts (see projects section).
              </Paragraph>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
            }}>
              <Thumbnail src="/gradpfp.jpg" alt="boxing" size="100"/>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '1rem',
              gap: '1rem',
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
            }}>
              <Thumbnail src="/boxingteamflic.jpg" alt="boxing" size="100"/>
            </div>
            <div style={{
              flex: 1,
              minWidth: '250px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Paragraph>
                Outside of school, I like to stay active, having played competitive Hockey for over 6 years, and wrestled nationally for 2 years. I am currently Boxing, and I plan to start competing in the fall. I also am passionate about clothing and fashion, with a small clothing resale business on 
                {' '}
                <ClickableText href="https://www.depop.com/512market"  target="_blank" style={{ fontSize: 'inherit', lineHeight: 'inherit' }}>
                  Depop
                </ClickableText>
                {' '}
                and
                {' '}
                <ClickableText href="https://www.instagram.com/512marketto/"  target="_blank" style={{ fontSize: 'inherit', lineHeight: 'inherit' }}>
                  Instagram
                </ClickableText>
                {' '}
                . I love music and photography, so check out my
                {' '}
                <ClickableText href="/website/gallery" target="_blank" style={{fontSize: 'inherit', lineHeight: 'inherit' }}>
                  gallery
                </ClickableText>
                {' '}
                for some cool photos!
              </Paragraph>
            </div>
          </div>
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
  );
}
