'use client';

import React, { useState, useEffect } from 'react';
import { Paragraph, Caption } from './Text';
import Thumbnail from './Thumbnail';
import MediaPlayer from './MediaPlayer';
import SwipeBox from './SwipeBox';
import ClickableText from './ClickableText';
import IconButton from './IconButton';
import { ProjectsIcon } from './TechnicalIcons';
import { ExternalLink } from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ 
  title, 
  mediaType = 'image', // 'image' or 'video' (legacy)
  mediaSrc, // single media source (legacy)
  mediaAlt, // single media alt (legacy)
  mediaItems = [], // array of media items for SwipeBox
  mediaFolder = '', // path to folder containing media files
  description, 
  technologies = [],
  projectLink = '',
  linkText = 'View Project',
  TextLink = '',
  scale = 1, // Scale factor for media content only
  style = {} 
}) {
  const [folderMediaItems, setFolderMediaItems] = useState([]);
  const [loading, setLoading] = useState(false);

    // Function to load images from a folder using manifest file
  const loadImagesFromFolder = async (folderPath) => {
    if (!folderPath) return [];
    
    console.log(`Loading media from folder: ${folderPath}`);
    setLoading(true);
    
    try {
      // First, try to load a manifest file that lists all media files
      const manifestPath = `${folderPath}/manifest.json`;
      
      try {
        const manifestResponse = await fetch(manifestPath);
        if (manifestResponse.ok) {
          const manifest = await manifestResponse.json();
          console.log(`Found manifest file with ${manifest.files?.length || 0} files`);
          
          if (manifest.files && Array.isArray(manifest.files)) {
            const mediaItems = manifest.files.map(file => ({
              type: file.type || (file.name.match(/\.(mp4|webm|ogg|mov|avi)$/i) ? 'video' : 'image'),
              src: `${folderPath}/${file.name}`,
              alt: file.alt || `${title} - ${file.name}`
            }));
            
            console.log(`Loaded ${mediaItems.length} media items from manifest`, mediaItems);
            return mediaItems;
          }
        }
      } catch (manifestError) {
        console.log('No manifest file found, falling back to file discovery');
      }
      
      // Fallback: Try to discover files by testing common extensions
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg'];
      const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
      
      // Test a reasonable number of numbered files
      const mediaItems = [];
      const maxFiles = 20; // Don't test more than 20 files
      
      for (let i = 1; i <= maxFiles; i++) {
        let foundFile = false;
        
        // Try each extension for this number
        for (const ext of [...imageExtensions, ...videoExtensions]) {
          if (foundFile) break; // Only find one file per number
          
          const fullPath = `${folderPath}/${i}${ext}`;
          const isVideo = videoExtensions.includes(ext.toLowerCase());
          
          try {
            if (isVideo) {
              const video = document.createElement('video');
              const videoExists = await new Promise((resolve) => {
                const timeout = setTimeout(() => resolve(false), 500);
                video.onloadedmetadata = () => {
                  clearTimeout(timeout);
                  resolve(true);
                };
                video.onerror = () => {
                  clearTimeout(timeout);
                  resolve(false);
                };
                video.src = fullPath;
                video.load();
              });
              
              if (videoExists) {
                console.log(`Found video: ${fullPath}`);
                mediaItems.push({
                  type: 'video',
                  src: fullPath,
                  alt: `${title} - ${i}`
                });
                foundFile = true;
              }
            } else {
              const img = new Image();
              const imageExists = await new Promise((resolve) => {
                const timeout = setTimeout(() => resolve(false), 500);
                img.onload = () => {
                  clearTimeout(timeout);
                  resolve(true);
                };
                img.onerror = () => {
                  clearTimeout(timeout);
                  resolve(false);
                };
                img.src = fullPath;
              });
              
              if (imageExists) {
                console.log(`Found image: ${fullPath}`);
                mediaItems.push({
                  type: 'image',
                  src: fullPath,
                  alt: `${title} - ${i}`
                });
                foundFile = true;
              }
            }
          } catch (error) {
            continue;
          }
        }
        
        // If we hit 3 consecutive numbers with no files, stop searching
        if (!foundFile && i > 4) {
          const recentFiles = mediaItems.slice(-3);
          if (recentFiles.length === 0) {
            console.log(`No files found for numbers ${i-2} through ${i}, stopping search`);
            break;
          }
        }
      }
      
      console.log(`Total media items found: ${mediaItems.length}`, mediaItems);
      return mediaItems;
      
    } catch (error) {
      console.error('Error loading images from folder:', error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Load images when mediaFolder changes
  useEffect(() => {
    if (mediaFolder) {
      loadImagesFromFolder(mediaFolder).then(setFolderMediaItems);
    }
  }, [mediaFolder, title]);

  // Determine which media to use
  const finalMediaItems = folderMediaItems.length > 0 ? folderMediaItems : mediaItems;

  return (
    <div className="project-card" style={style}>
      <div className="project-card-inner">
        {/* Title with Projects Icon */}
        <div className="project-card-header">
          <ProjectsIcon size={24} />
          <h3 className="project-card-title">{title}</h3>
        </div>
        
        {/* Media Component - SwipeBox or Single Media */}
        {(finalMediaItems.length > 0 || mediaSrc || loading) && (
          <div className="project-card-media">
            {loading ? (
              // Loading state
              <div 
                className="single-media-container"
                style={{
                  maxWidth: `${250 * scale}px`,
                  minHeight: `${200 * scale}px`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <Caption style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Loading media...
                </Caption>
              </div>
            ) : finalMediaItems.length > 0 ? (
              // Use SwipeBox for multiple media items
              <SwipeBox 
                mediaItems={finalMediaItems}
                scale={scale}
              />
            ) : (
              // Legacy single media support
              <div 
                className="single-media-container"
                style={{
                  maxWidth: `${250 * scale}px`,
                }}
              >
                {mediaType === 'image' ? (
                  <Thumbnail 
                    src={mediaSrc} 
                    alt={mediaAlt || title}
                    width={250 * scale}
                    style={{
                      maxWidth: `${250 * scale}px`,
                      width: '100%',
                      height: 'auto'
                    }}
                  />
                ) : (
                  <MediaPlayer 
                    src={mediaSrc} 
                    width="100%" 
                    height="auto"
                    style={{
                      maxWidth: `${250 * scale}px`,
                    }}
                  />
                )}
              </div>
            )}
          </div>
        )}
        
        {/* Description */}
        <div className="project-card-description">
          <Paragraph>{description}</Paragraph>
        </div>
        
        {/* Technology Tags */}
        <div className="project-card-tags">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              <Caption>{tech}</Caption>
            </span>
          ))}
        </div>
        
        {/* Project Link Section */}
        {projectLink && (
          <div className="project-card-link">
            <IconButton
              icon={<ExternalLink size={16} />}
              ariaLabel="View Project"
              onClick={() => window.open(projectLink, '_blank')}
              noPadding
            />
            <ClickableText 
              href={TextLink || projectLink}
              target="_blank"
              className="link-text"
              style={{
                fontSize: '0.8rem',
                color: 'rgba(255, 255, 255, 0.7)',
                fontStyle: 'normal',
                fontWeight: 'normal',
                textShadow: 'none',
                fontFamily: 'system-ui, sans-serif'
              }}
            >
              {linkText}
            </ClickableText>
          </div>
        )}
      </div>
    </div>
  );
}
