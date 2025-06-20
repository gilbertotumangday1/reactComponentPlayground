const fs = require('fs');
const path = require('path');

// Configuration
const projectsDir = path.join(__dirname, '../public/projects');
const externalProjectsDir = path.join(__dirname, '../../');
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg'];
const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];

// Function to determine file type
function getFileType(filename) {
  const ext = path.extname(filename).toLowerCase();
  if (videoExtensions.includes(ext)) return 'video';
  if (imageExtensions.includes(ext)) return 'image';
  return 'unknown';
}

// Function to generate a nice alt text from filename
function generateAltText(filename, projectName) {
  const nameWithoutExt = path.parse(filename).name;
  
  // If it's just a number, make it descriptive
  if (/^\d+$/.test(nameWithoutExt)) {
    return `${projectName} - Image ${nameWithoutExt}`;
  }
  
  // If it has a descriptive name, use it
  const words = nameWithoutExt
    .replace(/[-_]/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
    
  return `${projectName} - ${words}`;
}

// Function to scan a project folder and generate manifest
function generateManifestForProject(projectPath, projectName) {
  try {
    const files = fs.readdirSync(projectPath);
    const mediaFiles = [];
    
    // Filter and sort media files
    const validFiles = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return [...imageExtensions, ...videoExtensions].includes(ext);
      })
      .sort((a, b) => {
        // Sort numerically if files are numbered (1.png, 2.png, etc.)
        const aNum = parseInt(path.parse(a).name);
        const bNum = parseInt(path.parse(b).name);
        
        if (!isNaN(aNum) && !isNaN(bNum)) {
          return aNum - bNum;
        }
        
        // Otherwise sort alphabetically
        return a.localeCompare(b);
      });
    
    // Create manifest entries
    validFiles.forEach(file => {
      const fileType = getFileType(file);
      const altText = generateAltText(file, projectName);
      
      mediaFiles.push({
        name: file,
        type: fileType,
        alt: altText
      });
    });
    
    // Create manifest object
    const manifest = {
      projectName: projectName,
      generatedAt: new Date().toISOString(),
      files: mediaFiles
    };
    
    // Write manifest file
    const manifestPath = path.join(projectPath, 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    
    console.log(`✅ Generated manifest for ${projectName}: ${mediaFiles.length} files`);
    mediaFiles.forEach(file => {
      console.log(`   - ${file.name} (${file.type})`);
    });
    
    return manifest;
    
  } catch (error) {
    console.error(`❌ Error generating manifest for ${projectName}:`, error.message);
    return null;
  }
}

// Main function to generate all manifests
function generateAllManifests() {
  console.log('🔍 Scanning projects directory...\n');
  
  if (!fs.existsSync(projectsDir)) {
    console.error(`❌ Projects directory not found: ${projectsDir}`);
    return;
  }
  
  const projectFolders = fs.readdirSync(projectsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  if (projectFolders.length === 0) {
    console.log('📁 No project folders found');
    return;
  }
  
  console.log(`📁 Found ${projectFolders.length} project folders:\n`);
  
  const results = [];
  
  projectFolders.forEach(folderName => {
    const projectPath = path.join(projectsDir, folderName);
    const projectName = folderName
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    const manifest = generateManifestForProject(projectPath, projectName);
    if (manifest) {
      results.push({ folder: folderName, fileCount: manifest.files.length });
    }
    console.log(''); // Empty line between projects
  });
  
  // Summary
  console.log('📊 Summary:');
  results.forEach(result => {
    console.log(`   ${result.folder}: ${result.fileCount} files`);
  });
  
  console.log(`\n✨ Generated manifests for ${results.length} projects!`);
  console.log('\n💡 To regenerate manifests after adding/removing files, run this script again.');
}

// Run the script
if (require.main === module) {
  generateAllManifests();
}

module.exports = { generateAllManifests, generateManifestForProject }; 