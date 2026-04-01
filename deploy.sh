#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment to GitHub Pages..."

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Build the project
echo "🏗️ Building project..."
pnpm run build

# Initialize git if not already done
if [ ! -d ".git" ]; then
  echo "📝 Initializing git repository..."
  git init
  git add .
  git commit -m "Initial commit"
fi

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
  echo "⚠️  Please add your GitHub remote:"
  echo "git remote add origin https://github.com/yourusername/your-repo-name.git"
  exit 1
fi

# Add files and commit
echo "📤 Committing changes..."
git add .
git commit -m "Deploy to GitHub Pages" --allow-empty

# Push to main branch
echo "🌐 Pushing to GitHub..."
git push -u origin main

echo "✅ Deployment complete!"
echo "Your site will be available at: https://yourusername.github.io/your-repo-name"
echo "Check your repository's Actions tab to monitor the build progress."