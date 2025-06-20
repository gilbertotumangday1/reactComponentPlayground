import fs from 'fs';
import path from 'path';
import Gallery from '@/components/Gallery';
import Navbar from '@/components/Navbar';
import { Caption } from '@/components/Text';

export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), 'public/gallery');

  // Only allow image files, ignore .mov and others
  const imageFiles = fs.readdirSync(galleryDir).filter((file) =>
    /\.(jpe?g|png|gif|webp|bmp|svg)$/i.test(file) // excludes .mov and other video formats
  );

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
            Photo Gallery
          </h1>
      </div>
      <main
        style={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0rem',
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
          <Gallery imageFiles={imageFiles} />
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
