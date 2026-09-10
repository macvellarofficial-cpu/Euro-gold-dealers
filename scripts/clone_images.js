import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const pages = [
  'https://eurogoldrefinery.com/',
  'https://eurogoldrefinery.com/about-us/',
  'https://eurogoldrefinery.com/services/',
  'https://eurogoldrefinery.com/projects/',
  'https://eurogoldrefinery.com/partners-licenses/',
  'https://eurogoldrefinery.com/account-holders/',
  'https://eurogoldrefinery.com/blog/',
  'https://eurogoldrefinery.com/contact-us/'
];

const targetDir = path.resolve('public', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, url).href;
        }
        return fetchUrl(redirectUrl).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed ${url}: status ${res.statusCode}`));
      }
      let data = '';
      res.setEncoding('utf8');
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error(`Timeout fetching ${url}`));
    });
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, url).href;
        }
        return downloadFile(redirectUrl, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(true);
      });
      fileStream.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(20000, () => {
      req.destroy();
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

async function main() {
  console.log('Fetching pages to discover all images from eurogoldrefinery.com...');
  const allImageUrls = new Set();

  for (const pageUrl of pages) {
    try {
      console.log(`Scanning ${pageUrl}...`);
      const html = await fetchUrl(pageUrl);
      
      // Match img src, srcset, data-src, background-image, url(...)
      const regex = /(?:src|href|data-src|data-lazy-src)=["']([^"']+\.(?:jpg|jpeg|png|webp|svg|gif|avif))(?:\?[^"']*)?["']|url\(["']?([^"')]+\.(?:jpg|jpeg|png|webp|svg|gif|avif))(?:\?[^"']*)?["']\)/gi;
      let match;
      while ((match = regex.exec(html)) !== null) {
        let img = match[1] || match[2];
        if (img) {
          if (img.startsWith('//')) {
            img = 'https:' + img;
          } else if (img.startsWith('/')) {
            img = 'https://eurogoldrefinery.com' + img;
          } else if (!img.startsWith('http')) {
            img = new URL(img, pageUrl).href;
          }
          allImageUrls.add(img);
        }
      }

      // Also search specifically for wp-content/uploads
      const wpRegex = /https?:\/\/[^"'()\s]+\/wp-content\/uploads\/[^"'()\s]+\.(?:jpg|jpeg|png|webp|svg|gif|avif)/gi;
      let wpMatch;
      while ((wpMatch = wpRegex.exec(html)) !== null) {
        allImageUrls.add(wpMatch[0]);
      }
    } catch (err) {
      console.error(`Error scanning ${pageUrl}:`, err.message);
    }
  }

  console.log(`Total unique image URLs discovered: ${allImageUrls.size}`);
  const mapping = {};
  let count = 0;

  for (const imgUrl of allImageUrls) {
    try {
      // Determine filename
      const urlObj = new URL(imgUrl);
      let baseName = path.basename(urlObj.pathname);
      if (!baseName || baseName.indexOf('.') === -1) {
        baseName = `image_${count}.jpg`;
      }
      // sanitize filename
      baseName = baseName.replace(/[^a-zA-Z0-9._-]/g, '_');
      const localPath = path.join(targetDir, baseName);

      console.log(`[${++count}/${allImageUrls.size}] Downloading: ${imgUrl} -> ${baseName}`);
      await downloadFile(imgUrl, localPath);
      mapping[imgUrl] = `/images/${baseName}`;
    } catch (err) {
      console.error(`Failed to download ${imgUrl}:`, err.message);
    }
  }

  fs.writeFileSync('scripts/image_mapping.json', JSON.stringify(mapping, null, 2));
  console.log('Finished cloning images! Mapping saved to scripts/image_mapping.json');
}

main();
