#!/bin/bash

# Step 1: Create no-media branch
echo "🔧 Switching to 'no-media' branch..."
git checkout -b no-media

# Step 2: Move media folders out temporarily
echo "📦 Backing up images and videos..."
mkdir -p ../media-backup
[ -d images ] && mv images ../media-backup/
[ -d videos ] && mv videos ../media-backup/

# Step 3: Commit changes without media
echo "📁 Committing project without media..."
git add .
git commit -m "No-media version for ZIP/download"
git push origin no-media

# Step 4: Restore media folders locally
echo "🔁 Restoring media folders locally..."
[ -d ../media-backup/images ] && mv ../media-backup/images ./images
[ -d ../media-backup/videos ] && mv ../media-backup/videos ./videos
rm -r ../media-backup

# Step 5: Return to main branch
git checkout main

echo "✅ All done. Download your media-free ZIP from the 'no-media' branch on GitHub."
