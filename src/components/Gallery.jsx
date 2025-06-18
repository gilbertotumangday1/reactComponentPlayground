'use client';

import Thumbnail from './Thumbnail';
import './Gallery.css';

export default function Gallery({ imageFiles }) {
  return (
    <div className="masonry-wrapper">
      {imageFiles.map((file, idx) => (
        <div key={idx} className="gallery-item">
          <Thumbnail src={`/gallery/${file}`} alt={file} />
        </div>
      ))}
    </div>
  );
}
