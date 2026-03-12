import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './assets/Bilder';
const outputDir = './public/images/gallery';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(file => 
    /\.(jpg|jpeg|png|webp|gif|JPG)$/i.test(file)
);

console.log(`Processing ${files.length} images...`);

const manifest = [];

for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const fileName = path.parse(file).name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const outputPath = path.join(outputDir, `${fileName}.webp`);

    try {
        await sharp(inputPath)
            .resize({
                width: 1600,
                withoutEnlargement: true
            })
            .webp({ quality: 80 })
            .toFile(outputPath);
        
        manifest.push({
            original: file,
            optimized: `${fileName}.webp`
        });
        console.log(`Optimized: ${file} -> ${fileName}.webp`);
    } catch (err) {
        console.error(`Error processing ${file}:`, err);
    }
}

fs.writeFileSync(
    path.join(outputDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
);

console.log('Optimization complete. manifest.json created.');
