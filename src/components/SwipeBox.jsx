'use client';

import React, { useState, useRef, useEffect } from 'react';
import Thumbnail from './Thumbnail';
import MediaPlayer from './MediaPlayer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './SwipeBox.css';

export default function SwipeBox({ 
  mediaItems = [], // Array of { type: 'image'|'video', src: string, alt?: string }
  scale = 1 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Calculate the maximum dimensions from all media items
  useEffect(() => {
    if (mediaItems.length === 0) return;

    const calculateMaxDimensions = async () => {
      let maxWidth = 0;
      let maxHeight = 0;

      for (const item of mediaItems) {
        if (item.type === 'image') {
          const img = new Image();
          img.src = item.src;
          await new Promise((resolve) => {
            img.onload = () => {
              // Scale the base width (250px) by the scale factor
              const baseWidth = 250 * scale;
              const scaledWidth = Math.min(img.width, baseWidth);
              const scaledHeight = (img.height * scaledWidth) / img.width;
              maxWidth = Math.max(maxWidth, scaledWidth);
              maxHeight = Math.max(maxHeight, scaledHeight);
              resolve();
            };
            img.onerror = () => {
              // Fallback if image fails to load
              const fallbackWidth = 250 * scale;
              const fallbackHeight = fallbackWidth * 0.75; // 4:3 aspect ratio
              maxWidth = Math.max(maxWidth, fallbackWidth);
              maxHeight = Math.max(maxHeight, fallbackHeight);
              resolve();
            };
          });
        } else if (item.type === 'video') {
          // For videos, scale the default width by the scale factor
          const defaultWidth = 250 * scale;
          const defaultHeight = (defaultWidth * 9) / 16; // 16:9 aspect ratio
          maxWidth = Math.max(maxWidth, defaultWidth);
          maxHeight = Math.max(maxHeight, defaultHeight);
        }
      }

      setContainerSize({ width: maxWidth, height: maxHeight });
    };

    calculateMaxDimensions();
  }, [mediaItems, scale]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < mediaItems.length - 1) {
      nextSlide();
    }
    if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }
  };

  if (mediaItems.length === 0) return null;

  const currentItem = mediaItems[currentIndex];

  return (
    <div className="swipe-box" ref={containerRef}>
      {/* Media Container */}
      <div 
        className="swipe-box-container"
        style={{
          width: containerSize.width || 250 * scale,
          height: containerSize.height || (250 * scale * 0.75), // 4:3 aspect ratio fallback
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="swipe-box-media">
          {currentItem.type === 'image' ? (
            <Thumbnail
              src={currentItem.src}
              alt={currentItem.alt || `Media ${currentIndex + 1}`}
              width={containerSize.width || 250 * scale}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          ) : (
            <MediaPlayer
              src={currentItem.src}
              width="100%"
              height="100%"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
          )}
        </div>

        {/* Navigation Arrows */}
        {mediaItems.length > 1 && (
          <>
            <button
              className="swipe-box-arrow swipe-box-arrow-left"
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="swipe-box-arrow swipe-box-arrow-right"
              onClick={nextSlide}
              disabled={currentIndex === mediaItems.length - 1}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {mediaItems.length > 1 && (
        <div className="swipe-box-dots">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              className={`swipe-box-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
} 