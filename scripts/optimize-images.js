import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const WIDTHS = [400, 600, 800, 1200];
const QUALITY = 80;

async function ensureDir(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function optimizeImage(imagePath, outputDir, filename) {
  const image = sharp(imagePath);
  const metadata = await image.metadata();

  // Don't upscale images
  const validWidths = WIDTHS.filter(w => w <= metadata.width);
  if (validWidths.length === 0) {
    validWidths.push(metadata.width);
  }

  await Promise.all(validWidths.map(async width => {
    const outputPath = path.join(outputDir, `${filename}_${width}.webp`);
    await image
      .resize(width, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    
    console.log(`Created: ${outputPath}`);
  }));
}

async function processDirectory(inputDir) {
  const files = await fs.readdir(inputDir);
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const stat = await fs.stat(inputPath);
    
    if (stat.isDirectory()) {
      // Skip the optimized directory itself
      if (path.basename(inputPath) === 'optimized') continue;
      
      // Create corresponding optimized directory
      const optimizedDir = path.join(inputPath, 'optimized');
      await ensureDir(optimizedDir);
      
      // Process the directory recursively
      await processDirectory(inputPath);
    } else {
      // Only process image files
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const outputDir = path.join(path.dirname(inputPath), 'optimized');
        await ensureDir(outputDir);
        
        const filename = path.basename(file, ext);
        await optimizeImage(inputPath, outputDir, filename);
      }
    }
  }
}

// Start processing from public directory
const publicDir = './public';

processDirectory(publicDir)
  .then(() => console.log('Image optimization complete'))
  .catch(err => console.error('Error optimizing images:', err));