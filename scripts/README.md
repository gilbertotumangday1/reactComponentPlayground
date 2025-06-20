# Scripts

This folder contains utility scripts for managing the project.

## Manifest Generator

The `generate-manifests.js` script automatically creates manifest files for project galleries.

### What it does:
- Scans all folders in `/public/projects/`
- Finds all image and video files
- Generates a `manifest.json` file in each project folder
- Sorts files numerically (1.png, 2.png, etc.) or alphabetically
- Creates descriptive alt text for each file

### Usage:

```bash
# From the project root
npm run generate-manifests
```

Or run directly:
```bash
node scripts/generate-manifests.js
```

### Supported file types:
- **Images:** .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg
- **Videos:** .mp4, .webm, .ogg, .mov, .avi

### Example output:
```json
{
  "projectName": "TourismateGIS",
  "generatedAt": "2024-01-15T10:30:00.000Z",
  "files": [
    {
      "name": "1.png",
      "type": "image",
      "alt": "TourismateGIS - Image 1"
    },
    {
      "name": "demo-video.mp4",
      "type": "video", 
      "alt": "TourismateGIS - Demo Video"
    }
  ]
}
```

### Workflow:
1. Add your project images/videos to `/public/projects/yourProjectName/`
2. Run `npm run generate-manifests`
3. The ProjectCard component will automatically use the manifest to display your media

No more manual manifest editing required! 🎉 